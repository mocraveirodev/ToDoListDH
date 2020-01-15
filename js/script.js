let board = document.querySelector("#board");
let buttonAdd = document.querySelector("#add");
let listaTarefas = [];

if(localStorage.getItem('listaTarefas')){
    listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));
}else{
    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));
}

buttonAdd.addEventListener("click", () => {
    let novaTarefa = document.querySelector("#novaTarefa").value;
    listaTarefas.push(novaTarefa);
    board.innerHTML = mostrarNaTela(listaTarefas);
    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));
});

let mostrarNaTela = (tarefas) => {
    let lista = "";
    for(let tarefa of tarefas){
        lista += gerarTarefa(tarefa);
    }
    return lista;
};

let gerarTarefa = (novaTarefa) => {
    let tarefa = `
        <div class="tarefa m-2">
            <div class="col-md-8">
                ${novaTarefa}
            </div>
            <div class="col-md-4">
                <img src="img/check.jpg" class="icon" alt="Concluído">
            </div>
        </div>
    `;

    return tarefa;
};