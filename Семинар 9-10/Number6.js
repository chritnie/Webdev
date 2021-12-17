function range(start, finish, step = 1)
{
	let list = [];
	if(step > 0) {
		for(let i = start; i <= finish; i += step)
			list.push(i);
	}
	else {
		for(let i = start; i >= finish; i+= step)
			list.push(i);
	}
	return (list);
}

function sum(list)
{
	let sum = 0;
	for(let item of list)
		sum += item;
	return sum;
}

l1 = range(5, 2, -1);
// console.log(sum(l1));
for(let item of l1)
	console.log(item);