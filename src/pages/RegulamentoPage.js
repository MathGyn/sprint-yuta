import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

const PageContainer = styled.div`
  background: #000000;
  min-height: 100vh;
  padding: 80px 20px;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  background: #0A0A0A;
  border: 1px solid #222222;
  padding: 60px 80px;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  padding-bottom: 40px;
  border-bottom: 1px solid #222222;
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: 900;
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: -1px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const InfoBox = styled.div`
  padding: 20px 30px;
  margin-bottom: 40px;
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 13px;
  color: var(--color-white);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
`;

const Content = styled.div`
  color: var(--color-white);
  line-height: 1.8;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  font-weight: 900;
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #222222;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SubsectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 800;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 25px 0 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Paragraph = styled.p`
  font-size: 14px;
  color: #CCCCCC;
  margin-bottom: 15px;
  font-weight: 500;

  strong {
    color: var(--color-gold);
    font-weight: 800;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 15px 0;
`;

const ListItem = styled.li`
  font-size: 14px;
  color: #CCCCCC;
  margin-bottom: 10px;
  padding-left: 25px;
  position: relative;
  font-weight: 500;

  &:before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--color-gold);
    font-weight: 900;
  }

  strong {
    color: var(--color-gold);
    font-weight: 800;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Observation = styled.div`
  background: #111111;
  border-left: 3px solid var(--color-gold);
  padding: 20px 25px;
  margin: 30px 0;
  font-size: 13px;
  color: #CCCCCC;
  font-style: italic;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 15px 20px;
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  margin: 40px 0;
  border: 1px solid #222222;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
`;

const TableHead = styled.thead`
  background: #111111;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #222222;

  &:last-child {
    border-bottom: none;
  }
`;

const TableHeader = styled.th`
  padding: 15px 12px;
  text-align: left;
  font-size: 11px;
  font-weight: 900;
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 1px;
  border-right: 1px solid #222222;

  &:first-child {
    width: 140px;
  }

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 12px 10px;
  }
`;

const TableCell = styled.td`
  padding: 15px 12px;
  font-size: 12px;
  font-weight: 600;
  color: #CCCCCC;
  border-right: 1px solid #222222;
  vertical-align: top;

  &:first-child {
    font-weight: 800;
    color: var(--color-gold);
  }

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 12px 10px;
  }
`;

const Footer = styled.div`
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #222222;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 13px;
  color: #666666;
  font-weight: 600;
  line-height: 1.6;
`;

const BackButton = styled.a`
  display: inline-block;
  background: transparent;
  color: var(--color-gold);
  border: 1px solid var(--color-gold);
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 15px 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 20px;
  font-family: 'Salena', sans-serif;

  &:hover {
    background: var(--color-gold);
    color: #000000;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 12px 25px;
  }
`;

function RegulamentoPage() {
  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <Container>
          <Header>
            <Logo>Yutá Inc.</Logo>
            <Title>Campanha de Premiações de Vendas Yuta</Title>
            <Subtitle>Data: 22/09/2025 • Revisão: 01</Subtitle>
          </Header>

          <InfoBox>
            <InfoText>Vigência: 01 de outubro de 2025 a 31 de dezembro de 2025</InfoText>
          </InfoBox>

          <Content>
            <Section>
              <SectionTitle>Resumo das Regras da Campanha</SectionTitle>

              <TableWrapper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableHeader>Regra</TableHeader>
                      <TableHeader>Synergia</TableHeader>
                      <TableHeader>Urban</TableHeader>
                      <TableHeader>Lake</TableHeader>
                      <TableHeader>Vértice</TableHeader>
                      <TableHeader>Reserva</TableHeader>
                    </TableRow>
                  </TableHead>
                  <tbody>
                    <TableRow>
                      <TableCell>Prêmio</TableCell>
                      <TableCell>2Q/2S - iPhone (corretor) + R$ 1.000 (gerente) / 3 Suítes - MacBook (corretor) + R$ 2.000 (gerente)</TableCell>
                      <TableCell>MacBook (Corretor) + R$ 1.000 (Gerente) - (Bônus extra: Para vendas que sejam a partir de 1Mi o gerente ganhará dobrado total de R$ 2 mil)</TableCell>
                      <TableCell>MacBook (Corretor) + R$ 1.000 (Gerente) - (Bônus extra: Para vendas que sejam a partir de 1Mi o gerente ganhará dobrado total de R$ 2 mil)</TableCell>
                      <TableCell>MacBook (Corretor) + R$ 1.000 (Gerente) - (Bônus extra: Para a imobiliária que vender 3 unidades no projeto, ele ganhará R$ 10 mil.)</TableCell>
                      <TableCell>MacBook (Corretor) + R$ 1.000 (Gerente) - (Bônus extra: Para gerente que vender 2 unidades no projeto, ele ganhará dobrado total de R$ 4 mil.)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Validade</TableCell>
                      <TableCell>01/10/2025 à 31/12/2025</TableCell>
                      <TableCell>01/10/2025 à 31/12/2025</TableCell>
                      <TableCell>01/10/2025 à 31/12/2025</TableCell>
                      <TableCell>01/10/2025 à 31/12/2025</TableCell>
                      <TableCell>01/10/2025 à 31/12/2025</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Entrada</TableCell>
                      <TableCell>A entrada deve ser de no mínimo 10% e parcelada em no máximo 5(cinco) parcelas</TableCell>
                      <TableCell>A entrada deve ser de no mínimo 10% e parcelada em no máximo 5(cinco) parcelas</TableCell>
                      <TableCell>A entrada deve ser de no mínimo 10% e parcelada em no máximo 5(cinco) parcelas</TableCell>
                      <TableCell>A entrada deve ser de no mínimo 10% e parcelada em no máximo 5(cinco) parcelas</TableCell>
                      <TableCell>A entrada deve ser de no mínimo 10% e parcelada em no máximo 5(cinco) parcelas</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Perda PV</TableCell>
                      <TableCell>A perda de PV não poderá ultrapassar o limite de -2% (menos dois por cento)</TableCell>
                      <TableCell>A perda de PV não poderá ultrapassar o limite de -2% (menos dois por cento)</TableCell>
                      <TableCell>A perda de PV não poderá ultrapassar o limite de -2% (menos dois por cento)</TableCell>
                      <TableCell>A perda de PV não poderá ultrapassar o limite de -2% (menos dois por cento)</TableCell>
                      <TableCell>A perda de PV não poderá ultrapassar o limite de -2% (menos dois por cento)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Não Válida</TableCell>
                      <TableCell>Esta campanha não é válida para: Vendas das cotas investidor, vendas que venham a ser fechadas com permuta e vendas com pro soluto acima de 10% do valor total da unidade.</TableCell>
                      <TableCell>Esta campanha não é válida para: Vendas das cotas investidor, vendas que venham a ser fechadas com permuta e vendas com pro soluto acima de 10% do valor total da unidade.</TableCell>
                      <TableCell>Esta campanha não é válida para: Vendas das cotas investidor, vendas que venham a ser fechadas com permuta e vendas com pro soluto acima de 10% do valor total da unidade.</TableCell>
                      <TableCell>Esta campanha não é válida para: Vendas das cotas investidor, vendas que venham a ser fechadas com permuta e vendas com pro soluto acima de 10% do valor total da unidade.</TableCell>
                      <TableCell>Esta campanha não é válida para: Vendas das cotas investidor, vendas que venham a ser fechadas com permuta e vendas com pro soluto acima de 10% do valor total da unidade.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Prazo Premiação</TableCell>
                      <TableCell>O prazo para a entrega da premiação é de até 60 dias após a emissão da nota fiscal por parte do corretor e do gerente. Essa emissão só deverá ser realizada após a validação das regras, bem como a efetivação do pagamento de 10% da entrada ou liberação do financiamento bancário.</TableCell>
                      <TableCell>O prazo para a entrega da premiação é de até 60 dias após a emissão da nota fiscal por parte do corretor e do gerente. Essa emissão só deverá ser realizada após a validação das regras, bem como a efetivação do pagamento de 10% da entrada ou liberação do financiamento bancário.</TableCell>
                      <TableCell>O prazo para a entrega da premiação é de até 60 dias após a emissão da nota fiscal por parte do corretor e do gerente. Essa emissão só deverá ser realizada após a validação das regras, bem como a efetivação do pagamento de 10% da entrada ou liberação do financiamento bancário.</TableCell>
                      <TableCell>O prazo para a entrega da premiação é de até 60 dias após a emissão da nota fiscal por parte do corretor e do gerente. Essa emissão só deverá ser realizada após a validação das regras, bem como a efetivação do pagamento de 10% da entrada ou liberação do financiamento bancário.</TableCell>
                      <TableCell>O prazo para a entrega da premiação é de até 60 dias após a emissão da nota fiscal por parte do corretor e do gerente. Essa emissão só deverá ser realizada após a validação das regras, bem como a efetivação do pagamento de 10% da entrada ou liberação do financiamento bancário.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Não Cumulativa</TableCell>
                      <TableCell>Promoção não cumulativa com outras campanhas. A mesma perderá a validade se no ato da negociação o corretor oferecer e/ou cliente escolher a campanha do "Comprou Ganhou" ou estiver participando da campanha "Indique e Ganhe".</TableCell>
                      <TableCell>Promoção não cumulativa com outras campanhas. A mesma perderá a validade se no ato da negociação o corretor oferecer e/ou cliente escolher a campanha do "Comprou Ganhou" ou estiver participando da campanha "Indique e Ganhe".</TableCell>
                      <TableCell>Promoção não cumulativa com outras campanhas. A mesma perderá a validade se no ato da negociação o corretor oferecer e/ou cliente escolher a campanha do "Comprou Ganhou" ou estiver participando da campanha "Indique e Ganhe".</TableCell>
                      <TableCell>Promoção não cumulativa com outras campanhas. A mesma perderá a validade se no ato da negociação o corretor oferecer e/ou cliente escolher a campanha do "Comprou Ganhou" ou estiver participando da campanha "Indique e Ganhe".</TableCell>
                      <TableCell>Promoção não cumulativa com outras campanhas. A mesma perderá a validade se no ato da negociação o corretor oferecer e/ou cliente escolher a campanha do "Comprou Ganhou" ou estiver participando da campanha "Indique e Ganhe".</TableCell>
                    </TableRow>
                  </tbody>
                </Table>
              </TableWrapper>

              <Observation>
                <strong>PV = Preço de Venda</strong>
              </Observation>

              <Observation>
                <strong>OBSERVAÇÃO IMPORTANTE:</strong> A campanha de premiação não é válida para vendas com perda de PV acima de -2%, venda onde tenha incluído na negociação qualquer tipo de permuta, venda com pro soluto acima de 10% e autofinanciamento.
              </Observation>
            </Section>

            <Section>
              <SectionTitle>REGULAMENTO DAS CAMPANHAS DE PREMIAÇÕES YUTA</SectionTitle>
            </Section>

            <Section>
              <SectionTitle>1. OBJETO E VIGÊNCIA</SectionTitle>
              <Paragraph>
                <strong>1.1.</strong> O presente regulamento tem por finalidade estabelecer os termos e condições das Campanhas de premiações de Vendas promovida pela Incorporadora, <strong>por ato de mera liberalidade</strong>, razão pela qual concederá aos "corretores", uma vez preenchidos e cumpridos os termos deste regulamento, o direito a aplicação dos benefícios ofertados na presente campanha, que é válida exclusivamente no período de <strong>01 de outubro de 2025 a 31 de dezembro de 2025</strong>, doravante denominada "Campanha".
              </Paragraph>
              <Paragraph>
                <strong>1.2.</strong> A Campanha é válida para os seguintes empreendimentos:
              </Paragraph>
              <List>
                <ListItem><strong>Synergia Bueno</strong> - Avenida T 2, Qd 70, Lotes 08/09, Setor Bueno, Goiânia/GO - Registro: R-3-369.562</ListItem>
                <ListItem><strong>Urban Garden</strong> - Rua T 44, nº 550, Qd 21 Lote 08/09, Setor Bueno, Goiânia/GO - Registro: R-6-361.457</ListItem>
                <ListItem><strong>Lake House</strong> - Avenida Antônio Fidelis, S/n Qd 68, Lt 01/04, Setor Parque Amazônia, Goiânia/GO - Registro: R-3-290.053</ListItem>
                <ListItem><strong>Vértice Residence</strong> - Rua Arthur de Abreu, nº 284, Qd 73, Lt 13/14/15, Setor Vila Rosa, Goiânia/GO - Registro: R-2-341.669</ListItem>
                <ListItem><strong>Reserva do Parque</strong> - Rua Dona Isoleta, nº 260, Qd 64 Lt 09/10, Setor Vila Rosa, Goiânia/GO - Registro: R-1-336.569</ListItem>
              </List>
            </Section>

            <Section>
              <SectionTitle>2. PARTICIPAÇÃO E ELEGIBILIDADE</SectionTitle>
              <Paragraph>
                <strong>2.1.</strong> Poderá participar da Campanha qualquer <strong>Corretor</strong> para os empreendimentos listados na cláusula 1.2, respeitadas as condições estabelecidas neste Regulamento.
              </Paragraph>
            </Section>

            <Section>
              <SectionTitle>3. DOS BENEFÍCIOS OFERTADOS NA CAMPANHA - PRÊMIOS E FORMA DE PAGAMENTO</SectionTitle>
              <Paragraph>
                <strong>3.1.</strong> O(s) prêmio(s) referente(s) a "Campanhas de premiações Yutá", serão sempre definidos pela VENDEDORA com antecedência, e aviso prévio às imobiliárias e corretores.
              </Paragraph>
              <Paragraph>
                <strong>3.2.</strong> Das condições para adesão aos benefícios/premiações ofertadas:
              </Paragraph>

              <SubsectionTitle>a) Synergia Bueno: VENDA PREMIADA</SubsectionTitle>
              <List>
                <ListItem><strong>a.1.</strong> Venda de 2 Quartos ou 2 Suítes: Corretor ganha IPHONE 16 + Gerente ganha R$ 1.000,00</ListItem>
                <ListItem><strong>a.2.</strong> Venda de 3 Suítes: Corretor ganha MACBOOK M1 + Gerente ganha R$ 2.000,00</ListItem>
                <ListItem><strong>a.3.</strong> Venda de unidade decorada: R$ 10.000,00 (sugestão: R$ 8.000 corretor + R$ 2.000 gerente)</ListItem>
              </List>

              <SubsectionTitle>b) Urban Garden: VENDEU, GANHOU</SubsectionTitle>
              <List>
                <ListItem><strong>b.1.</strong> Qualquer venda: Corretor ganha MACBOOK M1 + Gerente ganha R$ 1.000,00</ListItem>
                <ListItem><strong>b.2.</strong> Vendas acima de R$ 1.000.000,00: Gerente ganha bônus extra de R$ 1.000,00 (total R$ 2.000,00)</ListItem>
                <ListItem><strong>b.3.</strong> Venda de unidade decorada: R$ 10.000,00 (sugestão: R$ 8.000 corretor + R$ 2.000 gerente)</ListItem>
              </List>

              <SubsectionTitle>c) Lake House: VENDA CERTA</SubsectionTitle>
              <List>
                <ListItem><strong>c.1.</strong> Qualquer venda: Corretor ganha MACBOOK M1 + Gerente ganha R$ 1.000,00</ListItem>
                <ListItem><strong>c.2.</strong> Vendas acima de R$ 1.000.000,00: Gerente ganha bônus extra de R$ 1.000,00 (total R$ 2.000,00)</ListItem>
                <ListItem><strong>c.3.</strong> Venda de unidade decorada: R$ 10.000,00 (sugestão: R$ 8.000 corretor + R$ 2.000 gerente)</ListItem>
              </List>

              <SubsectionTitle>d) Vértice Residence: VENDEU, GANHOU</SubsectionTitle>
              <List>
                <ListItem><strong>d.1.</strong> Qualquer venda: Corretor ganha MACBOOK M1 + Gerente ganha R$ 1.000,00</ListItem>
                <ListItem><strong>d.2.</strong> Imobiliária que vender 3 unidades (01/10/2025 a 31/12/2025): R$ 10.000,00</ListItem>
                <ListItem><strong>d.3.</strong> Venda de unidade decorada: R$ 10.000,00 (sugestão: R$ 8.000 corretor + R$ 2.000 gerente)</ListItem>
              </List>

              <SubsectionTitle>e) Reserva do Parque: VENDEU, LEVOU</SubsectionTitle>
              <List>
                <ListItem><strong>e.1.</strong> Qualquer venda: Corretor ganha MACBOOK M1 + Gerente ganha R$ 1.000,00</ListItem>
                <ListItem><strong>e.2.</strong> Gerente que vender 2 unidades (01/10/2025 a 31/12/2025): R$ 4.000,00 (R$ 2.000 por unidade)</ListItem>
              </List>

              <Observation>
                *As premiações da campanha que consistirem em itens eletrônicos, viagens ou quaisquer outros bens não pecuniários não poderão, em hipótese alguma, ser convertidas em dinheiro.
              </Observation>

              <Observation>
                *No ato da entrega do prêmio mencionado no item "e.2", caso o gerente já tenha recebido o valor mencionado no item "e.1", este receberá apenas a diferença do prêmio.
              </Observation>

              <Paragraph>
                <strong>3.3.</strong> O prazo para entrega das premiações será de até <strong>60 (sessenta) dias</strong>, contados a partir do pagamento de 10% (dez por cento) da entrada do imóvel ou da liberação do financiamento bancário, prevalecendo o evento que ocorrer primeiro.
              </Paragraph>

              <Paragraph>
                <strong>3.4.</strong> No caso de premiações em dinheiro, o pagamento somente será efetuado até 60 (sessenta) dias após a emissão da respectiva nota fiscal pelo Corretor e/ou pelo Gerente. A nota fiscal deverá ser emitida apenas após a validação do cumprimento das regras da campanha e da confirmação do pagamento de 10% (dez por cento) da entrada ou da liberação do financiamento bancário. O prazo de 60 (sessenta) dias somente passará a ser contado após a emissão e envio da nota fiscal.
              </Paragraph>
            </Section>

            <Section>
              <SectionTitle>4. REGRAS PARA VALIDAÇÃO DA CAMPANHA</SectionTitle>
              <Paragraph>
                <strong>4.1.</strong> A campanha será considerada válida somente se:
              </Paragraph>
              <List>
                <ListItem>a) Estiver dentro do período vigente</ListItem>
                <ListItem>b) Os Percentuais, Taxas e Prazos devem estar dentro das regras</ListItem>
                <ListItem>c) A perda de PV estiver dentro da regra estabelecida de limite de -2%</ListItem>
                <ListItem>d) O cliente comprador não tenha exercido o direito ao arrependimento previsto nos parágrafos 10, 11 e 12 do art. 67-A da Lei Federal n.º 4.591/1964</ListItem>
              </List>
              <Paragraph>
                <strong>4.2.</strong> O não atendimento de quaisquer dos critérios acima acarretará a <strong>automática desqualificação</strong>.
              </Paragraph>
            </Section>

            <Section>
              <SectionTitle>5. IMPEDIMENTOS E EXCEÇÕES</SectionTitle>
              <Paragraph>
                <strong>5.1.</strong> Esta Campanha é <strong>incompatível e não cumulativa</strong> com outras promoções comerciais. A opção por outra campanha, no momento da negociação, implicará renúncia automática aos benefícios desta.
              </Paragraph>
              <Paragraph>
                <strong>5.2.</strong> Não serão consideradas válidas as vendas:
              </Paragraph>
              <List>
                <ListItem>a) Realizadas com valor percentual % de perda de PV maior que o limite estipulado para cada empreendimento</ListItem>
                <ListItem>b) A entrada estiver abaixo do mínimo exigido pela campanha (mínimo 10%)</ListItem>
                <ListItem>c) Onde não for apresentado os documentos necessários, bem como os fiadores conforme a regra</ListItem>
                <ListItem>d) Que tenham em sua negociação <strong>Permuta</strong></ListItem>
                <ListItem>e) Que tenham em sua negociação <strong>Autofinanciamento</strong></ListItem>
                <ListItem>f) Que tenham em sua negociação <strong>Pro Soluto acima de 10%</strong></ListItem>
                <ListItem>g) Caso o cliente comprador, venha a distratar a unidade comprada, antes da quitação dos 10% de entrada ou liberação do financiamento, o prêmio será cancelado automaticamente</ListItem>
              </List>
            </Section>

            <Section>
              <SectionTitle>6. PERDA DO DIREITO</SectionTitle>
              <Paragraph>
                <strong>6.1.</strong> O não atendimento de quaisquer dos critérios acima acarretará a <strong>automática desqualificação</strong>.
              </Paragraph>
            </Section>

            <Section>
              <SectionTitle>7. DISPOSIÇÕES FINAIS</SectionTitle>
              <Paragraph>
                <strong>7.1.</strong> Os corretores a fim de participar(em) da Campanha, deverá(ão) anuir e concordar com os termos deste regulamento, manifestando expressamente sua concordância quando atender o item 3.1 deste regulamento.
              </Paragraph>
              <Paragraph>
                <strong>7.2.</strong> Os corretores, ao participarem da Campanha, autorizam, desde já, que seus dados cadastrais e sua imagem sejam utilizados para fins comerciais e de marketing pela incorporadora.
              </Paragraph>
              <Paragraph>
                <strong>7.3.</strong> As condições da Campanha NÃO são cumulativas com outras promoções realizadas pela incorporadora.
              </Paragraph>
              <Paragraph>
                <strong>7.4.</strong> A Incorporadora reserva-se o direito de ampliar, suspender ou cancelar a Campanha de premiação, a qualquer tempo, independentemente da anuência dos corretores, sem que isto possa gerar qualquer direito adicional, respeitados os direitos adquiridos até a data da alteração.
              </Paragraph>
              <Paragraph>
                <strong>7.5.</strong> Todas as condições e termos da presente Campanha foram definidos pela incorporadora, não comportando qualquer possibilidade de questionamentos e discordâncias dos corretores, por se tratar de mera liberalidade da incorporadora.
              </Paragraph>
              <Paragraph>
                <strong>7.6.</strong> A incorporadora reserva-se no direito de alterar qualquer item desta Campanha, bem como interrompê-la, se necessário for, sem nenhum prévio aviso.
              </Paragraph>
              <Paragraph>
                <strong>7.7.</strong> Quaisquer alterações no regulamento desta campanha serão realizadas por termo escrito, por meio de aditamento.
              </Paragraph>
              <Paragraph>
                <strong>7.8.</strong> Adesão a campanha proposta é liberalidade das partes.
              </Paragraph>
              <Paragraph>
                <strong>7.9.</strong> A campanha a qual trata esse regulamento poderá ser cancelada em razão de caso fortuito ou força maior, ou ainda, por conveniência da incorporadora, sem que tal fato acarrete qualquer tipo de indenização.
              </Paragraph>
              <Paragraph>
                <strong>7.10.</strong> A participação na Campanha implica na aceitação total e irrestrita de todos os termos deste regulamento.
              </Paragraph>
              <Paragraph>
                <strong>7.11.</strong> Os casos omissos e as dúvidas de interpretação deste regulamento serão analisados e resolvidos pela Incorporadora, de forma soberana e irrecorrível.
              </Paragraph>
              <Paragraph>
                <strong>7.12.</strong> A campanha é exclusiva para corretores autônomos, devidamente credenciados no CRECI, e que a premiação por desempenho não possui natureza salarial/remuneratória.
              </Paragraph>
            </Section>
          </Content>

          <Footer>
            <FooterText>
              Fica eleito o foro da Comarca de Goiânia, Goiás, para dirimir quaisquer dúvidas oriundas do presente regulamento,<br />
              com renúncia expressa de qualquer outro, por mais privilegiado que seja.
            </FooterText>
            <FooterText style={{ marginTop: '20px', fontWeight: '800', color: 'var(--color-gold)' }}>
              Goiânia, 26 de setembro de 2025
            </FooterText>
            <BackButton href="/">Voltar para o site</BackButton>
          </Footer>
        </Container>
      </PageContainer>
    </>
  );
}

export default RegulamentoPage;
