/* DOM - JS Test response */
console.log('JS OK');

// CONSOLE OUTPUT SECTION:

//Ciclo per conteggio da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Verifica del valore "i" multiplo di 3 e di 5: se "i modulo di 3" restituisce 0, quindi non ha resto, è multiplo di 3. altrettanto per il 5. se entrambe le condizioni sono verificate. stampo in console "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log("i");
    }
    
}