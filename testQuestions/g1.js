/*
Calculate the longest substring of two strings.
Ex. "ABAZDC" , "BACBAD" => "ABAD"
See tests for more versions.
*/

const s1_1 = 'ABAZDC',
	s1_2 = 'BACBAD',
	res1 = 'ABAD';

const longestCommonSubstring = (str1, str2) => {
	const [ longestStr, shortestStr ] =
		str1.length > str2.length ? [ str1.split(''), str2.split('') ] : [ str2.split(''), str1.split('') ];

	//console.log(longestStr)
	// Longest substr cant be longer than the shourtest str, so iterate over shortest
	const substringCandidates = shortestStr.reduce((acc, letter1, letterIndex) => {
		acc.push({ startingIndex: 0, substring: [] });

		const matchingIndices = longestStr.reduce((indices, letter2, index) => {
			letter1 === letter2 && indices.push(index);
			return indices;
		}, []);

		acc.forEach((candidate) => {
			const matchedIndex = matchingIndices.filter((index) => index >= candidate.startingIndex).shift();
			//console.log(matchedIndex, "::", candidate)
			if (typeof matchedIndex !== 'undefined') {
				candidate.substring.push(letter1);
				candidate.startingIndex = matchedIndex + 1;
			}
		});

		return acc;
	}, []);

	const substring =
		substringCandidates.length > 0
			? substringCandidates
					.reduce((acc, { substring }) => (acc.length > substring.length ? acc : substring), [ '' ])
					.join('')
			: '';

	return substring;
};

const testLongestCommonSubstring = () => {
	const tests = [
		{ s1: 'ABAZDC', s2: 'BACBAD', res: 'ABAD' },
		{ s1: 'AGGTAB', s2: 'GXTXAYB', res: 'GTAB' },
		{ s1: 'aaaa', s2: 'aa', res: 'aa' },
		{ s1: '', s2: 'dsadkjnwq', res: '' },
		{ s1: 'ABBA', s2: 'ABCABA', res: 'ABBA' }
	];

	tests.forEach(({ s1, s2, res }, index) => {
		const out = longestCommonSubstring(s1, s2);
		out === res
			? console.log(`TEST ${index} PASSED`)
			: console.log(`TEST ${index} FAILED!! ${s1}, ${s2} !=> ${res}, got ${out} `);
	});
};

testLongestCommonSubstring();
