// var information = doc

function show_info(){
    auth.onAuthStateChanged((user) => {
        document.getElementById('img_perfil1').setAttribute('src',user.photoURL);
        document.getElementById('name_user').innerHTML = user.displayName;
    });
    var req = new XMLHttpRequest()
    req.overrideMimeType("application/json")
    req.open('POST', '/init', true)
    req.onload  = function() {
        var jsonResponse = req.response
        if(jsonResponse!=null){
            project=JSON.parse(jsonResponse)
            project = Object.values(project)
            for (var a=0; a<project.length;a++){
                // console.log('==>',project[a])
                div_main(project[a])
            }
        }else{
            console.error("Error response",null)
        }
         // do something with jsonResponse
        
    }
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    req.send(null)
}
