"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var res = [];
var r = "";
var fc = 0;
var fs = 0;
function CalcInput(input) {
    var _a, _b;
    r = input.split(' ').join('');
    if (r == "" && r == null) {
        return [];
    }
    r = `(${r})`;
    if (r.match(/[A-Za-z]/)) {
        res = [];
        addItem("Error: Characters is not allowed");
        return res;
    }
    if (((_a = r.match(/\(/g)) === null || _a === void 0 ? void 0 : _a.length) != ((_b = r.match(/\)/g)) === null || _b === void 0 ? void 0 : _b.length)) {
        addItem("Error: Brackets is not even");
        return res;
    }
    addItem(r);
    while (r.includes("(")) {
        fc = r.indexOf(")");
        fs = r.substring(0, fc).lastIndexOf("(") + 1;
        var pc = r.substring(fs, fc);
        r = replaceRange(r, fs - 1, fc + 1, Calulate(pc));
        addItem(r);
    }
    if (r == "Infinity") {
        res = [];
        addItem("Error: Do not divide by 0");
    }
    else {
        addItem(Calulate(r));
    }
    return res;
}
exports.CalcInput = CalcInput;
function Calulate(input) {
    let test = input.split(/([\^*\/+-])/);
    test = Calc('^', test, function (a, b) { return Math.pow(parseFloat(a), parseFloat(b)); });
    test = Calc('*', test, function (a, b) { return parseFloat(a) * parseFloat(b); });
    test = Calc('/', test, function (a, b) { return parseFloat(a) / parseFloat(b); });
    test = Calc('+', test, function (a, b) { return parseFloat(a) + parseFloat(b); });
    test = Calc('-', test, function (a, b) { return parseFloat(a) - parseFloat(b); });
    if (test.length == 1) {
        return test.toString();
    }
    else {
        return "";
    }
}
function Calc(sym, input, func) {
    let result = input;
    while (result.includes(sym)) {
        let t = result.indexOf(sym);
        let math = "";
        if (input[t - 1] != "") {
            math = func(input[t - 1], input[t + 1]).toString();
        }
        else {
            math = input[t] + input[t + 1];
        }
        result.splice(t - 1, 3, math);
        if (result.length > 1) {
            addItem(replaceRange(r, fs, fc, result.join("")));
        }
    }
    return result;
}
function addItem(text) {
    if (text.includes("(")) {
        text = text.substring(1, text.length - 1);
    }
    res.push(text);
}
function replaceRange(s, start, end, substitute) {
    return s.substring(0, start) + substitute + s.substring(end);
}
//# sourceMappingURL=Cal.js.map