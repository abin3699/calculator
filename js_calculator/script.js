

function displayNumber(num){
    inputBox.value+=num
}

function clearBox(){
    inputBox.value=""
}

function evalExpression(){
    let exp=inputBox.value
    let res=eval(exp)
    inputBox.value=res

}