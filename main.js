canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function add()
{
    backgroundImgTag = new Image();
    backgroundImgTag.onLoad = uploadBackground();
    backgroundImgTag.src = backgroundImage;
}

function uploadBackground()
{
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

window.addEventListener("keydown, myKeyDown");

function myKeyDown(e);
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if ((keyPressed>=38 && keyPressed<=122)||(keyPressed>=65 && keyPressed<=90))
    {
       alphabetkey();
       document.getElementById("d1").innerHTML="Você pressionou uma tecla direcional";
       console.log("alphabet key");
    }

    function alphabetkey()
    {
        backgroundImgTag="alfabeto.png";
        add();
    }
};



