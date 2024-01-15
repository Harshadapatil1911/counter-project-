let counter = 0;
function Increment(){
    counter++;
    document.getElementById('counter').innerHTML = counter;
}
function Decrement(){
    counter--;
    document.getElementById("counter").innerHTML = counter;
}
function Reset(){
    counter=0;
    document.getElementById("counter").innerHTML = counter;
}