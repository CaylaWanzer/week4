// give a name to a step - like TOC or book 

function begin () {
    console.log("IN THE BEGINNING...");
}
function middle(){
    console.log("INTO THE HEART OF CODING")
}
function end (){
    console.log("WRAPPING IT UP")
}
//invoke or call a function 
begin()
middle()
end()

//////////////////////////////////////////////////////
function greet(who, age){
    console.log(`Howdy ${who}!!!`);
    if(age >= 40){
        console.log("gosh your old");
    }else{
        console.log("your young");
    }
}
greet("cayla", 25)
////////////////////

console.log(new Date(0))
