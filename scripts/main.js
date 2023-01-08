
let copyrightYear = new Date().getFullYear();

let copyright = `\u00a9 ${copyrightYear}`;
document.getElementById("year").innerHTML = copyright;
console.log(copyrightYear);


let currentdate = document.lastModified;

document.getElementById("currentDate").innerHTML = `Last Updated: ${currentdate}`;