let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newb = document.querySelector(".new");
let container = document.querySelector(".msg-container");
let winn = document.querySelector(".win");
let turno = true;

const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turno){
        box.innerText = "O";
        turno = false;
    }
    else{
        box.innerText = "X";
        turno = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
  

const resetg=() =>{
 turno= true;
 enableboxes();
 container.classList.add("hide");
};
const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = ()=>{
    
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};

const showwinner=(winner) =>{
    winn.innerText = `congratulation , The winner is ${winner}`;
    container.classList.remove("hide");
    disableboxes();
};
const checkWinner = () =>{
    for(let pattern of winning){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos1);
                showwinner(pos1);
            }
           
        }
    }
};

resetbtn.addEventListener("click",resetg);
newb.addEventListener("click",resetg);