let indexArray = []

function randomArray() {
  indexArray.sort(() => Math.random() - 0.5);
  console.log(indexArray);
}

window.addEventListener("load", () => {
  const datasEl = document.getElementById("datas");
  if (!datasEl) return;

  indexArray = [];
  for (let i = 0; i < 5; i++) {
    indexArray.push(i)
  }
  randomArray();
  fetch("questions3.json")
    .then(resp => resp.json())
    .then(json => { writeJson(json, datasEl) })
    .catch(err => console.error("questions3.json betöltési hiba:", err));
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
  if(osszeg >=0 && osszeg<=2) {
      eredmenyUzenet = "Dicséretes a próbálkozás, ne add fel, legközelebb jobban fog sikerülni!";
  } else if (osszeg >=3 && osszeg <=6 ) {
      eredmenyUzenet = "Szép volt, de megy ez jobban is. Nézz utána még egyszer";
  } else if (osszeg >= 7 && osszeg <=10) {
      eredmenyUzenet = "Nagyszerű, ügyes életmentő vagy, csak így tovább";
  }

  console.log(array);
  console.log(osszeg);

  localStorage.setItem('osszeg', String(osszeg));
  localStorage.setItem('osszeg_message', eredmenyUzenet);

  window.location.href = "oklevel-gyerek.html";
}

