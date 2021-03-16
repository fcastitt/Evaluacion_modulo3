$(document).ready(function () {

    //Gráfico de barras
    var ctx1 = document.getElementById('myChart1').getContext('2d');
    var myChart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Arica', 'Iquique', 'Calama', 'Antofagasta', 'Santiago', 'Valparaiso'],
            datasets: [{
                label: 'Cantidad de clientes por comuna',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: true
        }
    });

    //Gráfico de líneas y puntos
    var ctx2 = document.getElementById('myChart2').getContext('2d');
    var chart2 = new Chart(ctx2, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {

            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [{
                label: 'Cantidad de accidentes',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45, 30, 17, 16, 30, 8],
            }, {
                label: 'Cantidad de visitas',
                borderColor: 'rgba(255, 206, 86, 1)',
                data: [0, 4, 5, 7, 20, 30, 30, 5, 7, 20, 30, 30],
                lineTension: 0   //Lineas rectas sin curvas
            }]
        },

        // Configuration options go here
        options: {
            responsive: true
        }
    });

    //Gráfico de torta
    var ctx3 = document.getElementById('myChart3').getContext('2d');
    var chart3 = new Chart(ctx3, {

        type: 'pie',
        data: {

            labels: [
                'Cumplidos',
                'No cumplidos',
                'cumplidos con observación'
            ],

            datasets: [{

                label: 'Porcentaje de chequeos de visitas',
                data: [40, 30, 30],
                backgroundColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ]

            }]

        },
        options: {
            responsive: true
        }

    });

});