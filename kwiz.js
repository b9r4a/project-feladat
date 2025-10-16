let indexArray = []

function randomArray() {
  indexArray.sort(() => Math.random() - 0.5);
  console.log(indexArray);
}

window.addEventListener("load", () => {
  const datasEl = document.getElementById("datas");
  if (!datasEl) return;

  indexArray = [];
  for (let i = 0; i < 10; i++) {
    indexArray.push(i)
  }
  randomArray();
  fetch("questions.json")
    .then(resp => resp.json())
    .then(json => { writeJson(json, datasEl) })
    .catch(err => console.error("questions.json betöltési hiba:", err));
})

function writeJson(json, datasEl){
  indexArray.forEach(i => {
    const item = json[i]
    if (!item) return;
    console.log(item.question)
    datasEl.innerHTML += `<h3>${item.question}</h3>`;
    
    item.answers.forEach(element => {
      console.log(`Válasz: + ${element.text} - ${element.points}`)
      datasEl.innerHTML += `<input type="radio" name="${item.question}" value="${element.points}">${element.text}<br>`;
    });
  });
}

function Kiszamol(){
  const adatok = document.getElementById("datas");
  if (!adatok) { console.error("Form#datas nincs az oldalon."); return; }
  let array = [];
  let fromdata = new FormData(adatok);
  let osszeg = 0;

  for (const [key,value] of fromdata) {
      console.log(`${key}: ${value}`);
      array[key] = value;
      let sz = parseInt(value, 10);
      if (!isNaN(sz)) osszeg += sz;
  }

  let eredmenyUzenet = "";
  if(osszeg >=0 && osszeg<=8) {
      eredmenyUzenet = "Sajnos ez most nem sikerült. Tanulmányozza át még párszor a kártyákat, és ne feledje: ha megpróbál segíteni, már akkor többet tett a páciensért, mint azok, akik meg sem próbálták.";
  } else if (osszeg >=9 && osszeg <=14 ) {
      eredmenyUzenet = "Semmi baj, az alapok megvannak, egy gyors ismétlés és sokkal jobban fog sikerülni!";
  } else if (osszeg >= 15 && osszeg <=20) {
      eredmenyUzenet = "Kiváló teljesítmény, remek életmentő válna Önből!";
  }

  console.log(array);
  console.log(osszeg);

  localStorage.setItem('osszeg', String(osszeg));
  localStorage.setItem('osszeg_message', eredmenyUzenet);

  window.location.href = "oklevel-felnott.html";
}

