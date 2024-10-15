function displayWeekdayMottos() {
    console.log("Make it Happen Monday!")
    console.log("Tackle it Tuesday!")
    console.log("Finish it Friday!")
    }
    displayWeekdayMottos();

    // Exercise pg 10

    function favoriteThings(){
        console.log("Cayla");
        console.log("50 first dates");
        console.log("Young Thug");
    }
    

    function whyImHere(){
        console.log("i joined LTCA to learn new things and have anew carrer.");
    }
    
     
    function favoritePlace(){
        console.log("My favorite place to visit is Panama City. I love its beautiful beaches and fun environment.")
    }
    favoritePlace();
    favoriteThings();
    whyImHere();

    // Exercise pg 16

    function displayMailingLabel(name, address, city, state, zip){
        let message = name + address + city + state + zip;
        console.log(message);
    }
    let someName = "Cayla ";
    let someAddress = " 495 Oglethorpe sq ";
    let someCity = " jonesboro ";
    let someState = " georgia ";
    let someZip = 30236

    displayMailingLabel(someName, someAddress, someCity, someState, someZip)
//////////////////////////////////////////////////////////////////////////
    function addNumbers (num1, num2){
        let message = num1 + num2;
        console.log(message);
    }
    let somenum1 = 2
    let somenum2 = 8

    addNumbers(somenum1, somenum2);
    /////////////////////////////////////////////////////////
    function displayReceipt(totalDue, amountPaid){
        let changeDue = totalDue - amountPaid
        console.log(changeDue);
    }
    let sometotalDue = 40
    let someamountPaid = 20

    displayReceipt(sometotalDue, someamountPaid)

    displayMailingLabel(someAddress, someCity);
    displayMailingLabel(someName, someState);