const contenedor = document.querySelector('.container')

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');  //H
    row.classList.add('row');

    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
    contenedor.appendChild(row);
}


const cell = document.querySelectorAll('.cell');


cell.forEach(elemento => {
    elemento.addEventListener("mouseover", RGBaleatorio)
})

function RGBaleatorio(e) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}


function SolicitarNumero() {
    let alerta = parseInt(prompt('Introduce de que tamaño quieres la cuadricula. Proporciona un solo número del 1-100'))

    while (isNaN(alerta) || alerta < 1 || alerta > 100) {
        alerta = parseInt(prompt('Número inválido. Introduce un número del 1 al 100'));
    }
    return alerta;
}

function ResetCuadricula() {
    const roww = document.querySelectorAll('.row')
    const celll = document.querySelectorAll('.cell')

    celll.forEach(cell => cell.remove());
    roww.forEach(row => row.remove());


}

function GeneradorCuadriculas() {
    const numeroCuadricula = SolicitarNumero()
    ResetCuadricula();


    for (let i = 0; i < numeroCuadricula; i++) {
        const row = document.createElement('div');  //H
        row.classList.add('row');

        for (let j = 0; j < numeroCuadricula; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        contenedor.appendChild(row);
    }
    const cellnew = document.querySelectorAll('.cell');
    cellnew.forEach(elemento => {
        elemento.addEventListener("mouseover", RGBaleatorio)
    })
}

//Escuchador de Evento para Botón
const button = document.querySelector('.button_cuadricula')

button.addEventListener('click', GeneradorCuadriculas)

