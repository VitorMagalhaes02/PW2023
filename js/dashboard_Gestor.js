function loadTable() {
  let userSession = sessionStorage.getItem("id");
  let userL = localStorage.getItem(userSession);
  let dataL = JSON.parse(userL);
  let pista_responsavel_por = dataL.responsavel;
  let listaPJson = "";

  if (pista_responsavel_por == "Laguna Seca") {
    let listaP = localStorage.getItem("pista_Laguna");

    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];

    }


  } else if (pista_responsavel_por == "Spa-Francorshamps") {
    let listaP = localStorage.getItem("pista_spa");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Goodwood") {
    let listaP = localStorage.getItem("pista_GoodWood");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Autopolis") {
    let listaP = localStorage.getItem("pista_Autopolis");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Fuji Speedway") {
    let listaP = localStorage.getItem("pista_Fuji");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Red Bull Ring") {
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
    let headers = ["Data", "Horas", "Nome", "Pista", "Plano", "Estado", "Detalhes"];

    // Cria as células dos cabeçalhos
    headers.forEach(function (headerText) {
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
  //let listaReservas = JSON.parse(localStorage.getItem("reserva"));
  // Se a lista existir, atualiza o corpo da tabela
  if (listaPJson) {
    // Cria as linhas da tabela com os dados salvos
    listaPJson.forEach(function (reserva) {
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
      celulaDetalhes.textContent = reserva.detalhes;

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
      detalhesButton.addEventListener("click", function () {
        // Implemente a ação que deseja realizar ao clicar no botão
        window.location.href = "reservas.html";
      });

      // Insere o botão na célula "Detalhes"
      celulaDetalhes.appendChild(detalhesButton);
    });
  }
}

document.addEventListener("DOMContentLoaded", loadTable);
document.addEventListener("DOMContentLoaded", dados);
document.addEventListener("DOMContentLoaded", mediaPessoas);
document.addEventListener("DOMContentLoaded", rendaPista);
document.addEventListener("DOMContentLoaded", graficos);

function dados() {
  let userSession = sessionStorage.getItem("id");
  let userL = localStorage.getItem(userSession);
  let dataL = JSON.parse(userL);
  let pista_responsavel_por = dataL.responsavel;
  let listaPJson = "";

  if (pista_responsavel_por == "Laguna Seca") {
    let listaP = localStorage.getItem("pista_Laguna");

    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];

    }


  } else if (pista_responsavel_por == "Spa-Francorshamps") {
    let listaP = localStorage.getItem("pista_spa");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Goodwood") {
    let listaP = localStorage.getItem("pista_GoodWood");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Autopolis") {
    let listaP = localStorage.getItem("pista_Autopolis");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Fuji Speedway") {
    let listaP = localStorage.getItem("pista_Fuji");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Red Bull Ring") {
    let listaP = localStorage.getItem("pista_RedBull");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }
  }

  let reservasTotais = document.getElementById("reservasTotais");
  reservasTotais.textContent = listaPJson.length;

  let planoMaisEscolhido = document.getElementById("planoMaisEscolhido");
  let somarStandart = 0;
  let somarProfissional = 0;
  let somarPremium = 0;

  let novalista = [];

  for (let i = 0; i < listaPJson.length; i++) {
    if (listaPJson[i].estado == "concluido" || listaPJson[i].estado == "aceite") {
      let reservaPP = listaPJson[i];
      novalista.push(reservaPP);
    }
  }


  // Percorre a lista de elementos e conta a ocorrência de cada tipo de plano
  for (let i = 0; i < novalista.length; i++) {
    let pacote = novalista[i].pacote;

    if (pacote === "standard-access" && novalista[i].estado != "pendente" && novalista[i].estado != "cancelada") {
      somarStandart++;
    } else if (pacote === "pro-access" && novalista[i].estado != "pendente" && novalista[i].estado != "cancelada") {
      somarProfissional++;
    } else if (pacote === "premium-access" && novalista[i].estado != "pendente" && novalista[i].estado != "cancelada") {
      somarPremium++;
    }
  }

