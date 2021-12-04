//Funcionamento dos botões responsáveis por abrir a pop up de geração de divs
  document.querySelectorAll('.add_div').forEach((el) =>
    el.addEventListener("click", (event) => {
      var identificando = event.target.id;

      switch(identificando){
          case 'canvas1':
            document.getElementById('pop_up1').style.display = 'block';
            document.getElementById('div_to_label1').style.display = 'none';
            break;
          case 'canvas2':
            document.getElementById('pop_up2').style.display = 'block';
            document.getElementById('div_to_label2').style.display = 'none';
            break;
          case 'canvas3':
            document.getElementById('pop_up3').style.display = 'block';
            document.getElementById('div_to_label3').style.display = 'none';
            break;
          case 'canvas4':
            document.getElementById('pop_up4').style.display = 'block';
            document.getElementById('div_to_label4').style.display = 'none';
            break;
      }
    })
  )
//Funcionamento dos botões responsáveis por abrir a pop up de geração de divs

//Funcionamento dos botões reposáveis por fechar a pop up de geração de divs
  document.querySelectorAll('.close').forEach((el) =>
    el.addEventListener("click", (e) => {
      var id_img_close = e.target.id;

      switch(id_img_close){
        case 'img_closePop_up1':
          document.getElementById('pop_up1').style.display = 'none';
          break;
        case 'img_closePop_up2':
          document.getElementById('pop_up2').style.display = 'none';
          break;
        case 'img_closePop_up3':
          document.getElementById('pop_up3').style.display = 'none';
          break;
        case 'img_closePop_up4':
          document.getElementById('pop_up4').style.display = 'none';
          break;
      }
    })
  )
//Funcionamento dos botões reposáveis por fechar a pop up de geração de divs