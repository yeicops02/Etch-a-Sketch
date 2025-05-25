const contenedor = document.querySelector('.container')


for (let i = 0; i < 16; i++ ) {
    const row = document.createElement('div');  //H
    row.classList.add('row');
    
    for (let j = 0; j<16; j++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
    contenedor.appendChild(row);
}

function SolicitarNumero () {
    let alerta = parseInt(prompt('Introduce de que tamaño quieres la cuadricula. Proporciona un solo número del 1-100'))
    return alerta
}


function GeneradorCuadriculas () {
    const numeroCuadricula = SolicitarNumero()
for (let i = 0; i < numeroCuadricula; i++ ) {
    const row = document.createElement('div');  //H
    row.classList.add('row');
    
    for (let j = 0; j < numeroCuadricula; j++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
    contenedor.appendChild(row);
}
}

