var loginBemVindo = localStorage.getItem('login');

if(loginBemVindo!=null){
    $("#ident").append("<label> Bem-vindo" + " " + loginBemVindo +  "</label>")

}
  function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('ident')
}
 
$(document).ready(function () {
    $("input[name=cep]").blur(function () {
      var cep = $(this)
        .val()
        .replace(/[^0-9]/, "");
      if (cep) {
        var url = "https://viacep.com.br/ws/" + cep + "/json/";
        $.ajax({
          url: url,
          dataType: "jsonp",
          contentType: "application/json",
          success: function (json) {
            if (json.logradouro) {
              $("input[name=rua]").val(json.logradouro);
              $("input[name=bairro]").val(json.bairro);
              $("input[name=cidade]").val(json.localidade);
              $("input[name=uf]").val(json.uf);
              
            }
          },
        });
      }
    });
});
 

  
  $("#searchForm").on("submit", function (event) {
    // Stop form from submitting normally
    event.preventDefault();
    var cep = $("#campo")
      .val()
      .replace(/[^0-9]/, "");
    if (cep) {
      var url = "https://viacep.com.br/ws/" + cep + "/json/";
      $.ajax({
        url: url,
        dataType: "json",
        contentType: "application/json",
        success: function (json) {
          if (json.logradouro) {
            // Put the results in a div
            $("#result").empty().append(json.logradouro);
          }
        },
      });
    }
  });

