function setElm(id,value){
    document.getElementById(id).innerHTML = value;
}

let calText = '0';
let exp = '0';
let res = 0;

setElm('exp-text',calText);
setElm('res-text',res);

function clearText() {
    calText = '0';
    exp = '0';
    res = 0;

    setElm('exp-text', calText);
    setElm('res-text',res);
    // console.log(exp);
}

function numBtn(num) {
    if (calText == '0' && num != '.'){
        calText = String(num);
        exp = String(num);
    } else {
        calText += String(num);
        exp += String(num);
    }

    setElm('exp-text',calText);
    // console.log(exp);
}

function backSpace(){
    if (calText.length != 1) {
        if (!/^[0-9]$/.test(exp.charAt(exp.length-1)) && exp.charAt(exp.length-1) != '.'){
            calText = calText.slice(0,-3);
        } else {
            calText = calText.slice(0,-1);
        }
        exp = exp.slice(0,-1);
    } else {
        calText = '0';
        exp ='0';
        res = '0'
    }
    setElm('res-text',res);
    setElm('exp-text',calText);
    // console.log(exp);
}

function operation(op){
    switch (op){
        case '+': 
            calText += " + ";
            exp += "+";
            setElm('exp-text',calText);
            // console.log(exp);
            break;

        case '-':
            calText += " - ";
            exp += "-";
            setElm('exp-text',calText);
            // console.log(exp);
            break;
        
        case '/':
            calText += " / ";
            exp += "/";
            setElm('exp-text',calText);
            // console.log(exp);
            break;
        
        case 'x':
            calText += " x ";
            exp += "*";
            setElm('exp-text',calText);
            // console.log(exp);
            break;
        
        case '^':
            calText += " ^ ";
            exp += "**";
            setElm('exp-text',calText);
            // console.log(exp);
            break;
        
        case '=' :
            try{
                res = eval(exp);
                setElm('res-text',res);
            } catch (_){
                setElm('res-text','Err');
            }
            // console.log(exp + " = " + res);
            break;
    }
 }


