function doAdd(){
    let num1= Number(document.getElementById("num1").value);
    let num2= Number(document.getElementById("num2").value);
    let num3= num1 + num2;
    document.getElementById("output").innerHTML=num3;
}

function doMin(){
    let num1= Number(document.getElementById("num1").value);
    let num2= Number(document.getElementById("num2").value);
    let num3= num1 - num2;
    document.getElementById("output").innerHTML=num3;
}

function doMult(){
    let num1= Number(document.getElementById("num1").value);
    let num2= Number(document.getElementById("num2").value);
    let num3= num1 * num2;
    document.getElementById("output").innerHTML=num3;
}

function doDiv(){
    let num1= Number(document.getElementById("num1").value);
    let num2= Number(document.getElementById("num2").value);
    let num3= num1/num2;
    document.getElementById("output").innerHTML=num3;
}


function doPow(){
    let num1= Number(document.getElementById("num1").value);
    let num2= Number(document.getElementById("num2").value);
    let num3=1;
    for (let i=0;i<num2;i++){
        num3 = num3*num1;
    }
    document.getElementById("output").innerHTML=num3;
}

function doClear(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("output").innerHTML = "";
}