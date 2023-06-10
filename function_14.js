// function declaration

function greet(firstName='John', lastName='Doe') {
    // if(typeof firstName === 'undefined'){firstName='John'}
    // if(typeof lastName === 'undefined'){lastName='Doe'}

    console.log(`welcome!!! ${firstName} ${lastName}`);
}


greet();

// function expression

const square = function(x=3){
    return x*x;
};

console.log(square());

// immediate invokable function expression
(function(){
    console.log('IIFE RAN...')
})();

(function(userName='John'){
    console.log(`Welcome ${userName}`)
})();

// property method

// when a function is a property of an object its
// called method

const todo = {
    add : function(){
        console.log('add to the list');
    },
    edit : function(){
        console.log('edit the list');
    }
}
todo.add();
todo.edit();