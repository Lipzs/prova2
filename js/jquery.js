$(document).ready(function () {
  $('#cpf').mask('000.000.000-00');
  $('#cep').mask('00000-000');
  $('#nascimento').mask('99/99/9999')
});

$('#salario').priceFormat({
  prefix: 'R$ ',
  centsSeparator: ',',
  thousandsSeparator: '.'
});

$('nav a').click(function (e) {
  e.preventDefault();
  var id = $(this).attr('href');
  targetOffset = $(id).offset().top;
  $('html, body').animate({
    scrollTop: targetOffset - 130
  }, 500)
})
