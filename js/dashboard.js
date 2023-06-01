function logOut(e){
    sessionStorage.clear();
  }

  document.addEventListener("DOMContentLoaded", nColaboradores);
  document.addEventListener("DOMContentLoaded", nPistas);
  document.addEventListener("DOMContentLoaded", materiasMaisUsado);
  document.addEventListener("DOMContentLoaded", graficos);
  document.addEventListener("DOMContentLoaded", reservaTotal);

  function nColaboradores(){
    let colaboradores = localStorage.getItem("colaborador");
    colaboradores = JSON.parse(colaboradores); // Parse para converter a string JSON em uma array
    let nColaboradores = colaboradores.length; // Obtém o número de colaboradores na array
    let textoColaboradores = document.getElementById("nColaboradores");
  
    textoColaboradores.textContent = nColaboradores;
  }

  function nPistas(){
    let pistas = localStorage.getItem("dados");
    pistas = JSON.parse(pistas); // Parse para converter a string JSON em uma array
    let nPistas = pistas.length; // Obtém o número de colaboradores na array
    let textoPista = document.getElementById("nPistas");
  
    textoPista.textContent = nPistas;
  }

  function materiasMaisUsado(){
      let listaMateriais = localStorage.getItem("materiais");
      listaMateriais = JSON.parse(listaMateriais); // Parse para converter a string JSON em uma array
      let textoMaterial = document.getElementById("materiasMaisUsado");
    
      // Objeto para armazenar a contagem de transferências de cada material
      let contagemTransferencias = {};
    
      // Iterar sobre a lista de materiais e contar as transferências para cada material
      for (let i = 0; i < listaMateriais.length; i++) {
        let material = listaMateriais[i];
    
        if (contagemTransferencias[material.nome]) {
          contagemTransferencias[material.nome] += parseInt(material.quantidade);
        } else {
          contagemTransferencias[material.nome] = parseInt(material.quantidade);
        }
      }
    
      // Encontrar o material mais transferido
      let materialMaisTransferido = "";
      let quantidadeMaisTransferida = 0;
    
      for (let material in contagemTransferencias) {
        if (contagemTransferencias[material] > quantidadeMaisTransferida) {
          quantidadeMaisTransferida = contagemTransferencias[material];
          materialMaisTransferido = material;
        }
      }
    
      textoMaterial.textContent = materialMaisTransferido;
    }
    
    function graficos() {
      // Worldwide Sales Chart
      let listaMateriais = localStorage.getItem("materiais");
      listaMateriais = JSON.parse(listaMateriais);
    
      // Objeto para armazenar a soma das quantidades de cada material
      let somaQuantidades = {};
    
      // Iterar sobre a lista de materiais e somar as quantidades para cada material
      for (let i = 0; i < listaMateriais.length; i++) {
        let material = listaMateriais[i];
        let nomeMaterial = material.nome;
        let quantidade = parseInt(material.quantidade);
    
        if (somaQuantidades[nomeMaterial]) {
          somaQuantidades[nomeMaterial] += quantidade;
        } else {
          somaQuantidades[nomeMaterial] = quantidade;
        }
      }
    
      let materiais = Object.keys(somaQuantidades);
      let quantidades = Object.values(somaQuantidades);
    
      var ctx1 = document.getElementById("worldwide-sales").getContext("2d");
      var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
          labels: materiais,
          datasets: [
            {
              label: "Quantidade de Materiais",
              data: quantidades,
              backgroundColor: "rgba(235, 22, 22, .7)",
            },
          ],
        },
        options: {
          responsive: true,
        },
      });


      let listaR = localStorage.getItem("pista_RedBull");
      let listaF = localStorage.getItem("pista_Fuji");
      let listaA = localStorage.getItem("pista_Autopolis");
      let listaG = localStorage.getItem("pista_GoodWood");
      let listaS = localStorage.getItem("pista_spa");
      let listaL = localStorage.getItem("pista_Laguna");

      let todasListas = [].concat(
        JSON.parse(listaR),
        JSON.parse(listaF),
        JSON.parse(listaA),
        JSON.parse(listaG),
        JSON.parse(listaS),
        JSON.parse(listaL)
      );

      let pistasUnicas = [];
      for (let i = 0; i < todasListas.length; i++) {
        let pista = todasListas[i].pista;
        if (!pistasUnicas.includes(pista)) {
          pistasUnicas.push(pista);
        }
      }

      // Contar a quantidade de reservas para cada pista
      let quantidadeReservas = [];
      for (let i = 0; i < pistasUnicas.length; i++) {
        let pista = pistasUnicas[i];
        let contador = 0;
        for (let j = 0; j < todasListas.length; j++) {
          if (todasListas[j].pista === pista) {
            contador++;
          }
        }
        quantidadeReservas.push(contador);
      }

    
      var ctx2 = document.getElementById("salse-revenue").getContext("2d");
      var myChart2 = new Chart(ctx2, {
        type: "bar",
        data: {
          labels: pistasUnicas,
          datasets: [
            {
              label: "Quantidade de Reservas",
              data: quantidadeReservas,
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

  function reservaTotal(){
    let listaR = localStorage.getItem("pista_RedBull");
    let listaF = localStorage.getItem("pista_Fuji");
    let listaA = localStorage.getItem("pista_Autopolis");
    let listaG = localStorage.getItem("pista_GoodWood");
    let listaS = localStorage.getItem("pista_spa");
    let listaL = localStorage.getItem("pista_Laguna");

    let todasListas = [].concat(
      JSON.parse(listaR),
      JSON.parse(listaF),
      JSON.parse(listaA),
      JSON.parse(listaG),
      JSON.parse(listaS),
      JSON.parse(listaL)
    );

    if(listaR == null && listaF == null && listaA == null && listaG == null && listaS == null && listaL == null){
      let textoReservasTotais = document.getElementById("nReservasTotais");
      textoReservasTotais.textContent = 0;
      

    }else{

      let reservas = todasListas.length; // Obtém o número de colaboradores na array
    let textoReservasTotais = document.getElementById("nReservasTotais");
    console.log(todasListas)
  
    textoReservasTotais.textContent = reservas;
    }

    

  }
