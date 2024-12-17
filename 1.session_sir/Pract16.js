window.onload = function()
{
    if (sessionStorage.getItem("s1") != null) {
        lbl1.innerHTML = sessionStorage.getItem("s1");
    }

    if (localStorage.getItem("l1") != null) {
        lbl1.innerHTML = localStorage.getItem("l1");
    }
}

function btn1Click()
{
    sessionStorage.removeItem("s1");
    window.location.reload();
}

function btn2Click()
{
    localStorage.removeItem("l1");
    window.location.reload();
}