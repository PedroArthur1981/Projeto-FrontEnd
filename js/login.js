$('#nome').val(localStorage.getItem('login'));
$('#senha').val(localStorage.getItem('password'));

$('#btnLogin').click(function(){

  localStorage.setItem('login',$('#nome').val())
  localStorage.setItem('password',$('#senha').val())

 
});