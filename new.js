const argv = require('yargs-parser')
// console.log(process.argv);
var t1 = process.argv[2]
var t2 = process.argv[3]
var t3 = process.argv[4]
var t4 = process.argv[5]

let IST = [5.5,-330] 
// let SINGPORE = 
let PT = [-7,420]
let SGT = [8.0,-480]
let LT = [0,0]

var offs;
if(t2 == "IST"){
    console.log("in IST");
    offs = Number( IST[1])
}else if(t2=="PT"){
    console.log("in PT");
    offs = Number(PT[1]) 
    // offs
    console.log(typeof offs, offs, "in pt offs");
}else if(t2=="SGT"){
    console.log("in SGT 1");
    offs = Number( SGT[1])
}else if(t2=="LT"){
    console.log("in LT 1");
    offs = Number( LT[1])
}
else{
    console.log("no");
}

var idk;
if(t3 == "IST"){
    console.log("in IST");
    idk = Number( IST[0])
}else if(t3=="PT"){
    console.log("in PT");
    idk = Number(PT[0]) 
    // idk
    console.log(typeof idk, idk, "in pt idk");
}else if(t3=="SGT"){
    console.log("in SGT 0");
    idk = Number( SGT[0])
}else if(t3=="LT"){
    console.log("in LT");
    idk = Number( LT[0])
}else{
    console.log("no");
}
console.log(idk);
console.log(t1,t2,t3,t4);
t1.split(0,1)

var chars = t1.split(''); 

let a =chars[0]+chars[1]
let b = chars[3]+chars[4]
// console.log(typeof Number(a),typeof Number(b));
function calcTime(city, offset) {
    d = new Date(t4);
    d.setHours(Number(a))
    d.setMinutes(Number(b))
    console.log(d.toLocaleString());
    utc = d.getTime() + (offs *60000);
    nd = new Date(utc + (3600000*offset));
    return "The local time in " + city + " is " + nd.toLocaleString()
    }
 console.log(calcTime(t3, idk));