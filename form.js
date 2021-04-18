let newtodo = "";
let ul = document.querySelector('ul')

document.querySelector('form').addEventListener("submit", function(event){
    console.log("event");
    event.preventDefault();
    newtodo = document.querySelector('input').value;
    var li= document.createElement("li");
    li.textContent = newtodo;
    ul.appendChild(li)

})

