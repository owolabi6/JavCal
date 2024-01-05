// const calCULATE = document.getElementById("calculate");
// const result = document.getElementById("result");
// const smallRate = 2;
// const mediuumRate = 3;
// const largeRate = 7;
// const noOfDaysInAYear = 365;
// const maximumAge = 80;

// function supplyCalculator()
// {
//     let currentAge = document.getElementById("age").value;
//     let supplyType =  document.getElementById("supplyType").value;
//     let totalSupplies;
    
//     //return totalSupplies;
//     if (supplyType === "1"){
//         totalSupplies = (maximumAge - currentAge) * noOfDaysInAYear * smallRate
//         result.innerHTML = `<p> Your Supply for the Year is: ${totalSupplies}</p>`   
//     }elseif(supplyType === "2")
//     {
//         totalSupplies = (maximumAge - currentAge) * noOfDaysInAYear * mediuumRate;
//         result.innerHTML = `<p>Your monthly payment for the month is : ${totalSupplies}</p>`
//     }
//     elseif(supplyType === "3")
//     {
//         totalSupplies = (maximumAge - currentAge) * noOfDaysInAYear * largeRate;
//         result.innerHTML = `<p>Your monthly payment for the month is : ${totalSupplies}</p>`
//     }
//     calCULATE.addEventListener(`click`, supplyCalculator);
// currentAge.value = result;
// }