function logOut(e){
  sessionStorage.clear();
}
// Get the modal
var modal = document.getElementById("mymodal");
var detalhes = document.getElementById("detalhes");

// Get the button that opens the modal
var btn = document.getElementById("adicRes");

// Get the <span> element that closes the modal
var span = document.getElementById("fechar");
var fechadetalhes = document.getElementById("fechadetalhes");

// When the user clicks on the button, open the modalF
/*btn.onclick = function() {
  modal.style.display = "block";
}*/

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

fechadetalhes.onclick = function() {
  detalhes.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function salvarDadosReservas() {
  


  // Obtém os valores dos campos de entrada
  let data = document.getElementById("data").value;
  let hora = document.getElementById("hora").value;
  let pista = document.getElementById("pista").value;
  let plano = document.getElementById("plano").value;
  let nome = document.getElementById("nome").value;
  let estado = document.getElementById("estado").value;
  let pessoas = document.getElementById("pessoas").value;

  // Cria um objeto com os dados
  let reserva = {
    data: data,
    hora: hora,
    pista: pista,
    plano: plano,
    nome: nome,
    responsavel: responsavel,
    estado: estado,
    pessoas: pessoas
  };


  // Obtém a lista de dados salvos no LocalStorage
  let listaReservas = JSON.parse(localStorage.getItem("reserva"));

  // Se a lista ainda não existir, cria uma nova lista vazia
  if (!listaReservas) {
    listaReservas = [];
  }

  // Adiciona o novo objeto à lista
  listaReservas.push(reserva);

  // Salva a lista atualizada no LocalStorage
  localStorage.setItem("reserva", JSON.stringify(listaReservas));

  //DIOGO - COLOQUEI EM COMENTARIO
   /* // Adiciona a nova linha na tabela
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
          <td>${dados.nome}</td>
          <td>${dados.responsavel}</td>
          <td>${dados.preco}</td>
          <td>${dados.problemas}</td>
          <td>${dados.materiais}</td>
          <td>${dados.morada}</td>
        `;
    tbody.appendChild(newRow);*/
    updateTable();

      // Limpa os campos de entrada
  document.getElementById("data").value = "";
  document.getElementById("hora").value = "";
  document.getElementById("pista").value = "";
  document.getElementById("plano").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("estado").value = "";
  document.getElementById("pessoas").value = "";
  
      // Fecha o modal
      modal.style.display = "none";
}


//DIOGO - CRIEI
/*function updateTable() {
  


  // Obtém a referência para a tabela
  let tabela = document.getElementById("mytable");

  // Verifica se a tabela já possui cabeçalhos
  let hasHeaders = tabela.querySelector("thead tr");

  // Se não houver cabeçalhos, adiciona-os
  if (!hasHeaders) {
    let thead = tabela.createTHead();
    let row = thead.insertRow();
    let headers = ["Data", "Horas","Nome", "Pista", "Plano", "Estado", "Detalhes"];

    // Cria as células dos cabeçalhos
    headers.forEach(function(headerText) {
      let th = document.createElement("th");
      let text = document.createTextNode(headerText);
      th.appendChild(text);
      row.appendChild(th);
    });
  }

  // Limpa o conteúdo existente do corpo da tabela
  let tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  // Obtém a lista de dados do LocalStorage
  let listaReservas = JSON.parse(localStorage.getItem("reserva"));

  // Se a lista existir, atualiza o corpo da tabela
  if (listaReservas) {
    // Cria as linhas da tabela com os dados salvos
    listaReservas.forEach(function(reserva) {
      // Cria uma nova linha na tabela
      let linha = tbody.insertRow();

      // Insere as células na linha
      let celulaData = linha.insertCell();
      let celulaHora = linha.insertCell();
      let celulaNome = linha.insertCell();
      let celulaPista = linha.insertCell();
      let celulaPlano = linha.insertCell();
      let celulaEstado = linha.insertCell();
      let celulaDetalhes = linha.insertCell();


      // Preenche as células com os valores dos dados
      celulaData.textContent = reserva.dia;
      celulaHora.textContent = reserva.hora;
      celulaNome.textContent = reserva.nome;
      celulaPista.textContent = reserva.pista;
      celulaPlano.textContent = reserva.pacote;
      celulaEstado.textContent = reserva.estado;
      celulaDetalhes.textContent = reserva.responsavel;

      // Cria o botão para a coluna "Detalhes"
      let detalhesButton = document.createElement("button");
      detalhesButton.textContent = "Detalhes";
      detalhesButton.style.padding = "0.25rem 0.5rem";
      detalhesButton.style.backgroundColor = "#EB1616";
      detalhesButton.style.color = "white";
      detalhesButton.style.border = "none";
      detalhesButton.style.borderRadius = "0.2rem";
      detalhesButton.style.cursor = "pointer";

      // Define um evento de clique para o botão
      detalhesButton.addEventListener("click", function() {
        // Implemente a ação que deseja realizar ao clicar no botão
        detalhes.style.display = "block";
      });

      // Insere o botão na célula "Detalhes"
      celulaDetalhes.appendChild(detalhesButton);
    });
  }
}*/

function loadTable() {
  let userSession = sessionStorage.getItem("id");
  let userL = localStorage.getItem(userSession);
  let dataL = JSON.parse(userL);
  let pista_responsavel_por = dataL.responsavel;
  let listaPJson="";

  if(pista_responsavel_por == "Laguna Seca"){
    let listaP = localStorage.getItem("pista_Laguna");
    
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
      
    }
    

  }else if(pista_responsavel_por == "Spa-Francorshamps"){
    let listaP = localStorage.getItem("pista_spa");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }
   

  }else if(pista_responsavel_por  == "Goodwood"){
    let listaP = localStorage.getItem("pista_GoodWood");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }
    

  }else if(pista_responsavel_por  == "Autopolis"){
    let listaP = localStorage.getItem("pista_Autopolis");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }
    

  }else if(pista_responsavel_por  == "Fuji Speedway"){
    let listaP = localStorage.getItem("pista_Fuji");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }
    

  }else if(pista_responsavel_por  == "Red Bull Ring"){
    let listaP = localStorage.getItem("pista_RedBull");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }
  }
 
  // Obtém a referência para a tabela
  let tabela = document.getElementById("mytable");

  // Verifica se a tabela já possui cabeçalhos
  let hasHeaders = tabela.querySelector("thead tr");

  // Se não houver cabeçalhos, adiciona-os
  if (!hasHeaders) {
    let thead = tabela.createTHead();
    let row = thead.insertRow();
    let headers = ["Data", "Horas","Nome", "Pista", "Plano", "Estado", "Detalhes"];

    // Cria as células dos cabeçalhos
    headers.forEach(function(headerText) {
      let th = document.createElement("th");
      let text = document.createTextNode(headerText);
      th.appendChild(text);
      row.appendChild(th);
    });
  }

  // Limpa o conteúdo existente do corpo da tabela
  let tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  // Obtém a lista de dados do LocalStorage
  let listaReservas = JSON.parse(localStorage.getItem("reserva"));
  // Se a lista existir, atualiza o corpo da tabela
  let reservaSelecionada=null;
  let selectedindex;
  

  if (listaPJson) {
    // Cria as linhas da tabela com os dados salvos
    listaPJson.forEach(function(reserva, index) {
      // Cria uma nova linha na tabela
      let linha = tbody.insertRow();
  
      // Insere as células na linha
      let celulaData = linha.insertCell();
      let celulaHora = linha.insertCell();
      let celulaNome = linha.insertCell();
      let celulaPista = linha.insertCell();
      let celulaPlano = linha.insertCell();
      let celulaEstado = linha.insertCell();
      let celulaDetalhes = linha.insertCell();
  
      // Preenche as células com os valores dos dados
      celulaData.textContent = reserva.dia;
      celulaHora.textContent = reserva.hora;
      celulaNome.textContent = reserva.nome;
      celulaPista.textContent = reserva.pista;
      celulaPlano.textContent = reserva.pacote;
      celulaEstado.textContent = reserva.estado;
  
      // Cria o botão para a coluna "Detalhes"
      let detalhesButton = document.createElement("button");
      detalhesButton.textContent = "Detalhes";
      detalhesButton.style.padding = "0.25rem 0.5rem";
      detalhesButton.style.backgroundColor = "#EB1616";
      detalhesButton.style.color = "white";
      detalhesButton.style.border = "none";
      detalhesButton.style.borderRadius = "0.2rem";
      detalhesButton.style.cursor = "pointer";
  
      // Define um evento de clique para o botão
      detalhesButton.addEventListener("click", function() {
        // Implemente a ação que deseja realizar ao clicar no botão
        let index = listaPJson.indexOf(reserva);
        selectedindex = index;
        reservaSelecionada = listaPJson[index];
        //console.log(reservaSelecionada);
        carregarDados(reservaSelecionada);
        
        detalhes.style.display = "block";
      });
  
      // Insere o botão na célula "Detalhes"
      celulaDetalhes.appendChild(detalhesButton);
    });


    let btnaceitar = document.getElementById("popaceitarpedido");
    btnaceitar.addEventListener("click", function() {

      
      
      console.log(selectedindex)

      let userSession = sessionStorage.getItem("id");
      let userL = localStorage.getItem(userSession);
      let dataL = JSON.parse(userL);
      let pistaRespons = dataL.responsavel;


      let dataDp = document.getElementById("dataD").value;
      let horaDp = document.getElementById("horaD").value;
      let pistaDp = document.getElementById("pistaD").value;
      let planoDp = document.getElementById("planoD").value;
      let responsavelDp = document.getElementById("responsavelD").value;
      let nomeDp = document.getElementById("nomeD").value;
      //let estadoDp = document.getElementById("estadoD").value;
      //let pessoasDp = document.getElementById("pessoasD").value;

      let utili = localStorage.getItem(reservaSelecionada.email);
      let datlUti = JSON.parse(utili);


      let reserva={
        dia: dataDp,
        hora: horaDp,
        email: reservaSelecionada.email,
        pista: pistaDp,
        pacote: planoDp,
        estado: 'aceite',
        n_pessoas: 0,
        responsavel: responsavelDp,
        nome: nomeDp,
      };

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
    
      if(pistaRespons == "Laguna Seca"){
        let listaP = localStorage.getItem("pista_Laguna");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
        localStorage.setItem("pista_Laguna", JSON.stringify(listaPJson));
        if (datlUti && Array.isArray(datlUti.reservas)) {
          const reservasDoUtilizador = datlUti.reservas;
      
          for (let i = 0; i < reservasDoUtilizador.length; i++) {
            const reservaUtilizador = reservasDoUtilizador[i];
            if (
              reservaUtilizador.pista === pistaDp &&
              reservaUtilizador.hora === horaDp &&
              reservaUtilizador.pacote === planoDp &&
              reservaUtilizador.dia === dataDp
            ) {
              // Atualize os detalhes da reserva encontrada com os novos valores
              reservasDoUtilizador[i] = reserva;
              break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
            }
          }
      
          // Atualize os detalhes do utilizador no localStorage
          localStorage.setItem(reservaSelecionada.email, JSON.stringify(datlUti));
          location.reload();
        } 
        
    
      }else if(pistaRespons == "Spa-Francorshamps"){
        let listaP = localStorage.getItem("pista_spa");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
        localStorage.setItem("pista_spa", JSON.stringify(listaPJson));
        if (datlUti && Array.isArray(datlUti.reservas)) {
          const reservasDoUtilizador = datlUti.reservas;
      
          for (let i = 0; i < reservasDoUtilizador.length; i++) {
            const reservaUtilizador = reservasDoUtilizador[i];
            if (
              reservaUtilizador.pista === pistaDp &&
              reservaUtilizador.hora === horaDp &&
              reservaUtilizador.pacote === planoDp &&
              reservaUtilizador.dia === dataDp
            ) {
              // Atualize os detalhes da reserva encontrada com os novos valores
              reservasDoUtilizador[i] = reserva;
              break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
            }
          }
      
          // Atualize os detalhes do utilizador no localStorage
          localStorage.setItem(reservaSelecionada.email, JSON.stringify(datlUti));
          location.reload();

        } 
    
      }else if(pistaRespons == "Goodwood"){
        let listaP = localStorage.getItem("pista_GoodWood");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
        localStorage.setItem("pista_GoodWood", JSON.stringify(listaPJson));
        if (datlUti && Array.isArray(datlUti.reservas)) {
          const reservasDoUtilizador = datlUti.reservas;
      
          for (let i = 0; i < reservasDoUtilizador.length; i++) {
            const reservaUtilizador = reservasDoUtilizador[i];
            if (
              reservaUtilizador.pista === pistaDp &&
              reservaUtilizador.hora === horaDp &&
              reservaUtilizador.pacote === planoDp &&
              reservaUtilizador.dia === dataDp
            ) {
              // Atualize os detalhes da reserva encontrada com os novos valores
              reservasDoUtilizador[i] = reserva;
              break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
            }
          }
      
          // Atualize os detalhes do utilizador no localStorage
          localStorage.setItem(reservaSelecionada.email, JSON.stringify(datlUti));
          location.reload();

        } 
    
      }else if(pistaRespons == "Autopolis"){
        let listaP = localStorage.getItem("pista_Autopolis");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
        localStorage.setItem("pista_Autopolis", JSON.stringify(listaPJson));
        if (datlUti && Array.isArray(datlUti.reservas)) {
          const reservasDoUtilizador = datlUti.reservas;
      
          for (let i = 0; i < reservasDoUtilizador.length; i++) {
            const reservaUtilizador = reservasDoUtilizador[i];
            if (
              reservaUtilizador.pista === pistaDp &&
              reservaUtilizador.hora === horaDp &&
              reservaUtilizador.pacote === planoDp &&
              reservaUtilizador.dia === dataDp
            ) {
              // Atualize os detalhes da reserva encontrada com os novos valores
              reservasDoUtilizador[i] = reserva;
              break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
            }
          }
      
          // Atualize os detalhes do utilizador no localStorage
          localStorage.setItem(reservaSelecionada.email, JSON.stringify(datlUti));
          location.reload();

        } 
    
      }else if(pistaRespons == "Fuji Speedway"){
        let listaP = localStorage.getItem("pista_Fuji");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
        localStorage.setItem("pista_Fuji", JSON.stringify(listaPJson));
        if (datlUti && Array.isArray(datlUti.reservas)) {
          const reservasDoUtilizador = datlUti.reservas;
      
          for (let i = 0; i < reservasDoUtilizador.length; i++) {
            const reservaUtilizador = reservasDoUtilizador[i];
            if (
              reservaUtilizador.pista === pistaDp &&
              reservaUtilizador.hora === horaDp &&
              reservaUtilizador.pacote === planoDp &&
              reservaUtilizador.dia === dataDp
            ) {
              // Atualize os detalhes da reserva encontrada com os novos valores
              reservasDoUtilizador[i] = reserva;
              break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
            }
          }
      
          // Atualize os detalhes do utilizador no localStorage
          localStorage.setItem(reservaSelecionada.email, JSON.stringify(datlUti));
          location.reload();

        } 
    
      }else if(pistaRespons == "Red Bull Ring"){
        let listaP = localStorage.getItem("pista_RedBull");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        //console.log("verificar")
        //console.log(listaPJson[selectedindex])
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
        localStorage.setItem("pista_RedBull", JSON.stringify(listaPJson));

        if (datlUti && Array.isArray(datlUti.reservas)) {
          const reservasDoUtilizador = datlUti.reservas;
      
          for (let i = 0; i < reservasDoUtilizador.length; i++) {
            const reservaUtilizador = reservasDoUtilizador[i];
            if (
              reservaUtilizador.pista === pistaDp &&
              reservaUtilizador.hora === horaDp &&
              reservaUtilizador.pacote === planoDp &&
              reservaUtilizador.dia === dataDp
            ) {
              // Atualize os detalhes da reserva encontrada com os novos valores
              reservasDoUtilizador[i] = reserva;
              break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
            }
          }
      
          // Atualize os detalhes do utilizador no localStorage
          localStorage.setItem(reservaSelecionada.email, JSON.stringify(datlUti));
          location.reload();

        }    
    
      }
      
    });


    let btnrecusar = document.getElementById("poprecusarpedido");
    btnrecusar.addEventListener("click", function() {

      console.log(selectedindex)

      let userSession = sessionStorage.getItem("id");
      let userL = localStorage.getItem(userSession);
      let dataL = JSON.parse(userL);
      let pistaRespons = dataL.responsavel;


      let dataDp = document.getElementById("dataD").value;
      let horaDp = document.getElementById("horaD").value;
      let pistaDp = document.getElementById("pistaD").value;
      let planoDp = document.getElementById("planoD").value;
      //let responsavelDp = document.getElementById("responsavelD").value;
      let nomeDp = document.getElementById("nomeD").value;
      //let estadoDp = document.getElementById("estadoD").value;
      //let pessoasDp = document.getElementById("pessoasD").value;

      let utili = localStorage.getItem(reservaSelecionada.email);
      let datlUti = JSON.parse(utili);


      let reserva={
        dia: dataDp,
        hora: horaDp,
        email: reservaSelecionada.email,
        pista: pistaDp,
        pacote: planoDp,
        estado: 'recusado',
        n_pessoas: 0,
        responsavel: "não atribuido",
        nome: nomeDp,
      };

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
    
      if(pistaRespons == "Laguna Seca"){
        let listaP = localStorage.getItem("pista_Laguna");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
        localStorage.setItem("pista_Laguna", JSON.stringify(listaPJson));
        if (datlUti && Array.isArray(datlUti.reservas)) {
          const reservasDoUtilizador = datlUti.reservas;
      
          for (let i = 0; i < reservasDoUtilizador.length; i++) {
            const reservaUtilizador = reservasDoUtilizador[i];
            if (
              reservaUtilizador.pista === pistaDp &&
              reservaUtilizador.hora === horaDp &&
              reservaUtilizador.pacote === planoDp &&
              reservaUtilizador.dia === dataDp
            ) {
              // Atualize os detalhes da reserva encontrada com os novos valores
              reservasDoUtilizador[i] = reserva;
              break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
            }
          }
      
          // Atualize os detalhes do utilizador no localStorage
          localStorage.setItem(reservaSelecionada.email, JSON.stringify(datlUti));
          location.reload();
        } 
        
    
      }else if(pistaRespons == "Spa-Francorshamps"){
        let listaP = localStorage.getItem("pista_spa");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
        localStorage.setItem("pista_spa", JSON.stringify(listaPJson));
        if (datlUti && Array.isArray(datlUti.reservas)) {
          const reservasDoUtilizador = datlUti.reservas;
      
          for (let i = 0; i < reservasDoUtilizador.length; i++) {
            const reservaUtilizador = reservasDoUtilizador[i];
            if (
              reservaUtilizador.pista === pistaDp &&
              reservaUtilizador.hora === horaDp &&
              reservaUtilizador.pacote === planoDp &&
              reservaUtilizador.dia === dataDp
            ) {
              // Atualize os detalhes da reserva encontrada com os novos valores
              reservasDoUtilizador[i] = reserva;
              break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
            }
          }
      
          // Atualize os detalhes do utilizador no localStorage
          localStorage.setItem(reservaSelecionada.email, JSON.stringify(datlUti));
          location.reload();

        } 
    
      }else if(pistaRespons == "Goodwood"){
        let listaP = localStorage.getItem("pista_GoodWood");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
        localStorage.setItem("pista_GoodWood", JSON.stringify(listaPJson));
        if (datlUti && Array.isArray(datlUti.reservas)) {
          const reservasDoUtilizador = datlUti.reservas;
      
          for (let i = 0; i < reservasDoUtilizador.length; i++) {
            const reservaUtilizador = reservasDoUtilizador[i];
            if (
              reservaUtilizador.pista === pistaDp &&
              reservaUtilizador.hora === horaDp &&
              reservaUtilizador.pacote === planoDp &&
              reservaUtilizador.dia === dataDp
            ) {
              // Atualize os detalhes da reserva encontrada com os novos valores
              reservasDoUtilizador[i] = reserva;
              break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
            }
          }
      
          // Atualize os detalhes do utilizador no localStorage
          localStorage.setItem(reservaSelecionada.email, JSON.stringify(datlUti));
          location.reload();

        } 
    
      }else if(pistaRespons == "Autopolis"){
        let listaP = localStorage.getItem("pista_Autopolis");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
        localStorage.setItem("pista_Autopolis", JSON.stringify(listaPJson));
        if (datlUti && Array.isArray(datlUti.reservas)) {
          const reservasDoUtilizador = datlUti.reservas;
      
          for (let i = 0; i < reservasDoUtilizador.length; i++) {
            const reservaUtilizador = reservasDoUtilizador[i];
            if (
              reservaUtilizador.pista === pistaDp &&
              reservaUtilizador.hora === horaDp &&
              reservaUtilizador.pacote === planoDp &&
              reservaUtilizador.dia === dataDp
            ) {
              // Atualize os detalhes da reserva encontrada com os novos valores
              reservasDoUtilizador[i] = reserva;
              break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
            }
          }
      
          // Atualize os detalhes do utilizador no localStorage
          localStorage.setItem(reservaSelecionada.email, JSON.stringify(datlUti));
          location.reload();

        } 
    
      }else if(pistaRespons == "Fuji Speedway"){
        let listaP = localStorage.getItem("pista_Fuji");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
        localStorage.setItem("pista_Fuji", JSON.stringify(listaPJson));
        if (datlUti && Array.isArray(datlUti.reservas)) {
          const reservasDoUtilizador = datlUti.reservas;
      
          for (let i = 0; i < reservasDoUtilizador.length; i++) {
            const reservaUtilizador = reservasDoUtilizador[i];
            if (
              reservaUtilizador.pista === pistaDp &&
              reservaUtilizador.hora === horaDp &&
              reservaUtilizador.pacote === planoDp &&
              reservaUtilizador.dia === dataDp
            ) {
              // Atualize os detalhes da reserva encontrada com os novos valores
              reservasDoUtilizador[i] = reserva;
              break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
            }
          }
      
          // Atualize os detalhes do utilizador no localStorage
          localStorage.setItem(reservaSelecionada.email, JSON.stringify(datlUti));
          location.reload();

        } 
    
      }else if(pistaRespons == "Red Bull Ring"){
        let listaP = localStorage.getItem("pista_RedBull");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        //console.log("verificar")
        //console.log(listaPJson[selectedindex])
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
        localStorage.setItem("pista_RedBull", JSON.stringify(listaPJson));

        if (datlUti && Array.isArray(datlUti.reservas)) {
          const reservasDoUtilizador = datlUti.reservas;
      
          for (let i = 0; i < reservasDoUtilizador.length; i++) {
            const reservaUtilizador = reservasDoUtilizador[i];
            if (
              reservaUtilizador.pista === pistaDp &&
              reservaUtilizador.hora === horaDp &&
              reservaUtilizador.pacote === planoDp &&
              reservaUtilizador.dia === dataDp
            ) {
              // Atualize os detalhes da reserva encontrada com os novos valores
              reservasDoUtilizador[i] = reserva;
              break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
            }
          }
      
          // Atualize os detalhes do utilizador no localStorage
          localStorage.setItem(reservaSelecionada.email, JSON.stringify(datlUti));
          location.reload();

        }    
    
      }
      
    });


    let btnconcluir = document.getElementById("popconcluirpedido");
    btnconcluir.addEventListener("click", function() {
      console.log(selectedindex)

      let userSession = sessionStorage.getItem("id");
      let userL = localStorage.getItem(userSession);
      let dataL = JSON.parse(userL);
      let pistaRespons = dataL.responsavel;


      let dataDp = document.getElementById("dataD").value;
      let horaDp = document.getElementById("horaD").value;
      let pistaDp = document.getElementById("pistaD").value;
      let planoDp = document.getElementById("planoD").value;
      let responsavelDp = document.getElementById("responsavelD").value;
      let nomeDp = document.getElementById("nomeD").value;
      let estadoDp = document.getElementById("estadoD").value;
      //let pessoasDp = document.getElementById("pessoasD").value;

      let utili = localStorage.getItem(reservaSelecionada.email);
      let datlUti = JSON.parse(utili);


      let reserva={
        dia: dataDp,
        hora: horaDp,
        email: reservaSelecionada.email,
        pista: pistaDp,
        pacote: planoDp,
        estado: 'concluido',
        n_pessoas: 0,
        responsavel: responsavelDp,
        nome: nomeDp,
      };

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
    
      if(pistaRespons == "Laguna Seca"){
        let listaP = localStorage.getItem("pista_Laguna");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }


  
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
      alertswal(reserva.pista,reserva,selectedindex); 

        
    
      }else if(pistaRespons == "Spa-Francorshamps"){
        let listaP = localStorage.getItem("pista_spa");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
      alertswal(reserva.pista,reserva,selectedindex); 

    
      }else if(pistaRespons == "Goodwood"){
        let listaP = localStorage.getItem("pista_GoodWood");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
      alertswal(reserva.pista,reserva,selectedindex); 

    
      }else if(pistaRespons == "Autopolis"){
        let listaP = localStorage.getItem("pista_Autopolis");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
      alertswal(reserva.pista,reserva,selectedindex); 

    
      }else if(pistaRespons == "Fuji Speedway"){
        let listaP = localStorage.getItem("pista_Fuji");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
      alertswal(reserva.pista,reserva,selectedindex); 
 
    
      }else if(pistaRespons == "Red Bull Ring"){
        let listaP = localStorage.getItem("pista_RedBull");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }   
      
        //console.log("verificar")
        //console.log(listaPJson[selectedindex])
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }

      //console.log(reserva.pista)
       alertswal(reserva.pista,reserva,selectedindex); 
    
      }
      
    });

  }
}

