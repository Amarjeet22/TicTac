let boxes = document.querySelectorAll(".box");
let resetBut = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turn0 = true;
    enableBox();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{
        // console.log("box was clicked");
        if(turn0==true){
            box.classList.add("x");
            box.innerText ="x";
            turn0 =false;
        }else{
            box.classList.add("o");
            box.innerText = "o";
            turn0 =true;
        }
        box.disabled=true; // it stop the change in 2nd time 
        checkWiner();
    });
});
// for disable the btn 
const  disableBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBox=()=>{
 for(let box of boxes){
    box.disabled =false;
    box.innerText = "";
 }
}
const showWinner=(winner)=>{
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWiner=()=>{
    for(let pattern of winPatterns){
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2val!= "" && pos3Val != ""){
            if(pos1Val == pos2val && pos2val == pos3Val){
                //console.log("Winer" , pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

newGame.addEventListener("click",resetGame);
resetBut.addEventListener("click" ,resetGame);
