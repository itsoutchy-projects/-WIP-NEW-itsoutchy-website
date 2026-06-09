var heading = document.getElementById("title");
var projHead = document.getElementById("projHead");
var threshold = 5;
var flickering = true;

// put flickering elements in here
// (they must be compatible with the "data-glowing" attribute. check styles.css to see)
var flickerElmnts = [
    heading,
    projHead
]

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function flicker(elemnt) {
    if (elemnt == null)
        return
    if (checkVisible(elemnt) && document.hasFocus()) {
        if (Math.round(Math.random() * 10) == threshold) {
            elemnt.setAttribute("data-glowing", "false");
        } else {
            elemnt.setAttribute("data-glowing", "true");
        }
    }
}


function update(time) {
    if (flickering) {
        flickerElmnts.forEach((value) => {
            flicker(value);
        })
        
        requestAnimationFrame(update);
    }
}

if (flickering)
    requestAnimationFrame(update);