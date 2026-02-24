/* ===== START DIRECT ===== */
const decryptScreen = document.getElementById("decryptScreen");
const nameScreen = document.getElementById("nameScreen");
const startScreen = document.getElementById("startScreen");

/* START direkt pa countdown */
window.onload = () => {
    startDecrypt();
};

/* ===== DECRYPT ===== */
function startDecrypt(){
 decryptScreen.classList.remove("hidden");
 let p=0; const bar=document.getElementById("progress");
 const load=setInterval(()=>{
  p++; bar.style.width=p+"%";
  if(p>=100){clearInterval(load);decryptScreen.style.display="none";showName();}
 },30);
}

/* ===== GLITCH NAME ===== */
function showName(){
 nameScreen.classList.remove("hidden");
 setTimeout(()=>{
  nameScreen.style.display="none";
  startScreen.classList.remove("hidden");
 },2500);
}

/* ===== STORY ===== */
const message=`Gëzuar ditëlindjen Nuçi...

Po lexon këtë sepse
dikush të do më shumë sesa di të shpjegojë.

Në një botë plot zhurmë
ti je qetësia ime.

Në ditë të lodhura
ti je pushimi im.

Në mendime të humbura
ti je drejtimi im.

Sot feston bota sepse lindi ti.
Por festoj unë sepse të kam ty.

Të dua ❤️`;

let i=0;
startScreen.onclick=()=>{
 startScreen.style.display="none";
 document.querySelector(".screen").classList.remove("hidden");
 document.getElementById("music").play();
 typeWriter();
};

function typeWriter(){
 if(i<message.length){
  document.getElementById("text").innerHTML+=message.charAt(i);
  i++; setTimeout(typeWriter,40);
 } else startFinale();
}

/* ===== FINALE ===== */
function startFinale(){
 document.querySelector(".screen").style.display="none";
 document.getElementById("finale").classList.remove("hidden");
 startHearts();
 setTimeout(()=>document.getElementById("question").classList.remove("hidden"),2500);
}

document.addEventListener("click",(e)=>{
 if(e.target.id==="yes1"||e.target.id==="yes2")
   alert("E dija 😌❤️ Përgatitu!");
});

/* ===== HEARTS ===== */
const canvas=document.getElementById("hearts");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let hearts=[];
function Heart(){
 this.x=Math.random()*canvas.width;
 this.y=-10;
 this.size=Math.random()*6+4;
 this.speed=Math.random()*2+1;
}
Heart.prototype.draw=function(){
 ctx.fillStyle="#ff4d88";
 ctx.beginPath();
 ctx.moveTo(this.x,this.y);
 ctx.arc(this.x-3,this.y,this.size,0,Math.PI,true);
 ctx.arc(this.x+3,this.y,this.size,0,Math.PI,true);
 ctx.lineTo(this.x,this.y+this.size*2);
 ctx.fill();
}

function startHearts(){
 setInterval(()=>hearts.push(new Heart()),200);
 animate();
}
function animate(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 hearts.forEach(h=>{h.y+=h.speed;h.draw();});
 requestAnimationFrame(animate);
}
