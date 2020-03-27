// Set the Showcase Height
var mainHeader = document.getElementById('main-header');
var showcase = document.getElementById('showcase');
var headerHeight = mainHeader.clientHeight + "px";
showcase.style.height = `calc(100vh - ${headerHeight})`;
