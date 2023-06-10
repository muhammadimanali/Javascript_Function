// if (condition) {
    // do something
// }
// else {
    // do something else
// }

const id = 100;

// equal to

// if (id == 100){
//     console.log('id is 100');
// }
// else{
//     console.log('id is not 100');
// }

// not equal to

// if (id != 100){
//     console.log('correct');
// }
// else {
//     console.log('id is 100');
// }

// equal value and type (use triple '===' if want to check on the type of values)
// if (id === 100){                    *recheck
//     console.log('id is a number');
// }
// else{
//     console.log('Not found');
// }

// greater than or less than
// if (id >= 100){
//     console.log('valid value');
// }
// else {
//     console.log('invalid');
// }

const color = 'yellow';

// if(color === 'red'){
//     console.log('color is red');
// }
// else if (color === 'green'){
//     console.log('color is green');
// }
// else {
//     console.log('color is not valid');
// }

// logical operator
// '&&'  '||'

const userName = 'Sara';
const age = 25;

// AND '&&'
// if (age >=0 && age <= 12){
//     console.log(`${userName} is a child`);
// }else if (age >= 13 && age <= 19){
//     console.log(`${userName} is a teenager`);
// }else {
//     console.log(`${userName} is an adult`);
// }

// OR '||'
if (age < 16 || age >65){
    console.log(`${userName} can not run`);
}else {
    console.log(`${userName} is registered`);
}

// ternary operators (if with one condition)

console.log(id === 100 ? 'correct number' : 'invalid number');

// without braces
if (id === 100)
    console.log('id is a number');
else
    console.log('Not found');

