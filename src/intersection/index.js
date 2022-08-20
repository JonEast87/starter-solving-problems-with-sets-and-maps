/*
-- psuedo
result = []
for each element e of a do:
  search for e in b
  if e is found in b
    add e to the result array if it isn't already there
return result
--
runtime of O(n^2)
*/

/*
-- psuedo
initialize a new Map
initialize a new Set
for each element e of a do:
  add e to the Map

for each element e of b do:
  lookup e in the Map
  if e is in the Map then
    add e to the Set
  convert the Set to an array and return
--
runtime of O(n)
*/

/**
 * Finds matching elements
 *
 * @param a
 * array a with n elements
 * @param b
 * array b with n elements
 * @returns {*[]}
 * a and b matching elments added to one array
 */

function intersection(a, b) {
	const aMap = new Map()
	const aSet = new Set()

	a.forEach((ele) => aMap.set(ele))
	b.forEach((ele) => {
		if (aMap.has(ele)) {
			aSet.add(ele)
		}
	})
	return [...aSet]
}

module.exports = intersection
