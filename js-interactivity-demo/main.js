let count = 0;
const counterText = document.querySelector('#counter')
const increase = () => {
  count += 1;
  counterText.textContent = count
};

const decrease = () =>{ 
    (count -= 1);
    counterText.textContent = count
};


const reset = () =>{ 
    (count = 0);
    counterText.textContent = count
}

const plusBtn = document.querySelector("#plus-btn");
const minusBtn = document.getElementById("minus-btn"); //can use either this function or the query selector
const resetBtn = document.querySelector("#reset-btn");

//event listener takes in 2 arguments, type of event and a callback, the increase function we made, don't invoke using ()!!
plusBtn.addEventListener("click", increase);
minusBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);

const buttons = document.querySelectorAll('.theme-buttons')//buttons will be an array of all the theme buttons

const selectTheme = (event) =>{
    const theme = event.target.textContent//selects the element based on the text inside i.e. Facebook, Twitter, etc

    const body = document.querySelector('body')
    const main = document.querySelector('main')

    main.className = theme
    body.className = theme

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme
    }
}


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',selectTheme)

}