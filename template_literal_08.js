const names = 'sara';
const age = 30;
const job = 'actor';
const city = 'Kuala Lumpur';
let output;

// without template literals
output = '<ul>'+
'<li>Name: '+names+'</li>'+
'<li>Age: '+age+'</li>'+
'<li>Job: '+job+'</li>'+
'<li>City: '+city+'</li>'+
'</ul>';

// template literals
output =`<ul> 
<li>Name: ${names}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>city: ${city}</li>
</ul>`



document.body.innerHTML=output