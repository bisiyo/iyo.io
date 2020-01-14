var numberdescri = -1;
var alldescri = ["is a french interactive designer based in Switzerland.", "is a wonderful girl"]
var descri = document.getElementsByClassName("tooltiptext");
var projectnumber = 0;
var imagenumber = -1;
var phone = false;
if (window.innerWidth <= 500) {
    phone = true;
}

function changedescri() {
    numberdescri++;
    if (numberdescri >= alldescri.length) {
        numberdescri = 0;
    }
    descri[0].innerHTML = alldescri[numberdescri];
}

window.onresize = function() {
    var imgblocks = document.getElementsByClassName("blockimage");

    if (window.innerWidth <= 500) {
        if (phone == false) {
            if (imgblocks[0].style.left == "0px") {
                imgblocks[0].style.top = "48.5vh"
                imgblocks[0].style.borderTop = "1px dashed black";

            } else {
                imgblocks[0].style.borderBottom = "1px dashed black";
            }
            phone = true;
        }
        imgblocks[0].style.left = "0px";
        imgblocks[0].style.height = "42.8vh";

    } else {
        if (phone) {
            if (imgblocks[0].style.top == "48.5vh") {} else {
                imgblocks[0].style.left = "31%";
            }
            phone = false;
        }
        imgblocks[0].style.top = "8.5vh";
        imgblocks[0].style.height = "83%";
        imgblocks[0].style.borderBottom = "none";
        imgblocks[0].style.borderTop = "none";
    }
}

function changeproject(bnb) {
    imagenumber = -1;
    if (bnb) {
        if (bnb.id != projectnumber) {
            var current = document.getElementsByClassName("activo");
            current[0].className = current[0].className.replace(" activo", "");
            bnb.className += " activo";
            projectnumber = bnb.id;
        } else { return }
    } else {
        projectnumber++;
        if (projectnumber >= content.length) projectnumber = 0;
        var current = document.getElementsByClassName("activo");
        current[0].className = current[0].className.replace(" activo", "");
        document.getElementById(String(projectnumber)).className += " activo";
    }
    setTimeout(function() { changeimage() }, 1000);

    var imgblocks = document.getElementsByClassName("blockimage");
    for (var i = 0; i < imgblocks.length; i++) {

        if ($(window).width() <= 500) {

            if (imgblocks[i].style.top == "8.5vh") {
                imgblocks[i].style.top = "48.5vh";
                imgblocks[i].style.borderBottom = "none";
                imgblocks[i].style.borderTop = "1px dashed black";


            } else if (imgblocks[i].style.top == "48.5vh") {
                imgblocks[i].style.top = "8.5vh";
                imgblocks[i].style.borderBottom = "1px dashed black";
                imgblocks[i].style.borderTop = "none";

            }

        } else {

            if (imgblocks[i].style.left == "0px") {
                imgblocks[i].style.left = "31%";
            } else if (imgblocks[i].style.left == "31%") {
                imgblocks[i].style.left = "0px";
            }
        }
        updatetext();
    }
}

function updatetext() {
    var imgblocks = document.getElementsByClassName("blockimage");
    var textout = document.createElement('div');
    textout.innerHTML = TEXT;
    textout.querySelector('.title').textContent = content[projectnumber][0];
    textout.querySelector('.type').textContent = content[projectnumber][1];
    textout.querySelector('.info').textContent = content[projectnumber][2];

    if (window.innerWidth > 500) {
        if (imgblocks[0].style.left == "0px") {
            document.getElementById("textgoch").innerHTML = textout.innerHTML;
        } else if (imgblocks[0].style.left == "31%") {
            document.getElementById("textdroite").innerHTML = textout.innerHTML;
        }
    } else {
        if (imgblocks[0].style.top == "48.5vh") {
            document.getElementById("textgoch").innerHTML = textout.innerHTML;
        } else if (imgblocks[0].style.top == "8.5vh") {
            document.getElementById("textdroite").innerHTML = textout.innerHTML;
        }
    }
}


function changeimage() {
    imagenumber++;
    var hello = content[projectnumber][3];
    var array = hello.split(",");
    if (imagenumber >= array.length) imagenumber = 0;


    if (array[imagenumber].includes(".mp4")) {
        document.querySelector(".blockimage").style.background = "white";
        document.querySelector("#vidvid").style.display = "block";
        document.querySelector("#vidvid").src = "img/" + array[imagenumber];
        document.querySelector("#vidvid").play();

    } else {
        if (document.querySelector("#vidvid").style.display == "block") {
            document.querySelector("#vidvid").style.display = "none";
        }
        document.querySelector(".blockimage").style.background = "url('img/" + array[imagenumber] + "') no-repeat center white";
        document.querySelector(".blockimage").style.backgroundSize = "cover";
    }
}


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        changeimage();
    } else if (e.keyCode == '40') {
        changeimage();
    } else if (e.keyCode == '37') {
        if (projectnumber == 0) {
            projectnumber = content.length - 2;
        } else {
            projectnumber -= 2;
        }
        changeproject()
    } else if (e.keyCode == '39') {
        changeproject()
    }

}

var request = new XMLHttpRequest();
request.open("GET", "contenu_fr.json", false);
request.send(null)
var content = JSON.parse(request.responseText);
var BUTTON = '<button class="button glass-sculpted blue-a" type="button" onclick="changeproject(this)"></button>';
var TEXT =
    '<div class="text">' +
    '<div class="title"></div>' +
    '<div class="type"></div>' +
    '<div class="info"></div>' +
    '</div>';

for (var i = 0; i < content.length; i++) {
    var container = document.createElement('div');
    container.style.display = "inline";
    container.style.paddingLeft = "1vh";
    container.style.filter = "hue-rotate(" + content[i][4] + "deg)";
    container.innerHTML = BUTTON;
    if (i == 0) container.children[0].classList.add("activo");
    container.children[0].id = i;
    document.querySelector("#navproject").appendChild(container);
}

changeimage();
updatetext();