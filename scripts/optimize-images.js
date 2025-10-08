const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configurações de otimização
const QUALITY = 85; // Qualidade WebP (85 = excelente qualidade + ótima compressão)
const JPEG_QUALITY = 80; // Qualidade para JPEGs otimizados

// Cores para o console
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m'
};

let stats = {
  totalOriginal: 0,
  totalOptimized: 0,
  filesProcessed: 0,
  filesFailed: 0
};

/**
 * Formata bytes para formato legível
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Encontra todos os arquivos de imagem recursivamente
 */
function findImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    // Ignorar arquivos de sistema do macOS e temporários
    if (file.startsWith('.') || file.startsWith('._')) {
      return;
    }

    const filePath = path.join(dir, file);
    
    // Verificar se o arquivo ainda existe antes de processar
    if (!fs.existsSync(filePath)) {
      return;
    }

    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findImageFiles(filePath, fileList);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Otimiza uma imagem individual
 */
async function optimizeImage(imagePath) {
  try {
    // Verificar se o arquivo existe
    if (!fs.existsSync(imagePath)) {
      console.log(`${colors.yellow}⚠ Arquivo não encontrado: ${path.basename(imagePath)}${colors.reset}`);
      stats.filesFailed++;
      return;
    }

    const originalSize = fs.statSync(imagePath).size;
    
    // Ignorar arquivos muito pequenos (provavelmente corrompidos)
    if (originalSize < 100) {
      console.log(`${colors.yellow}⚠ Arquivo muito pequeno, ignorando: ${path.basename(imagePath)}${colors.reset}`);
      stats.filesFailed++;
      return;
    }

    const ext = path.extname(imagePath).toLowerCase();
    const isJpeg = ext === '.jpg' || ext === '.jpeg';
    const isPng = ext === '.png';

    // Nome do arquivo WebP
    const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Criar backup se necessário (opcional, comentado por padrão)
    // const backupPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.original$&');
    // if (!fs.existsSync(backupPath)) {
    //   fs.copyFileSync(imagePath, backupPath);
    // }

    console.log(`${colors.cyan}📸 Processando:${colors.reset} ${path.basename(imagePath)}`);

    // Ler metadados da imagem
    const metadata = await sharp(imagePath).metadata();
    let width = metadata.width;
    let height = metadata.height;

    // Definir largura máxima
    const MAX_WIDTH = 1500;
    let needsResize = width > MAX_WIDTH;

    // Criar pipeline de processamento base
    let sharpInstance = sharp(imagePath);

    // Se precisa redimensionar, aplicar resize mantendo proporção
    if (needsResize) {
      sharpInstance = sharpInstance.resize(MAX_WIDTH, null, {
        fit: 'inside',
        withoutEnlargement: true
      });
      
      // Atualizar dimensões para o relatório
      const ratio = MAX_WIDTH / width;
      height = Math.round(height * ratio);
      width = MAX_WIDTH;
      
      console.log(`  ${colors.blue}→${colors.reset} Redimensionando de ${metadata.width}px para ${MAX_WIDTH}px`);
    }

    // 1. Converter para WebP (formato mais eficiente)
    await sharp(imagePath)
      .resize(needsResize ? MAX_WIDTH : null, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ 
        quality: QUALITY,
        effort: 6 // Máximo esforço de compressão (0-6)
      })
      .toFile(webpPath);

    const webpSize = fs.statSync(webpPath).size;

    // 2. Otimizar o arquivo original também
    const tempPath = imagePath + '.tmp';
    
    if (isJpeg) {
      await sharp(imagePath)
        .resize(needsResize ? MAX_WIDTH : null, null, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({ 
          quality: JPEG_QUALITY,
          mozjpeg: true // Usa mozjpeg para melhor compressão
        })
        .toFile(tempPath);
    } else if (isPng) {
      await sharp(imagePath)
        .resize(needsResize ? MAX_WIDTH : null, null, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .png({ 
          quality: JPEG_QUALITY,
          compressionLevel: 9,
          effort: 10
        })
        .toFile(tempPath);
    }

    const optimizedSize = fs.statSync(tempPath).size;

    // Substituir original pelo otimizado
    fs.unlinkSync(imagePath);
    fs.renameSync(tempPath, imagePath);

    // Atualizar estatísticas
    stats.totalOriginal += originalSize;
    stats.totalOptimized += (webpSize + optimizedSize);
    stats.filesProcessed++;

    const savedBytes = originalSize - webpSize;
    const savedPercent = ((savedBytes / originalSize) * 100).toFixed(1);

    console.log(`  ${colors.green}✓${colors.reset} Original: ${formatBytes(originalSize)} → WebP: ${formatBytes(webpSize)} ${colors.yellow}(${savedPercent}% menor)${colors.reset}`);
    console.log(`  ${colors.blue}→${colors.reset} Dimensões: ${width}x${height}px`);
    console.log('');

  } catch (error) {
    console.error(`${colors.yellow}⚠ Erro ao processar ${imagePath}:${colors.reset}`, error.message);
    stats.filesFailed++;
  }
}

/**
 * Processa todas as imagens
 */
async function optimizeAllImages() {
  console.log(`\n${colors.bright}${colors.blue}🚀 Iniciando otimização de imagens...${colors.reset}\n`);

  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  const imageFiles = findImageFiles(imagesDir);

  console.log(`${colors.cyan}📁 Encontradas ${imageFiles.length} imagens para otimizar${colors.reset}\n`);

  for (const imagePath of imageFiles) {
    await optimizeImage(imagePath);
  }

  // Exibir relatório final
  console.log(`\n${colors.bright}${colors.green}✨ Otimização concluída!${colors.reset}\n`);
  console.log(`${colors.bright}📊 Relatório:${colors.reset}`);
  console.log(`  • Arquivos processados: ${colors.green}${stats.filesProcessed}${colors.reset}`);
  console.log(`  • Arquivos com erro: ${colors.yellow}${stats.filesFailed}${colors.reset}`);
  console.log(`  • Tamanho original total: ${colors.blue}${formatBytes(stats.totalOriginal)}${colors.reset}`);
  console.log(`  • Tamanho otimizado total: ${colors.green}${formatBytes(stats.totalOptimized)}${colors.reset}`);
  
  const totalSaved = stats.totalOriginal - stats.totalOptimized;
  const totalSavedPercent = ((totalSaved / stats.totalOriginal) * 100).toFixed(1);
  
  console.log(`  • Espaço economizado: ${colors.yellow}${formatBytes(totalSaved)} (${totalSavedPercent}%)${colors.reset}`);
  console.log(`\n${colors.cyan}💡 Dica: Use as versões .webp para melhor performance!${colors.reset}\n`);
}

// Executar otimização
optimizeAllImages().catch(console.error);

