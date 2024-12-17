 /*********************** for session storage ************************/ 
 function btn1Click() {
    //1.name
    localStorage.setItem("s1", txt1.value);
    localStorage.setItem("s2", txt2.value);
    localStorage.setItem("s3", txt3.value);
    localStorage.setItem("s4", txt4.value);

    //2.gender
    var gender = 0;
    if (rdo1.checked == true) {
        gender = "Male";
    }
    else if (rdo2.checked == true) {
        gender = "Female";
    }
    localStorage.setItem("g1", gender);

    //3.cast
    localStorage.setItem("c1", drop1.value);

    // 4.email
    localStorage.setItem("e1", txt5.value);

    // 5.date of birth
    localStorage.setItem("b1", drop2.value);
    localStorage.setItem("b2", drop3.value);
    localStorage.setItem("b3", drop4.value);

    // 6.mobile number
    localStorage.setItem("m1", txt6.value);

    // 7.address
    localStorage.setItem("a1", txt7.value);

    // 8.landlinnumber
    localStorage.setItem("l1", txt8.value);

    // 9.income
    localStorage.setItem("in1", txt9.value);

    // 10.state
    localStorage.setItem("st1", drop5.value);

    // 11.city
    localStorage.setItem("ci1", drop6.value);

    // 12.pincode
    localStorage.setItem("p1", txt10.value);

    // 13.payment
    localStorage.setItem("py1", drop7.value);

    // 14.emp status 
    var status = 0;
    if (rdo3.checked == true) {
        status = "NO";
    }
    else if (rdo4.checked == true) {
        status = "YES";
    }
    localStorage.setItem("sta1", status);

    // 15.expriance
    localStorage.setItem("ex1", txt11.value);


    //  go for 2index.html
    window.location.href = "2index.html";
}