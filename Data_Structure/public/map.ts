// MAP 

var m = new Map();
// var m = new Map<string,number>();
// var m = new Map<number,string>();

m.set(1,34);
m.set(0,67);
m.set(2,87);

m.set(true,"this is map");
m.set(true,"this is map second");

m.set(false,"this is not map");
m.set(false,"this is not map second");

m.set('name','krutik');
m.set('name','krutik Hirapara');

m.set('age',19);


// console.log(m.get(1));
// console.log(m.get('name'));

// console.log(m);


// Override key -> value
m.set(2,77);
// console.log(m);


//duplicate value enter different key
m.set(3,77);
// console.log(m);


//Check this key value exits or not
// console.log(m.has(5));


//Deleted Key , value
m.delete(2);
// console.log(m);


// Check Size Of MAP ARRAY
// console.log(m.size);


//Clear MAP
// console.log(m.clear());
// console.log(m);



var other_m = m;

// console.log(other_m);

other_m.set(2,55);

other_m.delete(3);

// console.log(m);
// console.log(other_m);



//FOREACH IN MAP
m.forEach(e => {
    // console.log(e);
});


//FOR LOOP IN MAP
for(let i=0; i<m.size;i++)
{
    // console.log(m.get(i));
}

