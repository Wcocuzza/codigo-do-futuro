nomeCliente = prompt("Digite seu nome: ");

let alvejante = parseFloat(prompt("Digite o valor do alvejante"));
let sabaoEmPo = parseFloat(prompt("Digite o valor do sabão em pó"));
let sabonete = parseFloat(prompt("Digite o valor do sabonete"));
const total = alvejante + sabaoEmPo + sabonete;
alert(`
    Olá, ${nomeCliente}!
    O valor da sua compra é de R$${total.toFixed(2)}
`);
