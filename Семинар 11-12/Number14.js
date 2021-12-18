console.log('\nnumber 14');
function logFive(arr) {
  for (var i = 0; i < 5; i++) {
    if (!arr.next())
      break;
    console.log(arr.current());
  }
}
function ArraySeq(arr) {
  this.pos = -1;
  this.array = arr;
}

ArraySeq.prototype.next = function() {
  if (this.pos >= this.array.length - 1)
    return false;
  this.pos++;
  return true;
};
ArraySeq.prototype.current = function() {
  return this.array[this.pos];
};

logFive(new ArraySeq([1, 2]));

function RangeSeq(from, to) {
  this.pos = from - 1;
  this.to = to;
}
RangeSeq.prototype.next = function() {
  if (this.pos >= this.to)
    return false;
  this.pos++;
  return true;
};
RangeSeq.prototype.current = function() {
  return this.pos;
};

logFive(new RangeSeq(100, 1000));