function ajustaCpf(v) {
    v.value = v.value.replace(/\D/g, "");
    //Adiciona ponto após os três primeiros números
    v.value = v.value.replace(/^(\d{3})(\d)/, "$1.$2");
    //Adiciona ponto após os seis primeiros números
    v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");
    //Adiciona o hífen antes dos últimos 2 caracteres
    v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function ajustaData(v) {
    v.value = v.value.replace(/\D/g, "");
    //Adiciona a barra entre o dia e o mês
    v.value = v.value.replace(/^(\d{2})(\d)/, "$1/$2");
    //Adiciona a barra entre o mês e o ano
    v.value = v.value.replace(/(\d{2})(\d)/, "$1/$2");
}

function ajustaNumeros(v) {
    // Remove os caracteres não numéricos
    v.value = v.value.replace(/\D/g, "");
}

function ajustaTelefone(v) {
    v.value = v.value.replace(/\D/g, "");
    //Adiciona parênteses no DDD
    v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
    //Adiciona hífen no número do telefone
    v.value = v.value.replace(/(\d{5})(\d)/, "$1-$2");
}

function ajustaTelefone1(v) {
    v.value = v.value.replace(/\D/g, "");
    //Adiciona parênteses no DDD
    v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
    //Adiciona hífen no número do telefone
    v.value = v.value.replace(/(\d{4})(\d)/, "$1-$2");
}

function minuscula(texto) {
    texto.value = texto.value.toLowerCase();
}

function maiuscula(texto) {
    texto.value = texto.value.toUpperCase();
    
}

function ApenasLetras(e, t) {
  try {
      if (window.event) {
          var charCode = window.event.keyCode;
      } else if (e) {
          var charCode = e.which;
      } else {
          return true;
      }
      if (
          (charCode > 64 && charCode < 91) || 
          (charCode > 96 && charCode < 123) ||
          (charCode > 191 && charCode <= 255) // letras com acentos
      ){
          return true;
      } else {
          return false;
      }
  } catch (err) {
      alert(err.Description);
  }
}

let btn = document.querySelector('#vercadSenha')
let btnConfirm = document.querySelector('#vercadConfirmSenha')

let cadCpf = document.querySelector('#cadCpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false

let cadNome = document.querySelector('#cadNome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let cadMaterno = document.querySelector('#cadMaterno')
let labelMaterno = document.querySelector('#labelMaterno')
let validMaterno = false

let cadData = document.querySelector('#cadData')
let labelData = document.querySelector('#labelData')
let validData = false

let cadEmail = document.querySelector('#cadEmail')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let cadCel = document.querySelector('#cadCel')
let labelCel = document.querySelector('#labelCel')
let validCel = false

let cadFixo = document.querySelector('#cadFixo')
let labelFixo = document.querySelector('#labelFixo')
let validFixo = false

let flexRadioDefault1 = document.querySelector('#flexRadioDefault1')
let labelFeminino = document.querySelector('#labelFeminino')
let validFeminino = false

let flexRadioDefault2 = document.querySelector('#flexRadioDefault2')
let labelMasculino = document.querySelector('#labelMasculino')
let validMasculino = false

let flexRadioDefault3 = document.querySelector('#flexRadioDefault3')
let labelOutros = document.querySelector('#labelOutros')
let validOutros = false

let flexRadioDefault4 = document.querySelector('#flexRadioDefault4')
let labelIndeciso = document.querySelector('#labelIndeciso')
let validIndeciso = false

let cadCep = document.querySelector('#cadCep')
let labelCep = document.querySelector('#labelCep')
let validCep = false

let cadRua = document.querySelector('#cadRua')
let labelRua = document.querySelector('#labelRua')
let validRua = false

let cadNumero = document.querySelector('#cadNumero')
let labelNumero = document.querySelector('#labelNumero')
let validNumero = false

let cadComplemento = document.querySelector('#cadComplemento')
let labelComplemento = document.querySelector('#labelComplemento')
let validComplemento = false

let cadBairro = document.querySelector('#cadBairro')
let labelBairro = document.querySelector('#labelBairro')
let validBairro = false

let cadCidade = document.querySelector('#cadCidade')
let labelCidade = document.querySelector('#labelCidade')
let validCidade = false

let cadEstado = document.querySelector('#cadEstado')
let labelEstado = document.querySelector('#labelEstado')
let validEstado = false

let cadLogin = document.querySelector('#cadLogin')
let labelLogin = document.querySelector('#labelLogin')
let validLogin = false

let cadSenha = document.querySelector('#cadSenha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let cadConfirmSenha = document.querySelector('#cadConfirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

cadCpf.addEventListener('keyup', () => {
  if(cadCpf.value.length <= 7){
    labelCpf.setAttribute('style', 'color: red')
    labelCpf.innerHTML = '(Insira 8 caracteres)'
    cadCpf.setAttribute('style', 'border-color: red' )
    validNome = false
  } else {
    labelCpf.setAttribute('style', 'color: green')
    labelCpf.innerHTML = 'CPF'
    cadCpf.setAttribute('style', 'border-color: green')
    validCpf = true
  }
})

cadNome.addEventListener('keyup', () => {
  if(cadNome.value.length <= 14){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = '(Mínimo 15 caracteres)'
    cadNome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome Completo'
    cadNome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

cadMaterno.addEventListener('keyup', () => {
  if(cadMaterno.value.length <= 14){
    labelMaterno.setAttribute('style', 'color: red')
    labelMaterno.innerHTML = '(Mínimo 15 caracteres)'
    cadMaterno.setAttribute('style', 'border-color: red')
    validMaterno = false
  } else {
    labelMaterno.setAttribute('style', 'color: green')
    labelMaterno.innerHTML = 'Nome Completo Materno'
    cadMaterno.setAttribute('style', 'border-color: green')
    validMaterno = true
  }
})

cadData.addEventListener('keyup', () => {
  if(cadData.value.length <= 9){
    labelData.setAttribute('style', 'color: red')
    labelData.innerHTML = '(Mínimo 10 caracteres)'
    cadData.setAttribute('style', 'border-color: red')
    validData = false
  } else {
    labelData.setAttribute('style', 'color: green')
    labelData.innerHTML = 'Data de Nascimento'
    cadData.setAttribute('style', 'border-color: green')
    validData = true
  }
})

cadCel.addEventListener('keyup', () => {
  if(cadCel.value.length <= 14){
    labelCel.setAttribute('style', 'color: red')
    labelCel.innerHTML = '(Mínimo 15 caracteres)'
    cadCel.setAttribute('style', 'border-color: red')
    validCel = false
  } else {
    labelCel.setAttribute('style', 'color: green')
    labelCel.innerHTML = 'Telefone Celular'
    cadCel.setAttribute('style', 'border-color: green')
    validCel = true
  }
})

cadFixo.addEventListener('keyup', () => {
  if(cadFixo.value.length <= 13){
    labelFixo.setAttribute('style', 'color: red')
    labelFixo.innerHTML = '(Mínimo 14 caracteres)'
    cadFixo.setAttribute('style', 'border-color: red')
    validFixo = false
  } else {
    labelFixo.setAttribute('style', 'color: green')
    labelFixo.innerHTML = 'Telefone Fixo'
    cadFixo.setAttribute('style', 'border-color: green')
    validFixo = true
  }
})

cadCep.addEventListener('keyup', () => {
  if(cadCep.value.length <= 7){
    labelCep.setAttribute('style', 'color: red')
    labelCep.innerHTML = '(Mínimo 8 caracteres)'
    cadCep.setAttribute('style', 'border-color: red')
    validCep = false
  } else {
    labelCep.setAttribute('style', 'color: green')
    labelCep.innerHTML = 'CEP'
    cadCep.setAttribute('style', 'border-color: green')
    validCep = true
  }
})

cadNumero.addEventListener('keyup', () => {
  if(cadNumero.value.length <= 1){
    labelNumero.setAttribute('style', 'color: red')
    labelNumero.innerHTML = '(Mínimo 02 caracteres)'
    cadNumero.setAttribute('style', 'border-color: red')
    validNumero = false
  } else {
    labelNumero.setAttribute('style', 'color: green')
    labelNumero.innerHTML = 'Número'
    cadNumero.setAttribute('style', 'border-color: green')
    validNumero = true
  }
})

cadComplemento.addEventListener('keyup', () => {
  if(cadComplemento.value.length <= 3){
    labelComplemento.setAttribute('style', 'color: red')
    labelComplemento.innerHTML = '(Mínimo 04 caracteres)'
    tamcompl.setAttribute('style', 'border-color: red')
    validComplemento = false
  } else {
    labelComplemento.setAttribute('style', 'color: green')
    labelComplemento.innerHTML = 'Complemento Completo'
    cadComplemento.setAttribute('style', 'border-color: green')
    validComplemento = true
  }
})

cadLogin.addEventListener('keyup', () => {
  if(cadLogin.value.length <= 5){
    labelLogin.setAttribute('style', 'color: red')
    labelLogin.innerHTML = '(Mínimo 6 caracteres)'
    cadLogin.setAttribute('style', 'border-color: red')
    validLogin = false
  } else {
    labelLogin.setAttribute('style', 'color: green')
    labelLogin.innerHTML = 'Login'
    cadLogin.setAttribute('style', 'border-color: green')
    validLogin = true
  }
})

cadSenha.addEventListener('keyup', () => {
  if(cadSenha.value.length <= 7){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Inserir 8 caracteres'
    cadSenha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    cadSenha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

cadConfirmSenha.addEventListener('keyup', () => {
  if(cadSenha.value != cadConfirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: 8B0000')
    labelConfirmSenha.innerHTML = '(As senhas não conferem)'
    cadConfirmSenha.setAttribute('style', 'border-color: 8B0000')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirme sua Senha'
    cadConfirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

function cadastrar(){
  
    localStorage.setItem('login',$('#cadLogin').val())
    localStorage.setItem('password',$('#cadSenha').val())
    handlepopup(true); // Abrir o modal
}   

const popup = document.getElementById('popup');
   
   function handlepopup(open) {
     if (open) {
       popup.classList.add('opened');
     } else {
       popup.classList.remove('opened');
       
     }
   }
