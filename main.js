const words = [
 {
  word: "Chair",
  hint: "An object for sitting."
 },
 
 {
  word: "Console",
  hint: "To sympathize."
 },
 
 {
  word: "Wife",
  hint: "A married woman."
 },
 
  {
  word: "Dunce",
  hint: "A stupid person."
 },
 
  {
  word: "Canvas",
  hint: "Piece of fabric for oil-painting."
 },
 
  {
  word: "Nigeria",
  hint: "Green - White - Green."
 },
 
  {
  word: "Garden",
  hint: "An area of botanical plants."
 },
 
  {
  word: "Philia",
  hint: "A liking for something."
 },
 
  {
  word: "Muggle",
  hint: "A person who has no magical abilities (Harry Potter)."
 },
 
  {
  word: "Pomiform",
  hint: "Apple-shaped."
 },
 
  {
  word: "Debut",
  hint: "To formally introduce to the public."
 },
 
  {
  word: "Voracious",
  hint: "Having a great appetite for something."
 },
 
  {
  word: "Phalanges",
  hint: "Bones of the finger."
 },
 
  {
  word: "Forgetive",
  hint: "Inventive, Productive."
 },
 
  {
  word: "Kimono",
  hint: "A Japanese robe-like garment."
 },
 
  {
  word: "Geisha",
  hint: "A Japanese female entertainer."
 },
 
  {
  word: "Docile",
  hint: "Submissive, meek, compliant."
 },
 
  {
  word: "Feat",
  hint: "A rare or difficult accomplishment."
 },
 
  {
  word: "ASUU",
  hint: "Nigerian uiversity body that's always on strike."
 },
 
  {
  word: "Lilliputian",
  hint: "A very small being."
 },
 
  {
  word: "Jargon",
  hint: "A terminology unique to a particular subject or profession."
 },
 
  {
  word: "Corona",
  hint: "A deadly virus."
 },
 
  {
  word: "Pariah",
  hint: "An outcast."
 },
 
  {
  word: "Sonnet",
  hint: "A poem of fourteen lines."
 },
 
  {
  word: "Eons",
  hint: "A period of 1,000,000,000 years."
 },
 
  {
  word: "Reroute",
  hint: "To change route."
 },
 
  {
  word: "Graffiti",
  hint: "Form of art involving painting images or texts in public places."
 },
 
  {
  word: "Kettle",
  hint: "Utensil for boiling water."
 },
 
  {
  word: "Needle",
  hint: "An object used in sewing."
 },
 
  {
  word: "Dispel",
  hint: "To drive or wade away."
 },
 
  {
  word: "Market",
  hint: "A place where goods and services are bought."
 },
 
  {
  word: "School",
  hint: "A building where students are taught."
 },
 
  {
  word: "Grimace",
  hint: "A contorted facial expression, often expressing contempt or pain."
 },
 
  {
  word: "Gorgeous",
  hint: "Very beautiful."
 },
 
  {
  word: "Television",
  hint: "Displays both audio and visual form of entertainment."
 },
 
  {
  word: "Clothe",
  hint: "Material for covering the body."
 },
 
 {
  word: "Obnoxious",
  hint: "Extremely unpleasant or offensive, annoying."
 },
 
]


const wordText = document.querySelector(".word");
hintText = document.querySelector(".hint .random-span");
timeText = document.querySelector(".time .time-left b");
refreshButton = document.querySelector(".refresh-word");
checkButton = document.querySelector(".check-word");
inputField = document.querySelector(".input");


let correctWord, timer;

let initTimer = maxTime => {
 clearInterval(timer);
  timer = setInterval(() => {
   if(maxTime > 0){
    maxTime--;
   return timeText.innerText = maxTime;
    
   }
   clearInterval(timer);
   alert(`Time up! ${correctWord.toUpperCase()} was the correct word.`)
   initGame();
  }, 1000);
   
};



const initGame = () => {
 
initTimer(30);
 let randomObj = words[Math.floor(Math.random() * words.length)];
 let wordArray = randomObj.word.split("");
 for (let i = wordArray.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]
  
 }

 
 wordText.innerText = wordArray.join("");
 hintText.innerText = randomObj.hint;
 
 correctWord = randomObj.word.toLowerCase();

 

}
 
 

initGame();


const checkWord = () => {
 
 let userWord = inputField.value.toLocaleLowerCase();
 if (!userWord) return alert("Please, input a word to check.");
 if(userWord !== correctWord) return alert(`NOPEEEE!, "${userWord}" is not the correct word.`)
 alert (`YaaaY!, ${userWord.toUpperCase()} is the correct word.`)
 initTimer(30)
 initGame();
}




refreshButton.addEventListener("click", initGame);
checkButton.addEventListener("click", checkWord);





