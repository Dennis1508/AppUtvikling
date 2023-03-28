import Dictionary from "./Dictionary.mjs";


let buttonEn = document.getElementById("buttonEn");
let buttonNo = document.getElementById("buttonNo");
let header = document.getElementById("header");
let posGK = document.getElementById("posGK");
let posCB = document.getElementById("posCB");
let posCM = document.getElementById("posCM");
let posST = document.getElementById("posST");
let playerInformationH2 = document.getElementById("playerInformationH2");
let myInput = document.getElementById("myInput");
let btnSearch = document.getElementById("btnSearch");
let selectPosPlayer = document.getElementById("selectPosPlayer");
let inputPlayer = document.getElementById("inputPlayer");





buttonEn.addEventListener("click", function (evt) {
    header.innerHTML = Dictionary.en.header;
    buttonEn.innerHTML = Dictionary.en.buttonEn;
    buttonNo.innerHTML = Dictionary.en.buttonNo;
    posGK.innerHTML = Dictionary.en.posGK;
    posCB.innerHTML = Dictionary.en.posCB;
    posCM.innerHTML = Dictionary.en.posCM;
    posST.innerHTML = Dictionary.en.posST;
    playerInformationH2 = Dictionary.en.playerInformationH2;
    myInput.innerHTML = Dictionary.en.myInput;
    btnSearch.innerHTML = Dictionary.en.btnSearch;
    selectPosPlayer.innerHTML = Dictionary.en.selectPosPlayer;
    inputPlayer.innerHTML = Dictionary.en.inputPlayer;


});

buttonNo.addEventListener("click", function (evt) {
    header.innerHTML = Dictionary.no.header;
    buttonNo.innerHTML = Dictionary.no.buttonNo;
    buttonEn.innerHTML = Dictionary.no.buttonEn;
    posGK.innerHTML = Dictionary.no.posGK;
    posCB.innerHTML = Dictionary.no.posCB;
    posCM.innerHTML = Dictionary.no.posCM;
    posST.innerHTML = Dictionary.no.posST;
    playerInformationH2 = Dictionary.no.playerInformationH2;
    myInput.innerHTML = Dictionary.no.myInput;
    btnSearch.innerHTML = Dictionary.no.btnSearch;
    selectPosPlayer.innerHTML = Dictionary.no.selectPosPlayer;
    inputPlayer.innerHTML = Dictionary.no.inputPlayer;


});
































