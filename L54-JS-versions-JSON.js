// Normal JS Object
/*
{
    firstname: "Javascript",
    lastname: "React"
}, {
    firstname: "Javascript",
    lastname: "React"
}, {
    firstname: "Javascript",
    lastname: "React"
};
*/



// JSON object
/*
{
    "firstname": "Javascript",
    "lastname": "React"
}, {
    "firstname": "Javascript",
    "lastname": "React"
}, {
    "firstname": "Javascript",
    "lastname": "React"
};
*/



// JSON Array
[{
    "firstname": "Javascript",
    "lastname": "React"
}, {
    "firstname": "Javascript",
    "lastname": "React"
}, {
    "firstname": "Javascript",
    "lastname": "React"
}];



//
var txt = '{' +
    '"langs": [' +
    '{"firstname": "Javascript","lastname": "React"},'+ 
    '{"firstname": "PHP","lastname": "Laravel"},'+
    '{"firstname": "Python","lastname": "Django"},'+
    '{"firstname": "C#","lastname": ".Net"}'+
']'+
'}';

var obj = JSON.parse(txt);
document.getElementById("result").innerHTML = obj.langs[0].firstname + " " + obj.langs[0].lastname;