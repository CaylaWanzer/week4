a = 123
b = a 
c = b 
console.log(c)

function greet(firstName){
    return "howdy" + firstName ;
}
console.log(greet("classmates"));

let greet2 = n => "howdy " + n

hi = greet2
console.log(hi("classmates"))

(()=> console.log("goodbye"))


function bePolite(who, what){
    what(who);

}
 console.log(bePolite ("classmates", hi))