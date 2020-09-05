function randomize() {
    //Contacting API for random request
   fetch("http://numbersapi.com/random")
   .then((Response) => Response.text())
   .then((data) =>{
       //Cleaning ApiPost space to receive the next information from data
       var ApiPostClean = ""
       document.getElementById("ApiResponse").innerHTML = ApiPostClean
       //Putting the data into ApiPost Variable
       var ApiPost = data
       document.getElementById("ApiResponse").innerHTML = ApiPost  
   })
}
//Function of button Submit
function Submit() {
    //Saving the information in the Variables from the Inputs
    var NumberChoosen = document.getElementById("NumberChoosen").value
    var NumberType =  document.querySelector("#NumberType").value;
    //Verify if the user inserted any numbers in Input 
    if (NumberChoosen == "") {
        //If no numbers are found, Added a message to remind the user
        var NoNumberChoosenMessage = "Select a Number"
        document.getElementById("NoNumberChoosen").innerHTML = NoNumberChoosenMessage
    } else {
        //Contacting API due to sucess retrieving the user input information and adding the information to the API url
        fetch("http://numbersapi.com/"+NumberChoosen+"/"+NumberType)
        .then((Response) => Response.text())
        .then((data) =>{
            //Cleaning ApiPost space to receive the next information from data
            var ApiPostClean = ""
            document.getElementById("ApiResponse").innerHTML = ApiPostClean
            //Putting the data into ApiPost Variable
            var ApiPost = data
            document.getElementById("ApiResponse").innerHTML = ApiPost
            document.getElementById("NoNumberChoosen").innerHTML = ""  
        })
    }
}
