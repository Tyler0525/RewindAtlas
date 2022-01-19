        // pull the user entered from the page
function getValues() {
    let userString =document.getElementById("revString").value;

        //Call reverse a String
        let revString = ReverseAString(userString);

        //Display the Reversed String
        displayData(revString);
}

        //this is our generate data 
function ReverseAString(userString){

    ;
    let revString ="";
    for (let index = userString.length -1; index >= 0; index--) {
        revString += userString[index];
         }

         return revString;
}


        //Display out Reversed String to the Page 
function displayData(revString){
document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

document.getElementById("alert").classList.remove('invisible');
}