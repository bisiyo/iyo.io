var numberdescri = -1;
let alldescri = ["is a French interactive designer.", "is an artist from Cameroon.", "likes to create original websites.", "loves to work at the crossroads of different fields.", "is interested in doing inclusive and activist projects.", "enjoys creating immersives worlds.", "loves art, social, cognitive and computer science."];
var descri = document.getElementsByClassName("tooltiptext");
var projectnumber = 0;
var imagenumber = -1;
var phone = false;
var videoo = false;
var toggleEvent = true;
var activetransi = false;
if (window.innerWidth <= 500) {
    phone = true;
}
let numbergood = 0;
document.querySelector("#vidvid").disablePictureInPicture = true;

$(document).ready(function() {
    $("#conteneur").fadeTo("slow", 1, function() {
        // Animation complete.
    });

});

var favicon_images = [
        'img/Favicon/Favicon00.png',
        'img/Favicon/Favicon01.png',
        'img/Favicon/Favicon02.png',
        'img/Favicon/Favicon03.png',
        'img/Favicon/Favicon04.png',
        'img/Favicon/Favicon05.png',
        'img/Favicon/Favicon06.png',
        'img/Favicon/Favicon07.png',
        'img/Favicon/Favicon08.png',
        'img/Favicon/Favicon09.png',
        'img/Favicon/Favicon10.png',
        'img/Favicon/Favicon11.png',
        'img/Favicon/Favicon12.png',
        'img/Favicon/Favicon13.png',
        'img/Favicon/Favicon14.png',
        'img/Favicon/Favicon15.png',
        'img/Favicon/Favicon16.png',
        'img/Favicon/Favicon17.png',
        'img/Favicon/Favicon18.png',
        'img/Favicon/Favicon19.png'
    ],
    image_counter = 0; // To keep track of the current image

setInterval(function() {
    $("link[rel='icon']").remove();
    $("link[rel='shortcut icon']").remove();
    $("head").append('<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/png">');

    // If last image then goto first image
    // Else go to next image    
    if (image_counter == favicon_images.length - 1)
        image_counter = 0;
    else
        image_counter++;
}, 200);

function changedescri() {
    if (document.querySelector("#conteneur").children[0].children[0].classList.contains("fermé")) {
        document.querySelector(".tooltiptext").style.display = "unset";

        numberdescri++;
        if (numberdescri >= alldescri.length) {
            numberdescri = 0;
        }
        descri[0].innerHTML = alldescri[numberdescri];
    } else {
        document.querySelector(".tooltiptext").style.display = "none";
    }
}

window.onresize = function() {
    var imgblocks = document.getElementsByClassName("blockimage");

    if (window.innerWidth <= 500) {
        if (phone == false) {
            if (imgblocks[0].style.left == "0px") {
                imgblocks[0].style.top = "50%"
                imgblocks[0].style.borderTop = "1px solid black";

            } else {
                imgblocks[0].style.borderTop = "none";
            }
            phone = true;
        }
        imgblocks[0].style.left = "0px";
        imgblocks[0].style.height = "50%";
        imgblocks[0].style.borderBottom = "1px solid black";

    } else {
        if (phone) {

            if (imgblocks[0].style.top == "50%") {} else {
                imgblocks[0].style.left = "31%";
            }
            imgblocks[0].style.top = "0vh"

            phone = false;
        }
        imgblocks[0].style.height = "100%";
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
            projectnumber = parseInt(bnb.id);
        } else { return }
    } else {
        projectnumber++;
        if (projectnumber >= content.length) projectnumber = 0;
        var current = document.getElementsByClassName("activo");
        current[0].className = current[0].className.replace(" activo", "");
        document.getElementById(String(projectnumber)).className += " activo";
    }
    if (activetransi) {
        if (document.getElementsByClassName("blockimage")[0].children[0].classList.contains("isrotate")) {
            numbergood = 0;
            document.getElementsByClassName("blockimage")[0].children[0].classList.remove("isrotate");
            document.getElementsByClassName("blockimage")[0].children[1].classList.add("isrotate");

        } else {
            document.getElementsByClassName("blockimage")[0].children[1].classList.remove("isrotate");
            document.getElementsByClassName("blockimage")[0].children[0].classList.add("isrotate");
            numbergood = 1;
        }
        changeimage();
    } else {
        setTimeout(function() { changeimage(); }, 1000);
    }


    var imgblocks = document.getElementsByClassName("blockimage")[0].children[numbergood];


    if ($(window).width() <= 500) {

        if (imgblocks.parentNode.style.top == "0vh") {
            imgblocks.parentNode.style.top = "50%";
            // imgblocks[i].style.borderBottom = "none";

            imgblocks.parentNode.style.borderTop = "1px solid black";
        } else if (imgblocks.parentNode.style.top == "50%") {
            // imgblocks[i].style.borderBottom = "1px dashed black";
            // imgblocks[i].style.borderTop = "none";
            imgblocks.parentNode.style.top = "0vh";
            setTimeout(function() {
                var imgblocks = document.getElementsByClassName("blockimage");
                imgblocks[0].style.borderTop = "none";
            }, 1000);

        }

    } else {

        if (imgblocks.parentNode.style.left == "0px") {
            document.querySelector("#vidvid").style.right = "0";
            document.querySelector("#vidvid").style.left = "unset";
            imgblocks.parentNode.style.left = "31%";
        } else if (imgblocks.parentNode.style.left == "31%") {
            imgblocks.parentNode.style.left = "0px";
            document.querySelector("#vidvid").style.left = "0";
            document.querySelector("#vidvid").style.right = "unset";
        }
    }
    updatetext();
}


