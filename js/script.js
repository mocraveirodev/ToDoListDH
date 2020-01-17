let board = document.querySelector("#board");
let buttonAdd = document.querySelector("#add");
let listaTarefas = [];  

let mostrarNaTela = (tarefas) => {
    let lista = "";

    tarefas.forEach((chave, valor) => {
        lista += gerarTarefa(chave, valor);
    });

    return board.innerHTML = lista;
};

let gerarTarefa = (novaTarefa,posicao) => {
    let tarefa = `
        <div class="tarefa m-2" posicao="${posicao}">
            <div class="col-md-8">
                ${novaTarefa}
            </div>
            <div class="col-md-4">
                <img src="img/check.jpg" class="iconCheck" alt="Concluído">
            </div>
        </div>
    `;

    return tarefa;
};

if(localStorage.getItem('listaTarefas')){
    listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));
}else{
    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));
}

board.innerHTML = mostrarNaTela(listaTarefas);

buttonAdd.addEventListener("click", () => {
    let novaTarefa = document.querySelector("#novaTarefa").value;
    listaTarefas.push(novaTarefa);
    mostrarNaTela(listaTarefas);
    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));
});

board.addEventListener("click", (e) => {
    if(e.target.className == "iconCheck"){
        let tarefa = e.target.parentNode.parentNode;
        let posicaoTarefa = tarefa.getAttribute('posicao');
        listaTarefas = listaTarefas.filter((valor, posicao) => {
            return posicao != posicaoTarefa;
        })
        mostrarNaTela(listaTarefas);
        localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));
        // tarefa.remove();
    }
});