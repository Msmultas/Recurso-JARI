const express = require('express');
const PDFDocument = require('pdfkit');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { format } = require('date-fns');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(bodyParser.json());

app.post('/gerar-pdf', (req, res) => {
  const respostas = req.body;

      const doc = new PDFDocument();

  doc.fontSize(16).font('Helvetica-Bold').text('EXCELENTÍSSIMO(A) SR.(A) AUTORIDADE COMPETENTE JULGADORA DAS INFRAÇÕES DE TRÂNSITO', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica-Bold').text('AUTO DE INFRAÇÃO DE TRÂNSITO:', { continued: true }).fontSize(13).font('Helvetica').text(` ${respostas.autoinfracao}`, { align: 'left' });
  doc.fontSize(14).font('Helvetica-Bold').text('AUTUADO(A):', { continued: true }).fontSize(13).font('Helvetica').text(` ${respostas.nome}`, { align: 'left' });
  doc.moveDown(); 

  doc.fontSize(15).font('Helvetica-Bold').text('I – DA QUALIFICAÇÃO', { align: 'left' });
  doc.moveDown();
    
  doc.fontSize(14).font('Helvetica').text('Eu,', { continued: true }).text(` ${respostas.nome},`, { continued: true })
  .text(' do CPF:', { continued: true }).text(` ${respostas.cpf}`, { continued: true })
  .text(', CNH:', { continued: true }).text(` ${respostas.cnh}`, { continued: true })
  .text(', E-mail:', { continued: true }).text(` ${respostas.email}`, { continued: true })
  .text(', telefone:', { continued: true }).text(` ${respostas.telefone}`, { continued: true })
  doc.fontSize(14).font('Helvetica').text(' venho através deste apresentar defesa-prévia escrita, conforme disciplina o art. 202, I do Código de Trânsito Brasileiro:', { align: 'left' });
  doc.moveDown();
  
  doc.fontSize(15).font('Helvetica-Bold').text('II – DOS FATOS E DA SUPOSTA INFRAÇÃO', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('No dia', { continued: true }).text(` ${respostas.datamulta}`, { continued: true })   
  .text(',', { continued: true }).text(' o(a) autuado(a) conduzia seu veículo', { continued: true })
  .text(', placa:', { continued: true }).text(` ${respostas.placa}`, { continued: true })
  doc.fontSize(14).font('Helvetica').text('oportunidade que foi autuado pelo suposto cometimento da infração detalhada na defesa escrita apresentada em primeiro grau administrativo.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Pela autoridade de trânsito foi lavrado auto de infração de trânsito de codificação', { continued: true }).text(` (${respostas.autoinfracao})`, { continued: true })
  doc.fontSize(14).font('Helvetica').text(', ocorre que a referida lavratura do auto de infração se deu fora da legalidade, bem como das regulamentações que tratam sobre o assunto, conforme consignado na defesa-prévia.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica-Bold').text('Feito o protocolo da respectiva defesa-prévia administrativa, houve o respectivo julgamento, tendo sido o resultado da defesa-prévia considerado improvido, situação que salvo melhor juízo deve ser corrigido por esta autoridade recursal.'),
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Diante disso, e exercendo seu direito de contraditório e ampla defesa, pelos fundamentos que fundamentam esse pedido, venho expor e requerer o que segue, por ser medida de justiça!'),
  doc.moveDown();

  doc.fontSize(15).font('Helvetica-Bold').text('III - DAS PRELIMINARES', { align: 'left' });
  doc.moveDown();


  doc.fontSize(15).font('Helvetica-Bold').text('III.I – DA FALTA DE DECISÃO FUNDAMENTADA NA APLICAÇÃO DA MULTA', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Analisando os autos do processo administrativo de multa, verifica-se que a autoridade de trânsito da instância inferior deixou de observar as disposições legais e regulamentares, uma vez que o Código de Trânsito Brasileiro determina, senão vejamos;'), { align: 'left' };
  doc.moveDown();

  doc.fontSize(12).font('Helvetica-Bold').text('“Art. 282. Caso a defesa prévia seja indeferida ou não seja apresentada no prazo estabelecido, será aplicada a penalidade e expedida notificação ao proprietário do veículo ou ao infrator, por remessa postal ou por qualquer outro meio tecnológico hábil que assegure a ciência da imposição da penalidade.”'), { align: 'right' };
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Após a apresentação da defesa-prévia, por certo que se necessitava de decisão motivada e fundamentada quanto a aplicação da penalidade de multa, consoante determina a Resolução n° 918/2022:'), { align: 'left' };
  doc.moveDown();

  doc.fontSize(12).font('Helvetica').text('“Art. 9º Interposta a defesa da autuação, nos termos do § 2º do art. 4º, caberá à autoridade competente apreciá-la, inclusive quanto ao mérito. [...] § 2º Caso a defesa prévia seja indeferida ou não seja apresentada no prazo estabelecido, será aplicada a penalidade e expedida notificação ao proprietário do veículo ou ao infrator, no prazo máximo de 180 (cento e oitenta) dias, contado da data do cometimento da infração, por remessa postal ou por qualquer outro meio tecnológico hábil que assegure a ciência da imposição da penalidade.”', { align: 'right' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Constata-se da expressão “será aplicada a penalidade” que a decisão que aplica a referida penalidade será pautada com a devida fundamentação e motivação, princípio gerais do direito de observação obrigatória por parte do Detran/MS (administração pública).'), { align: 'left' };
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('A Lei n° 9.784/1999, que trata dos processos administrativos no âmbito federal, determina em seu art. 2° que a “Administração Pública obedecerá, dentre outros, aos princípios da legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência.” '), { align: 'left' };
  doc.moveDown();
  
  doc.fontSize(14).font('Helvetica').text('A falta de decisão fundamentada no respectivo processo afeta diretamente o princípio da motivação, o qual está atrelado aos princípios do contraditório e ampla defesa, posto que limita a argumentação recursal, haja vista a obscuridade (falta) de decisão fundamentada.'), { align: 'left' };
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Sabe-se que a Constituição Federal da República de forma expressamente determina no título das garantias fundamentais no Art. 5, inciso LV que:'), { align: 'left' };
  doc.moveDown();

  doc.fontSize(12).font('Helvetica').text('“aos litigantes, em processo judicial ou administrativo, e aos acusados em geral são assegurados o contraditório e ampla defesa, com os meios e recursos a ela inerentes.”'), { align: 'right' };
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('O Professor Matheus Carvalho define os processos administrativos e os explica da seguinte forma :', { align: 'left' });
  doc.moveDown();

  doc.fontSize(12).font('Helvetica').text('“Processo administrativo - se configura por uma série concatenada de atos administrativos, respeitando uma ordem imposta por lei, com uma finalidade específica, ensejando a prática de um ato final. A doutrina costuma dizer que todos os atos administrativos devem ser precedidos de um processo formal que justifica sua prática e serve de base para a sua legitimidade, documentando todas as etapas até a formação válida da atuação da Administração Pública. (grifo nosso).'), { align: 'right' };
  doc.moveDown();

  doc.fontSize(12).font('Helvetica').text('[...]'), { align: 'right' };
  doc.moveDown();

  doc.fontSize(12).font('Helvetica').text('Neste passo, o processo administrativo é uma sucessão lógica de atos praticados pela administração pública com a intenção de se alcançar um objetivo final, seja a punição de determinado servidor, seja a contratação ou até mesmo a anulação de atos anteriormente praticados.” (grifo nosso).'), { align: 'right' };
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Sabe-se que as decisões, sejam elas de cunho administrativos e/ou judiciais, são atos imprescindíveis ao processo, as quais determinam os limites das razões recursais a fim de atacar a respectiva decisão, o que caracteriza o devido processo legal no âmbito recursal.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Dito isso, constata-se que houve o cerceamento de defesa, haja vista a falta de decisão motivada e fundamentada que aplicou a penalidade de multa ao recorrente, sendo certa a necessidade de retorno dos autos à instância inferior para correção.', { align: 'left' });
  doc.moveDown();


  doc.fontSize(15).font('Helvetica-Bold').text('III.II DO RECONHECIMENTO DE OFÍCIO DA DECADÊNCIA DO DIREITO DE PUNIR O(A) CONDUTOR(A)', { align: 'left' });
  doc.moveDown();


  doc.fontSize(14).font('Helvetica').text('Preliminarmente, importante trazer que mesmo a autoridade de trânsito primária não ter decidido de forma fundamentada e motivada, sabe-e que esta autoridade recursal pode considerar os pontos arguidos na defesa-prévia, como por exemplo a decadência contida no art. 281, §1° do Código de Trânsito Brasileiro, que dispões, in verbis;', { align: 'left' });
  doc.moveDown(); 
  
  doc.fontSize(12).font('Helvetica').text('_______________________', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('   Manual de direito administrativo / Matheus Carvalho – 4. ed. rev. ampl. e atual. - Salvador: JusPODIVM, 2017, pag. 1141/1142', { align: 'left' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('Art. 281 “A autoridade de trânsito, na esfera da competência estabelecida neste Código e dentro de sua circunscrição, julgará a consistência do auto de infração e aplicará a penalidade cabível.', { align: 'left' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('§ 1º O auto de infração será arquivado e seu registro julgado insubsistente:', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('II - se, no prazo máximo de trinta dias, não for expedida a notificação da autuação.', { align: 'right' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Assim, a partir da letra da lei, faz-se imprescindível a análise pela autoridade competente quanto a consistência quando da expedição da notificação de autuação, contados da data do suposto cometimento da infração, e tendo essa extrapolado o prazo de 30 (trinta) dias deverá ser arquivado.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(15).font('Helvetica-Bold').text('III.III – DA NÃO OBSERVÂNCIA DO MANUAL BRASILEIRO DE FISCALIZAÇÃO DE TRÂNSITO (MBFT)', { align: 'center' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Novamente rebate-se que a falta de decisão implica no cerceamento de defesa, e conforme argumento abaixo é possível verificar que este condutor foi autuado, em disposição constante no Código de Trânsito Brasileiro. Conforme argumentado no primeiro grau, é sabido que a respectiva norma supostamente violada pelo administrado pode ser infringida de várias formas possíveis. ', { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('No caso em tela, conforme amplamente debatido na defesa-prévia, constata-se que o MBFT prevê a necessidade de individualização da conduta/fato, a fim da perfeita aplicação da lei, conforme consignado na defesa preliminar. ', { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('Novamente, reafirma-se que a respectiva disposição legal enquadrada o condutor, supostamente infrator, em confronto com a observância do MBFT, prevê no campo “Quando Autuar” a possibilidade de imputação de penalidade em várias possibilidades, ou seja condutar distintas.', { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('O campo contendo “Exemplo do Campo de Observações do AIT”, traz especificações individualizando a conduta do autuado, ocorre que isso não se verifica no auto de infração de trânsito, limitando sobremaneira o direito de defesa do autuado, haja vista que o administrado não se defende da disposição legal e sim de um fato jurídico embasado numa norma.', { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('Dito isso, é evidente a necessidade da descrição dos fatos ocorridos quando do suposto cometimento da infração, sob pena de insubsistência do auto lavrado e consequente arquivamento, o que é o caso do presente caso.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(15).font('Helvetica-Bold').text('IV – DOS PEDIDOS', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('O autuado, através da respectiva peça, vem requer: ', { align: 'left' });
  doc.moveDown();

  doc.fontSize(13).font('Helvetica').text('A) O recebimento desta defesa e dos documentos que a acompanham;', { align: 'left' });
  doc.moveDown();
  doc.fontSize(13).font('Helvetica-Bold').text('B) De ofício, o arquivamento do auto de infração de código', { continued: true });doc.fontSize(13).font('Helvetica-Bold').text(` ${respostas.autoinfracao}`, { continued: true });doc.fontSize(13).font('Helvetica-Bold').text(' pelas razões aqui trazidas.', { align: 'left' });
  doc.moveDown();
  doc.fontSize(13).font('Helvetica').text('C) O retornos dos autos para decisão fundamentada;', { align: 'left' });
  doc.moveDown();
  doc.fontSize(13).font('Helvetica').text('D) A notificação do (a) autuado (a) no endereço de cadastro devidamente atualizado junto aos orgãos estatais, em caso de eventual imposição de penalidade.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('DATA:   ', { align: 'center', continued: true }).text('             '  +  respostas.datamulta, { align: 'center' });
  doc.moveDown(4);
  
  doc.fontSize(14).font('Helvetica').text('Local e data. ______________________________________', { align: 'left' });
  doc.moveDown(3);
  
  doc.fontSize(14).font('Helvetica').text('AUTUADO(A) - ', { continued: true }).fontSize(14).font('Helvetica').text(` ${respostas.nome}`, { align: 'left' });
  doc.moveDown(2);
  
  doc.fontSize(14).font('Helvetica').text('Assinatura:________________________________________________', { align: 'left' });
  doc.moveDown(3);
  
  doc.fontSize(14).font('Helvetica').text('(Documentos em Anexo)', { align: 'left' });
  doc.moveDown();
  
  doc.fontSize(14).font('Helvetica').text('- Carteira Nacional de Habilitação (CNH) do proprietário do veículo', { align: 'left' });
  doc.moveDown(); 
  
  doc.fontSize(14).font('Helvetica').text('- Documento do veículo', { align: 'left' });
  doc.moveDown(); 














  

  











//--------------------------------------------------------------------------------------------
/*
  doc.fontSize(12).text('Pergunta: Qual é o seu nome completo?');
  doc.fontSize(12).text(`Resposta: ${respostas.nome}`);
  doc.moveDown();

  doc.fontSize(12).text('Pergunta: Informe o código do auto de infração de trânsito');
  doc.fontSize(12).text(`Resposta: ${respostas.autoinfracao}`);
  doc.moveDown();

  doc.fontSize(12).text('Pergunta: Qual é o seu CPF?');
  doc.fontSize(12).text(`Resposta: ${respostas.cpf}`);
*/
//-------------------------------------------------------------------------------------------
  const pdfFilename = 'Petição Modelo Art. 210.pdf';
  const pdfPath = path.join(__dirname, 'backup', pdfFilename);
  const pdfStream = fs.createWriteStream(pdfPath);
  doc.pipe(pdfStream);
  doc.end();

  pdfStream.on('finish', () => {
    res.download(pdfPath, (err) => {
      if (err) {
        console.error('Erro ao realizar o download do arquivo PDF:', err);
        res.sendStatus(500);
      }

      // Criar uma cópia do arquivo na pasta 'cofre' com a data e hora do arquivo
      const now = new Date();
      const formattedDate = format(now, 'dd-MM-yyyy_HH-mm-ss');
      const copyFilename = `${formattedDate}_${pdfFilename}`;
      const copyPath = path.join(__dirname, 'cofre', copyFilename);
      fs.copyFileSync(pdfPath, copyPath);

      fs.unlinkSync(pdfPath); // Remover o arquivo PDF da pasta 'backup' após o download
    });
  });

  pdfStream.on('error', (err) => {
    console.error('Erro ao gerar o arquivo PDF:', err);
    res.sendStatus(500);
  });
});

app.listen(3000, () => {
  console.log('\x1b[34m%s\x1b[0m', 'Olá Brittes, seu servidor foi iniciado na porta 3000');
});

