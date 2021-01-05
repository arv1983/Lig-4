// let map = [
//     "TTTTTTT",
//     "TTTTTTA",
//     "TTTTTAT",
//     "TTTTATT",
//     "TTTATTT",
//     "TTTTAAA",
// ];
let map = [
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'A', 'T'],
    ['T', 'T', 'T', 'T', 'A', 'T', 'T']
];


//


verifica_ganhador()

function verifica_ganhador() {
    for (let i = 0; i < map.length; i++) {
        ////////////// verifica horizontal
        if (map[i].indexOf('AAAA') > 0) {
            console.log('azul ganha')
        }
        if (map[i].indexOf('VVVV') > 0) {
            console.log('vermelho ganha')
        }


        //////////// verifica vertical
        let conta_a = 0;
        let conta_v = 0;
        for (let a = 0; a <= 5; a++) {

            if (map[a][i] == 'A') {
                conta_a += 1;
            } else {
                conta_a = 0;
            }
            if (conta_a == 4) {
                console.log('azul ganha')
            }

            if (map[a][i] == 'V') {
                conta_v += 1;
            } else {
                conta_v = 0;
            }
            if (conta_v == 4) {
                console.log('vermelho ganha')
            }

        }



    }

    //////////// verifica diagonal
    for (let a = 5; a > 0; a--) {
        for (let i = 0; i <= 6; i++) {
            console.log(map[5][i])

            if (map[a][i] == 'A' && map[a - 1][i + 1] == 'A' && map[a - 2][i + 2] == 'A' && map[a - 3][i + 3] == 'A') {
                console.log('Ganhou Azul')
            }
            if (map[a][i] == 'V' && map[a - 1][i + 1] == 'V' && map[a - 2][i + 2] == 'V' && map[a - 3][i + 3] == 'V') {

                console.log('Ganhou vermelho')

            }


        }

    }

}






// cria parede caminho, entrada e saida com divs

cria_jogo(map);

function cria_jogo() {
    for (let i = 0; i < map.length; i++) {

        for (let a = 0; a < map[i].length; a++) {

            var torre = document.createElement('div');

            torre.setAttribute("id", a);

            torre.setAttribute("class", map[i][a]);

            document.getElementById('lab').appendChild(torre).onclick = function() {

                /// clicks nas colunas
                /// map 

                console.log('clicou ' + a + 'array' + map[5][a])
                map[5][a] = 'A';
                document.getElementById("lab").remove();



                var divNova = document.createElement("div");
                divNova.setAttribute("id", 'lab');

                document.body.appendChild(divNova)


                cria_jogo(map);

                //
            };

        }

    }
}