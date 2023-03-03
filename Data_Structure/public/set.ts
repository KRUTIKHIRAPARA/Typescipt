// SET


var s = new Set();

s.add(78);
s.add(45);
s.add(45);
s.add(9);
s.add(88);

// console.log(s);

// GET ALL VALUES
// console.log(s.keys());


//USE HAS : true - flase
// console.log(s.has(78));


// DELETE ITEM
// console.log(s.delete(78));


// GET SET SIZE
// console.log(s.size);

// CLERA SET
// s.clear();



// REFERENCE OTHER SET
var other_s = s;
s.add(99);
// console.log(s);
// console.log(other_s.delete(99));




// NOTE :::::
console.log(s.entries());
