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

// 2.2
// Palindrome pairs

const problem2_brute = (inputWords) => {
	const isPalindrome = (word) => word === word.split('').reverse().join('');

	const pairs = inputWords.reduce((acc, word1, index1) => {
		const wordPalindromes = inputWords
			.map((word2, index2) => (isPalindrome(word1 + word2) ? [ index1, index2 ] : false))
			.filter((val) => val);
		acc.push(...wordPalindromes)
		return acc
	}, []);

	return pairs
};

console.log(problem2_brute(["code", "edoc", "da", "d" ]))