// Verifica qual é o plano mais escolhido e exibe o nome correspondente
let planos = [];
let maxQuantidade = Math.max(somarStandart, somarPremium, somarProfissional);

if (somarStandart === maxQuantidade) {
  planos.push("Plano Padrão");
}

if (somarPremium === maxQuantidade) {
  planos.push("Plano Premium");
}

if (somarProfissional === maxQuantidade) {
  planos.push("Plano Profissional");
}

planoMaisEscolhido.textContent = planos.join(", ");
}

function logOut(e) {
  sessionStorage.clear();
}


function mediaPessoas() {
  let userSession = sessionStorage.getItem("id");
  let userL = localStorage.getItem(userSession);
  let dataL = JSON.parse(userL);
  let pista_responsavel_por = dataL.responsavel;
  let listaPJson = "";
  let somaMediaPessoas = 0;
  let textoMediaPessoas = document.getElementById("mediaPessoas");

  if (pista_responsavel_por == "Laguna Seca") {
    let listaP = localStorage.getItem("pista_Laguna");

    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];

    }


  } else if (pista_responsavel_por == "Spa-Francorshamps") {
    let listaP = localStorage.getItem("pista_spa");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Goodwood") {
    let listaP = localStorage.getItem("pista_GoodWood");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Autopolis") {
    let listaP = localStorage.getItem("pista_Autopolis");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Fuji Speedway") {
    let listaP = localStorage.getItem("pista_Fuji");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Red Bull Ring") {
    let listaP = localStorage.getItem("pista_RedBull");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }
  }

  let novalista = [];

  for (let i = 0; i < listaPJson.length; i++) {
    if (listaPJson[i].estado == "concluido") {
      let reservaPP = listaPJson[i];
      novalista.push(reservaPP);
    }
  }

  for (let i = 0; i < novalista.length; i++) {
    let pessoas = parseInt(novalista[i].n_pessoas);
    if (pessoas != 0) {
      somaMediaPessoas = somaMediaPessoas + pessoas;
    }
  }
  somaMediaPessoas = somaMediaPessoas / novalista.length;

  textoMediaPessoas.textContent = somaMediaPessoas.toFixed(0);
}

function rendaPista() {
  let userSession = sessionStorage.getItem("id");
  let userL = localStorage.getItem(userSession);
  let dataL = JSON.parse(userL);
  let pista_responsavel_por = dataL.responsavel;
  let listaPJson = "";
  let somaRenda = 0;
  let rendaPista = document.getElementById("rendaPista");

  if (pista_responsavel_por == "Laguna Seca") {
    let listaP = localStorage.getItem("pista_Laguna");

    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];

    }


  } else if (pista_responsavel_por == "Spa-Francorshamps") {
    let listaP = localStorage.getItem("pista_spa");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Goodwood") {
    let listaP = localStorage.getItem("pista_GoodWood");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Autopolis") {
    let listaP = localStorage.getItem("pista_Autopolis");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Fuji Speedway") {
    let listaP = localStorage.getItem("pista_Fuji");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Red Bull Ring") {
    let listaP = localStorage.getItem("pista_RedBull");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }
  }

  let novalista = [];

  for (let i = 0; i < listaPJson.length; i++) {
    if (listaPJson[i].estado == "concluido" || listaPJson[i].estado == "aceite") {
      let reservaPP = listaPJson[i];
      novalista.push(reservaPP);
    }
  }

  for (let i = 0; i < novalista.length; i++) {
    let pacote = novalista[i].pacote;
    if (pacote === "standard-access" && novalista[i].estado != "pendente" && novalista[i].estado != "cancelada") {
      somaRenda = parseInt(somaRenda + 100);
    } else if (pacote === "pro-access" && novalista[i].estado != "pendente" && novalista[i].estado != "cancelada") {
      somaRenda = parseInt(somaRenda + 250);
    } else if (pacote === "premium-access" && novalista[i].estado != "pendente" && novalista[i].estado != "cancelada") {
      somaRenda = parseInt(somaRenda + 500);
    }
  }

  rendaPista.textContent = somaRenda;
}

