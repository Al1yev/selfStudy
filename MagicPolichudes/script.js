let textC = document.getElementById("word1");
let letterBox = document.querySelector(".letter-table");
let wordBox = document.querySelector(".word-table");
let wordDefinition = document.querySelector(".word-definition");

let word;
let difinition;
let cWord;
fetch("https://random-words-api.vercel.app/word")
  .then((result) => result.json())
  .then(([data]) => {
    word = data.word.toUpperCase();
    difinition = data.definition;
    cWord = word.split("").map((val, key) => [val, key]);
    console.log(word);
    firstSet(word);
    letterBox.addEventListener("click", function (e) {
      let tan = e.target;
      if (tan.className.split(" ")[0] == "letter")
        if (word.includes(tan.textContent) && cWord.length) {
          setWord(tan.textContent);
        }
    });
  });
// let word = data.word;
// let difinition = data.definition;
// let cword = word;

let firstSet = (soz) => {
  wordDefinition.insertAdjacentHTML("beforeend", difinition);
  for (let i = 0; i < soz.length; i++) {
    html = `<div class="word" id="${i}"></div>`;
    wordBox.insertAdjacentHTML("beforeend", html);
  }
};

let setWord = (h) => {
  console.log(h);
  let [el] = cWord.filter((val) => val[0] == h);
  let ind = el[1];
  let joyi = document.getElementById(ind);
  console.log(el);
  joyi.textContent = h;
  cWord = cWord.filter((val) => val[1] != ind);
  console.log(cWord);
  if (cWord.length == 0) setTimeout(() => alert(`Congratulations!!!`), 1000);
};
