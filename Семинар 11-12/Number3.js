console.log('\nnumber 3');
object.getName = function() {
  return this.name;
}
city1.getName = function() {
  return this.name;
}
console.log(object.getName());
console.log(city1.getName());