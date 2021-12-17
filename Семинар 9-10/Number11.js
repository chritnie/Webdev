console.log("asd")
let ancestry = ([
	{b: 1832, d: 1905},
	{b: 1876, d: 1956},
	{b: 1683, d: 1724},
	{b: 1714, d: 1748},
	{b: 1907, d: 1997},
	{b: 1761, d: 1833},
	{b: 1535, d: 1582},
	{b: 1918, d: 2012},
	{b: 1877, d: 1968},
	{b: 1696, d: 1724},
	{b: 1602, d: 1642}]);


function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
	byName[person.name] = person;
});

var differences = ancestry.filter(function(person) {
	return byName[person.mother] != null;
}).map(function(person) {
	return person.b - byName[person.mother].b;
});
console.log(average(differences));