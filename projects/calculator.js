function calculator(element){
    let exp = element.innerHTML
    let output = document.getElementById("out-val")
    let calc = output.innerHTML
    if((output.innerHTML == null && !isNaN(exp) )  || exp == "Cos" ||exp == "Sin"  ||exp == "Log" ){
        output.innerHTML = exp
    }else if (exp == "="){
        calc = calc.replace("^","**")
        if(eval(calc) < 1 && eval(calc) > -1){
            output.innerHTML = parseFloat(eval(calc)).toFixed(3)
        }else{
            output.innerHTML = eval(calc)
        }
        
    }else if (exp == "pow"){
        output.innerHTML += "^"
    }else{
        output.innerHTML += exp
    }
    

    

}

function  del(){
    document.getElementById("out-val").innerHTML = null

}

