let AA = 0, RM=0, Rej=0
let VP

VP = Number(prompt("Digite o valor do pedido ou digite 0 para encerrar."))

while (VP != 0) {
    if (VP <= 500) {
        AA = AA + 1
    } else {
        if (VP > 500 && VP <= 1000) {
            RM = RM + 1
        } else {
            Rej = Rej + 1
        }
    }

    VP = Number(prompt("Digite o valor do pedido ou digite 0 para encerrar."))
}

alert("Aguarde um momento enquanto contabilizamos a quantidade de pedidos por categoria!")

alert("Pedidos Aprovados Automaticamente: " + AA + "\nPedidos que necessitam de Revisão Manual: " + RM + "\nPedidos Rejeitados: " + Rej)