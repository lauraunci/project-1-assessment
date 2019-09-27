

/*----- constants -----*/


/*----- app's state (variables) -----*/
let counter, input;

// /*----- cached element references -----*/

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const countEl = document.getElementById("count");
const inputEl = document.querySelector("number");

// /*----- event listeners -----*/
add.addEventListener("click", sum);
subtract.addEventListener("click", minus);

/*----- functions -----*/
function sum(){
	if(inputEl.value) {
		counter++
    }
}

function minus(){
	if(inputEl.value) {
	counter--
    }
}

const render = () => {
    countEl.textContent = counter;
    inputEl.textContent = input;
}
    
const init = () => {
    counter = 0;
    input = 1;

    render();
}

init();

