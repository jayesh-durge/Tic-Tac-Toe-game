let div=document.querySelectorAll(".box");
let reset=document.querySelector("button");
let newg=document.querySelector("#new");
let turn=true;
let winners=0;
let cross=['','','','','','','','',''];
let circle=['','','','','','','','',''];
for(let val of div) {
    val.addEventListener('click',()=>{
        if(getComputedStyle(val.querySelector(".circle")).display==="none" && getComputedStyle(val.querySelector(".cross")).display==="none")
        {
            if(winners==='found'){
                console.log("winner is found click usless");
                return ;
            }
            if(turn){
                val.querySelector(".circle").style.display="flex";
                circle.splice(val.id,1,'o');
                turn=false;
            }else{
                val.querySelector(".cross").style.display="flex";
                cross.splice(val.id,1,'x');
                turn=true;
            }
            winners++;
            if(iswinner()){
                winners="found";
                reset.style.display="none";
                newg.style.display="block";
            }
            if(winners===9){
                console.log("tie");
                document.querySelector(".tie").style.display="flex";
                reset.style.display="none";
                newg.style.display="block";
            }
        }
    });
}

newg.addEventListener("click",()=>{
    if(cross[0]===cross[4]&&cross[4]===cross[8]&&cross[0]!==''){
        document.querySelectorAll(".diagonal")[1].style.display="";
        document.querySelectorAll(".diagonal")[1].classList.remove("winnerX");
    }
    if(cross[2]===cross[4]&&cross[4]===cross[6]&&cross[2]!==''){
        document.querySelectorAll(".diagonal")[0].style.display="";
        document.querySelectorAll(".diagonal")[0].classList.remove("winnerX");
    }
    if(circle[0]===circle[4]&&circle[4]===circle[8]&&circle[0]!==''){
        document.querySelectorAll(".diagonal")[1].style.display="";
        document.querySelectorAll(".diagonal")[1].classList.remove("winnerO");
    }
    if(circle[2]===circle[4]&&circle[4]===circle[6]&&circle[2]!==''){
        document.querySelectorAll(".diagonal")[0].style.display="";
        document.querySelectorAll(".diagonal")[0].classList.remove("winnerO");
    }
    for(let i=0;i<3;i++){
        if(cross[i]===cross[i+3]&&cross[i+3]===cross[i+6]&&cross[i]!==''){
            document.querySelectorAll(".vertical")[i].style.display="";
            document.querySelectorAll(".vertical")[i].classList.remove("winnerX");
        }
        if(circle[i]===circle[i+3]&&circle[i+3]===circle[i+6]&&circle[i]!==''){
            document.querySelectorAll(".vertical")[i].style.display="";
            document.querySelectorAll(".vertical")[i].classList.remove("winnerO");
        }
    }
    for(let i=0;i<8;i+=3){
        if(cross[i]===cross[i+1]&&cross[i+1]===cross[i+2]&&cross[i]!==''){
            document.querySelectorAll(".horizantal")[i/3].style.display="";
            document.querySelectorAll(".horizantal")[i/3].classList.remove("winnerX");
        }
        if(circle[i]===circle[i+1]&&circle[i+1]===circle[i+2]&&circle[i]!==''){
            document.querySelectorAll(".horizantal")[i/3].style.display="";
            document.querySelectorAll(".horizantal")[i/3].classList.remove("winnerO");
        }
    }
    for(let val of div){
        val.querySelector(".circle").style.display="";
        circle.splice(val.id,1,'');
        console.log(circle);
        val.querySelector(".cross").style.display="";
        cross.splice(val.id,1,'');
        console.log(cross);
}
winners=0;
    reset.style.display="";
    newg.style.display="";
    document.querySelector(".tie").style.display="";
});

reset.addEventListener("click",()=>{
    for(let val of div){
            val.querySelector(".circle").style.display="";
            circle.splice(val.id,1,'');
            console.log(circle);
            val.querySelector(".cross").style.display="";
            cross.splice(val.id,1,'');
            console.log(cross);
        winners--;
    }
});
function iswinner() {
    if(cross[0]===cross[4]&&cross[4]===cross[8]&&cross[0]!==''){
        document.querySelectorAll(".diagonal")[1].style.display="flex";
        document.querySelectorAll(".diagonal")[1].classList.add("winnerX");
        return "cross";
    }
    if(cross[2]===cross[4]&&cross[4]===cross[6]&&cross[2]!==''){
        document.querySelectorAll(".diagonal")[0].style.display="flex";
        document.querySelectorAll(".diagonal")[0].classList.add("winnerX");
        return "cross";
    }
    if(circle[0]===circle[4]&&circle[4]===circle[8]&&circle[0]!==''){
        document.querySelectorAll(".diagonal")[1].style.display="flex";
        document.querySelectorAll(".diagonal")[1].classList.add("winnerO");
        return "circle";
    }
    if(circle[2]===circle[4]&&circle[4]===circle[6]&&circle[2]!==''){
        document.querySelectorAll(".diagonal")[0].style.display="flex";
        document.querySelectorAll(".diagonal")[0].classList.add("winnerO");
        return "circle";
    }
    for(let i=0;i<3;i++){
        if(cross[i]===cross[i+3]&&cross[i+3]===cross[i+6]&&cross[i]!==''){
            document.querySelectorAll(".vertical")[i].style.display="flex";
            document.querySelectorAll(".vertical")[i].classList.add("winnerX");
            return "cross";
        }
        if(circle[i]===circle[i+3]&&circle[i+3]===circle[i+6]&&circle[i]!==''){
            document.querySelectorAll(".vertical")[i].style.display="flex";
            document.querySelectorAll(".vertical")[i].classList.add("winnerO");
            return "circle";
        }
    }
    for(let i=0;i<8;i+=3){
        if(cross[i]===cross[i+1]&&cross[i+1]===cross[i+2]&&cross[i]!==''){
            document.querySelectorAll(".horizantal")[i/3].style.display="flex";
            document.querySelectorAll(".horizantal")[i/3].classList.add("winnerX");
            return "cross";
        }
        if(circle[i]===circle[i+1]&&circle[i+1]===circle[i+2]&&circle[i]!==''){
            document.querySelectorAll(".horizantal")[i/3].style.display="flex";
            document.querySelectorAll(".horizantal")[i/3].classList.add("winnerO");
            return "circle";
        }
    }
    return 0;
}