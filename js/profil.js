let danse = true;

function changePlace(bla) {
        danse = true;

        let largeur = window.innerWidth;
        let longueur = window.innerHeight;

        bla.style.top = getRandomInt(longueur - 50) + "px";
        bla.style.left = getRandomInt(largeur - 50) + "px";


}

function changePlaceD() {
    danse = false;

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}