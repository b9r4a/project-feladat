let indexArray = []

function randomArray() {
  indexArray.sort(() => Math.random() - 0.5);
  console.log(indexArray);
}

window.addEventListener("load", () => {
for (let i = 0; i < 5; i++) {
  indexArray.push(i)

}
  randomArray();
  fetch("questions2.json")
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

            if(osszeg >=0 && osszeg<=2)
        {
          console.log("Dicséretes a próbálkozás, ne add fel, legközelebb jobban fog sikerülni!")
        }

        else if (osszeg >=3 && osszeg <=6 )
        {
          console.log("Szép volt, de megy ez jobban is. Nézz utána még egyszer.")
        }
        else if (osszeg >= 7 && osszeg <=10){
          console.log("Nagyszerű, ügyes életmentő vagy, csak így tovább!")
        }
        }

         
          
        
    }


    console.log(array);
    console.log(osszeg);
    window.location.href = "oklevel-gyerek.html";
}