function graficos() {
  let userSession = sessionStorage.getItem("id");
  let userL = localStorage.getItem(userSession);
  let dataL = JSON.parse(userL);
  let pista_responsavel_por = dataL.responsavel;
  let listaPJson = "";

  if (pista_responsavel_por == "Laguna Seca") {
    let listaP = localStorage.getItem("pista_Laguna");

    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];

    }


  } else if (pista_responsavel_por == "Spa-Francorshamps") {
    let listaP = localStorage.getItem("pista_spa");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Goodwood") {
    let listaP = localStorage.getItem("pista_GoodWood");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Autopolis") {
    let listaP = localStorage.getItem("pista_Autopolis");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Fuji Speedway") {
    let listaP = localStorage.getItem("pista_Fuji");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }


  } else if (pista_responsavel_por == "Red Bull Ring") {
    let listaP = localStorage.getItem("pista_RedBull");
    listaPJson = listaP ? JSON.parse(listaP) : [];
    if (!Array.isArray(listaPJson)) {
      listaPJson = [];
    }
  }

 // Objeto para armazenar a contagem de pacotes
let contagemPacotes = {};

// Iterar sobre a lista de pacotes e contar as ocorrências de cada pacote
for (let i = 0; i < listaPJson.length; i++) {
  let plano = listaPJson[i];

  if (contagemPacotes[plano.pacote]) {
    contagemPacotes[plano.pacote]++;
  } else {
    contagemPacotes[plano.pacote] = 1;
  }
}

// Extrair os nomes dos pacotes e suas contagens para os dados do gráfico
let pacotes = Object.keys(contagemPacotes);
let contagens = Object.values(contagemPacotes);

// Criar o gráfico de barras usando Chart.js
var ctx = document.getElementById("worldwide-sales").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: pacotes,
    datasets: [
      {
        label: "Nº de Repetições",
        data: contagens,
        backgroundColor: "rgba(235, 22, 22, .7)",
      },
    ],
  },
  options: {
    responsive: true,
  },
});

let listaReservasCanceladas = [];
let listaReservasPendentes = [];
let listaReservasConcluidas = [];
let listaReservasAceites = [];

// Iterar sobre a lista de reservas
for (let i = 0; i < listaPJson.length; i++) {
  let reserva = listaPJson[i];

  if (reserva.estado === "cancelada") {
    listaReservasCanceladas.push(reserva);
  } else if (reserva.estado === "pendente") {
    listaReservasPendentes.push(reserva);
  } else if (reserva.estado === "concluido") {
    listaReservasConcluidas.push(reserva);
  } else if (reserva.estado === "aceite") {
    listaReservasAceites.push(reserva);
  }
}

// Obter a quantidade de reservas para cada categoria
let quantidadeCanceladas = listaReservasCanceladas.length;
let quantidadeAceites = listaReservasAceites.length;
let quantidadeConcluidas = listaReservasConcluidas.length;
let quantidadePendente = listaReservasPendentes.length;

// Criar os rótulos para o eixo x
let labels = ["Canceladas", "Aceitas", "Concluídas", "Pendentes"];

// Criar os dados para o gráfico de barras
let data = [quantidadeCanceladas, quantidadeAceites, quantidadeConcluidas, quantidadePendente];

// Criar o gráfico de barras usando Chart.js
var ctx = document.getElementById("salse-revenue").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Quantidade de Reservas",
        data: data,
        backgroundColor: "rgba(235, 22, 22, .7)",
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

}