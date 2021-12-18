console.log('\nnumber 4');
object.exportStr = function() {
  let a = "";
  for (let i in this) {
    if (i == 'name' || i == 'population') {
      a += `${i} = ${this[i]}` + '\n';
    }
  }
  return a;
}
console.log(object.exportStr());

city1.exportStr = function() {
  let a = "";
  for (let i in this) {
    if (i == 'name' || i == 'population') {
      a += `${i} = ${this[i]}` + '\n';
    }
  }
  return a;
}
console.log(city1.exportStr());