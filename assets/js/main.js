/**
* Template Name: TheEvent
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/theevent-conference-event-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Buy tickets select the ticket type on click
   */
  on('show.bs.modal', '#buy-ticket-modal', function(event) {
    select('#buy-ticket-modal #ticket-type').value = event.relatedTarget.getAttribute('data-ticket-type')
  })

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

/*Registo */
function registoFunc(e){
let email = document.getElementById('registoUser').value;
let password = document.getElementById('registoPass').value;
let firstName = document.getElementById('exampleInputPrimeiro').value;
let secondName = document.getElementById('exampleInputSegundo').value;
let telemovel = document.getElementById('exampleInputTelemovel').value;

let user = {
  email: email,
  password: password,
  nome: firstName,
  apelido: secondName,
  telemovel: telemovel,
  tipo: 'cliente',
  reservas: [],
};

let json = JSON.stringify(user);
localStorage.setItem(email,json);
console.log("user added");


}

function loginFuc(e){ 
  let email = document.getElementById('exampleInputEmail1').value;
  let password = document.getElementById('exampleInputPassword1').value;

  let user = localStorage.getItem(email);
  let data = JSON.parse(user);
  //console.log(data);

if(email=="" || email==null){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Preencha todos os espaços!',
  });

}else if(password=="" || password==null){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Preencha todos os espaços!',
  });

}else{
  if(user == null){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Email Errado!',
    });
  } else if(email== data.email && password == data.password){
    if(data.tipo == "cliente"){
      window.location.href = "index_USER.html";
      sessionStorage.setItem("id",email);
    }else if(data.tipo == "admin_geral"){
      window.location.href = "dashboard.html";
      sessionStorage.setItem("id",email);
    }else if(data.tipo=="admin_pista"){
      window.location.href = "dashboard_Gestor.html";
      sessionStorage.setItem("id",email);
    }
    
  }else{
    //alert("Passowrd errada");
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Password Errada!',
    });
  }
}  
}

function logOut(e){
  sessionStorage.clear();
}

function meuPerfFunc(e){
  let userSession = sessionStorage.getItem("id");
  let userL = localStorage.getItem(userSession);
  let dataL = JSON.parse(userL);

  document.getElementById('holderEmailMeuPerfil').innerHTML= dataL.email;
  document.getElementById('holderUsernameMeuPerfil').innerHTML = dataL.nome + ' '+dataL.apelido;
  document.getElementById('holderPrimeiroMeuPerfil').innerHTML = dataL.nome;
  document.getElementById('holderUltimoMeuPerfil').innerHTML = dataL.apelido;
  document.getElementById('holderTelemovelMeuPerfil').innerHTML = dataL.telemovel;

  let elementosUser = document.getElementsByClassName('usernameMeuP');
  for (let i = 0; i < elementosUser.length; i++) {
    elementosUser[i].innerHTML = dataL.nome + ' ' + dataL.apelido;
  }

  if (dataL.reservas.length >= 2) {
    // Obter as últimas duas reservas
    let ultimaReserva = dataL.reservas[dataL.reservas.length - 1];
    let penultimaReserva = dataL.reservas[dataL.reservas.length - 2];
  
    // Remover o prefixo "access_" e o sufixo "-access" dos valores das pistas
    let pistaUltima = ultimaReserva.pista.replace("access_", "");
    let pistaPenultima = penultimaReserva.pista.replace("access_", "");
    let planoUltima = ultimaReserva.pacote.replace("-access", "");
    let planoPenultima = penultimaReserva.pacote.replace("-access", "");
  
    // Atualizar os elementos HTML com as informações das últimas duas reservas
    document.getElementById("primeriaData").textContent = ultimaReserva.dia;
    document.getElementById("planos1").textContent = `Plano: ${planoUltima} || Pista: ${pistaUltima} || Estado: ${ultimaReserva.estado}`;
  
    document.getElementById("segundaData").textContent = penultimaReserva.dia;
    document.getElementById("planos2").textContent = `Plano: ${planoPenultima} || Pista: ${pistaPenultima} || Estado: ${penultimaReserva.estado}`;
  }else if (dataL.reservas.length == 1){

    // Obter as últimas duas reservas
    let ultimaReserva = dataL.reservas[dataL.reservas.length - 1];
  
    // Remover o prefixo "access_" e o sufixo "-access" dos valores das pistas
    let pistaUltima = ultimaReserva.pista.replace("access_", "");
    let planoUltima = ultimaReserva.pacote.replace("-access", "");
  
    // Atualizar os elementos HTML com as informações das últimas duas reservas
    document.getElementById("primeriaData").textContent = ultimaReserva.dia;
    document.getElementById("planos1").textContent = `Plano: ${planoUltima} || Pista: ${pistaUltima} || Estado: ${ultimaReserva.estado}`;

  }

}

