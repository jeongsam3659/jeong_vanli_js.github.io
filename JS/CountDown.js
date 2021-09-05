const countDown = document.querySelector("#bf").querySelector("#bf_countdown");
const countDownbg = document.querySelector("#bf");


function getCountDown(){
    //1 Today
    const today = new Date().getTime();
    // Release BF2042 
    const BF_Date = new Date(2021, 10, 22).getTime();
    
    //2 두 날짜 차이
    const BF_countDown = (BF_Date - today);
    const D_day = Math.floor((BF_countDown) / (1000*60*60*24));
    const str_D_day = String(D_day).padStart(3, "0");
    
    //3 출력
    countDown.innerText = `D- ${str_D_day} `;
}

getCountDown();
setInterval(getCountDown, 60000);


const imgs = [
    "bg1.jpg",
    "bg2.jpg",
    "bg3.jpg",
    "bg4.jpg",
];

function setBgImg(){
    const choseImage = imgs[Math.floor(Math.random()*imgs.length)];
    countDownbg.style.background = `url(./img/${choseImage})`;
    
}

setInterval(setBgImg, 5000);
