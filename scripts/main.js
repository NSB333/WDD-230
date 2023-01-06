let date = new Date();
let year = date.getFullYear();

document.querySelector('h1').innerHTML = "&Copy" + year;

let currentdate = document.lastModified;

document.querySelector("div").textContent = `Last Updated: ${currentdate}`;