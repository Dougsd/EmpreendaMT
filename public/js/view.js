function criar_edicao(project){
    var menu = document.createElement('div')
    menu.setAttribute('class', 'menu')
    
    var view = document.createElement('div')
    view.setAttribute('class','view')
    view.appendChild(menu)
    function cabecalho(){
        var cabecalho = document.createElement('div')
        cabecalho.setAttribute('class','cabecalho')
        var Nome = document.createElement('label')
        Nome.innerHTML ='Nome:'
        var input = document.createElement('input')
        input.setAttribute('type','text')
        input.setAttribute('id','n'+project.ID)
        Nome.setAttribute('for','n'+project.ID)
        input.value=project.Nome

        cabecalho.appendChild(Nome)
        cabecalho.appendChild(input)

        var cidade = document.createElement('label')
        cidade.innerHTML ='Cidade:'
        var input1 = document.createElement('input')
        input1.setAttribute('id','nn'+project.ID)
        cidade.setAttribute('for','nn'+project.ID)
        
        input1.value = project.Cidade
        cabecalho.appendChild(cidade)
        cabecalho.appendChild(input1)
        var descricao = document.createElement('textarea')
        descricao.textContent=project.Descricao
        descricao.setAttribute('id','desc_'+project.ID)
        var h6_cab = document.createElement('h6')
        h6_cab.setAttribute('for','desc_'+project.ID)
        h6_cab.innerHTML = 'Descrição:'
        cabecalho.appendChild(h6_cab)
        cabecalho.appendChild(descricao)
        

        view.appendChild(cabecalho)
    }
    function classificacao(){
        var classificacao = document.createElement('div')
        classificacao.setAttribute('class','classificacao')
        var h6_cab = document.createElement('h6')
        h6_cab.setAttribute('for','desc_'+project.ID)
        h6_cab.innerHTML = 'Classificação:'
        classificacao.appendChild(h6_cab)
        for (const key in project.Classificacao) {
            if (Object.hasOwnProperty.call(project.Classificacao, key)) {
                const element = project.Classificacao[key];
                // console.log(key,element)
                //Select classification
                if(element==true){
                    const expr = key;
                    switch (expr) {
                    case 'apeloAmbiental':
                        var label = document.createElement('label')
                        label.innerHTML = 'Apelo Ambiental'
                        classificacao.appendChild(label)
                        view.appendChild(classificacao)
                        break
                    case 'apeloSocial':
                        var label = document.createElement('label')
                        label.innerHTML = 'Apelo Social'
                        classificacao.appendChild(label)
                        view.appendChild(classificacao)
                        break
                    case 'apeloEducacional':
                        var label = document.createElement('label')
                        label.innerHTML = 'Apelo Educacional'
                        classificacao.appendChild(label)
                        view.appendChild(classificacao)
                        break
                    case 'apoioPoderPublico':
                        var label = document.createElement('label')
                        label.innerHTML = 'Apoio do Poder Público'
                        classificacao.appendChild(label)
                        view.appendChild(classificacao)
                        break
                    case 'economiaSolidaria':
                        var label = document.createElement('label')
                        label.innerHTML = 'Economia Solidária'
                        classificacao.appendChild(label)
                        view.appendChild(classificacao)
                        break
                    case 'finsLucrativos':
                        var label = document.createElement('label')
                        label.innerHTML = 'Fins Lucrativos'
                        classificacao.appendChild(label)
                        view.appendChild(classificacao)
                        break
                    case 'internoAssociacao':
                        var label = document.createElement('label')
                        label.innerHTML = 'Interno à Associação'
                        classificacao.appendChild(label)
                        view.appendChild(classificacao)
                        break
                    case 'internoCooperativa':
                        var label = document.createElement('label')
                        label.innerHTML = 'Interno à Cooperativa'
                        classificacao.appendChild(label)
                        view.appendChild(classificacao)
                        break
                    default:
                        console.log(`Sorry, we are out of ${expr}.`);
                    }
                }
            }
        }
        
    }
    function responsavel(){
        resp = document.createElement('div')
        resp.setAttribute('class', 'responsavel')
        h6 = document.createElement('h6')
        h6.innerHTML='Responsável:'
        //nome
        label_name = document.createElement('label')
        label_name.innerHTML='Nome:'
        input_name=document.createElement('input')
        input_name.setAttribute('id','resp_nome'+project.ID)
        label_name.setAttribute('for','resp_nome'+project.ID)
        input_name.value= project.Responsavel.Nome
        //cpf_cnpj
        label_cpf_cnpj = document.createElement('label')
        label_cpf_cnpj.innerHTML='CPF/CNPJ:'
        input_cpf_cnpj=document.createElement('input')
        input_cpf_cnpj.setAttribute('id','resp_cnpj_cpf'+project.ID)
        label_cpf_cnpj.setAttribute('for','resp_cnpj_cpf'+project.ID)
        input_cpf_cnpj.value=project.Responsavel.CPF_CNPJ
        //Email
        label_email = document.createElement('label')
        label_email.innerHTML='Email:'
        input_email=document.createElement('input')
        input_email.setAttribute('id','resp_email'+project.ID)
        label_email.setAttribute('for','resp_eamil'+project.ID)
        input_email.value=project.Responsavel.Email
        //Telefone
        label_tel = document.createElement('label')
        label_tel.innerHTML='Telefone:'
        input_tel=document.createElement('input')
        input_tel.setAttribute('id','resp_tel'+project.ID)
        label_tel.setAttribute('for','resp_tel'+project.ID)
        input_tel.value=project.Responsavel.Telefone

        resp.appendChild(h6)
        resp.appendChild(label_name)
        resp.appendChild(input_name)
        resp.appendChild(label_cpf_cnpj)
        resp.appendChild(input_cpf_cnpj)
        resp.appendChild(label_email)
        resp.appendChild(input_email)
        resp.appendChild(label_tel)
        resp.appendChild(input_tel)
        view.appendChild(resp)
    }
    function disponibilidade(){
        h6=document.createElement('h6')
        descricao=document.createElement('div')
        menu=document.createElement('div')
        h6.innerHTML='Disponibilidade semanal:'
        //criar um mapa semanal
        function crono(){
            cronograma=document.createElement('div')
            cronograma.setAttribute('class','cronograma')
            h6=document.createElement('h6')
            h6.innerHTML='Disponibilidade semanal:'
            cronograma.appendChild(h6)
            dias_semana=document.createElement('div')
            dias_semana.setAttribute('class','dias_semana')
            matutino= document.createElement('div')
            matutino.setAttribute('class','matutino')
            verpertino= document.createElement('div')
            verpertino.setAttribute('class','vespertino')
            noturno= document.createElement('div')
            noturno.setAttribute('class','noturno')
            //cabecalhos 
           

            for (let index = 0; index < 6; index++) {
                dia=document.createElement('div')
                dia.style.backgroundColor='#ddd'
                dia.setAttribute('class','dia')
                dia1=document.createElement('div')
                dia1.style.backgroundColor='#ddd'
                dia1.setAttribute('class','dia')
                dia2=document.createElement('div')
                dia2.style.backgroundColor='#ddd'
                dia2.setAttribute('class','dia')
                if(index==0){
                    div1=document.createElement('div')
                    div2=document.createElement('div')
                    div3=document.createElement('div')
                    div4=document.createElement('div')
                    div1.setAttribute('class','dia_cab')
                    div2.setAttribute('class','dia_cab')
                    div3.setAttribute('class','dia_cab')
                    div4.setAttribute('class','dia_cab')
                    d1=document.createElement('h6')
                    d2=document.createElement('h6')
                    d3=document.createElement('h6')
                    d4=document.createElement('h6')
                    d1.innerHTML='Matutino:'
                    d2.innerHTML='Verpertino:'
                    d3.innerHTML='Noturno:'
                    d4.innerHTML='Dias:'
                    div1.appendChild(d1)
                    div2.appendChild(d2)
                    div3.appendChild(d3)
                    div4.appendChild(d4)
                    matutino.appendChild(div1)
                    verpertino.appendChild(div2)
                    noturno.appendChild(div3)
                    dias_semana.appendChild(div4)  
                }else{
                    if(project.Disponibilidade.matutino[index]==true){
                        dia.style.backgroundColor='#0ff271'
                        
                    }
                    if(project.Disponibilidade.verpertino[index]==true){
                        dia2.style.backgroundColor='#0ff271'
                        
                    }
                    if(project.Disponibilidade.noturno[index]==true){
                        dia1.style.backgroundColor='#0ff271'
                        
                    }
                
                } 
                matutino.appendChild(dia)
                noturno.appendChild(dia1)
                verpertino.appendChild(dia2)
            }
            cronograma.appendChild(dias_semana)
            cronograma.appendChild(noturno)
            cronograma.appendChild(verpertino)
            cronograma.appendChild(matutino)
            view.appendChild(cronograma)
        }
        crono()
    }
    function formato(){
        h6=document.createElement('h6')
        h6.innerHTML='Formato de negócio:'
        formatoo=document.createElement('div')
        label_tipo=document.createElement('label')
        if(project.Formato.tradicional==true){
           label_tipo.innerHTML='Tradicional'
        }
        if(project.Formato.inovador==true){
            label_tipo.innerHTML='Inovador'
        }else{
            label_tipo.innerHTML='Nao definido'
        }
        formatoo.setAttribute('class','formatoo')
        formatoo.appendChild(h6)
        formatoo.appendChild(label_tipo)
        view.appendChild(formatoo)
    }
    function mentorias(){
        h6=document.createElement('h6')
        h6.innerHTML='Mentorias:'
        mentoria=document.createElement('div')
        mentoria.setAttribute('class','mentoria')
        mentoria.appendChild(h6)
        for (const key in project.Mentorias) {
            if (Object.hasOwnProperty.call(project.Mentorias, key)) {
                const element = project.Mentorias[key];
                if(element==true){
                    const expr = key;
                    switch (expr) {
                    case 'ideacao':
                        var label = document.createElement('label')
                        label.innerHTML = 'Ideação'
                        mentoria.appendChild(label)
                        
                        break
                    case 'impulso':
                        var label = document.createElement('label')
                        label.innerHTML = 'Impulso'
                        mentoria.appendChild(label)
                        
                        break
                    case 'especial':
                        var label = document.createElement('label')
                        label.innerHTML = 'Especial'
                        mentoria.appendChild(label)
                        
                        break
                    case 'editais':
                        var label = document.createElement('label')
                        label.innerHTML = 'Edital'
                        mentoria.appendChild(label)
                        
                        break
                    default:
                        console.log(`Sorry, we are out of ${expr}.`);
                    }
            


                }
            }
        }
        view.appendChild(mentoria)
       
    }
    function equipe(){
      h6=document.createElement('h6')
      h6.innerHTML = 'Equipe:'
      equip=document.createElement('div')
      equip.style.backgroundColor='#0ff271'
      equip.appendChild(h6)
      equip.setAttribute('class','equipee')
      for (let index = 0; index < project.Equipe.length; index++) {
          const element = project.Equipe[index]
          label_email=document.createElement('label')
          label_name=document.createElement('label')
          img = document.createElement('img')
          userdiv= document.createElement('div')
          userdiv.setAttribute('class','userinfo')
          userdiv.appendChild(img)
          userdiv.appendChild(label_name)
          userdiv.appendChild(label_email)
          equip.appendChild(userdiv)
      }
      view.appendChild(equip)
    }
    function reuniao(){
        h6=document.createElement('h6')
        h6.innerHTML='Reuniões:'
        reunioes= document.createElement('div')
        reunioes.setAttribute('class','reunioess')
        reunioes.appendChild(h6)
        for (let index = 0; index < project.Reunioes.length; index++) {
            const element = project.Reunioes[index]
            item=document.createElement('div')
            item.setAttribute('class','item')
            label_assunto=document.createElement('label')
            label_data=document.createElement('label')
            label_horas=document.createElement('label')
            label_assunto.innerHTML ='Assunto: '+element.assunto
            label_data.innerHTML='Data: '+element.data
            label_horas.innerHTML ='Horas: '+element.horas
            item.appendChild(label_assunto)
            item.appendChild(label_data)
            item.appendChild(label_horas)
            reunioes.appendChild(item)
        }
        view.appendChild(reunioes)
    }
    function Kanban(){
        h6=document.createElement('h6')
        h6.innerHTML ='Quadros Kanban:'
        quadros=document.createElement('div')
        quadros.appendChild(h6)
        quadros.setAttribute('class','quadros')
        for (let index = 0; index < project.Kanban.length; index++) {
            const element = project.Kanban[index]
            kanban=document.createElement('div')
            kanban.setAttribute('class','item_kanban')
            label_titulo=document.createElement('label')
            label_data=document.createElement('label')
            label_titulo.innerHTML='Titulo: '+element.Titulo
            label_data.innerHTML='Data de criação: '+element.data
            kanban.appendChild(label_titulo)
            kanban.appendChild(label_data)
            quadros.appendChild(kanban)
        }
        view.appendChild(quadros)
    }
    function anexos(){
        h6=document.createElement('h6')
        h6.innerHTML='Anexos:'
        anexo=document.createElement('div')
        anexo.setAttribute('class','anexo')
        anexo.appendChild(h6)
        for (let index = 0; index < project.Anexos.length; index++) {
            const element = project.Anexos[index]
            anexo_item=document.createElement('div')
            anexo_item.setAttribute('class','anexo_item')
            label_name=document.createElement('label')
            label_date=document.createElement('label')
            label_name.innerHTML='Nome: '+element.nome
            label_date.innerHTML='Data: '+element.data
            anexo_item.appendChild(label_name)
            anexo_item.appendChild(label_date)
            anexo.appendChild(anexo_item)
        }
        view.appendChild(anexo)
    }
        cabecalho()
      responsavel()
    classificacao()
  disponibilidade()
          formato()
        mentorias()
           equipe()
          reuniao()
           Kanban()
           anexos()        
    document.body.appendChild(view)
    

}