/* Google login */
//o handle vai receber a info
function handleCredentialResponse(response) {
  const data =jwt_decode(response.credential);
  console.log(data);
  
  let user = {
    email: data.email,
    nome: data.given_name,
    apelido: data.family_name,
    telemovel: gerarNumero(),
    tipo: 'cliente',
    reservas: [],
  };
  console.log(user);
  //let json = JSON.stringify(user);
  //localStorage.setItem(email,json);

  let procurarEmail = data.email;

  let userBD = localStorage.getItem(procurarEmail);
  let dataBD = JSON.parse(userBD);

  if(dataBD==null){
    let json = JSON.stringify(user);
    localStorage.setItem(data.email,json);
    window.location.href = "index_USER.html";
    sessionStorage.setItem("id",data.email);

    
  }else if(data.email == dataBD.email){
   window.location.href = "index_USER.html";
  sessionStorage.setItem("id",data.email);
  }  
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: "252514517910-a63mv7gf4s0oalpfl519j991qqhmogja.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  
  google.accounts.id.renderButton(
    document.getElementById("buttonDivGoogle"),
    { theme: "filled_white", 
    size: "large" ,
    type:"standard",
    shape:"pill",
    text:"signin.",
    logo_alignment:"left",
    width:"330px"
  }  // customization attributes
  );
  
  google.accounts.id.prompt(); // also display the One Tap dialog
}

///Teste:
function gerarNumero() {
  let codigoArea = '9';

  // Gerar os restantes dígitos do número de telefone (exemplo: 123456789)
  let restantesDigitos = '';
  for (let i = 0; i < 8; i++) {
    restantesDigitos += Math.floor(Math.random() * 10).toString();
  }

  // Formatar o número de telefone
  let numero = codigoArea + restantesDigitos;

  return numero;
}


//Pedido reserva preenchimento de espaços

$( '#buy-ticket-modal' ).on('shown.bs.modal', function(){
  reservaPreenchimento();
});

function reservaPreenchimento(e){
  let userSession = sessionStorage.getItem("id");
  let userL = localStorage.getItem(userSession);
  let dataL = JSON.parse(userL);
  
  document.getElementById('reservaNome').innerHTML = dataL.nome + ' '+dataL.apelido;
  document.getElementById('reservaEmail').innerHTML = dataL.email;
}

//Calendário - possivel apenas dia apos hoje
function populateTimes() {
  var timePicker = document.getElementById("timepicker");
  var datePicker = document.getElementById("datepicker");
  var selectedDate = datePicker.value;
  var currentTime = new Date();
  currentTime.setHours(0, 0, 0, 0);
  var timeOptions = "";

  if (selectedDate === "") {
    timePicker.innerHTML = "<option value=''>Selecione um horário</option>";
    return;
  }

  if (new Date(selectedDate) < currentTime) {
    timePicker.innerHTML = "<option value=''>Não estão disponíveis horários passados</option>";
    return;
  }

  var morningOption = "<option value='9:00-15:00'>9:00-15:00</option>";
  var eveningOption = "<option value='16:00-22:00'>16:00-22:00</option>";

  timeOptions += morningOption + eveningOption;

  timePicker.innerHTML = timeOptions;
}
function printConsola(){
    let ll = document.getElementById("timepicker").value;
    console.log(ll);
}

window.addEventListener('DOMContentLoaded', function() {
  var currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  var datePicker = document.getElementById("datepicker");
  datePicker.setAttribute("min", currentDate.toISOString().split('T')[0]);
});


