const chessBoard = document.getElementById("xy");

for(let i=0; i<8; i++){
    for(let j=0; j<8; j++){
        let box = document.createElement("div");
        if ((i+j)%2==0) {
            box.className = "white" ;
        }else{
            box.className = "black" ;
        }  
            chessBoard.appendChild(box);
        }
    }
