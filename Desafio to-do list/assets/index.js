const inputAdd = document.getElementById('input_add');
const buttonAdd = document.getElementById('input_button');
const listComplete = [];
const checkbox = document.getElementsByClassName("checkbox");
buttonAdd.addEventListener("click", () =>{
  const task = inputAdd.value;
  showInscreen(task)
})

function showInscreen(task) {
  let taskList = [];
  taskList.push(task);
  const list = document.getElementById('list')
  taskList.map(task => {
    list.innerHTML +=
    `<li class="task" id="task" ><input type="checkbox" class="checkbox" ><p>${task}</p></li>`
  })
}

checkbox.addEventListener("change", ()=>{
  if(checkbox.checked){
  return  console.log("O cliente marcou o checkbox");
  }else{
    console.log("O cliente não marcou o checkbox");
  }
})  






  
  
