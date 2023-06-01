// Get the modal
var modal = document.getElementById("colaboradores");

function preencherDropdownPistas() {
  // Recuperar os dados do localStorage
  console.log("fffffff");
  const pistas = JSON.parse(localStorage.getItem('dados'));

  // Obter o elemento select
  const selectPista = document.getElementById('pistaCol');

  // Limpar as opções existentes
  selectPista.innerHTML = '';

  // Criar as novas opções do dropdown com base nos dados do localStorage
  if (pistas) {
    for (let i = 0; i < pistas.length; i++) {
      const option = document.createElement('option');
      option.value = pistas[i].nome;
      option.textContent = pistas[i].nome;
      selectPista.appendChild(option);
    }
  }
}

// Get the button that opens the modal
var btn = document.getElementById("adicCol");

// Get the <span> element that closes the modal
var span = document.getElementById("fecharCol");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  preencherDropdownPistas();
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function salvarDadosColaboradores() {
  // Obtém os valores dos campos de entrada
  let nome = document.getElementById("nomeCol").value;
  let responsavel = document.getElementById("pistaCol").value;
  let salario = document.getElementById("salario").value;
  let telemovel = document.getElementById("telemovel").value;
  let email = document.getElementById("emailCol").value;

  // Cria um objeto com os dados
  let colaborador = {
    nome: nome,
    responsavel: responsavel,
    salario: salario,
    telemovel: telemovel,
    email: email
  };

  let admin_pista = {
    nome: nome,
    responsavel: responsavel,
    password: "admin",
    tipo: "admin_pista",
    email: email
  };

  let json = JSON.stringify(admin_pista);
  localStorage.setItem(email,json);
  console.log("user added");

  // Obtém a lista de dados salvos no LocalStorage
  let listaCol = JSON.parse(localStorage.getItem("colaborador"));

  // Se a lista ainda não existir, cria uma nova lista vazia
  if (!listaCol) {
    listaCol = [];
  }

  // Adiciona o novo objeto à lista
  listaCol.push(colaborador);

  // Salva a lista atualizada no LocalStorage
  localStorage.setItem("colaborador", JSON.stringify(listaCol));
  let listapistas = JSON.parse(localStorage.getItem("dados"));

  listapistas.forEach(function(pista) {
    if (pista.nome === responsavel) {
      pista.responsavel.push(nome);
      localStorage.setItem("dados", JSON.stringify(listapistas));

      // O valor foi encontrado na pista atual
      
      // Faça aqui o que precisa ser feito com a pista
    }
  });





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
  document.getElementById("nomeCol").value = "";
  document.getElementById("pistaCol").value = "";
  document.getElementById("salario").value = "";
  document.getElementById("telemovel").value = "";
  document.getElementById("emailCol").value = "";
  
      // Fecha o modal
      modal.style.display = "none";
}

//DIOGO - CRIEI
function updateTable() {
  // Obtém a referência para a tabela
  let tabela = document.getElementById("mytable");

  // Verifica se a tabela já possui cabeçalhos
  let hasHeaders = tabela.querySelector("thead tr");

  // Se não houver cabeçalhos, adiciona-os
  if (!hasHeaders) {
    let thead = tabela.createTHead();
    let row = thead.insertRow();
    let headers = ["Nome", "Pista Responsável", "Salário", "Telemóvel", "Email"];

    // Cria as células dos cabeçalhos
    headers.forEach(function(headerText) {
      let th = document.createElement("th");
      let text = document.createTextNode(headerText);
      th.appendChild(text);
      row.appendChild(th);
    });
  }

  // Limpa o conteúdo existente do corpo da tabela
  let tbody = document.getElementById("tbodyColaboradores");
  tbody.innerHTML = "";

  // Obtém a lista de dados do LocalStorage
  let listaCol = JSON.parse(localStorage.getItem("colaborador"));

  // Se a lista existir, atualiza o corpo da tabela
  if (listaCol) {
    // Cria as linhas da tabela com os dados salvos
    listaCol.forEach(function(colaborador) {
      // Cria uma nova linha na tabela
      let linha = tbody.insertRow();

      // Insere as células na linha
      let celulaNome = linha.insertCell();
      let celulaPistaResponsavel = linha.insertCell();
      let celulaSalario = linha.insertCell();
      let celulaTelemovel = linha.insertCell();
      let celulaEmail = linha.insertCell();

      // Preenche as células com os valores dos dados
      celulaNome.textContent = colaborador.nome;
      celulaPistaResponsavel.textContent = colaborador.responsavel;
      celulaSalario.textContent = colaborador.salario;
      celulaTelemovel.textContent = colaborador.telemovel;
      celulaEmail.textContent = colaborador.email;
    });
  }
}

