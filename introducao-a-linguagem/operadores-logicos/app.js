function segundoOperador() {
    console.log('avaliando segundo operador.');
    return true;
}

const a = false || segundoOperador(); 
console.log(a); // true
const b = true || segundoOperador();
console.log(b); // true
const c = !a || !b;
console.log(c); // false

