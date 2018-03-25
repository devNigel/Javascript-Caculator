var val = '';
var entry;
var result;
var prevEntry = [];
function fun(id) {
    entry = id;
    if (entry == '+' || entry == '-' || entry == '/' || entry == '*' || entry == '%' || entry == '.') {
        if (prevEntry.length < 1) {
            prevEntry.push(entry);
            caseCheck(entry);
        }
    }
    else {
        prevEntry = [];
        caseCheck(entry);
    }
}

function updateDisplay(dispVal) {
    $('#result').val(dispVal);
}

function calc(val) {
    return eval(val);
}

function caseCheck(entry) {
    switch (entry) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            val += entry;
            updateDisplay(val);
            break;
        case 'c':
            val = '';
            updateDisplay(val);
            break;
        case 'ce':
            val = val.substring(0, val.length - 1);
            updateDisplay(val);
            break;
        case '=':
            if (val.lastIndexOf('.') == val.indexOf('.')) {
                result = calc(val).toFixed(2);
                updateDisplay(result);
                val = '';
            }
            else {
                val = val.substring(0, val.length - 1);
                updateDisplay(val);

            }
            break;
    }
}
