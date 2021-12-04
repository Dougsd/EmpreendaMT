

async function setTema(){//{ text: 'This paragraph will have a bigger font', fontSize: 15 }
    // var img= "https://firebasestorage.googleapis.com/v0/b/empreendamt-f1f1d.appspot.com/o/InfoBuildFap%2Fimg.png?alt=media&token=70546dd9-30d6-41a5-b0f0-d2015a691e2f"

    docDefinition.content.push({image:'snow', pageOrientation: 'landscape', alignment: 'center',   width: 60,height: 60});
    docDefinition.content.push({ text: 'GOVERNO DO ESTADO DE MATO GROSSO', fontSize: 15,bold: true ,alignment: 'center' });
    docDefinition.content.push({ text: 'Fundação de Amparo à Pesquisa do Estado de Mato Grosso – FAPEMAT', bold: true, fontSize: 14, alignment: 'center' });
    docDefinition.content.push({ text: ' ', alignment: 'center' });
    
}//sempre dar line break ao inserir conteudo.
//Funcao que cria cabecalho utilizando informacoes do cadastro do projeto.
//Modelo de objeto para fucao de cadastro {projetoName:,projetoResp:'nome do responsavel pela Empresa', cnpj:"12981-123828/0001-09"}
async function  setCliente(obj){
    docDefinition.content.push({ text:'EmpreendaMT - Núcleo de Empreendedorismo e Inovação da Região Sudoeste do Estado de Mato Grosso', bold: true, fontSize: 12, alignment: 'left' });
    docDefinition.content.push({ text:'Projeto CLiente:'+obj.projetoName, bold: true, fontSize: 12, alignment: 'left' });
    docDefinition.content.push({ text:'Responsável:'+obj.projetoResp, bold: true, fontSize: 12, alignment: 'left' });
    docDefinition.content.push({ text:'CPF/CNPJ:'+obj.cnpj, bold: true, fontSize: 12, alignment: 'left' });
    docDefinition.content.push({ text: ' ', alignment: 'center' });
}
 async function setLogo(){

    setTema();
    //objeto  cliente apenas para teste
    //Esse cliente deve ser obtido atraves do cadastro do projeto
    var cliente={projetoName:'Nome da Empresa',projetoResp:'nome do responsavel pela Empresa', cnpj:'12981-123828/0001-09'};
    setCliente(cliente); 
    pdfMake.createPdf(docDefinition).open({}, window);
 }
 //Cada canvas sera um tema do relatorio
//canvas.div[i].titulo
//canvas.div[i].paragrafo
/*
var canvas = {
    div:[]
}
*/
var docDefinition = {
    header:'',
    pageSize: 'A4',
    // pageMargins: [ 40, 60, 40, 60 ],
    content: [],	
    styles: {
        header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
        },
        subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 10, 0, 5]
        },
        tableExample: {
            margin: [0, 5, 0, 15]
        },
        tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black'
        }
    },
    images: {
        // in browser is supported loading images via url (https or http protocol) (minimal version: 0.1.67)
        snow: 'https://firebasestorage.googleapis.com/v0/b/empreendamt-f1f1d.appspot.com/o/InfoBuildFap%2Fimg.png?alt=media&token=70546dd9-30d6-41a5-b0f0-d2015a691e2f'
      }
  };


