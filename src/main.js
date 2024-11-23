let select = 0;
const nav2 = document.getElementById("sidebar2");
const nav2_conteudo = document.getElementById("lista-pacotes");
const nav3 = document.getElementById("sidebar3");
const nav3_conteudo = document.getElementById("pacote-conteudo");
let aberto = 0;


const argentina = [
    { nome: "Plano Familiar p/ 4 pessoas", preco: "R$ 2000,00", parcelas: "12x de R$200,00" },
    { nome: "Plano casal", preco: "R$ 1200,00", parcelas: "12x de R$120,00" },
    { nome: "Plano Individual", preco: "R$ 699,90", parcelas: "12x de R$69,90" },
    { nome: "Plano customizado", preco: "A combinar", parcelas: "" }
];

const cuba = [
    { nome: "Plano Familiar p/ 4 pessoas", preco: "R$ 2500,00", parcelas: "12x de R$250,00" },
    { nome: "Plano casal", preco: "R$ 1400,00", parcelas: "12x de R$140,00" },
    { nome: "Plano Individual", preco: "R$ 899,90", parcelas: "12x de R$89,90" },
    { nome: "Plano customizado", preco: "A combinar", parcelas: "" }
];

const indonesia = [
    { nome: "Plano Familiar p/ 4 pessoas", preco: "R$ 3000,00", parcelas: "12x de R$300,00" },
    { nome: "Plano casal", preco: "R$ 1800,00", parcelas: "12x de R$180,00" },
    { nome: "Plano Individual", preco: "R$ 1199,00", parcelas: "12x de R$119,90" },
    { nome: "Plano customizado", preco: "A combinar", parcelas: "" }
];

const italia = [
    { nome: "Plano Familiar p/ 4 pessoas", preco: "R$ 3500,00", parcelas: "12x de R$350,00" },
    { nome: "Plano casal", preco: "R$ 2300,00", parcelas: "12x de R$230,00" },
    { nome: "Plano Individual", preco: "R$ 1799,00", parcelas: "12x de R$179,90" },
    { nome: "Plano customizado", preco: "A combinar", parcelas: "" }
];

const franca = [
    { nome: "Plano Familiar p/ 4 pessoas", preco: "R$ 4000,00", parcelas: "12x de R$400,00" },
    { nome: "Plano casal", preco: "R$ 3200,00", parcelas: "12x de R$320,00" },
    { nome: "Plano Individual", preco: "R$ 2699,90", parcelas: "12x de R$269,90" },
    { nome: "Plano customizado", preco: "A combinar", parcelas: "" }
];

function janela(aux, id) {
    switch (aux) {
        case 0:
            nav2_conteudo.innerHTML = "";
            document.getElementById(id).innerHTML = "Argentina"
            nav2.style.opacity = "1"
            contador = 0;
            argentina.forEach(element => {
                nav2_conteudo.innerHTML += "<li id='" + element.nome + "' onclick='janela2(0, " + contador + ")'>" + element.nome + "</li>"
                contador++;
            });
            nav3.style.opacity = "0"
            break;
        case 1:
            nav2_conteudo.innerHTML = "";
            document.getElementById(id).innerHTML = "Cuba"
            nav2.style.opacity = "1"
            contador = 0;
            cuba.forEach(element => {
                nav2_conteudo.innerHTML += "<li id='" + element.nome + "' onclick='janela2(1, " + contador + ")'>" + element.nome + "</li>"
                contador++;
            });
            nav3.style.opacity = "0"

            break;

        case 2:
            nav2_conteudo.innerHTML = "";
            document.getElementById(id).innerHTML = "Indonésia"
            nav2.style.opacity = "1"
            contador = 0;
            indonesia.forEach(element => {
                nav2_conteudo.innerHTML += "<li id='" + element.nome + "' onclick='janela2(2, " + contador + ")'>" + element.nome + "</li>"
                contador++;
            });
            nav3.style.opacity = "0"

            break;

        case 3:
            nav2_conteudo.innerHTML = "";
            document.getElementById(id).innerHTML = "Itália"
            nav2.style.opacity = "1"
            contador = 0;
            italia.forEach(element => {
                nav2_conteudo.innerHTML += "<li id='" + element.nome + "' onclick='janela2(3, " + contador + ")'>" + element.nome + "</li>"
                contador++;
            });
            nav3.style.opacity = "0"

            break;

        case 4:
            nav2_conteudo.innerHTML = "";
            document.getElementById(id).innerHTML = "França"
            nav2.style.opacity = "1"
            contador = 0;
            franca.forEach(element => {
                nav2_conteudo.innerHTML += "<li id='" + element.nome + "' onclick='janela2(4, " + contador + ")'>" + element.nome + "</li>"
                contador++;
            });
            nav3.style.opacity = "0"

            break;

        default:
            console.log("Invalid option selected");
    }
}
function janela2(aux, id) {
    switch (aux) {
        case 0:
            nav3_conteudo.innerHTML = "";
            nav3.style.opacity = "1"
            contador = 0;
            nav3_conteudo.innerHTML += "<li>" + argentina[id].nome + "</li><li>" + argentina[id].preco + "</li><li>" + argentina[id].parcelas + "</li>"
            break;
        case 1:
            nav3_conteudo.innerHTML = "";
            nav3.style.opacity = "1"
            contador = 0;
            nav3_conteudo.innerHTML += "<li>" + cuba[id].nome + "</li><li>" + cuba[id].preco + "</li><li>" + cuba[id].parcelas + "</li>"
            break;
        case 2:
            nav3_conteudo.innerHTML = "";
            nav3.style.opacity = "1"
            contador = 0;
            nav3_conteudo.innerHTML += "<li>" + indonesia[id].nome + "</li><li>" + indonesia[id].preco + "</li><li>" + indonesia[id].parcelas + "</li>"
            break;
        case 3:
            nav3_conteudo.innerHTML = "";
            nav3.style.opacity = "1"
            contador = 0;
            nav3_conteudo.innerHTML += "<li>" + italia[id].nome + "</li><li>" + italia[id].preco + "</li><li>" + italia[id].parcelas + "</li>"
            break;
        case 4:
            nav3_conteudo.innerHTML = "";
            nav3.style.opacity = "1"
            contador = 0;
            nav3_conteudo.innerHTML += "<li>" + franca[id].nome + "</li><li>" + franca[id].preco + "</li><li>" + franca[id].parcelas + "</li>"
            break;
        default:
            console.log("Invalid option selected");
    }
}



document.addEventListener('click', function (event) {
    const nav1 = document.getElementById("sidebar");

    if (nav1 && !nav1.contains(event.target) &&
        nav2 && !nav2.contains(event.target) &&
        nav3 && !nav3.contains(event.target)) {
        nav2.style.opacity = "0";
        nav3.style.opacity = "0";
    }
});