//Nao set dados nessa variavel durante a compilacao do navegador
// Modo correto criar nova var , exemplo: var a = pj
//chamar esse script como primeiro no app_triagem.html
var pj = {
    ID:"",
    Nome:"",
    Cidade:"",
    Responsavel:{
        Nome:"",
        Email:"",
        CPF_CNPJ:"",
        Telefone:""
    },
    Classificacao:{
        finsLucrativos:false,
        apeloAmbiental:false,
        apeloSocial:false,
        apeloEducacional:false,
        economiaSolidaria:false,
        apoioPoderPublico:true,
        internoCooperativa:false,
        internoAssociacao:false  
    },
    Descricao:"",
    Disponibilidade:{
        matutino:[false,false,false,false,false,false],
        verpertino:[false,false,false,false,false,false],
        noturno:[false,false,false,false,false,false]
    },
    Formato:{
        tradicional:false,
        inovador:false
    }, 
    Mentorias:{
        ideacao:false,
        impulso:false,
        especial:false,
        editais:false
    },
    Equipe:[],
    Reunioes:[],
    Kanban:[],
    Anexos:[]
}