//Registo de reserva:
function registoReserva(e){
  event.preventDefault(); //Tirar de comentario para testes
  let nome = document.getElementById("reservaNome").innerHTML;
  let email = document.getElementById("reservaEmail").innerHTML;
  let dia = document.getElementById("datepicker").value;
  let horario = document.getElementById("timepicker").value;
  let pristaescolhida = document.getElementById("ticket-type-pista").value;
  let pacote = document.getElementById("ticket-type").value;

  if(nome=="" || nome==null || email=="" || email==null || dia=="" || dia==null || horario=="" || horario==null || pristaescolhida=="" || pristaescolhida==null || pacote=="" || pacote==null){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Preencha todos os campos!',
    });
  }else{

  let juntar = {
    nome: nome,
    email: email,
    dia: dia,
    horario: horario,
    pista: pristaescolhida,
    pacote: pacote,
  };
  console.log(juntar);

  let reserva={
    dia: dia,
    hora: horario,
    email: email,
    pista: pristaescolhida,
    pacote: pacote,
    estado: 'pendente',
    n_pessoas: 0,
    responsavel: "",
    nome: nome,
  };
  updateReservas(reserva);

  }

}

function atualizarTabela() {
  tabelaReservasCliente();
  // Verificar se o DataTable já está inicializado antes de criar novamente
  if ($.fn.DataTable.isDataTable('#our-table')) {
    // Destruir a instância existente do DataTable
    $('#our-table').DataTable().destroy();
  }
  // Recriar o DataTable com as novas configurações
  $('#our-table').DataTable({
    paging: true,
    lengthMenu: [5, 10, 25], // Opções de quantidade de linhas por página
    pageLength: 3, // Número de linhas por página inicial
    lengthChange: true
    // Resto das configurações da tabela
  });
}

//Adicionar inf ao utilizador(updates)- localstorage :
function updateReservas(reserva){

  let userSession = sessionStorage.getItem("id");
  let userL = localStorage.getItem(userSession);
  let dataL = JSON.parse(userL);

  dataL.reservas.push(reserva);
  console.log(dataL);
  console.log(dataL.email);
  
  localStorage.setItem(userSession, JSON.stringify(dataL)); 

  if (!localStorage.getItem("pista_Laguna")) {
    localStorage.setItem("pista_Laguna", JSON.stringify([]));
  }
  if (!localStorage.getItem("pista_spa")) {
    localStorage.setItem("pista_spa", JSON.stringify([]));
  }
  if (!localStorage.getItem("pista_GoodWood")) {
    localStorage.setItem("pista_GoodWood", JSON.stringify([]));
  }
  if (!localStorage.getItem("pista_Autopolis")) {
    localStorage.setItem("pista_Autopolis", JSON.stringify([]));
  }
  if (!localStorage.getItem("pista_Fuji")) {
    localStorage.setItem("pista_Fuji", JSON.stringify([]));
  }
  if (!localStorage.getItem("pista_RedBull")) {
    localStorage.setItem("pista_RedBull", JSON.stringify([]));
  }

  if(reserva.pista == "access_Laguna_Seca"){
    let listaP = localStorage.getItem("pista_Laguna");
    let listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }
    listaPJson.push(reserva);
    
    localStorage.setItem("pista_Laguna", JSON.stringify(listaPJson));

  }else if(reserva.pista == "access_Spa_Francorshamps"){
    let listaP = localStorage.getItem("pista_spa");
    let listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }
    listaPJson.push(reserva)
    localStorage.setItem("pista_spa", JSON.stringify(listaPJson));

  }else if(reserva.pista == "access_Goodwood"){
    let listaP = localStorage.getItem("pista_GoodWood");
    let listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }
    listaPJson.push(reserva)
    localStorage.setItem("pista_GoodWood", JSON.stringify(listaPJson));

  }else if(reserva.pista == "access_Autopolis"){
    let listaP = localStorage.getItem("pista_Autopolis");
    let listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }
    listaPJson.push(reserva)
    localStorage.setItem("pista_Autopolis", JSON.stringify(listaPJson));

  }else if(reserva.pista == "access_Fuji_Speedway"){
    let listaP = localStorage.getItem("pista_Fuji");
    let listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }
    listaPJson.push(reserva)
    localStorage.setItem("pista_Fuji", JSON.stringify(listaPJson));

  }else if(reserva.pista == "access_Red_Bull"){
    let listaP = localStorage.getItem("pista_RedBull");
    let listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }
    listaPJson.push(reserva)
    localStorage.setItem("pista_RedBull", JSON.stringify(listaPJson));

  }
  

  Swal.fire({
    title: 'Reserva realizada',
    text: 'Sua reserva foi registrada com sucesso.',
    icon: 'success',
    confirmButtonText: 'OK'
  }).then(() => {
    location.reload(); // Recarregar a página após o clique no botão "OK"
  });

  atualizarTabela();
  
}

//Paginação na tabela de reservas cliente
$( '#ModalFormTabela' ).on('shown.bs.modal', function(){
  tabelaReservasCliente();
});

