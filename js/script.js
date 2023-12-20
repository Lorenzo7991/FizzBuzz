/* DOM - JS Test response */
console.log('JS OK');

// CONSOLE OUTPUT SECTION:

/*  //Ciclo per conteggio da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Verifica del valore "i" multiplo di 3 e di 5: se "i modulo di 3" restituisce 0, quindi non ha resto, è multiplo di 3. altrettanto per il 5. se entrambe le condizioni sono verificate. stampa in console "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // Verifica se è solo multiplo di 3 e stampa "Fizz"
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Verifica se è solo multiplo di 5 e stampa "Buzz"
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // ALTRIMENTI: Stampa un numero
    else {
        console.log(i);
    }
} 
 */
const rowElement = document.querySelector('.row');

const buttonElement = document.querySelector(".btn-create").addEventListener('click', function() {
rowElement.innerHTML = ""; 

for (let i = 1; i <= 100; i++) {
    let squareResult = "";
    let bgColor = "";
    
    if (i % 3 === 0 && i % 5 === 0) {
        squareResult = "BuzzFizz";
        bgColor = "bg-red";
    } else if (i % 3 === 0) {
        squareResult = "Fizz";
        bgColor = "bg-green";
    } else if (i % 5 === 0) {
        squareResult = "Buzz";
        bgColor = "bg-yellow";
    } else {
        squareResult = i.toString();
        bgColor = "bg-blue";
    }

    rowElement.innerHTML += `
        <div class="col">
            <div class="square d-flex justify-content-center align-items-center ${bgColor}">
            <span class="square-text fw-bolder fs-6">${squareResult}</span>
            </div>
        </div>
    `;
}
});

const buttonClrElement = document.querySelector(".btn-clear").addEventListener('click', function() {
    rowElement.innerHTML = ""; 
});