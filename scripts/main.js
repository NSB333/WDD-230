let date = new Date();
let year = date.getFullYear();

document.getElementById("#year").innerHTML = year;

let currentdate = document.lastModified;

document.querySelector("#footer stuff").textContent = `Last Updated: ${currentdate}`;