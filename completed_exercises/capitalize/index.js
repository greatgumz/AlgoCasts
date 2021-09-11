// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
<<<<<<< HEAD
	let result = str[0].toUpperCase();
	for (let i = 1; i < str.length; i++) {
		if (str[i - 1] === ' ') {
			result += str[i].toUpperCase();
		} else {
			result += str[i];
		}
	}
	return result;
=======
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
>>>>>>> feeab87936c294d647721184753b164bbf9f46d6
}

module.exports = capitalize;

// function capitalize(str) {
<<<<<<< HEAD
// 	const words = [];

// 	for (let word of str.split(' ')) {
// 		words.push(word[0].toUpperCase() + word.slice(1));
// 	}

// 	return words.join(' ');
=======
//   const words = [];
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//
//   return words.join(' ');
>>>>>>> feeab87936c294d647721184753b164bbf9f46d6
// }
