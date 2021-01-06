<<<<<<< HEAD
const map = [
    "TTTTTTT",
    "TTTTTTT",
    "TTTTTTT",
    "TTTTTTT",
    "TTTTTTT",
    "TTTTTTT",
=======
let map = [
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T'],
    ['T', 'T', 'T', 'T', 'T', 'T', 'T']
>>>>>>> master
];

// cria parede caminho, entrada e saida com divs

for (let i = 0; i < map[0].length; i++) {
    let torre = document.createElement('div');
    torre.setAttribute("id", `${i+1}`);
    for (let a = 0; a < map.length; a++) {
        let cell = document.createElement('div');
        cell.setAttribute("id", map[a][i]);
        torre.appendChild(cell)
    }
    document.getElementById('lab').appendChild(torre)
        // .onclick = function() { console.log("funciona" + a) };
}

// Função para colocar discos

<<<<<<< HEAD
const tower1 = document.getElementById("1");
const tower2 = document.getElementById("2");
const tower3 = document.getElementById("3");
const tower4 = document.getElementById("4");
const tower5 = document.getElementById("5");
const tower6 = document.getElementById("6");
const tower7 = document.getElementById("7");

tower1.addEventListener("click", (e) => selector(e))
tower2.addEventListener("click", (e) => selector(e))
tower3.addEventListener("click", (e) => selector(e))
tower4.addEventListener("click", (e) => selector(e))
tower5.addEventListener("click", (e) => selector(e))
tower6.addEventListener("click", (e) => selector(e))
tower7.addEventListener("click", (e) => selector(e))
=======
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
>>>>>>> master

let currentPlayer = "player1";

<<<<<<< HEAD
function selector(e) {
=======
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
>>>>>>> master

            if (map[a][i] == 'A' && map[a - 1][i + 1] == 'A' && map[a - 2][i + 2] == 'A' && map[a - 3][i + 3] == 'A') {
                console.log('Ganhou Azul')
            }
            if (map[a][i] == 'V' && map[a - 1][i + 1] == 'V' && map[a - 2][i + 2] == 'V' && map[a - 3][i + 3] == 'V') {

<<<<<<< HEAD

    let alvo = e.currentTarget;
    let numberOfChildren = alvo.children.length

    for (i = 6; i >= 0; i--) {
        if (alvo.children[i] == undefined) {} else if (alvo.children[i].getAttribute("id") == "T") {
            alvo.children[i].removeAttribute("id")
            if (currentPlayer == "player1") {
                alvo.children[i].setAttribute("id", "V")
                currentPlayer = "player2"
                break
            } else if (currentPlayer == "player2") {
                alvo.children[i].setAttribute("id", "A")
                currentPlayer = "player1"
                break
            }
        } else if (alvo.children[i].getAttribute("id") == "V") {} else if (alvo.children[i].getAttribute("id") == "A") {}
=======
                console.log('Ganhou vermelho')

            }


        }

>>>>>>> master
    }
    testWinnerConditionInVertcal(e)
}

// Função testa a condição de vitoria



function testWinnerConditionInVertcal(e) {

    let alvo = e.currentTarget;
    let numberOfChildren = alvo.children.length
    let ChildOrder = alvo.childNodes

    for (i = 6; i >= 0; i--) {
        if (alvo.children[i] == undefined) {} else if (alvo.children[i].getAttribute("id") == "V") {
            console.log(alvo.childNodes[0].id)
        }
    }

}



// document.getElementById(id).attribute=new value


// for (i = 6; i >= 0; i--) {
//     if (alvo.children[i] !== undefined) {
//         console.log(alvo.children[i].getAttribute("id"))
//     } else {
//         console.log("Deu undefined")
//     }
// }

<<<<<<< HEAD
// setAttribute('id','li-selected)
=======














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


                if (map[0][a] != 'T') {
                    console.log('ta cheio')

                } else {


                    par_ou_impar += 1;




                    if (par_ou_impar % 2 == 0) {
                        jogador = 'A';
                    } else {
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
>>>>>>> master
