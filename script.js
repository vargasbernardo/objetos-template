// // Prática guiada I
// const estudante = {
//     nome: 'João',
//     sobrenome: 'Félix',
//     numeroDeMatricula: 1612735,
//     notasDoSemstre: [5, 9, 7.6, 3.5, 10]    
// }

// // Prática guiada II
// // estudante.modulo = 3
// // console.log(estudante.nome)
// // console.log(estudante.notasDoSemstre[1])
// // console.log(estudante.modulo)
// console.log(estudante)

// // Prática guiada III
// // const copiaEstudante = {
// //     ...estudante
    
// // }

// // copiaEstudante.nome = 'Astrodev'
// // copiaEstudante.notasDoSemstre.push(9)
// // copiaEstudante.modulo = 4
// // console.log(copiaEstudante)

// // Usando spread para copiar e alterar as propriedades
// const copiaEstudante = {
//     ...estudante,
//     nome: 'Astrodev',
//     modulo: 4,
//     notasDoSemstre: [...estudante.notasDoSemstre, 9]
// }
// console.log(copiaEstudante)

// Exercicio de fixacao
const carrinho = {
    nome: 'Miguel',
    formaDePagamento: 'Dinheiro',
    endereco: 'Rua Dalvo Trombeta 357'
}

carrinho.compras = [
    {
        nomeDoProduto: 'Picanha',
        precoDoProduto: 100,
        quantidadeDeProdutos: 1
    },
    {
        nomeDoProduto:'Pao de alho',
        precoDoProduto: 15,
        quantidadeDeProdutos: 3
    },
    {
        nomeDoProduto: 'Linguica',
        precoDoProduto: 20,
        quantidadeDeProdutos: 2
    }
]
console.log(carrinho.compras.length)
const quantidadeTotal = carrinho.compras[0].quantidadeDeProdutos + carrinho.compras[1].quantidadeDeProdutos + carrinho.compras[2].quantidadeDeProdutos

const carrinhoPresente = {
    ...carrinho,
    nome: 'Pachelbel',
    formaDePagamento: 'cartao presente'

}
console.log(carrinhoPresente)
console.log(carrinho)
const unidadesTerceiro = carrinho.compras[2].quantidadeDeProdutos
console.log(quantidadeTotal)