function concluirEstadoPessoas(linhaReserva,pessoas,selectedindex){
  /*console.log(linhaReserva);
  console.log(pessoas);
  console.log(selectedindex);*/
  //tenho o user
  let email = linhaReserva.email
  let userReserv = localStorage.getItem(email);
  let dataLReser = JSON.parse(userReserv);
  //Get lista pista
  let userSession = sessionStorage.getItem("id");
  let userL = localStorage.getItem(userSession);
  let dataL = JSON.parse(userL);
  let pistaRespo = dataL.responsavel;
  //Dados a levarem update
  let reserva={
    dia: linhaReserva.dia,
    hora: linhaReserva.hora,
    email: linhaReserva.email,
    pista: linhaReserva.pista,
    pacote: linhaReserva.pacote,
    estado: 'concluido',
    n_pessoas: pessoas,
    responsavel: linhaReserva.responsavel,
    nome: linhaReserva.nome,
  };

  if(pistaRespo == "Laguna Seca"){
    let listaP = localStorage.getItem("pista_Laguna");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }
        
        localStorage.setItem("pista_Laguna", JSON.stringify(listaPJson));

        if (dataLReser && Array.isArray(dataLReser.reservas)) {
          const reservasDoUtilizador = dataLReser.reservas;
      
          for (let i = 0; i < reservasDoUtilizador.length; i++) {
            const reservaUtilizador = reservasDoUtilizador[i];
            if (
              reservaUtilizador.pista === reserva.pista &&
              reservaUtilizador.hora === reserva.hora &&
              reservaUtilizador.pacote === reserva.pacote &&
              reservaUtilizador.dia === reserva.dia
            ) {
              // Atualize os detalhes da reserva encontrada com os novos valores
              reservasDoUtilizador[i] = reserva;
              break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
            }
          }
          //console.log("aqui2 2 :"+JSON.stringify(dataLReser));

          // Atualize os detalhes do utilizador no localStorage
          localStorage.setItem(dataLReser.email, JSON.stringify(dataLReser));
          location.reload();
        }

  }else if(pistaRespo == "Spa-Francorshamps"){
    let listaP = localStorage.getItem("pista_spa");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }

      //console.log("aqui:"+JSON.stringify(reserva));
      localStorage.setItem("pista_spa", JSON.stringify(listaPJson));

      if (dataLReser && Array.isArray(dataLReser.reservas)) {
        const reservasDoUtilizador = dataLReser.reservas;
    
        for (let i = 0; i < reservasDoUtilizador.length; i++) {
          const reservaUtilizador = reservasDoUtilizador[i];
          if (
            reservaUtilizador.pista === reserva.pista &&
            reservaUtilizador.hora === reserva.hora &&
            reservaUtilizador.pacote === reserva.pacote &&
            reservaUtilizador.dia === reserva.dia
          ) {
            // Atualize os detalhes da reserva encontrada com os novos valores
            reservasDoUtilizador[i] = reserva;
            break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
          }
        }
        //console.log("aqui2 2 :"+JSON.stringify(dataLReser));

        // Atualize os detalhes do utilizador no localStorage
        localStorage.setItem(dataLReser.email, JSON.stringify(dataLReser));
        location.reload();
      }

  }else if(pistaRespo == "Goodwood"){
    let listaP = localStorage.getItem("pista_GoodWood");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }

      //console.log("aqui:"+JSON.stringify(reserva));
      localStorage.setItem("pista_GoodWood", JSON.stringify(listaPJson));

      if (dataLReser && Array.isArray(dataLReser.reservas)) {
        const reservasDoUtilizador = dataLReser.reservas;
    
        for (let i = 0; i < reservasDoUtilizador.length; i++) {
          const reservaUtilizador = reservasDoUtilizador[i];
          if (
            reservaUtilizador.pista === reserva.pista &&
            reservaUtilizador.hora === reserva.hora &&
            reservaUtilizador.pacote === reserva.pacote &&
            reservaUtilizador.dia === reserva.dia
          ) {
            // Atualize os detalhes da reserva encontrada com os novos valores
            reservasDoUtilizador[i] = reserva;
            break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
          }
        }
        //console.log("aqui2 2 :"+JSON.stringify(dataLReser));

        // Atualize os detalhes do utilizador no localStorage
        localStorage.setItem(dataLReser.email, JSON.stringify(dataLReser));
        location.reload();
      }
    
  }else if(pistaRespo == "Autopolis"){
    let listaP = localStorage.getItem("pista_Autopolis");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }
        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }

      //console.log("aqui:"+JSON.stringify(reserva));
      localStorage.setItem("pista_Autopolis", JSON.stringify(listaPJson));

      if (dataLReser && Array.isArray(dataLReser.reservas)) {
        const reservasDoUtilizador = dataLReser.reservas;
    
        for (let i = 0; i < reservasDoUtilizador.length; i++) {
          const reservaUtilizador = reservasDoUtilizador[i];
          if (
            reservaUtilizador.pista === reserva.pista &&
            reservaUtilizador.hora === reserva.hora &&
            reservaUtilizador.pacote === reserva.pacote &&
            reservaUtilizador.dia === reserva.dia
          ) {
            // Atualize os detalhes da reserva encontrada com os novos valores
            reservasDoUtilizador[i] = reserva;
            break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
          }
        }
        //console.log("aqui2 2 :"+JSON.stringify(dataLReser));

        // Atualize os detalhes do utilizador no localStorage
        localStorage.setItem(dataLReser.email, JSON.stringify(dataLReser));
        location.reload();
      }
    
  }else if(pistaRespo == "Fuji Speedway"){
    let listaP = localStorage.getItem("pista_Fuji");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }

        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }

      //console.log("aqui:"+JSON.stringify(reserva));
      localStorage.setItem("pista_Fuji", JSON.stringify(listaPJson));

      if (dataLReser && Array.isArray(dataLReser.reservas)) {
        const reservasDoUtilizador = dataLReser.reservas;
    
        for (let i = 0; i < reservasDoUtilizador.length; i++) {
          const reservaUtilizador = reservasDoUtilizador[i];
          if (
            reservaUtilizador.pista === reserva.pista &&
            reservaUtilizador.hora === reserva.hora &&
            reservaUtilizador.pacote === reserva.pacote &&
            reservaUtilizador.dia === reserva.dia
          ) {
            // Atualize os detalhes da reserva encontrada com os novos valores
            reservasDoUtilizador[i] = reserva;
            break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
          }
        }
        //console.log("aqui2 2 :"+JSON.stringify(dataLReser));

        // Atualize os detalhes do utilizador no localStorage
        localStorage.setItem(dataLReser.email, JSON.stringify(dataLReser));
        location.reload();
      }
    
  }else if(pistaRespo == "Red Bull Ring"){
    let listaP = localStorage.getItem("pista_RedBull");
        let listaPJson = listaP ? JSON.parse(listaP) : [];
        if (!Array.isArray(listaPJson)) {
          listaPJson = [];
        }

        if (selectedindex >= 0 && selectedindex < listaPJson.length) {
          // Atualize o item na posição selectedIndex com o novo valor
          listaPJson[selectedindex] = reserva;
      }

      //console.log("aqui:"+JSON.stringify(reserva));
      localStorage.setItem("pista_RedBull", JSON.stringify(listaPJson));
    
  }

        if (dataLReser && Array.isArray(dataLReser.reservas)) {
          const reservasDoUtilizador = dataLReser.reservas;
      
          for (let i = 0; i < reservasDoUtilizador.length; i++) {
            const reservaUtilizador = reservasDoUtilizador[i];
            if (
              reservaUtilizador.pista === reserva.pista &&
              reservaUtilizador.hora === reserva.hora &&
              reservaUtilizador.pacote === reserva.pacote &&
              reservaUtilizador.dia === reserva.dia
            ) {
              // Atualize os detalhes da reserva encontrada com os novos valores
              reservasDoUtilizador[i] = reserva;
              break; // Interrompa o loop, pois a reserva foi encontrada e atualizada
            }
          }
          //console.log("aqui2 2 :"+JSON.stringify(dataLReser));

          // Atualize os detalhes do utilizador no localStorage
          localStorage.setItem(dataLReser.email, JSON.stringify(dataLReser));
          location.reload();
        } 
}



