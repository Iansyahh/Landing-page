document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const text = document.querySelector(".nama");
const strText = text.textContent;
const splitText=strText.split("");

text.textContent="";

for (let i = 0; i <splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] +"</span>";
}

let char = 0;
let timer = setInterval(onTick,50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer= null;
}
