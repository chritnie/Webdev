console.log('\nnumber 20');
function getDays(y, m){
    return new Date(y, m, 0).getDate();
}
console.log(getDays(2021, 2));