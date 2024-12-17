window.onload = function()
{
     
    //1.name
    if (localStorage.getItem("s1" && "s2" && "s3"&& "s4") != null) {
        lbl1.innerHTML += localStorage.getItem("s1")+"&nbsp;";
        lbl1.innerHTML += localStorage.getItem("s2")+"&nbsp;";
        lbl1.innerHTML += localStorage.getItem("s3")+"&nbsp;";
        lbl1.innerHTML += localStorage.getItem("s4");
     }

    //2.gender
    if (localStorage.getItem("g1")!=null) {
          lbl2.innerHTML = localStorage.getItem("g1");+"<br>"     
     }

     //3.cast
     if (localStorage.getItem("c1")!=null) {
        lbl3.innerHTML = localStorage.getItem("c1");+"<br>"     
     }

     //4.email
     if (localStorage.getItem("e1")!=null) {
        lbl4.innerHTML = localStorage.getItem("e1");+"<br>"     
     }

     //5.date of birth
     if (localStorage.getItem("b1"&&"b2"&&"b3")!=null) {
        lbl5.innerHTML += localStorage.getItem("b1") + "/";  
        lbl5.innerHTML += localStorage.getItem("b2") + "/";  
        lbl5.innerHTML += localStorage.getItem("b3") ;    
     }
    
      // 6.mobile number
      if (localStorage.getItem("m1")!=null) {
        lbl6.innerHTML = localStorage.getItem("m1");+"<br>"     
     }

      // 7.address
      if (localStorage.getItem("a1")!=null) {
        lbl7.innerHTML = localStorage.getItem("a1");+"<br>"     
     }

      // 8.landlinnumber
      if (localStorage.getItem("l1")!=null) {
        lbl8.innerHTML = localStorage.getItem("l1");+"<br>"     
     }

      // 9.income
      if (localStorage.getItem("in1")!=null) {
        lbl9.innerHTML = localStorage.getItem("in1");+"<br>"     
     }

     // 10.state
     if (localStorage.getItem("st1")!=null) {
        lbl10.innerHTML = localStorage.getItem("st1");+"<br>"     
     }
     // 11.city
     if (localStorage.getItem("ci1")!=null) {
        lbl11.innerHTML = localStorage.getItem("ci1");+"<br>"     
     }

     // 12.pincode
     if (localStorage.getItem("p1")!=null) {
        lbl12.innerHTML = localStorage.getItem("p1");+"<br>"     
     }

     // 13.payment
     if (localStorage.getItem("py1")!=null) {
        lbl13.innerHTML = localStorage.getItem("py1");+"<br>"     
     }

     // 14.emp status 
     if (localStorage.getItem("sta1")!=null) {
        lbl14.innerHTML = localStorage.getItem("sta1");+"<br>"     
     }

     // 15.expriance
     if (localStorage.getItem("ex1")!=null) {
        lbl15.innerHTML = localStorage.getItem("ex1");+"<br>"     
     }

}


// data remove from 2.index.html
function btn1Click()
{
  localStorage.removeItem("s1");
  localStorage.removeItem("s2");
  localStorage.removeItem("s3");
  localStorage.removeItem("s4");
  localStorage.removeItem("g1");
  localStorage.removeItem("c1");
  localStorage.removeItem("e1");
  localStorage.removeItem("b1");
  localStorage.removeItem("b2");
  localStorage.removeItem("b3");
  localStorage.removeItem("m1");
  localStorage.removeItem("a1");
  localStorage.removeItem("l1");
  localStorage.removeItem("in1");
  localStorage.removeItem("st1");
  localStorage.removeItem("ci1")
  localStorage.removeItem("p1");
  localStorage.removeItem("py1");
  localStorage.removeItem("sta1");
  localStorage.removeItem("ex1");
 
  window.location.reload();
  
}