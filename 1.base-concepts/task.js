"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let D = b ** 2 - 4 * a * c;
	if (D === 0) {
		let x = -b / (2 * a);
		arr.push(x);
	} else if (D > 0) {
		let x1 = (-b + Math.sqrt(D)) / (2 * a)
		let x2 = (-b - Math.sqrt(D)) / (2 * a)
		arr.unshift(x1, x2);
	}
	return arr;
}
solveEquation(1, 2, 10)

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = percent / 100 / 12
	let S = amount - contribution;
	let payment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
	let amountOfCredit = payment * countMonths;
	return +amountOfCredit.toFixed(2)
}
calculateTotalMortgage(10, 0, 50000, 12);