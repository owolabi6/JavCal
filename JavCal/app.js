/* FUNCTION ASSESSMENT
FINDING AREA OF A TRIANGLE */
function calArea (width, height) {
    let a = 0;
    let b = 0;
    let c = 0;
    let s = a+b+c/2;
    
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    document.write("The area of the Triangle is"+ area);
}
calArea();

function calc() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let s = a+b+c/2;
    
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    document.getElementById("answer").value = area;
}
calc();


const calculate = document.getElementById("calculate");
const result = document.getElementById("result");
const smallRate = 2;
const mediumRate = 3;
const largeRate = 7;
const noOfDaysInAYear = 365;
const maximumAge = 80;

function supplyCalculator() {
    let currentAge = document.getElementById("age").value;
    let supplyType = document.getElementById("supplyType").value;
    let totalSupplies;

    if (supplyType === "1") {
        totalSupplies = (maximumAge - currentAge) * noOfDaysInAYear * smallRate;
        result.innerHTML = `<p>Your Supply of chicken for the Year is: ${totalSupplies}</p>`;
    } else if (supplyType === "2") {
        totalSupplies = (maximumAge - currentAge) * noOfDaysInAYear * mediumRate;
        result.innerHTML = `<p>Your supply of chicken  for the Year is: ${totalSupplies}</p>`;
    } else if (supplyType === "3") {
        totalSupplies = (maximumAge - currentAge) * noOfDaysInAYear * largeRate;
        result.innerHTML = `<p>Your supply of chicken for the Year is: ${totalSupplies}</p>`;
    }

    // Remove this line as it's not needed
    // currentAge.value = result;
}

calculate.addEventListener("click", supplyCalculator);
//document.getElementById("answer").value = result;



