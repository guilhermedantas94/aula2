$(document).ready(function(){

    $('#f-data').mask('99/99/9999');
    $('#f-cpf').mask('999.999.999-99');
    $('#f-cep').mask('99999-999');
    
    $('#f-cep').blur(function(){

      var cepDigitado = $('#f-cep').val();

      $.getJSON('https://viacep.com.br/ws/'+cepDigitado+'/json/',function(dados){

        $('#f-logradouro').val(dados.logradouro);
        $('#f-bairro').val(dados.bairo);
        $('#f-cidade').val(dados.localidade);
        $('#f-uf').val(dados.uf);
        $('#f-numero').focus();

        

      })

      
    }) //fim do blur

    //ao clicar no botao lgpd

    if(localStorage.getItem('fechou')=="sim"){
      $('#lgpd').hide();

    }

    $('#btn-lgpd').click(function(){



      $('#lgpd').fadeOut();

      localStorage.setItem('fechou','sim');

    })


  })