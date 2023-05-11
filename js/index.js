$(document).ready(function(){

    $('#tel').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true, 
                email: true
            },
            tel: {
                required: true
            },
            msg: {
                required: true
            }
        },
        submitHandler: function(form) {
                e,preveventDefault();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`${camposIncorretos} campos não preenchidos no formulário de contato, por gentileza preencher todos os campos para enviar.`);
            }
        }
    })

})
