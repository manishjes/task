function fibonacci(){
    let number = document.getElementById("Number").value;
    let num1 =0;
    let num2 =1;
    let temp;
    let result = [];
    if(number>=1){
        result.push(num1);
    }
    for(let i =2; i<=number; i++){
        result.push(num2);
        temp = num1+num2;
        num1 =num2;
        num2 = temp;
    }

    document.getElementById("ans").innerHTML=result;
    
}