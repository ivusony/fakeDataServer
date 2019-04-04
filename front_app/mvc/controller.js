const model = require('./model');

function controller(){
    var btn = document.querySelector('#test_btn'),
        input = document.querySelector('#test_input');

    btn.addEventListener('click', function(e){
        console.log('works');
        model(input.value);
    })

}

module.exports = controller;