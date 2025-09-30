# Sprint Final 2025 - Yutá Inc.

Site promocional da campanha **Sprint Final 2025** da Yutá Inc.

## 🎯 Sobre o Projeto

Landing page desenvolvida em React para promover a campanha Sprint Final 2025, apresentando:

- **R$ 3 milhões** em descontos
- **R$ 300.000** em prêmios
- Empreendimentos selecionados com condições especiais
- Benefícios exclusivos para corretores e clientes

## 🎨 Identidade Visual

- **Cores**: Preto elegante, Amarelo/Dourado vibrante, Branco
- **Tipografia**: Inter (sans-serif, bold)
- **Estilo**: Corporativo moderno com alta urgência comercial
- **Elementos**: Bordas douradas, gradientes sutis, efeitos de iluminação

## 🚀 Tecnologias

- React 18
- Styled Components
- Google Fonts (Inter)

## 📦 Instalação e Execução

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start
# Acesse: http://localhost:3000

# Build para produção
npm run build
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── Hero.js              # Banner principal com countdown
│   ├── Empreendimentos.js   # Cards dos imóveis Synergia
│   ├── Beneficios.js        # Seção de benefícios da campanha
│   ├── CallToAction.js      # CTAs e botões de conversão
│   └── Footer.js            # Rodapé com informações legais
├── styles/
│   └── GlobalStyles.js      # Estilos globais e variáveis CSS
└── App.js                   # Componente principal
```

## 📱 Componentes

### Hero
Banner principal com:
- Logo Yutá Inc.
- Relógio representando urgência
- Títulos "SPRINT FINAL 2025"
- Boxes destacando valores de descontos e prêmios

### Empreendimentos
Cards do **Synergia** com:
- Tipos de unidades (2 quartos, 3 suítes, coberturas)
- Metragens
- Preços originais e promocionais
- Selos de desconto
- Informação de entrega

### Benefícios
Grid com 4 benefícios principais:
- Descontos especiais
- Premiação para corretores
- Bônus para decorados
- Análise de permuta

### Call to Action
Botões de conversão:
- Fale com um especialista
- Quero participar
- Baixar regulamento

### Footer
Informações institucionais:
- Links rápidos
- Contatos
- Horário de atendimento
- Redes sociais
- Informações legais

## 🎨 Cores (CSS Variables)

```css
--color-black: #000000
--color-gold: #D4AF37
--color-yellow: #F5C61A
--color-white: #FFFFFF
--color-gray: #A0A0A0
--color-dark-gray: #1A1A1A
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🔧 Customização

Para personalizar os dados dos empreendimentos, edite o array `units` em:
```
src/components/Empreendimentos.js
```

Para alterar os benefícios, edite o array `benefits` em:
```
src/components/Beneficios.js
```

## 📄 Licença

© 2025 Yutá Inc. Todos os direitos reservados.

## 👨‍💻 Desenvolvimento

Desenvolvido com React e Styled Components para a campanha Sprint Final 2025.
