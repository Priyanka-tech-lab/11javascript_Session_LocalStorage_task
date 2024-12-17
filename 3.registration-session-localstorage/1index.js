   /*********************** for session storage ************************/ 
function btn1Click() {
    //1.name
    sessionStorage.setItem("s1", txt1.value);
    sessionStorage.setItem("s2", txt2.value);
    sessionStorage.setItem("s3", txt3.value);
    sessionStorage.setItem("s4", txt4.value);

    //2.gender
    var gender = 0;
    if (rdo1.checked == true) {
        gender = "Male";
    }
    else if (rdo2.checked == true) {
        gender = "Female";
    }
    sessionStorage.setItem("g1", gender);

    //3.cast
    sessionStorage.setItem("c1", drop1.value);

    // 4.email
    sessionStorage.setItem("e1", txt5.value);

    // 5.date of birth
    sessionStorage.setItem("b1", drop2.value);
    sessionStorage.setItem("b2", drop3.value);
    sessionStorage.setItem("b3", drop4.value);

    // 6.mobile number
    sessionStorage.setItem("m1", txt6.value);

    // 7.address
    sessionStorage.setItem("a1", txt7.value);

    // 8.landlinnumber
    sessionStorage.setItem("l1", txt8.value);

    // 9.income
    sessionStorage.setItem("in1", txt9.value);

    // 10.state
    sessionStorage.setItem("st1", drop5.value);

    // 11.city
    sessionStorage.setItem("ci1", drop6.value);

    // 12.pincode
    sessionStorage.setItem("p1", txt10.value);

    // 13.payment
    sessionStorage.setItem("py1", drop7.value);

    // 14.emp status 
    var status = 0;
    if (rdo3.checked == true) {
        status = "NO";
    }
    else if (rdo4.checked == true) {
        status = "YES";
    }
    sessionStorage.setItem("sta1", status);

    // 15.expriance
    sessionStorage.setItem("ex1", txt11.value);


    //  go for 2index.html
    window.location.href = "2index.html";
}
