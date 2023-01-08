let date = new Date();
let year = date.getFullYear();

let copyright = `\u00a9 $(year) -Cece Pendell-`;
document.getElementById("year").textcontent = copyright;
alert(year);

let currentdate = document.lastModified;

document.querySelector("footer stuff").textContent = `Last Updated: ${currentdate}`;