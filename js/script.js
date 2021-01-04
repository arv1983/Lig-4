const map = [
    "TTTTTTT",
    "TTTTTTT",
    "TTTTTTT",
    "TTTTTTT",
    "TTTTTTT",
    "TTAVTTT",
];


//





// cria parede caminho, entrada e saida com divs
for (let i = 0; i < map.length; i++) {


    ///


    for (let a = 0; a < map[i].length; a++) {
        var torre = document.createElement('div');
        torre.setAttribute("id", map[i][a]);
        document.getElementById('lab').appendChild(torre);
    }



}