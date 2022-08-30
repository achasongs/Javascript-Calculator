let result = document.getElementById("inputText");

let calculate = (number) => {
    result.value += number; 
}

let Result = () => {
    
    try{
        result.value = eval(result.value);
    }
    catch(err) {
        alert("Enter a valid input");
    }

}

function clr(){
    result.value = " ";
}

function del(){

    result.value = result.value.slice(0, -1); 
}






