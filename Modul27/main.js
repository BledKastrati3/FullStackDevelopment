function showmessage(){
    alert("This is my first message")
}



function sum(number1,number2){
    return number1 + number2 
}
console.log(sum(32,42))


function toCelsius(Fahrenheit){
    return (5 / 9) * (Fahrenheit - 32);
}

var result =  toCelsius(54)
console.log("Fahrenheit in celsius is" +result+ "degrees")

showmessage()