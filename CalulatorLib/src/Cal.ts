var res: string[] = [];
var r = "";
var fc = 0;
var fs = 0;

export function CalcInput(input: string): string[] {
    res = [];
    
    r = input.split(' ').join('');
    if(r == "" && r == null) {
        return []; 
    }
    
    r = `(${r})`;
    if(r.match(/[A-Za-z]/)) {
        res = [];
        addItem("Error: Characters is not allowed");
        return res;
    }
    if(r.match(/\(/g)?.length != r.match(/\)/g)?.length) {
        addItem("Error: Brackets is not even");
        return res;
    }
    
    addItem(r);
    
    while(r.includes("("))
    {
        fc = r.indexOf(")");
        fs = r.substring(0, fc).lastIndexOf("(")+1;
        var pc = r.substring(fs, fc);
        r = replaceRange(r, fs-1, fc+1, Calulate(pc));
        addItem(r);
    }
    
    if(r == "Infinity") {
        res = [];
        addItem("Error: Do not divide by 0");
    } else {
        addItem(Calulate(r));
    }
    return res;
}

function Calulate(input: string): string {
    let test: string[] = input.split(/([\^*\/+-])/);

    test = Calc('^', test,function (a: any, b: any) { return Math.pow(parseFloat(a),parseFloat(b)); });
    test = Calc('*', test,function (a: any, b: any) { return parseFloat(a) * parseFloat(b); });
    test = Calc('/', test,function (a: any, b: any) { return parseFloat(a) / parseFloat(b); });
    test = Calc('+', test,function (a: any, b: any) { return parseFloat(a) + parseFloat(b); });
    test = Calc('-', test,function (a: any, b: any) { return parseFloat(a) - parseFloat(b); });

    if(test.length == 1) {
        return test.toString();
    } else {
        return "";
    }
}

function Calc(sym: string, input: string[], func: Function): string[] {
    let result = input;
    while(result.includes(sym)) {
        let t = result.indexOf(sym);
        let math = "";
        if(input[t-1] != "") {
            math = func(input[t-1], input[t+1]).toString();
        } else {
            math = input[t] + input[t+1];
        }
        result.splice(t-1, 3, math);
        if(result.length > 1) {
            addItem(replaceRange(r, fs, fc, result.join("")));
        }
    }
    return result;
}

function addItem(text: string) {
    if(text.includes("(")) {
        text = text.substring(1, text.length - 1);
    }
    res.push(text);
}

function replaceRange(s: string, start: number, end: number, substitute: string) {
    return s.substring(0, start) + substitute + s.substring(end);
}