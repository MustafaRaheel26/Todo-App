const todoInput = document.querySelector('#todo');
const ol = document.querySelector('ol');
const arr = [];


function render(){
  ol.innerHTML = '';
 

  for (let i =0 ;i<arr.length;i++){
      ol.innerHTML += `<li><div class="d-flex flex-row justify-content-space-between gap-3">
      <div class="d-flex text-align-center justify-content-evenly flex-row gap-2 flex-wrap container rounded border border-none bg-light text-secondary-emphasis form-control">${arr[i]}</div>
      <div class="d-flex text-align-center flex-row gap-2">
      <button onclick ="deleteTodo(${[i]})" class="btn btn-danger">Delete</button>
      <button onclick ="editTodo(${[i]})" class="btn btn-secondary">Edit</button>
      </div></div>
      </li>`
    }

}



function addTodo(){
  arr.push(todoInput.value);
  console.log(arr);
ol.innerHTML = '';
 

for (let i =0 ;i<arr.length;i++){
    ol.innerHTML += `<li><div class="d-flex flex-row justify-content-space-between gap-3">
    <div class="d-flex text-align-center justify-content-evenly flex-row gap-2 flex-wrap container rounded border border-none bg-light text-secondary-emphasis form-control">${arr[i]}</div>
    <div class="d-flex text-align-center flex-row gap-2">
    <button onclick ="deleteTodo(${[i]})" class="btn btn-danger">Delete</button>
    <button onclick ="editTodo(${[i]})" class="btn btn-secondary">Edit</button>
    </div></div>
    </li>`
  }
  todoInput.value = '';
}


function deleteTodo(index){

console.log('delete todo is ',index);
arr.splice(index,1);
render()

}

function editTodo(index){
 const updatedVal= prompt('Enter updated value');
    console.log('edit todo is ',index);
  arr.splice(index,1,updatedVal);
render()

}
