document.onkeypress = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}

document.onmousedown = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}
document.onkeydown = function (event) {
event = (event || window.event);
    if (event.keyCode == 123) {
    return false;
    }
    if (event.keyCode == 85) {
        return false;
    }
}
// document.addEventListener('contextmenu', event => event.preventDefault());

