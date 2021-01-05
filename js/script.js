let map = [
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T']
];


//


verifica_ganhador()

function verifica_ganhador() {
    for (let i = 0; i < map.length; i++) {
        ////////////// verifica horizontal
        if (map[i].join('').indexOf('AAAA') > 0) {
            console.log('azul ganha')
        }
        if (map[i].join('').indexOf('VVVV') > 0) {
            console.log('vermelho ganha')
        }


        //////////// verifica vertical DIREITA
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

    //////////// verifica diagonal direita
    for (let a = 5; a > 0; a--) {
        for (let i = 0; i <= 6; i++) {
            if (map[a][i] == 'A' && map[a - 1][i - 1] == 'A' && map[a - 2][i - 2] == 'A' && map[a - 3][i - 3] == 'A') {
                console.log('Ganhou Azul')
            }
            if (map[a][i] == 'V' && map[a - 1][i - 1] == 'V' && map[a - 2][i - 2] == 'V' && map[a - 3][i - 3] == 'V') {
                console.log('Ganhou vermelho')
            }

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
let par_ou_impar = 0;
let jogador = 0;

function cria_jogo() {
    for (let i = 0; i < map.length; i++) {

        for (let a = 0; a < map[i].length; a++) {

            var torre = document.createElement('div');

            torre.setAttribute("id", a);

            torre.setAttribute("class", map[i][a]);

            document.getElementById('lab').appendChild(torre).onclick = function() {
                par_ou_impar += 1;


                if (par_ou_impar % 2 == 0) {
                    jogador = 'A';
                } else {
                    jogador = 'V';
                }

                /// clicks nas colunas
                /// map 





                ////// funcao mmanipula array


                for (let i = 0; i < 6; i++) {



                    if (map[i][a] != 'T') {
                        map[i - 1][a] = jogador;
                        break;
                    }
                    if (i == 5) {
                        map[i][a] = jogador;
                    }


                }




                document.getElementById("lab").remove();



                var divNova = document.createElement("div");
                divNova.setAttribute("id", 'lab');

                document.body.appendChild(divNova)

                //recria
                cria_jogo(map);
                verifica_ganhador();


            };
        }
    }
}