
let restart=()=>
{
    let timer=60;
var score=0;
var rn=0;
var name=prompt("enter your name:");

let makebubbble=()=>
{
    var cluster= "";
for(var i=1;i<=133;i++)
{
    var rn=Math.floor(Math.random()*10)
    cluster +=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#l").innerHTML=cluster
}

let runtimer=()=>
{
    var timerint=setInterval(function(){
        if(timer>0)
        {
        timer--;
        document.getElementById("timervalue").innerHTML=timer;}
    else{
        clearInterval(timerint);
        document.getElementById('l').innerHTML=`
        <h1> Dear ${name}, your game </h1>
        </br>
        <h1> is OVER and </h1>
        </br>
        <h1> your score is = ${score}</h1>`;
    }},1000)
    
    

}

let hit=()=>
{
 rn=Math.floor(Math.random()* 10);
document.getElementById('hit').innerHTML=rn;
}

let scoreset=()=>
{
     score += 10;
     document.getElementById('score').innerHTML=score;

}

document.querySelector('#l')
.addEventListener("click",function(details){
let clicked=Number(details.target.textContent);
if(rn=clicked)
{
    scoreset();
    makebubbble();
    hit();
}
});



makebubbble();
runtimer();
hit();
};
