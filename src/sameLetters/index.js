/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */

/*
-- pseudo

Input: an array of words named words

instantiate a new Map named results

for each word in the words array do:
  lowercase word
  find all unique letters in word
    create a Set with all the letters of the word to remove duplicates
    create an array of letters from the Set and sort alphabetically
      use join to create a string from the array
    if the sorted string of letters is a key in the results Map then
      add word to the array associated with that key
    else
      make a new entry in the results Map with key = sorted string of letters
      and the value of an array with word as it's only element
return the results map
--
*/

function sameLetters(words) {
	const results = new Map()

	words.forEach((ele) => {
		let uniqueLetters = Array.from(new Set(ele.split('')))
			.sort()
			.join('')
		if (results.has(uniqueLetters)) {
			results.get(uniqueLetters).push(ele)
		} else {
			results.set(uniqueLetters, [ele])
		}
	})
	return results
}

module.exports = sameLetters
