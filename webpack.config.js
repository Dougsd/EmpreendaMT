const path = require('path');
module.exports = {
    mode: 'development',
    entry:[
                './public/js/auth_triagem.js',
                './public/js/canvas_div.js',
                './public/js/canvas_functions.js',
                './public/js/canvas_pop_up.js',
                './public/js/clien_to_BD.js',
                './public/js/config_cad.js',
                './public/js/createuser_cliente.js',
                './public/js/createuser_mentor.js',
                './public/js/createuser_triagem.js',
                './public/js/drag_drop.js',
                './public/js/equipe_emails.js',
                './public/js/firebase_config.js',
                './public/js/formulario_triagem.js',
                './public/js/login_config.js',
                './public/js/nav.js',
                './public/js/proj_to_BD.js',
                './public/js/show_proj.js',
                './public/js/tittle_canvas.js',
                './public/js/userProfile.js',
                './public/js/verifyLogin.js'
            ]
        
    ,
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    }
}