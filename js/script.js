let map = [
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T']
];
let map2 = map;

//





function exibir_ganhador(vencedor) {



    const map2 = [
        ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
        ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
        ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
        ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
        ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
        ['T', 'T', 'T', 'T', 'T', 'T', 'T']
    ];

    map = map2;




    var divResultado = document.createElement("div");
    divResultado.setAttribute("id", 'resultado_div');

    divResultado.style.width = '77vw'
    divResultado.style.height = '77vw'
    divResultado.style.backgroundColor = 'black'
    divResultado.style.marginTop = '-77vw'
    divResultado.style.position = 'absolute'
    divResultado.innerText = 'O jogador ' + vencedor + ' ganhou';
    document.body.appendChild(divResultado);

    document.getElementById('resultado_div').onclick = function() {

        document.getElementById("lab").remove();
        document.getElementById("resultado_div").remove();
        var divNova = document.createElement("div");
        divNova.setAttribute("id", 'lab');
        document.body.appendChild(divNova)
        cria_jogo(map2)

    }





    // document.getElementById("lab").remove();



    // var divNova = document.createElement("div");
    // divNova.setAttribute("id", 'lab');
    // document.body.appendChild(divNova)
    // console.log(map2)




    // alert(vencedor)
    // cria_jogo(map2)

}

verifica_ganhador()

function verifica_ganhador() {

    for (let i = 0; i < map.length; i++) {
        ////////////// verifica horizontal
        if (map[i].join('').indexOf('AAAA') >= 0) {
            exibir_ganhador('azul');
        }
        if (map[i].join('').indexOf('VVVV') >= 0) {
            exibir_ganhador('vermelho');

        }


        //////////// verifica vertical DIREITA
    }


    let conta_a = 0;
    let conta_v = 0;
    for (let i = 0; i <= map.length; i++) {
        for (let a = 0; a <= 5; a++) {

            if (map[a][i] == 'A') {
                conta_a += 1;
            } else {
                conta_a = 0;
            }
            if (conta_a == 4) {
                exibir_ganhador('azul');
            }

            if (map[a][i] == 'V') {
                conta_v += 1;
            } else {
                conta_v = 0;
            }
            if (conta_v == 4) {
                exibir_ganhador('vermelho');
            }

        }
    }



    //////////// verifica diagonal direita e esquerda
    for (let a = 5; a > 0; a--) {
        for (let i = 0; i <= 6; i++) {
            if (map[a][i] == 'A' && map[a - 1][i - 1] == 'A' && map[a - 2][i - 2] == 'A' && map[a - 3][i - 3] == 'A') {
                exibir_ganhador('azul');
            }
            if (map[a][i] == 'V' && map[a - 1][i - 1] == 'V' && map[a - 2][i - 2] == 'V' && map[a - 3][i - 3] == 'V') {
                exibir_ganhador('vermelho');
            }

            if (map[a][i] == 'A' && map[a - 1][i + 1] == 'A' && map[a - 2][i + 2] == 'A' && map[a - 3][i + 3] == 'A') {
                exibir_ganhador('azul');
            }
            if (map[a][i] == 'V' && map[a - 1][i + 1] == 'V' && map[a - 2][i + 2] == 'V' && map[a - 3][i + 3] == 'V') {

                exibir_ganhador('vermelho');

            }


        }

    }





}






// cria parede caminho, entrada e saida com divs

cria_jogo(map);
let par_ou_impar = 0;
let jogador = 0;

function cria_jogo(map) {
    for (let i = 0; i < map.length; i++) {

        for (let a = 0; a < map[i].length; a++) {

            var torre = document.createElement('div');

            torre.setAttribute("id", a);

            torre.setAttribute("class", map[i][a]);

            document.getElementById('lab').appendChild(torre).onclick = function() {

                console.log('map atual' + map[0][a] + ' A= ' + a)
                if (map[0][a] != 'T') {
                    console.log('ta cheio')

                } else {


                    par_ou_impar += 1;




                    if (par_ou_impar % 2 == 0) {
                        document.getElementById('jogador').innerText = 'Vermelho'
                        jogador = 'A';
                    } else {
                        document.getElementById('jogador').innerText = 'Azul'
                        jogador = 'V';
                    }



                    ////// funcao mmanipula array
                    //////////////// consertar erro...

                    for (let i = 0; i < 6; i++) {



                        console.log(map[i][a])



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

                }
            };

        }
    }
}