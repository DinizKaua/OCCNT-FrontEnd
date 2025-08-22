// GRÁFICO
let chart = null; // inicializa a instancia do grafico

// função que cria o grafico
function createChart(data) {
    const ctx = document.getElementById('disease-chart').getContext('2d');
    
    if (chart) {
        chart.destroy(); // se o grafico ja existe, destroi
    }

    chart = new Chart(ctx, { 
        type: 'line', // tipo do grafico
        data: {
            labels: data.labels,   
            datasets: data.datasets // conjunto de dados
        },
        options: {
            responsive: true,      // se adaptar ao tamanho da tela
            maintainAspectRatio: false // proporção dinamica
        }
    });
}

// função que carrega os dados do arqivo json
async function loadDataFromJSON(url) {
    try {
        const response = await fetch(url); // busca o arquivo
        const data = await response.json();// converge pra um objeto
        createChart(data);                 // cria a tabela com os dados
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
}


document.addEventListener('DOMContentLoaded', function() {
    loadDataFromJSON('data/dados.json');
});