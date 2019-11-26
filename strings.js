//2.1
// find anagram indices

const problem1_brute = (inputWord, inputString) =>
	inputString
		.split('')
		.slice(0, inputString.length - inputString.length % inputWord.length)
		.reduce((agg, val, index) => {
			const stringToTest = inputString.split('').slice(index, index + inputWord.length).join('');
			const match = stringToTest === inputWord || stringToTest === inputWord.split('').reverse().join('');
			match && agg.push(index);
			return agg;
		}, []);

console.log(problem1_brute('ab', 'abxaba'));
