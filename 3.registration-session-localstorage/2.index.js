window.onload = function()
{
     
    //1.name
    if (sessionStorage.getItem("s1" && "s2" && "s3"&& "s4") != null) {
        lbl1.innerHTML += sessionStorage.getItem("s1")+"&nbsp;";
        lbl1.innerHTML += sessionStorage.getItem("s2")+"&nbsp;";
        lbl1.innerHTML += sessionStorage.getItem("s3")+"&nbsp;";
        lbl1.innerHTML += sessionStorage.getItem("s4");
     }

    //2.gender
    if (sessionStorage.getItem("g1")!=null) {
          lbl2.innerHTML = sessionStorage.getItem("g1");+"<br>"     
     }

     //3.cast
     if (sessionStorage.getItem("c1")!=null) {
        lbl3.innerHTML = sessionStorage.getItem("c1");+"<br>"     
     }

     //4.email
     if (sessionStorage.getItem("e1")!=null) {
        lbl4.innerHTML = sessionStorage.getItem("e1");+"<br>"     
     }

     //5.date of birth
     if (sessionStorage.getItem("b1"&&"b2"&&"b3")!=null) {
        lbl5.innerHTML += sessionStorage.getItem("b1") + "/";  
        lbl5.innerHTML += sessionStorage.getItem("b2") + "/";  
        lbl5.innerHTML += sessionStorage.getItem("b3") ;    
     }
    
      // 6.mobile number
      if (sessionStorage.getItem("m1")!=null) {
        lbl6.innerHTML = sessionStorage.getItem("m1");+"<br>"     
     }

      // 7.address
      if (sessionStorage.getItem("a1")!=null) {
        lbl7.innerHTML = sessionStorage.getItem("a1");+"<br>"     
     }

      // 8.landlinnumber
      if (sessionStorage.getItem("l1")!=null) {
        lbl8.innerHTML = sessionStorage.getItem("l1");+"<br>"     
     }

      // 9.income
      if (sessionStorage.getItem("in1")!=null) {
        lbl9.innerHTML = sessionStorage.getItem("in1");+"<br>"     
     }

     // 10.state
     if (sessionStorage.getItem("st1")!=null) {
        lbl10.innerHTML = sessionStorage.getItem("st1");+"<br>"     
     }
     // 11.city
     if (sessionStorage.getItem("ci1")!=null) {
        lbl11.innerHTML = sessionStorage.getItem("ci1");+"<br>"     
     }

     // 12.pincode
     if (sessionStorage.getItem("p1")!=null) {
        lbl12.innerHTML = sessionStorage.getItem("p1");+"<br>"     
     }

     // 13.payment
     if (sessionStorage.getItem("py1")!=null) {
        lbl13.innerHTML = sessionStorage.getItem("py1");+"<br>"     
     }

     // 14.emp status 
     if (sessionStorage.getItem("sta1")!=null) {
        lbl14.innerHTML = sessionStorage.getItem("sta1");+"<br>"     
     }

     // 15.expriance
     if (sessionStorage.getItem("ex1")!=null) {
        lbl15.innerHTML = sessionStorage.getItem("ex1");+"<br>"     
     }

}


// data remove from 2.index.html
function btn1Click()
{
  sessionStorage.removeItem("s1");
  sessionStorage.removeItem("s2");
  sessionStorage.removeItem("s3");
  sessionStorage.removeItem("s4");
  sessionStorage.removeItem("g1");
  sessionStorage.removeItem("c1");
  sessionStorage.removeItem("e1");
  sessionStorage.removeItem("b1");
  sessionStorage.removeItem("b2");
  sessionStorage.removeItem("b3");
  sessionStorage.removeItem("m1");
  sessionStorage.removeItem("a1");
  sessionStorage.removeItem("l1");
  sessionStorage.removeItem("in1");
  sessionStorage.removeItem("st1");
  sessionStorage.removeItem("p1");
  sessionStorage.removeItem("ci1")
  sessionStorage.removeItem("py1");
  sessionStorage.removeItem("sta1");
  sessionStorage.removeItem("ex1");
 
  window.location.reload();
  
}