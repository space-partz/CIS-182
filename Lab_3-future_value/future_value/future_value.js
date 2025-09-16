"use strict";

// get investment amount - loop until user enters a number
let investment = 0;
do {
    investment = parseFloat(
        prompt("Enter investment amount as xxxxx.xx", 10000));
}
while ( isNaN(investment) );

// get interest rate - loop until user enters a number
let rate = 0;
do {
    rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
}
while ( isNaN(rate) );

// get number of years - loop until user enters a number
let years = 0;
let totalMonths = 0;
do {
    years = parseInt(prompt("Enter number of years", 10));
    // Determine total number of months for total number of years
    totalMonths = years * 12;
}
while ( isNaN(years) );

// calulate future value
let futureValue = investment;
for (let i = 1; i <= years; i++ ) {
    futureValue += futureValue * rate / 100;
}

//calculate monthly interest value
let futureMonthlyValue = investment;
let monthlyInterest = (rate / 100) / 12;
for (let i = 1; i <= totalMonths; i++ ) {
    futureMonthlyValue += futureMonthlyValue * monthlyInterest;
}


// display results
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${futureValue.toFixed(2)}</p>`);

// display monthly interest results
document.write('<h2 style="color: blue;">Future Value with Monthly Interest</h2>');
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${futureMonthlyValue.toFixed(2)}</p>`);

