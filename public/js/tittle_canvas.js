document.querySelectorAll('.editar').forEach((event) =>{
    event.addEventListener('click', (e) =>{
        var abrir_tittle_canvas = e.target.id;

        switch(abrir_tittle_canvas){
            case 'lapis1':
                document.getElementById('div_to_label1').style.display = "block";
                document.getElementById('pop_up1').style.display = 'none';
                break;
            case 'lapis2':
                document.getElementById('div_to_label2').style.display = "block";
                document.getElementById('pop_up2').style.display = 'none';
                break;
            case 'lapis3':
                document.getElementById('div_to_label3').style.display = "block";
                document.getElementById('pop_up3').style.display = 'none';
                break;
            case 'lapis4':
                document.getElementById('div_to_label4').style.display = "block";
                document.getElementById('pop_up4').style.display = 'none';
                break;
        }
    })
})

document.querySelectorAll('.tittle_close').forEach((event) =>{
    event.addEventListener('click', (e) =>{
        var fechar_tittle_canvas = e. target.id;

        switch(fechar_tittle_canvas){
            case 'tittle_close1':
                document.getElementById('div_to_label1').style.display = "none";
                break;
            case 'tittle_close2':
                document.getElementById('div_to_label2').style.display = "none";
                break;
            case 'tittle_close3':
                document.getElementById('div_to_label3').style.display = "none";
                break;
            case 'tittle_close4':
                document.getElementById('div_to_label4').style.display = "none";
                break;
        }
    })
})

document.querySelectorAll('.button_tittle').forEach((event) =>{
    event.addEventListener('click', (e) =>{
        var definir_tittle_canvas = e.target.id;

        switch(definir_tittle_canvas){
            case 'button_tittle1':
                tittle_valor = document.getElementById('canvas_tittle1').value;
                document.getElementById('titulo1').innerHTML = tittle_valor;
                document.getElementById('div_to_label1').style.display = "none";
                document.getElementById('canvas_tittle1').value = "";
                break;
            case 'button_tittle2':
                tittle_valor = document.getElementById('canvas_tittle2').value;
                document.getElementById('titulo2').innerHTML = tittle_valor;
                document.getElementById('div_to_label2').style.display = "none";
                document.getElementById('canvas_tittle2').value = "";
                break;
            case 'button_tittle3':
                tittle_valor = document.getElementById('canvas_tittle3').value;
                document.getElementById('titulo3').innerHTML = tittle_valor;
                document.getElementById('div_to_label3').style.display = "none";
                document.getElementById('canvas_tittle3').value = "";
                break;
            case 'button_tittle4':
                tittle_valor = document.getElementById('canvas_tittle4').value;
                document.getElementById('titulo4').innerHTML = tittle_valor;
                document.getElementById('div_to_label4').style.display = "none";
                document.getElementById('canvas_tittle4').value = "";
                break;
        }
    })
})