console.log('\nnumber 15');
let Card = {
    from : "Chicago",
    to : "Boston",
    Show : function(from = this.from, to = this.to) {
        this.from = from;
        this.to = to;
        return this.from + " to " + this.to;
    }
};
let c1 = "Екатеринбург, Москва";
const c1_arr = c1.split(", ");
console.log(Card.Show(c1_arr[0], c1_arr[1]));