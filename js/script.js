let map = [
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T']
];
let map2 = map;

//audio
let click = document.getElementById('audioC2');
let musicaTema = document.getElementById('audioTema');
let audioWin = document.getElementById('audioWin');
let audioEmpate = document.getElementById('audioEmpate');
//audio


const buttonreset = document.getElementById("butreset")
buttonreset.addEventListener("click", resetar)
let botao = document.createElement("button")

function resetar() {

    window.location.reload()
}




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

    divResultado.style.width = '100%'
    divResultado.style.height = '100vw'
    divResultado.style.top = '0'
    divResultado.style.left = '0'
    divResultado.style.position = 'absolute'

    divResultado.style.backdropFilter = 'blur(15px)'

    document.body.appendChild(divResultado);


    var img = document.createElement('img');

    img.style.width = '35vw';
    img.style.marginTop = '10vw';
    img.style.background = 'transparent'

    if (vencedor == "azul") {
        img.src = 'img/winblue.png';

        // audios 
        audioWin.currentTime = 0;
        audioWin.play()
        musicaTema.pause();
        // audios 
    } else if (vencedor == "vermelho") {
        img.src = 'img/winred.png';

        // audios 
        audioWin.currentTime = 0;
        audioWin.play()
        musicaTema.pause();
        // audios  
    } else {
        img.src = 'img/emp.png';

        // audios 
        audioEmpate.currentTime = 0;
        audioEmpate.play()
        musicaTema.pause();
        // audios 
    }
    document.getElementById('resultado_div').appendChild(img);






    document.getElementById('resultado_div').onclick = function () {


        document.getElementById("lab").remove();
        document.getElementById("resultado_div").remove();
        var divNova = document.createElement("div");
        divNova.setAttribute("id", 'lab');
        document.body.appendChild(divNova)
        cria_jogo(map2)

        // audios 
        musicaTema.currentTime = 0;
        musicaTema.play()
        audioEmpate.pause()
        audioWin.pause();
        // audios 
    }

}

verifica_ganhador()

function verifica_ganhador() {

    /////////////////////////// condição de empate
    let conta_os_t = 0;
    for (let i = 0; i <= map.length; i++) {
        for (let a = 0; a <= 5; a++) {
            if (map[a][i] == 'T') {
                conta_os_t++;
            }

        }
    }
    if (conta_os_t == 0) {
        exibir_ganhador('empate');
    }

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

    for (let a = 0; a <= 2; a++) { // verifica da base para esquerda
        for (let i = 0; i <= 3; i++) {

            if (map[a][i] == 'A' && map[a + 1][i + 1] == 'A' && map[a + 2][i + 2] == 'A' && map[a + 3][i + 3] == 'A') {
                exibir_ganhador('azul');
            }
            if (map[a][i] == 'V' && map[a + 1][i + 1] == 'V' && map[a + 2][i + 2] == 'V' && map[a + 3][i + 3] == 'V') {
                exibir_ganhador('vermelho');
            }
        }
    }

    for (let a = 0; a <= 2; a++) { /// verifica da base para direita
        for (let i = 6; i >= 3; i--) {

            if (map[a][i] == 'A' && map[a + 1][i - 1] == 'A' && map[a + 2][i - 2] == 'A' && map[a + 3][i - 3] == 'A') {
                exibir_ganhador('azul');
            }
            if (map[a][i] == 'V' && map[a + 1][i - 1] == 'V' && map[a + 2][i - 2] == 'V' && map[a + 3][i - 3] == 'V') {
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

            document.getElementById('lab').appendChild(torre).onclick = function () {

                click.currentTime = 0;

                // audio 
                click.play();
                // audio 

                if (map[0][a] != 'T') {
                    // audio 
                    click.pause();
                    // audio 
                } else {

                    par_ou_impar += 1;

                    if (par_ou_impar % 2 == 0) {
                        document.getElementById('jogador').innerHTML = 'Vermelho'
                        document.getElementById('jogador').style.color = "red"
                        jogador = 'A';
                    } else {
                        document.getElementById('jogador').innerHTML = 'Azul'
                        document.getElementById('jogador').style.color = "blue"
                        jogador = 'V';
                    }

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

                    document.body.appendChild(divNova);

                    //recria
                    cria_jogo(map);
                    verifica_ganhador();

                }
            };

        }
    }
}