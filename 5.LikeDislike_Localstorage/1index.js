/*For Like*/
var count = 0;
function btn1Clickon() {
    count++;
    lbl1.innerHTML = count;
    localStorage.setItem("l1", count);

    // lbl1.innerHTML += lbl1.innerHTML +1; --->console valu logic jova mate chhe aa comment
}

/*For Dislike*/
function btn2Clickon() {
    if (count>0) {
        count--;
    }
    lbl1.innerHTML = count;
    localStorage.setItem("l1", count);

    // lbl1.innerHTML += lbl1.innerHTML +1; --->console valu logic jova mate chhe aa comment
}

window.onload = Function()
{
    if (localStorage.getItem("l1") != null) {
        lbl1.innerHTML = localStorage.getItem("l1");
    }
}
