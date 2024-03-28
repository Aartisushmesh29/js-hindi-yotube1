// Immediately Invoked Function Expressions (IIFE)
// --> The funstions which are immediatlyy execeuted to avoid global scope pollution 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// simple iifi
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
