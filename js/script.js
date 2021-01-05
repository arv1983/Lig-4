const map = [
    "TTTTTTT",
    "TTTTTTT",
    "TTTTTTT",
    "TTTVTTT",
    "TTTATTT",
    "TVAAVAT",
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

function selector(e) {

    let alvo = e.currentTarget;
    let numberOfChildren = alvo.children.length

    for (i = 6; i >= 0; i--) {
        console.log(alvo.children[i])
    }
    // console.log(alvo.children[5])

}

// Fim da função para colocar discos