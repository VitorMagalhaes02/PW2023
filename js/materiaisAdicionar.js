
function salvarDadosMateriais() {
    // Obtém os valores dos campos de entrada
    let nome = document.getElementById("nomeMat").value;
    let preco = document.getElementById("precoMat").value;
    let quantidade = document.getElementById("quantidadeMat").value;
    let pista = document.getElementById("pistaCol").value;
  
    // Cria um objeto com os dados
    let materiais = {
      nome: nome,
      preco: preco,
      quantidade: quantidade,
      pista: pista
    };
  
    // Obtém a lista de dados salvos no LocalStorage
    let listaMateriais = JSON.parse(localStorage.getItem("materiais"));
  
    // Se a lista ainda não existir, cria uma nova lista vazia
    if (!listaMateriais) {
      listaMateriais = [];
    }
  
    // Adiciona o novo objeto à lista
    listaMateriais.push(materiais);

  
    // Salva a lista atualizada no LocalStorage
    localStorage.setItem("materiais", JSON.stringify(listaMateriais));

    let listapistas = JSON.parse(localStorage.getItem("dados"));
    //console.log(pista);


    listapistas.forEach(function(pistaL) {
      if (pistaL.nome === pista) {
        let nomeExistente = false;
        pistaL.materiais.forEach(function(material) {
          if (material.nome === nome) {
            material.quantidade = parseInt(material.quantidade) + parseInt(quantidade);
            nomeExistente = true;
          }
        });
    
        if (!nomeExistente) {
          let item = { nome: nome, quantidade: quantidade };
          pistaL.materiais.push(item);
        }
    
        localStorage.setItem("dados", JSON.stringify(listapistas));
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
      location.reload();
      updateTable();
  
        // Limpa os campos de entrada
    document.getElementById("nomeMat").value = "";
    document.getElementById("precoMat").value = "";
    document.getElementById("quantidadeMat").value = "";
    document.getElementById("pistaCol").value = "";
    
        // Fecha o modal
        modal.style.display = "none";

  }


  //DIOGO - CRIEI
function updateTable() {
    // Obtém a referência para a tabela
    let tabela = document.getElementById("materiaistabela");
  
    // Verifica se a tabela já possui cabeçalhos
    let hasHeaders = tabela.querySelector("thead tr");
  
    // Se não houver cabeçalhos, adiciona-os
    if (!hasHeaders) {
      let thead = tabela.createTHead();
      let row = thead.insertRow();
      let headers = ["Nome", "Quantidade", "Preço", "Pista"];
  
      // Cria as células dos cabeçalhos
      headers.forEach(function(headerText) {
        let th = document.createElement("th");
        let text = document.createTextNode(headerText);
        th.appendChild(text);
        row.appendChild(th);
      });
    }
  
    // Limpa o conteúdo existente do corpo da tabela
    let tbody = document.getElementById("tbodyMateriais");
    tbody.innerHTML = "";
  
    // Obtém a lista de dados do LocalStorage
    let listaMateriais = JSON.parse(localStorage.getItem("materiais"));
  
    // Se a lista existir, atualiza o corpo da tabela
    if (listaMateriais) {
      // Cria as linhas da tabela com os dados salvos
      listaMateriais.forEach(function(materiais) {
        // Cria uma nova linha na tabela
        let linha = tbody.insertRow();
  
        // Insere as células na linha
        let celulaNome = linha.insertCell();
        let celulaPreco = linha.insertCell();
        let celulaQuantidade = linha.insertCell();
        let celulaDescricao = linha.insertCell();
  
        // Preenche as células com os valores dos dados
        celulaNome.textContent = materiais.nome;
        celulaPreco.textContent = materiais.preco;
        celulaQuantidade.textContent = materiais.quantidade;
        celulaDescricao.textContent = materiais.pista;
      });
    }
  }

  function loadTable() {
    // Obtém a referência para a tabela
    let tabela = document.getElementById("materiaistabela");
  
    // Verifica se a tabela já possui cabeçalhos
    let hasHeaders = tabela.querySelector("thead tr");
  
    // Se não houver cabeçalhos, adiciona-os
    if (!hasHeaders) {
      let thead = tabela.createTHead();
      let row = thead.insertRow();
      let headers = ["Nome", "ID Material", "Preço", "Quantidade", "Pista"];
  
      // Cria as células dos cabeçalhos
      headers.forEach(function(headerText) {
        let th = document.createElement("th");
        let text = document.createTextNode(headerText);
        th.appendChild(text);
        row.appendChild(th);
      });
    }
  
    // Limpa o conteúdo existente do corpo da tabela
    let tbody = document.getElementById("tbodyMateriais");
    tbody.innerHTML = "";
  
    // Obtém a lista de dados do LocalStorage
    let listaMateriais = JSON.parse(localStorage.getItem("materiais"));
  
    // Se a lista existir, atualiza o corpo da tabela
    if (listaMateriais) {
      // Cria as linhas da tabela com os dados salvos
      listaMateriais.forEach(function(materiais) {
        // Cria uma nova linha na tabela
        let linha = tbody.insertRow();
  
        // Insere as células na linha
        let celulaNome = linha.insertCell();
        let celulaPreco = linha.insertCell();
        let celulaQuantidade = linha.insertCell();
        let celulaDescricao = linha.insertCell();

  
        // Preenche as células com os valores dos dados
        celulaNome.textContent = materiais.nome;
        celulaPreco.textContent = materiais.preco;
        celulaQuantidade.textContent = materiais.quantidade;
        celulaDescricao.textContent = materiais.pista;
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
      tdNome.textContent = materiais.nome;
  
      let tdpreco = document.createElement("td");
      tdpreco.textContent = materiais.preco;
  
      let tdquantidade = document.createElement("td");
      tdquantidade.textContent = materiais.quantidade;
  
      let tddescricao = document.createElement("td");
      tddescricao.textContent = materiais.pista;
  
      tr.appendChild(tdNome);
      tr.appendChild(tdpreco);
      tr.appendChild(tdquantidade);
      tr.appendChild(tddescricao);
      tbody.appendChild(tr);
    });
  }
  