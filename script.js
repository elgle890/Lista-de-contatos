const button = document.querySelector('form');
let linhas = '';
let input_nome;
let input_tel;
let total = 0;
let numContatos = document.querySelector('p');
let nomes = [];
let numeros = [];

button.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaContato();
    
});

function adicionaContato() {
    input_nome = document.getElementById('nome');
    input_tel = document.getElementById('telefone');

    if (input_nome.value === '' || input_tel.value === '') {
        alert('Complete todos os dados!');
    } else if (!/^\d+$/.test(input_tel.value)) {
            alert('O campo de telefone só deve conter números.');
        } else {

        if (numeros.includes(input_tel.value)) {
            alert('Número de telefone já existe!');
        } else {
            let linha = `<tr><td>${input_nome.value}</td><td>${input_tel.value}</td></tr>`;
            linhas += linha;
            nomes.push(input_nome.value);
            numeros.push(input_tel.value);

            let corpo = document.querySelector('tbody');
            corpo.innerHTML = linhas;
            total += 1;
            numContatos.innerHTML = `total de contatos: ${total}`;
        }

    }

    input_nome.value = '';
    input_tel.value = '';
}


