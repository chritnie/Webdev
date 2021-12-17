function reverseArray(list)
{
	let arr = []
	for(let i = list.length - 1; i >= 0; i--)
		arr.push(list[i]);
	return arr;
}

console.log(reverseArray([1, 2, 3, 4]));

function reverseArrayInPlace(list)
{
	for(let i = 0; i < ((list.length - 1) / 2); i++)
		list[i] = list[list.length - i];
	return list;
}

console.log(reverseArray([1, 2, 3, 4, 5]));