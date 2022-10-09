console.log("Hello World");

//HÄR HAR JAG SAMLAT VARIABLERNA JAG BEHÖVER

const button = document.querySelector("button");
const input = document.querySelector("input");


//MIN ARRAY

const todos = ["Diska", "Städa", "Tvätta", "Baka bröd"];


//HÄR PUSHAR JAG IN ETT NYTT OBJEKT I MIN ARRAY

 todos.push("Rasta barnen")

for (let todo of todos){
    const li = document.createElement("li");
    const body = document.querySelector("body")
    const ul = document.querySelector("ul")
    li.innerText = todo;
    ul.appendChild(li);
};


//HÄR HAR JAG GJORT KNAPPEN KLICKBAR

button.addEventListener("click", pressBtn)

function pressBtn(){
    //if(todos == input.value)
    //todos.push == input.value
        console.log(input.value)
}