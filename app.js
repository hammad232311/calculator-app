var displayInput = document.getElementById("displayInput");
function getVal(value){
    displayInput.value += value ;
}
function calculate(){
    displayInput.value = eval(displayInput.value);
}
function clearAll() {
    displayInput.value = "";
}