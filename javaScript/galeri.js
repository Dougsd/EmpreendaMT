function nextFrame(){
    let doc = document.getElementById("idImg");
    let link = doc.getAttribute("src");
    if(link == "../img/passo1.png"){
        doc.setAttribute("src","../img/passo2.png");
    }else if(link == "../img/passo2.png"){
        doc.setAttribute("src","../img/passo3.png");
    }else if(link == "../img/passo3.png"){
        doc.setAttribute("src","../img/passo4.png");
    }else if(link == "../img/passo4.png"){
        doc.setAttribute("src","../img/passo5.png");
    }else if(link == "../img/passo5.png"){
        doc.setAttribute("src","../img/passo6.png");
    }else if(link == "../img/passo6.png"){
        doc.setAttribute("src","../img/passo1.png");
    }
    
}

