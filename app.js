//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Criando um array

let amigos= [];

// Implementando uma função para adicionar amigos

function adicionarAmigo(){
    let input= document.getElementById("amigo");
    let nomeAmigo = input.value;

    if(!nomeAmigo){
        alert('Digite o nome do amigo');
        return;
    }
    amigos.push(nomeAmigo);
    input.value = '';
    input.focus();
    atualizarLista();
    
}
// Implementando uma função para atualizar a lista de amigos

function atualizarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}
// Implementando uma função para embaralhar a lista de amigos

function embaralharAmigos(){
    for(let i = amigos.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }
    atualizarLista();
}

// Implementando uma função para sortear um amigo

function sortearAmigo(){
  if(amigos.length === 0){
      alert('Nenhum amigo foi adicionado');
      return;
  }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Parabéns! ${amigoSorteado} você é o amigo sorteado`;

    let limparLista = document.getElementById('listaAmigos');
    limparLista.innerHTML = '';
    amigos = [];


}   

