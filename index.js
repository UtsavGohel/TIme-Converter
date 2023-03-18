// const argv = require('yargs-parser')
// console.log(process.argv);
// const t1 = process.argv[2]
// const t2 = process.argv[3]
// const t3 = process.argv[4]
// const t4 = process.argv[5]

// // console.log(t1,t2,t3,t4);

// if(process.argv[4] == "IST" && process.argv[5] == "PT"){
//    let a = process.argv[2]
//    console.log(a.split(0));
//    console.log(a.split(1));
//    console.log(a.split());
// }else{
//     console.log("no");
// }

//work for local time of ist to other
// let d = new Date()
// d.setHours(18)
// d.setMinutes(58)
// console.log(d);
// console.log(d.toLocaleString());
// let localtime = d.getTime()
// console.log(localtime, " local");
// // console.log(d.getTimezoneOffset());
// let localOffset  = d.getTimezoneOffset()*60000;
// console.log(localOffset);
// let utc = localtime+localOffset 
// let offset = 8.0; // offset of UTC -- like bombay-5.5 singapore-8.0
// let singapore = utc+(3600000*offset)
// let dd = new Date(singapore)
// console.log(dd.toLocaleString());

// let d = new Date("2023,3,18")
// d.setHours("14")
// d.setMinutes("07")
// console.log(d);
// console.log(d.toLocaleString());
// let localtime = d.getTime()
// console.log(localtime);
// let localOffset  = d.getTimezoneOffset()*60000;
// console.log(localOffset);
// console.log(localOffset.toLocaleString());
// let utc = localtime+localOffset 
// let offset = 8.0; // offset of UTC -- like bombay-5.5 singapore-8.0
// let bombay = utc+(3600000*offset)
// let dd = new Date(bombay)
// console.log(dd.toLocaleString());

// let d = new Date("2023-3-18");
// let localtime = d.getTime()
// let localOffset  = d.getTimezoneOffset()*60000;
// console.log(d.getTimezoneOffset());
// let utc = localtime+localOffset 
// let offset = 8.0; // offset of UTC -- like bombay-5.5 singapore-8.0
// let bombay = utc+(3600000*offset)
// let dd = new Date(bombay)
// console.log(dd.toLocaleString());


function calcTime(city, offset) {
    // create Date object for current location
    d = new Date("2023-3-18");
    d.setHours(18)
    d.setMinutes(05)
    console.log(d.toLocaleString());
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = d.getTime() + (-330 * 60000);
    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));
    // return time as a string
    return "The local time in " + city + " is" + nd.toLocaleString()
    }
 console.log(calcTime("india ", "-7"));

// const date1 = new Date('March 18, 2023 15:41:00 GMT+05:30');
// const date2 = new Date('March 18, 2023 18:11:30 GMT+08:00');

// console.log(date1.getTimezoneOffset());
// console.log(date2.getTimezoneOffset());
// console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());

// let d =new Date("20233-18");
//     d.setHours(18)
//     d.setMinutes(24)
//     console.log(d);
// var s = new Date('2023-03-18T12:54:00.000Z').toLocaleString(en-GB, {timeZone: 'Asia/Kolkata'});
// console.log(s);


// let d = new Date()
// d.setHours(18)
// d.setMinutes(58)
// console.log(d);
// console.log(d.toLocaleString());
// let localtime = d.getTime()
// console.log(localtime, " local");
// // console.log(d.getTimezoneOffset());
// let localOffset  = -480*60000;
// console.log(localOffset);
// let utc = localtime+localOffset 
// let offset = 5.5; // offset of UTC -- like bombay-5.5 singapore-8.0
// let bombay = utc+(3600000*offset)
// let dd = new Date(bombay)
// console.log(dd.toLocaleString());