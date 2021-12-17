function arrayToList(arr) {
	return arr.reduceRight((rest, value) => ({value, rest}), null);
}
	
console.log(arrayToList ([1, 2, 3]))
	
function listToArray(list) {
	let array = [];
	for (let node = list; node; node = node.rest) {
	array.push(node.value);
	}
	return array;
}

console.log(listToArray(arrayToList([1, 2, 3])));

function prepend(value, list) {
	return {value, rest: list};
}

console.log(prepend(1, prepend(2, null)));

function nth(list, n) {
	if (!list) return undefined;
	else if (n == 0) return list.value;
	else return nth(list.rest, n - 1);
}

console.log(nth(arrayToList([1, 2, 3]), 1));