function updatetext() {
    var imgblocks = document.getElementsByClassName("blockimage");
    var textout = document.createElement('div');
    textout.innerHTML = TEXT;
    textout.querySelector('.title').innerHTML = content[projectnumber][0];
    textout.querySelector('.type').innerHTML = content[projectnumber][1];
    textout.querySelector('.info').innerHTML = content[projectnumber][2];
    if (window.innerWidth > 500) {
        if (imgblocks[0].style.left == "0px") {
            document.getElementById("textgoch").innerHTML = textout.innerHTML;
        } else if (imgblocks[0].style.left == "31%") {
            document.getElementById("textdroite").innerHTML = textout.innerHTML;
        }
    } else {

        if (imgblocks[0].style.top == "50%") {
            document.getElementById("textgoch").innerHTML = textout.innerHTML;

        } else if (imgblocks[0].style.top == "0vh") {
            document.getElementById("textdroite").innerHTML = textout.innerHTML;
        }
    }
}


function changeimage() {
    imagenumber++;

    var hello = content[projectnumber][3];
    var array = hello.split(",");
    if (imagenumber >= array.length) imagenumber = 0;
    let vidnam = "#vidvid";
    if (numbergood == 1) vidnam = "#vidvid2";
    if (array[imagenumber].includes(".mp4")) {
        videoo = true;
        document.querySelector(vidnam).muted = false;
        document.querySelector(vidnam).volume = 0.7;
        document.querySelector(vidnam).style.display = "block";
        document.querySelector(vidnam).src = "img/" + array[imagenumber];
        document.querySelector(vidnam).play();

    } else {
        if (videoo) {
            videoo = false;
            document.querySelector(vidnam).pause();
            document.querySelector(vidnam).muted = true;

            document.querySelector(vidnam).style.display = "none";
        }

        var imgblocks = document.getElementsByClassName("blockimage")[0].children[numbergood];

        imgblocks.style.background = "url('img/" + array[imagenumber] + "') no-repeat center white";
        imgblocks.style.backgroundSize = "cover";
    }
}


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
    if (window.innerWidth > 500) {

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

}

function opencloseinfo() {

    if (document.querySelector("#conteneur").children[0].children[0].classList.contains("fermé")) {
        document.querySelector("#conteneur").children[0].children[0].classList.remove("fermé");
        document.querySelector(".lang").children[0].textContent = "-";
        document.querySelector("#conteneur").children[0].style.flex = "7";
        document.querySelector("#conteneur").children[1].style.flex = "0";
        document.querySelector("#conteneur").children[2].style.flex = "0";
        document.querySelector("#vidvid").pause();
        document.querySelector("#vidvid").muted = true;

        setTimeout(function() {
            document.querySelector("#conteneur").children[1].style.display = "none";
            document.querySelector("#conteneur").children[2].style.display = "none";
            document.querySelector(".bascontact").style.display = "block";
            document.querySelector(".biographie").style.opacity = "1";

        }, 400);

        setTimeout(function() {
            document.querySelector(".biographie").style.opacity = "1";

        }, 300);

        setTimeout(function() {
            document.querySelector(".biographie").style.display = "flex";

        }, 250);

    } else {
        document.querySelector("#conteneur").children[1].style.display = "flex";
        document.querySelector("#conteneur").children[2].style.display = "flex";
        document.querySelector(".bascontact").style.display = "none";
        document.querySelector(".biographie").style.opacity = "0";


        setTimeout(function() {

            document.querySelector(".biographie").style.display = "none";


        }, 400);

        setTimeout(function() {
            document.querySelector("#conteneur").children[1].style.flex = "0.5";
            document.querySelector("#conteneur").children[2].style.flex = "10";
            document.querySelector("#conteneur").children[0].style.flex = "0.4";


        }, 300);

        document.querySelector("#conteneur").children[0].children[0].classList.add("fermé");
        document.querySelector(".lang").children[0].textContent = "+";


    }


}


var request = new XMLHttpRequest();
request.open("GET", "contenu.json", false);
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
    container.style.filter = "hue-rotate(" + content[i][4] + "deg) saturate(200%)";
    container.innerHTML = BUTTON;
    if (i == 0) container.children[0].classList.add("activo");
    container.children[0].id = i;
    document.querySelector("#navproject").appendChild(container);
}



document.querySelector("#conteneur").addEventListener("wheel", event => {
    if (document.querySelector("#conteneur").children[0].children[0].classList.contains("fermé")) {
        let delta;
        if (toggleEvent) {
            if (event.deltaY) {
                delta = Math.sign(event.deltaY);
            } else {
                delta = Math.sign(event.deltaX * -1);
            }
            if (delta != 0) {

                projectnumber += delta - 1;

                if (projectnumber < -1) projectnumber = content.length - 2;
                if (projectnumber >= content.length) projectnumber = content.length - 1;
                changeproject();
                toggleEvent = false;
                setTimeout(function() {
                    toggleEvent = true;
                }, 1500);
            }



        }
    }
});

changeimage();
updatetext();