function alertswal(e,g,selectedindex){
  Swal.fire({
    title: 'Quantos materiais foram gastos?',
  input: 'number',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value || value <= 0) {
      return 'Por favor, insira um número válido.';
    }
  },
  preConfirm: (numMateriais) => {
    const inputs = [];
    for (let i = 0; i < numMateriais; i++) {
      const materialInput = `<input type="text" class="swal2-input material-input" placeholder="Material ${i + 1}">`;
      const quantidadeInput = `<input type="number" class="swal2-input quantidade-input" placeholder="Quantidade gasta">`;
      inputs.push(`${materialInput}${quantidadeInput}`);
    }

    const numPessoasInput = `<input type="number" class="swal2-input num-pessoas-input" placeholder="Número de pessoas">`;
    inputs.push(numPessoasInput);

    Swal.fire({
      title: 'Preencha os materiais gastos',
      html: inputs.join('<br>'),
      showCancelButton: true,
      preConfirm: () => {
        const materialInputs = document.getElementsByClassName('material-input');
        const quantidadeInputs = document.getElementsByClassName('quantidade-input');
        const numPessoasInput = document.getElementsByClassName('num-pessoas-input')[0];

        const materiais = {};
        for (let i = 0; i < materialInputs.length; i++) {
          const material = materialInputs[i].value;
          const quantidade = quantidadeInputs[i].value;
          materiais[material] = quantidade;
        }

        // Exibindo a lista de materiais e quantidades
        console.log(materiais);

        // Acessando o número de pessoas
        const numPessoas = numPessoasInput.value;
        console.log('Número de Pessoas:', numPessoas);
            if(e == "access_Laguna_Seca"){
              let listaDados = JSON.parse(localStorage.getItem("dados"));
              let dadosPista = null;
              for (let i = 0; i < listaDados.length; i++) {
                if (listaDados[i].nome === "Laguna Seca") {
                  dadosPista = listaDados[i];
                  break;
                }
              }

              for (const material in materiais) {
                if (materiais.hasOwnProperty(material)) {
                  const quantidadeIntroduzida = parseInt(materiais[material]);
                               
                  // Verificar se o material existe em dadosPista
                  const materialExistente = dadosPista.materiais.find((m) => m.nome === material);
              
                  //console.log("verificação existe: ", materialExistente.quantidade);
                  if (materialExistente != null) {
                    // Subtrair a quantidade introduzida da quantidade existente
                    materialExistente.quantidade -= quantidadeIntroduzida;
                    
                    //console.log(materialExistente.quantidade);
                    const dadosAtualizados = JSON.stringify(listaDados);
                    // console.log(dadosAtualizados);

                    // Armazenar no localStorage
                    localStorage.setItem("dados", dadosAtualizados);
                  }
                }
              }
              concluirEstadoPessoas(g,numPessoas,selectedindex);
            }else if(e == "access_Spa_Francorshamps"){
              let listaDados = JSON.parse(localStorage.getItem("dados"));
              let dadosPista = null;
              for (let i = 0; i < listaDados.length; i++) {
                if (listaDados[i].nome === "Spa-Francorshamps") {
                  dadosPista = listaDados[i];
                  break;
                }
                
              }

              for (const material in materiais) {
                if (materiais.hasOwnProperty(material)) {
                  const quantidadeIntroduzida = parseInt(materiais[material]);
                               
                  // Verificar se o material existe em dadosPista
                  const materialExistente = dadosPista.materiais.find((m) => m.nome === material);
              
                  //console.log("verificação existe: ", materialExistente.quantidade);
                  if (materialExistente != null) {
                    // Subtrair a quantidade introduzida da quantidade existente
                    materialExistente.quantidade -= quantidadeIntroduzida;
                    
                    //console.log(materialExistente.quantidade);
                    const dadosAtualizados = JSON.stringify(listaDados);
                    // console.log(dadosAtualizados);

                    // Armazenar no localStorage
                    localStorage.setItem("dados", dadosAtualizados);
                  }
                }
              }
              concluirEstadoPessoas(g,numPessoas,selectedindex);
            }else if(e == "access_Goodwood"){
              let listaDados = JSON.parse(localStorage.getItem("dados"));
              let dadosPista = null;
              for (let i = 0; i < listaDados.length; i++) {
                if (listaDados[i].nome === "Goodwood") {
                  dadosPista = listaDados[i];
                  break;
                }
              }

              for (const material in materiais) {
                if (materiais.hasOwnProperty(material)) {
                  const quantidadeIntroduzida = parseInt(materiais[material]);
                               
                  // Verificar se o material existe em dadosPista
                  const materialExistente = dadosPista.materiais.find((m) => m.nome === material);
              
                  //console.log("verificação existe: ", materialExistente.quantidade);
                  if (materialExistente != null) {
                    // Subtrair a quantidade introduzida da quantidade existente
                    materialExistente.quantidade -= quantidadeIntroduzida;
                    
                    //console.log(materialExistente.quantidade);
                    const dadosAtualizados = JSON.stringify(listaDados);
                    // console.log(dadosAtualizados);

                    // Armazenar no localStorage
                    localStorage.setItem("dados", dadosAtualizados);
                  }
                }
              }
              concluirEstadoPessoas(g,numPessoas,selectedindex);
            }else if(e == "access_Autopolis"){
              let listaDados = JSON.parse(localStorage.getItem("dados"));
              let dadosPista = null;
              for (let i = 0; i < listaDados.length; i++) {
                if (listaDados[i].nome === "Autopolis") {
                  dadosPista = listaDados[i];
                  break;
                }
              }

              for (const material in materiais) {
                if (materiais.hasOwnProperty(material)) {
                  const quantidadeIntroduzida = parseInt(materiais[material]);
                               
                  // Verificar se o material existe em dadosPista
                  const materialExistente = dadosPista.materiais.find((m) => m.nome === material);
              
                  //console.log("verificação existe: ", materialExistente.quantidade);
                  if (materialExistente != null) {
                    // Subtrair a quantidade introduzida da quantidade existente
                    materialExistente.quantidade -= quantidadeIntroduzida;
                    
                    //console.log(materialExistente.quantidade);
                    const dadosAtualizados = JSON.stringify(listaDados);
                    // console.log(dadosAtualizados);

                    // Armazenar no localStorage
                    localStorage.setItem("dados", dadosAtualizados);
                  }
                }
              }
              concluirEstadoPessoas(g,numPessoas,selectedindex);
            }else if(e == "access_Fuji_Speedway"){
              let listaDados = JSON.parse(localStorage.getItem("dados"));
              let dadosPista = null;
              for (let i = 0; i < listaDados.length; i++) {
                if (listaDados[i].nome === "Fuji Speedway") {
                  dadosPista = listaDados[i];
                  break;
                }
              }

              for (const material in materiais) {
                if (materiais.hasOwnProperty(material)) {
                  const quantidadeIntroduzida = parseInt(materiais[material]);
                               
                  // Verificar se o material existe em dadosPista
                  const materialExistente = dadosPista.materiais.find((m) => m.nome === material);
              
                  //console.log("verificação existe: ", materialExistente.quantidade);
                  if (materialExistente != null) {
                    // Subtrair a quantidade introduzida da quantidade existente
                    materialExistente.quantidade -= quantidadeIntroduzida;
                    
                    //console.log(materialExistente.quantidade);
                    const dadosAtualizados = JSON.stringify(listaDados);
                    // console.log(dadosAtualizados);

                    // Armazenar no localStorage
                    localStorage.setItem("dados", dadosAtualizados);
                  }
                }
              }
              concluirEstadoPessoas(g,numPessoas,selectedindex);
            }else if(e == "access_Red_Bull"){
              let listaDados = JSON.parse(localStorage.getItem("dados"));
              let dadosPista = null;
              for (let i = 0; i < listaDados.length; i++) {
                if (listaDados[i].nome === "Red Bull Ring") {
                  dadosPista = listaDados[i];
                  break;
                }
              }

              for (const material in materiais) {
                if (materiais.hasOwnProperty(material)) {
                  const quantidadeIntroduzida = parseInt(materiais[material]);
                               
                  // Verificar se o material existe em dadosPista
                  const materialExistente = dadosPista.materiais.find((m) => m.nome === material);
              
                  //console.log("verificação existe: ", materialExistente.quantidade);
                  if (materialExistente != null) {
                    // Subtrair a quantidade introduzida da quantidade existente
                    materialExistente.quantidade -= quantidadeIntroduzida;
                    
                    //console.log(materialExistente.quantidade);
                    const dadosAtualizados = JSON.stringify(listaDados);
                    // console.log(dadosAtualizados);

                    // Armazenar no localStorage
                    localStorage.setItem("dados", dadosAtualizados);
                  }
                }
              }
          }  concluirEstadoPessoas(g,numPessoas,selectedindex);
        //console.log('Número de Pessoas:', numPessoas);
    }});
    }
  });

}

