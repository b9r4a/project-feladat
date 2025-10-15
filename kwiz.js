let indexArray = []

function randomArray() {
  indexArray.sort(() => Math.random() - 0.5);
  console.log(indexArray);
}

window.addEventListener("load", () => {
for (let i = 0; i < 10; i++) {
  indexArray.push(i)

}
  randomArray();
  fetch("questions.json")
    .then(json => json.json())
    .then(json => {writeJson(json)});
})

function writeJson(json){
  indexArray.forEach(i => {
    const item = json[i]
    console.log(item.question)
    document.getElementById("datas").innerHTML += `<h3>${item.question}</h3>`;
    
    item.answers.forEach(element => {
      console.log(`Válasz: + ${element.text} - ${element.points}`)
      document.getElementById("datas").innerHTML += `<input type="radio" name="${item.question}" value="${element.points}">${element.text}<br>`;
      

    });
  });
}

function Kiszamol(){
const adatok = document.getElementById("datas");
    array = [];

    let fromdata = new FormData(adatok);
    let osszeg = 0;

    for (const [key,value] of fromdata) {
        console.log(`${key}: ${value}`);

        array[key] = value;
        let sz = parseInt(value);
        if (!isNaN(sz)) {

            osszeg += sz;

          if(osszeg >=0 && osszeg<=8)
        {
          console.log("Sajnos ez most nem sikerült. Tanulmányozza át még párszor a kártyákat, és ne feledje: ha megpróbál segíteni, már akkor többet tett a páciensért, mint azok, akik meg sem próbálták.")
        }

        else if (osszeg >=9 && osszeg <=14 )
        {
          console.log("Semmi baj, az alapok megvannak, egy gyors ismétlés és sokkal jobban fog sikerülni!")
        }
        else if (osszeg >= 15 && osszeg <=20){
          console.log("Kiváló teljesítmény, remek életmentő válna Önből!")
        }
        }
        
    }
    


    console.log(array);
    console.log(osszeg);

}