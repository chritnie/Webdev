function countBs1(string1) {
    return (string1.split("B").length - 1);
}

console.log(countBs1("Basdrv"));

function countBs2(string1, key) {
    return (string1.split(key).length - 1);
}

console.log(countBs2("BGASSGS", "S"));