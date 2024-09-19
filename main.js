//letters
const letters = "abcdefghigklmnopqrstuvwxyz"
//get Array From Letter
let leteerArray = Array.from(letters);

//Select Leter Contaner
let letterContainer = document.querySelector('.letters')

leteerArray.forEach(letter => {
    let span = document.createElement('span')
    
    let text = document.createTextNode(letter) 
    span.appendChild(text)
    span.className = 'letter-box';
    letterContainer.appendChild(span)

    
});

//objeect of wordes + Catigorey
const words = {
    programing:["php","javadcript","go","scala", "fortran","r","mysql","paython"],
    movies:["Prestige","Inception","Interstellar","Whiplash","Memento","Coco","Up"],
    pepole:["Mohamed","Hesham","Waleed","Zyad"],
    countries:["U SA","KSA","E GY","E ROP","Qater","Yamen"]
}

let allkeys = Object.keys(words)

let randomproNumber = Math.floor(Math.random() * allkeys.length)

let rondompropName = allkeys[randomproNumber]

let rondomPropvalue = words[rondompropName ]

let rondomvalueNember = Math.floor(Math.random( )* rondomPropvalue.length)

let rondomvaluevalue = rondomPropvalue[rondomvalueNember]

document.querySelector('.game-info span').innerHTML = rondompropName +" "+  rondomvaluevalue

let lettersGuessContainer = document.querySelector(".letters-guess")

let lettterAndscpace = Array.from(rondomvaluevalue);

lettterAndscpace.forEach(letter => {
    
    let emptyspan = document.createElement('span')

    if(letter === ' ') {

        emptyspan.className = "with-space";

    }
    lettersGuessContainer.appendChild(emptyspan)
});

let gessspan = document.querySelectorAll('.letters-guess span ')

let WrongAttempets = 0;

let theDraw = document.querySelector('.hangman-draw')


//handel Click on Leater
document.addEventListener('click',(e) => {

    let thestatus = false; 
    
    if(e.target.className ==='letter-box') {
        e.target.classList.add('Clicked');

        let theClickedLetter = e.target.innerHTML.toLowerCase();

        let theChosenWord = Array.from(rondomvaluevalue.toLowerCase());

        // console.log(theClickedLetter)

        theChosenWord.forEach((wordleter,wordindex)=> {

            if(theClickedLetter == wordleter ) {

                thestatus = true;
                //loop on all sessspan
                gessspan.forEach((span, indexspan)=> {
                    if(wordindex == indexspan) {
                        span.innerHTML = theClickedLetter
                    }
                })

            }
        });
        //if leater is wrong
        if(thestatus !== true) {

            WrongAttempets++;

            theDraw.classList.add(`wrong-${WrongAttempets}`);

            document.getElementById('fail').play()

            if(WrongAttempets === 8) {

                endGame();
                
                letterContainer.classList.add("finshed")

            }

            
        }else {
            document.getElementById('sucsess').play();
        }

    }
});
function endGame() {
    let div = document.createElement('div');

    let textdiv = document.createTextNode(`Game Over, The Word Is ${rondomvaluevalue}`)

    div.appendChild(textdiv);

    div.className = "popup";

    document.body.appendChild(div)
}
function level (){
    let div = document.createElement('div');

    let textdiv = document.createTextNode(`Game Over,your in level midellThe Word Is ${rondomvaluevalue}`)
    div.className = "meddel";

    document.body.appendChild(div)
}