const oldPriceDOM = document.querySelector("#oldPrice");
const stockNumberDOM = document.querySelector("#stockNumber");
const newPriceDOM = document.querySelector("#newPrice");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
output.style.display = "none";  

btn.addEventListener("click", ()=> {
    const oldPrice = oldPriceDOM.value;
    const stockNumber = stockNumberDOM.value;
    const newPrice = newPriceDOM.value;
    const invest = oldPrice * stockNumber;
    const outputPrice = newPrice * stockNumber;
    const finalPrice = outputPrice - invest;
    if(finalPrice > 0) {
        const percentage = (finalPrice / invest) * 100;
    } else if(finalPrice == 0) {
        output.textContent = "You neither had a Profit nor a Loss";
        output.style.display = "block";
    } else if(finalPrice < 0) {
        const percentage = ((invest - outputPrice) / invest) * 100;
    }
})