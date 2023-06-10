const firstName = 'Sara';
const lastName = 'Smith';
const age = 30;
const test = 'Hello from javascript'
const courses = 'Web development,web design,cloud';

let val;

val = firstName + lastName;

// concatination
val =firstName+' '+lastName;

// Append
val = 'Kim';
val += 'Smith';

// escaping
val = 'That\'s awesome';

// length
val = firstName.length;

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// char at
val = firstName.charAt('0');

// indexof
val = firstName.indexOf('S');
val = firstName.lastIndexOf('a');

// substring
val = firstName.substring(1,3);

// slice
val = firstName.slice(0,3);
val = firstName.slice(-3);

// split
val = test.split(' ');
val = courses.split(',')

// replace (case sensitive)
val = test.replace('javascript','React.js');

// include
val =test.includes('javascript');


console.log(val);