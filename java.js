const tipusok = ["gyerek","felnott"];

let modal = document.getElementById("myModal");


let btn = document.getElementById("myBtn");


let span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function gyerekkattintas() {
    gyerekmodal.style.display = "block";
    span.onclick = function() {
      gyerekmodal.style.display = "none";
    }
    window.onclick = function(event) {
      if(event.target == gyerekmodal) {
        gyerekmodal.style.display = "none";
      }
    }
}
function felnottkattintas() {
    felnottmodal.style.display = "block";
    span.onclick = function() {
      felnottmodal.style.display = "none";
    }
    window.onclick = function(event) {
      if(event.target == felnottmodal) {
        felnottmodal.style.display = "none";
      }
    }
}


{
  [
    {
      "id": 1,
      "question": "Mi az első lépés, ha egy sérülthöz érkezik?",
      "answers": [
        {"text": "Megnézem, hogy biztonságos-e a helyszín.", "points": 2},
        {"text": "Odamegyek azonnal, mert minden perc számít.", "points": 0},
        {"text": "Megnézem, hogy biztonságos-e a helyszín, majd megfogom a karját.", "points": 1}
      ]
    },
    {
      "id": 2,
      "question": "Mi a teendő, ha a sérült nem reagál és senki sincs a közelben?",
      "answers": [
        {"text": "Tárcsázom a 112-t vagy indítom az ÉletMentő appot.", "points": 2},
        {"text": "Elindulok segítséget keresni.", "points": 0},
        {"text": "Tárcsázom a 111-et vagy elindítom a Mentő appot.", "points": 1}
      ]
    },
    {
      "id": 3,
      "question": "Hogyan teszi szabaddá a légutakat?",
      "answers": [
        {"text": "Megemeli a sérült állát.", "points": 2},
        {"text": "Lefekteti a sérültet és betakarja.", "points": 0},
        {"text": "Megemeli a sérült fejét.", "points": 1}
      ]
    },
    {
      "id": 4,
      "question": "Hogyan vizsgálja a légzést?",
      "answers": [
        {"text": "Hajoljon a sérült fölé és 10 másodpercig figyelje, hall-e 2 erős légvételt.", "points": 2},
        {"text": "Hajoljon a sérült fölé és 5 másodpercig vizsgálja, hall-e 2 légvételt.", "points": 1},
        {"text": "Csak nézze, hogy mozog-e a mellkas.", "points": 0}
      ]
    },
    {
      "id": 5,
      "question": "Mit mondjon a mentésirányítónak a telefonban?",
      "answers": [
        {"text": "Nevét, pontos helyszínt, sérültek számát, tapasztalt sérülést.", "points": 2},
        {"text": "Csak azt, hogy segítséget kér, mert baj van.", "points": 0},
        {"text": "Csak a nevét és a helyszínt.", "points": 1}
      ]
    },
    {
      "id": 6,
      "question": "Mit nem szabad tennie, amíg a mentők meg nem érkeznek?",
      "answers": [
        {"text": "Letenni a telefont.", "points": 2},
        {"text": "Túl sok kérdést feltenni.", "points": 0},
        {"text": "Kikapcsolni a hangszórót.", "points": 1}
      ]
    },
    {
      "id": 7,
      "question": "Hová helyezze a kezét újraélesztéskor?",
      "answers": [
        {"text": "A szegycsont végétől 2 ujjnyira a tenyérgyökkel.", "points": 2},
        {"text": "A bordákra, közvetlenül a mell alatt.", "points": 0},
        {"text": "A szegycsont közepére a mutatóujjal.", "points": 1}
      ]
    },
    {
      "id": 8,
      "question": "Milyen mélyre kell lenyomni a mellkast újraélesztéskor?",
      "answers": [
        {"text": "5–6 cm mélyre.", "points": 2},
        {"text": "3–4 cm mélyre.", "points": 1},
        {"text": "Csak finoman, nehogy fájjon.", "points": 0}
      ]
    },
    {
      "id": 9,
      "question": "Meddig folytassa a mellkaskompressziókat?",
      "answers": [
        {"text": "A mentők kiérkezéséig.", "points": 2},
        {"text": "2 percig, majd hagyja abba.", "points": 1},
        {"text": "Amíg el nem fárad.", "points": 0}
      ]
    },
    {
      "id": 10,
      "question": "Mit üzen a kártya a cselekvésről?",
      "answers": [
        {"text": "Ha nem tökéletes, még mindig jobb, mint a semmi.", "points": 2},
        {"text": "Csak akkor csinálja, ha teljesen biztos benne.", "points": 0},
        {"text": "Ha nem tökéletes, inkább ne tegye.", "points": 1}
      ]
    }
  ]
}