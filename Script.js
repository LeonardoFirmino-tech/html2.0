// adicionar item
function colocar(num) {

    let qtd = document.getElementById("qtd" + num);
    let valor = Number(qtd.innerHTML);

    valor = valor + 1;

    qtd.innerHTML = valor;

    calcular(num);
}

// remover item
function tirar(num) {

    let qtd = document.getElementById("qtd" + num);
    let valor = Number(qtd.innerHTML);

    if (valor > 0) {
        valor = valor - 1;
    }

    qtd.innerHTML = valor;

    calcular(num);
}

// calcular valores
function calcular(num) {

    let preco = document.getElementById("preco" + num).innerHTML;
    let qtd = document.getElementById("qtd" + num).innerHTML;

    let subtotal = preco * qtd;

    document.getElementById("sub" + num).innerHTML = subtotal;

    // soma total (bem direto)
    let total =
        Number(document.getElementById("sub1").innerHTML) +
        Number(document.getElementById("sub2").innerHTML) +
        Number(document.getElementById("sub3").innerHTML);

    document.getElementById("total").innerHTML = total;
}
