console.log('number 5');
function getObj(){
  return this;
}
object.getCity = function() {
  return getObj();
}
object.getCity = getObj;
city1.getCity = getObj;
console.log(object.getCity().name);
console.log(city1.getCity().name);