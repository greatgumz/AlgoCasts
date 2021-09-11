// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

<<<<<<< HEAD
function reverseInt(n) {
	const reversed = n.toString().split('').reverse().join('');
	return parseInt(reversed) * Math.sign(n);

	// if (n < 0) {
	// 	return parseInt(reversed) * -1;
	// }
	// return parseInt(reversed);
}
=======
function reverseInt(n) {}
>>>>>>> feeab87936c294d647721184753b164bbf9f46d6

module.exports = reverseInt;

// function reverseInt(n) {
//     const str = n.toString();
//     const arr = str.split('');
//     if (arr[0] === '-') {
//         arr.shift();
//         arr.reverse();
//         arr.unshift('-');
//         return parseInt(arr.join(''))
//     } else {
//         return parseInt(arr.reverse().join(''));
//     }
// }