let reservasLista; // Definir a variável reservasLista em um escopo mais amplo


    function tabelaReservasCliente() {
      let userSession = sessionStorage.getItem("id");
      let userL = localStorage.getItem(userSession);
      let dataL = JSON.parse(userL);
      reservasLista = dataL.reservas;
      console.log(dataL);
    
      let tableBody = $('#table-body');
      tableBody.empty(); // Limpar o conteúdo da tabela antes de preencher
    
      for (let i = 0; i < reservasLista.length; i++) {
        let reserva = reservasLista[i];
        let pista = reserva.pista.replace("access_", ""); // Remover "access_"
        let pacote = reserva.pacote.replace("-access","");
        let isPendente = reserva.estado === 'pendente';
        let row = `
          <tr id="reserva-${i}">
            <td>${reserva.dia}</td>
            <td>${pista}</td>
            <td>${pacote}</td>
            <td>${reserva.estado}</td>
            <td><button class="btn btn-info cancelar-btn" ${isPendente ? '' : 'disabled'} onclick="cancelarReserva(${i})">Cancelar</button></td>
          </tr>
        `;
        tableBody.append(row);
      }
    
      // Verificar se o DataTable já está inicializado antes de criar novamente
  if ($.fn.DataTable.isDataTable('#our-table')) {
    // Destruir a instância existente do DataTable
    $('#our-table').DataTable().destroy();
  }

  // Recriar o DataTable com as novas configurações
  $('#our-table').DataTable({
    paging: true,
    lengthMenu: [5, 10, 25], // Opções de quantidade de linhas por página
    pageLength: 3, // Número de linhas por página inicial
    lengthChange: false
    // Resto das configurações da tabela
  });

}

function  cancelarReserva(i){
  let reserva = reservasLista[i];
  reserva.estado = 'cancelada';

  let userSession = sessionStorage.getItem("id");
  let userL = localStorage.getItem(userSession);
  let dataL = JSON.parse(userL);
  dataL.reservas[i] = reserva;
  localStorage.setItem(userSession, JSON.stringify(dataL));
  
  // Atualizar a tabela ou executar outras ações necessárias
  // Por exemplo:
  let rowElement = document.getElementById(`reserva-${i}`);
  rowElement.querySelector('td:nth-child(4)').textContent = reserva.estado;

  // Desabilitar o botão de cancelar
  let cancelarBtn = document.getElementById(`reserva-${i}`).querySelector('.cancelar-btn');
  cancelarBtn.disabled = true;
  
  if(reserva.pista == "access_Laguna_Seca"){
    let listaP = localStorage.getItem("pista_Laguna");
    cancelarReservaGeralPista(listaP,reserva,"pista_Laguna");
 
  }else if(reserva.pista == "access_Spa_Francorshamps"){
    let listaP = localStorage.getItem("pista_spa");
    cancelarReservaGeralPista(listaP,reserva,"pista_spa");

  }else if(reserva.pista == "access_Goodwood"){
    let listaP = localStorage.getItem("pista_GoodWood");
    cancelarReservaGeralPista(listaP,reserva,"pista_GoodWood");

  }else if(reserva.pista == "access_Autopolis"){
    let listaP = localStorage.getItem("pista_Autopolis");
    cancelarReservaGeralPista(listaP,reserva,"pista_Autopolis");

  }else if(reserva.pista == "access_Fuji_Speedway"){
    let listaP = localStorage.getItem("pista_Fuji");
    cancelarReservaGeralPista(listaP,reserva,"pista_Fuji");

  }else if(reserva.pista == "access_Red_Bull"){
    let listaP = localStorage.getItem("pista_RedBull");
    cancelarReservaGeralPista(listaP,reserva,"pista_RedBull");

  }  
  atualizarTabela();
  
}

function cancelarReservaGeralPista(listaP,reserva,pistaLista) {
  const reservas = JSON.parse(listaP);
  const reservasAtualizadas = reservas.map((reservaItem) => {
    if (
      reservaItem.dia === reserva.dia &&
      reservaItem.email === reserva.email &&
      reservaItem.nome === reserva.nome &&
      reservaItem.hora === reserva.hora &&
      reservaItem.pista === reserva.pista
    ) {
      reservaItem.estado = "cancelada";
    }
   return reservaItem;
  });

  localStorage.setItem(pistaLista, JSON.stringify(reservasAtualizadas));
}
