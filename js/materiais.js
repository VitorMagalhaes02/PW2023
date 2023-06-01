const tableBody = document.getElementById('table-body');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');

// Get the modal
var modal = document.getElementById("mymodal");
var modalmat = document.getElementById("modalMateriais");

// Função para preencher as opções do dropdown com base nos dados do localStorage
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
var btn = document.getElementById("mybtn");
var btnmat = document.getElementById("mat");

// Get the <span> element that closes the modal
var span = document.getElementById("fechar");
var spanmat = document.getElementById("fecha");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

btnmat.onclick = function () {
  preencherDropdownPistas();
  modalmat.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

spanmat.onclick = function () {
  modalmat.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function salvarDadospistas() {
  // Obtém os valores dos campos de entrada
  let nome = document.getElementById("nome").value;
  //let responsavel = document.getElementById("responsavel").value;
  //let preco = document.getElementById("preco").value;
  //let problemas = document.getElementById("problemas").value;
  //let materiais = document.getElementById("materiais").value;
  let morada = document.getElementById("morada").value;

  // Cria um objeto com os dados
  let dados = {
    nome: nome,
    responsavel: [],
    materiais: [],
    morada: morada
  };

  // Obtém a lista de dados salvos no LocalStorage
  let listaDados = JSON.parse(localStorage.getItem("dados"));

  // Se a lista ainda não existir, cria uma nova lista vazia
  if (!listaDados) {
    listaDados = [];
  }

  // Adiciona o novo objeto à lista
  listaDados.push(dados);

  // Salva a lista atualizada no LocalStorage
  localStorage.setItem("dados", JSON.stringify(listaDados));

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
    location.reload();
    updateTable();

      // Limpa os campos de entrada
  document.getElementById("nome").value = "";
  //document.getElementById("responsavel").value = "";
  //document.getElementById("preco").value = "";
  //document.getElementById("problemas").value = "";
  //document.getElementById("materiais").value = "";
  document.getElementById("morada").value = "";
  
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
    let headers = ["Nome", "Morada", "Responsável/Responsáveis", "Materiais", "Emergência"];

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
  let listaDados = JSON.parse(localStorage.getItem("dados"));

  // Se a lista existir, atualiza o corpo da tabela
  if (listaDados) {
    // Cria as linhas da tabela com os dados salvos
    listaDados.forEach(function(dados) {
      // Cria uma nova linha na tabela
      let linha = tbody.insertRow();

      // Insere as células na linha
      let celulaNome = linha.insertCell();
      let celulaResponsavel = linha.insertCell();
      let celulaMorada = linha.insertCell();
      let celulaMateriais = linha.insertCell();
      let celulaDetalhes = linha.insertCell();

      // Preenche as células com os valores dos dados
      celulaNome.textContent = dados.nome;
      celulaMorada.textContent = dados.morada;
      celulaResponsavel.textContent = dados.responsavel;
      celulaMateriais.textContent = dados.materiais;
      var linkTelefone = document.createElement("a");
      linkTelefone.href = "tel:+112";
      linkTelefone.textContent = "+112";
      celulaDetalhes.appendChild(linkTelefone);

      dados.materiais.forEach(material => {
        const equipamento = material.nome;
        const quantidade = material.quantidade;
        
        const equipamentoQuantidade = `${equipamento}: ${quantidade}`;
        
        const item = document.createElement('p');
        item.textContent = equipamentoQuantidade;
        
        celulaMateriais.appendChild(item);
      });

      
    });
  }
}

function atualizarTabela() {

  // Obtém a referência da tabela de dados
  let tabela = document.getElementById("mytable");
  let tbody = tabela.querySelector("table-body");

  /*Limpa o conteúdo da tabela
  fds.innerHTML = "";*/

  // Adiciona a nova linha na tabela
  let newRow = document.createElement('tr');
  newRow.innerHTML = `
        <td>${dados.nome}</td>
        <td>${dados.responsavel}</td>
        <td>${dados.preco}</td>
        <td>${dados.problemas}</td>
        <td>${dados.materiais}</td>
        <td>${dados.morada}</td>
      `;
  tbody.appendChild(newRow);

  // Limpa os campos de entrada
  document.getElementById("nome").value = "";
  document.getElementById("responsavel").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("problemas").value = "";
  document.getElementById("materiais").value = "";
  document.getElementById("morada").value = "";
      // Fecha o modal
      modal.style.display = "none";
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
    let headers = ["Nome","Morada", "Responsável/Responsáveis", "Materiais", "Emergência"];

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
  let listaDados = JSON.parse(localStorage.getItem("dados"));

  // Se a lista existir, atualiza o corpo da tabela
  if (listaDados) {
    // Cria as linhas da tabela com os dados salvos
    listaDados.forEach(function(dados) {
      // Cria uma nova linha na tabela
      let linha = tbody.insertRow();

      // Insere as células na linha
      let celulaNome = linha.insertCell();
      let celulaMorada = linha.insertCell();
      let celulaResponsavel = linha.insertCell();
      let celulaMateriais = linha.insertCell();
      let celulaDetalhes = linha.insertCell();

      // Preenche as células com os valores dos dados
      celulaNome.textContent = dados.nome;
      celulaMorada.textContent = dados.morada;
      celulaResponsavel.textContent = dados.responsavel;
      //celulaMateriais.textContent = dados.materiais;
      var linkTelefone = document.createElement("a");
      linkTelefone.href = "tel:+112";
      linkTelefone.textContent = "+112";
      celulaDetalhes.appendChild(linkTelefone);

      dados.materiais.forEach(material => {
        const equipamento = material.nome;
        const quantidade = material.quantidade;
        
        const equipamentoQuantidade = `${equipamento}: ${quantidade}`;
        
        const item = document.createElement('p');
        item.textContent = equipamentoQuantidade;
        
        celulaMateriais.appendChild(item);
      });

    });
  }
}

//DIOGO - Sempre que carrega a pagina:
document.addEventListener("DOMContentLoaded", loadTable);


function carregarTabela() {
  // Adiciona cada linha na tabela
  listaDados.forEach(function (dados) {
    let tr = document.createElement("tr");

    let tdNome = document.createElement("td");
    tdNome.textContent = dados.nome;

    let tdresponsavel = document.createElement("td");
    tdresponsavel.textContent = dados.responsavel;

    //let tdpreco = document.createElement("td");
    //tdpreco.textContent = dados.preco;

    //let tdproblemas = document.createElement("td");
    //tdproblemas.textContent = dados.problemas;

    let tdmateriais = document.createElement("td");
    tdmateriais.textContent = dados.materiais;

    let tdmorada = document.createElement("td");
    tdmorada.textContent = dados.morada;

    tr.appendChild(tdNome);
    tr.appendChild(tdresponsavel);
    tr.appendChild(tdpreco);
    tr.appendChild(tdproblemas);
    tr.appendChild(tdmateriais);
    tr.appendChild(tdmorada);
    tbody.appendChild(tr);
  });
}

function logOut(e){
  sessionStorage.clear();
}
