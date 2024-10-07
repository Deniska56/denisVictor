const q = [
    "Яка мова програмування є основною для розробки веб-сторінок на клієнтській стороні?",
    "Який тип пам'яті є тимчасовим і швидким, але втрачає дані після вимкнення комп'ютера?",
    "Який формат файлів часто використовують для зображень у Інтернеті через його стиснення без втрат якості?"
  ];
  
  const a = [
    "JavaScript",
    "RAM",
    "PNG"
  ];
  let randomWordsLength = 0;
  let qq = document.querySelector(".q");
  let aa = document.querySelector(".a");
  
  console.log(qq);
  
  function round() {
    let random = Math.trunc(Math.random() * q.length);
    randomWordsLength = a[random].length
    qq.textContent = q[random];
  
    for (let i = 0; i < a[random].length; i++) {
      const el = document.createElement("p");
      aa.appendChild(el);
    }
  
    let kvadra = document.querySelectorAll("p");
    
    if (kvadra > randomWordsLength){
       kvadra[e].style.display = "none"
    for (let e = 0 ;e < kvadra.length - randomWordsLength; e++){
    }
  }
    
    let answearText = a[random].toLowerCase();
  let letters = document.querySelectorAll(".letter");
    
    for (let letter = 0; letter < letters.length; letter++) {
      letters[letter].addEventListener("click", function () {
        let letterClick = this.textContent.toLowerCase();
        for (let k = 0; k < a[random].length; k++) {
          if (answearText[k] == letterClick) {
            kvadra[k].textContent = this.textContent;
  
            if (Array.from(kvadra).every(item => item.textContent != "")) {
              });
              });
            }
          }
        }
      });
    }
  }
  round();
  