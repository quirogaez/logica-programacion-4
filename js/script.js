
let btnSubmit = document.querySelector(".btnSubmit");
let fibonacci;
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let inputNumber = document.querySelector("#inpNumber");
    let inputValue = inputNumber.value;


    try {
        inputValue = parseInt(inputValue);
        if (isNaN(inputValue)) {
            throw new Error("El valor debe ser de tipo entero");
        }
        if (inputValue < 0) {
            throw new Error("El valor debe ser mayo a 0");
        }
        /* Calcular Fibonacci */
        const resFibonacci =  calcFibonacci(inputValue);
        /* Pintar Fibonacci */
        showFibonacci(inputValue, resFibonacci);
    }
    catch (error) {
        createError(error.message);
    } 
    
})


function createError(message) {
    /* Variables del scope createError */
    const container = document.querySelector(".container");
    const containerFirstNode = document.querySelector(".container").firstChild;
    
    /* Elementos html a utilziar en el error */
    divError = document.createElement("div");
    textError = document.createElement("p");
    closeError = document.createElement("button");

    /* Añadiendo estilo al div error */
    divError.classList.add("divError");

    /* Insertando mensaje de error */
    textError.textContent = message;
    textError.classList.add("textError");
    

    /* Creando boton cerrar */
    closeError.textContent = "X";
    closeError.classList.add("closeError");

    /* Añadiendo evento al boton */
    closeError.addEventListener("click", function(e) {
        container.removeChild(this.parentNode);
    })

    /* Añadiendo aL div de error */
    divError.appendChild(textError);
    divError.appendChild(closeError);

    /* Añadiendo el error a la etiqueta section */
    container.insertBefore(divError, containerFirstNode);

    /* Añadiendo un setTimrout para que desaparezca en un periordo de tiempo */
}

function calcFibonacci(num, memo = {num, acc: {}}) {
    /* Funcion encargada de calcular el Fibonacci */

    /* Se guarda el num que determina la posicion actual */
    memo.num = num;
    /* Se asigna el objeto memo para que sea accecible fuera de la funcion */
    fibonacci = memo;
    /* Condicioneles para retornar */
    if (memo.num in memo.acc) {
        return memo.acc[num];
    }
    if (memo.num <= 1) {
        memo.acc[num] = memo.num;
        return memo.num;
    }
    memo.acc[num] = calcFibonacci(num - 1, memo) + calcFibonacci(num - 2, memo);
    return memo.acc[num];
}

function showFibonacci(num, res) {
    /* Funcion que pinta el nujmero Fibonacci en la pantalla */
    let resFibonacciDiv =  document.querySelector(".resultFibonacci");
    resFibonacciDiv.innerHTML = "";
    let position = 0;
    /* Bucle para imprimir todas los valores de fibonacci segun el numero de posiciones n */
    for (let value of Object.values(fibonacci.acc)) {
        /* Elementos html a utilizar */
        let resText = document.createElement("h1");
        /* Añadiendo clase */
        resText.classList.add("resFibonacci");
        
        resText.innerHTML = `El fibonacci de la posicion ${position} es: ${value}`;
        /* Agregar nodo al div */
        resFibonacciDiv.appendChild(resText);
        /* Aumentar posicion */
        position++;
    }
}
