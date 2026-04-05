let input = document.querySelector(".input");
let text = document.querySelector(".text");

function Add(){
    if(input.value === ""){
        alert("complete your task");
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i>`;
        newEle.classList.add("bg-gray-800", "text-white","p-2","my-2","flex","justify-between", "items-center")
        text.appendChild(newEle);
        input.value ="";

        newEle.querySelector("i").addEventListener("click", remove);
        function remove(){
            newEle.remove();
        }

    }
}