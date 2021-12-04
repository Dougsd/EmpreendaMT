var admin = require("firebase-admin")
// const { getDatabase } = require('firebase-admin/database')
// const db = getDatabase()
// Fetch the service account key JSON file contents
var serviceAccount = require("./ServiceAcauntCert.json")
// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://empreendamt-f1f1d-default-rtdb.firebaseio.com/"
})

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database()
//Cria uma referencia, espécie de ponteiro para uma variável


// ref.once("value", function(snapshot) {
//   console.log(snapshot.val())
// })
//Listar fucncoes ou modulos abaixo 

 exports.save_project = (project)=>{
    var key_push = db.ref("triagem/projetos").push()
    var ref = db.ref("triagem/projetos/"+key_push.key)
    project.ID=key_push.key
    ref.update(project)
}
 exports.update_project = (project)=>{
    var up = db.ref('triagem/projetos/'+project.ID)
    up.update(project)
}
exports.search = (valor,res)=>{
  
  db.ref("triagem/projetos/").orderByChild('Nome').equalTo(valor.texto).once("value")
    .then(snapshot=>{
      return res.send(snapshot.val())
    })
}

exports.init = (res)=>{
  
  db.ref("triagem/projetos/").orderByChild('Nome').limitToLast(10).once("value")
    .then(snapshot=>{
      return res.send(snapshot.val())
    })
}