//DIOGO - Sempre que carrega a pagina:
document.addEventListener("DOMContentLoaded", loadTable);

function filtrar() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("txtBusca");
  filter = input.value.trim(); // Remova os espaços em branco no início e no final da entrada
  table = document.getElementById("mytable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      txtValue = td.textContent || td.innerText;
      // Verifique se o texto contém a data filtrada
      if (txtValue.includes(filter)) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


/*document.addEventListener('DOMContentLoaded', function() {
  carregarDados();
});*/


function carregarDados(reserva) {
  console.log(reserva.dia);

  document.getElementById("dataD").value = reserva.dia;
  document.getElementById("horaD").value = reserva.hora;
  document.getElementById("pistaD").value = reserva.pista;
  document.getElementById("planoD").value = reserva.pacote;
  document.getElementById("responsavelD").value = reserva.responsavel;
  document.getElementById("nomeD").value = reserva.nome;
  document.getElementById("estadoD").value = reserva.estado;
  //document.getElementById("pessoasD").value = reserva.n_pessoas;

  let responsavelDropdown = document.getElementById("responsavelD");
  responsavelDropdown.innerHTML = ""; // Limpa as opções existentes

  // Obtém a lista de colaboradores da pista
  let colaboradores = colaboradoresPorPista(reserva.pista);

  // Verifica se a reserva já possui um responsável atribuído
  if (reserva.responsavel === "") {
    // Cria uma opção vazia para permitir a seleção
    let option = document.createElement("option");
    option.value = ""; // Valor vazio
    option.text = "-- Selecione --";
    responsavelDropdown.add(option);

    // Cria as opções do dropdown com os colaboradores
    colaboradores.forEach(function(colaborador) {
      let option = document.createElement("option");
      option.value = colaborador.nome;
      option.text = colaborador.nome;
      responsavelDropdown.add(option);
    });

    // Define o valor selecionado no dropdown como vazio
    responsavelDropdown.value = "";
    responsavelDropdown.disabled = false; // Habilita o dropdown
  } else {
    // Cria uma opção com o responsável da reserva (apenas exibição)
    let option = document.createElement("option");
    option.value = reserva.responsavel;
    option.text = reserva.responsavel;
    option.selected = true; // Seleciona a opção
    responsavelDropdown.add(option);

    responsavelDropdown.disabled = true; // Desabilita o dropdown
  }
 
}

function colaboradoresPorPista(pista) {
  // Obtém a lista de colaboradores de acordo com a pista
  let colaboradores = JSON.parse(localStorage.getItem("colaborador"));
  console.log(colaboradores)
  console.log(pista)
  let valorComparacao="";

  if(pista == "access_Laguna_Seca"){
    valorComparacao= "Laguna Seca";

  }else if(pista == "access_Spa_Francorshamps"){
    valorComparacao= "Spa-Francorshamps";

  }else if(pista  == "access_Goodwood"){
    valorComparacao= "Goodwood";

  }else if(pista  == "access_Autopolis"){
    valorComparacao= "Autopolis";

  }else if(pista  == "access_Fuji_Speedway"){
    valorComparacao= "Fuji Speedway";

  }else if(pista  == "access_Red_Bull"){
    valorComparacao= "Red Bull Ring";

  }

  // Filtra os colaboradores pela pista
  let colaboradoresFiltrados = colaboradores.filter(function(colaborador) {
    return colaborador.responsavel === valorComparacao;
  });

  return colaboradoresFiltrados;
}

