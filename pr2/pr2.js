function factorial(){
    let number = document.getElementById("Number").value;


function fact(num){
    if (num==1 || num==0){
        return 1;
    }
    else{
        return num*fact(num-1)
    }
}
const result = fact(number);
document.getElementById("ans").innerHTML = result;

}