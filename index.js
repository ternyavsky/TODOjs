let Todos = []
const todosNode = document.querySelector('.js-todos');
const inputNode = document.querySelector('.js-input')
const btnNode = document.querySelector('.js-btn')
function addTodo(text){
    const todo = {
        text,
        done: false,
        id: `${Math.random()}`
    
    };
    Todos.push(todo);
   

}
   
function deleteTodo(id){
    Todos.forEach(todo => {
        if(todo.id === id){
            todo.done = true
        }
    })
}

function render(){
    let html = ''
    Todos.forEach(todo => {
        if(todo.done){
            return;
        }; 
    
        html += `
           <div class="row mt-3">
           
            
            <h5 class="display-5 text-light">
            ${todo.text}
            </h5>
            
            <button class="w-25 btn btn-danger" data-id=${todo.id}>Удалить</button>
            
            
            </div>
            
        `;
})
    todosNode.innerHTML = html;

}
btnNode.addEventListener('click', () => {
    const text = inputNode.value;

    addTodo(text);
    render()
});

todosNode.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON'){
        return
    }
    const todoid = event.target.dataset.id;

    deleteTodo(todoid)

    render()
})
render()


function efef(){
    let e = 5
    function fefe(){
        console.log(e)
    } 
    return fefe()
}
efef()