//DIOGO - CRIEI
function loadTable() {
  // Obtém a referência para a tabela
  let tabela = document.getElementById("mytable");

  // Verifica se a tabela já possui cabeçalhos
  let hasHeaders = tabela.querySelector("thead tr");

  // Se não houver cabeçalhos, adiciona-os
  if (!hasHeaders) {
    let thead = tabela.createTHead();
    let row = thead.insertRow();
    let headers = ["Nome", "Pista Responsável", "Salário", "Telemóvel", "Email"];

    // Cria as células dos cabeçalhos
    headers.forEach(function(headerText) {
      let th = document.createElement("th");
      let text = document.createTextNode(headerText);
      th.appendChild(text);
      row.appendChild(th);
    });
  }

  // Limpa o conteúdo existente do corpo da tabela
  let tbody = document.getElementById("tbodyColaboradores");
  tbody.innerHTML = "";

  // Obtém a lista de dados do LocalStorage
  let listaCol = JSON.parse(localStorage.getItem("colaborador"));

  // Se a lista existir, atualiza o corpo da tabela
  if (listaCol) {
    // Cria as linhas da tabela com os dados salvos
    listaCol.forEach(function(colaborador) {
      // Cria uma nova linha na tabela
      let linha = tbody.insertRow();

      let celulaNome = linha.insertCell();
      let celulaPistaResponsavel = linha.insertCell();
      let celulaSalario = linha.insertCell();
      let celulaTelemovel = linha.insertCell();
      let celulaEmail = linha.insertCell();

      // Preenche as células com os valores dos dados
      celulaNome.textContent = colaborador.nome;
      celulaPistaResponsavel.textContent = colaborador.responsavel;
      celulaSalario.textContent = colaborador.salario;
      celulaTelemovel.textContent = colaborador.telemovel;
      celulaEmail.textContent = colaborador.email;
    });
  }
}
//DIOGO - Sempre que carrega a pagina:
document.addEventListener("DOMContentLoaded", loadTable);


function carregarTabela() {
  // Adiciona cada linha na tabela
  listaCol.forEach(function (colaborador) {
    let tr = document.createElement("tr");

    let tdNome = document.createElement("td");
    tdNome.textContent = colaborador.nome;

    let tdresponsavel = document.createElement("td");
    tdresponsavel.textContent = colaborador.responsavel;

    let tdsalario = document.createElement("td");
    tdsalario.textContent = colaborador.salario;

    let tdtelemovel = document.createElement("td");
    tdtelemovel.textContent = colaborador.telemovel;

    let tdemail = document.createElement("td");
    tdemail.textContent = colaborador.email;

    tr.appendChild(tdNome);
    tr.appendChild(tdresponsavel);
    tr.appendChild(tdsalario);
    tr.appendChild(tdtelemovel);
    tr.appendChild(tdemail);
    tbody.appendChild(tr);
  });
}

function filtrar() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("txtBusca");
  filter = input.value.toUpperCase();
  table = document.getElementById("mytable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function logOut(e){
  sessionStorage.clear();
}
