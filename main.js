
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todo')) || ['Welcome, Its My fist dev in JS'];

function renderTodos(){
    listElement.innerHTML = '';
    for (todo of todos){
        // cria as todo simples
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        linkElement.setAttribute('href','#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteTodo(' + pos + ')');
        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);

        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    // Busca a posição e deleta ele mesmo
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todo',JSON.stringify(todos));
}

// Da acesso ao AJAX no JS
//var xhr = new XMLHttpRequest();
