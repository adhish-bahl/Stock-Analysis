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
        let percentage = (finalPrice / invest) * 100;
        percentage = percentage.toFixed(2);
        let profit = finalPrice;
        profit = profit.toFixed(2)
        output.textContent = `You had gain ${percentage}% of your investment, that is profit of ₹${profit}.`;
    } else if(finalPrice == 0) {
        output.textContent = "You neither had a Profit nor a Loss";
    } else if(finalPrice < 0) {
        let percentage = ((invest - outputPrice) / invest) * 100;
        percentage = percentage.toFixed(2);
        let loss = invest - outputPrice;
        loss = loss.toFixed(2);
        output.textContent = `You had lost ${percentage}% of your investment, that is loss of ₹${loss}.`;
    }
    output.style.display = "block";
})