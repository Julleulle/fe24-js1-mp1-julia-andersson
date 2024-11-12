// skapar och stylar översta "listan"
for (let i=1; i<6; i++ ){
    const h1El = document.createElement ('h1') 
    document.body.append (h1El)

    const hue = 150 + i*10
    h1El.style.backgroundColor = `hsl(${hue}, 100%, 80%)`

    h1El.innerText = ` Rad `+ i
    h1El.style.textAlign = 'center'
    h1El.style.fontSize = `${i/2+1}rem`
    h1El.style.color = `hsl(245, 60%, 60%)`

    }


// skapar och stylar huvud diven
const containerDiv = document.createElement('div');

containerDiv.style.display = 'flex'
containerDiv.style.justifyContent = 'space-around'
containerDiv.style.border = '2px solid black'


// skapar första div taggen och ger den en klass
const div1 = document.createElement('div');
div1.classList.add('div-style',);

// skapar och ger p taggarna rätt nummer
for (let d = 0; d < 10; d++) {
    const pEl = document.createElement('p');
    div1.append(pEl);
    
    pEl.innerText = d;
    pEl.style.paddingLeft = '20px'
    pEl.style.paddingRight = '20px'
    pEl.style.backgroundColor = 'white'

    if (d%2 == 0) {
        pEl.style.backgroundColor = 'black'
        pEl.style.color = 'white'
    }
// gör att den p tagg som har siffran 4 har en annan bakgrunsfärg
    if (d === 4) {
        pEl.style.backgroundColor = 'hsl(268 100% 85%)'
    }
}


// skapar andra div taggen och ger den en klass
const div2 = document.createElement('div');
div2.classList.add('div-style',);

// skapar och ger p taggarna rätt nummer
for (let d = 9; d >= 0; d--) {
    const pEl = document.createElement('p');
    div2.append(pEl);
    
    pEl.innerText = d;
    pEl.style.paddingLeft = '20px'
    pEl.style.paddingRight = '20px'
    pEl.style.backgroundColor = 'white'

// gör att de jämna nummerna har svart bakgrundsfärg
    if (d%2 == 0) {
        pEl.style.backgroundColor = "black";
        pEl.style.color = "white"
    }

// gör att den p tagg som har siffran 8 har en annan bakgrunsfärg
    if (d === 8) {
        pEl.style.backgroundColor = "hsl(268 100% 85%)";
    }
}


// skapar tredje div taggen och ger den en klass
const div3 = document.createElement('div');
div3.classList.add('div-style',)

const numbersInWords = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];


// skapar p taggarna och lägger till en string från arrayen
for (let d = 0; d < numbersInWords.length; d++) {
    const numbersInWord = numbersInWords[d];

    const pEl = document.createElement('p');
    div3.append(pEl);

    pEl.innerText = numbersInWord;
    pEl.style.paddingLeft = '15px'
    pEl.style.paddingRight = '15px'
    pEl.style.backgroundColor = 'white'

// gör att de jämna nummerna har svart bakgrundsfärg
    if (d % 2 === 0) {
        pEl.style.backgroundColor = "black";
        pEl.style.color = "white";
    }

// gör att den p tagg som det står `sex` har en annan bakrunsfärg
    if (d === 5) {
        pEl.style.backgroundColor = "hsl(268 100% 85%)";
    }
}


// lägger till de tre divarna i huvud diven
containerDiv.append(div1, div2, div3);

// lägger till huvud diven i body
document.body.append(containerDiv);




 

