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

function round() {
    let random = Math.trunc(Math.random() * q.length);
    randomWordsLength = a[random].length;
    qq.textContent = q[random];

    // Очищення попередніх відповідей
    aa.innerHTML = "";

    // Створення елементів для кожної літери відповіді
    for (let i = 0; i < randomWordsLength; i++) {
        const el = document.createElement("p");
        el.classList.add("letter"); // Додаємо клас для подальшої роботи
        aa.appendChild(el);
    }

    let kvadra = document.querySelectorAll(".letter");
    let answearText = a[random].toLowerCase();

    // Додаємо слухачів на кліки для кожної літери
    for (let letter = 0; letter < answearText.length; letter++) {
        let letterEl = document.createElement("span");
        letterEl.textContent = answearText[letter];
        letterEl.classList.add("clickable-letter");
        
        // Додаємо слухача на клік для кожної літери
        letterEl.addEventListener("click", function () {
            let letterClick = this.textContent.toLowerCase();
            for (let k = 0; k < answearText.length; k++) {
                if (answearText[k] === letterClick) {
                    kvadra[k].textContent = this.textContent;

                    // Перевірка на правильність відповіді
                    if (Array.from(kvadra).every(item => item.textContent !== "")) {
                        alert("Вітаємо! Ви вгадали відповідь.");
                    }
                }
            }
        });
        
        aa.appendChild(letterEl); // Додаємо букву до контейнера
    }
}

// Запускаємо гру
round();
