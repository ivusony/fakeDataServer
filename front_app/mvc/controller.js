const model = require('./model');

function controller(){
    var btn = document.querySelector('#test_btn');

    btn.addEventListener('click', function(e){
        console.log('works');
        model();
    })

}

module.exports = controller;