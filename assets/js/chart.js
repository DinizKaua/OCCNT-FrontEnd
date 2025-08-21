let chart = null;

function createChart(data) {
    const ctx = document.getElementById('disease-chart').getContext('2d');
    
    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: data.datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

async function loadDataFromJSON(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        createChart(data);
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
}


document.addEventListener('DOMContentLoaded', function() {
    loadDataFromJSON('data/dados.json');
});