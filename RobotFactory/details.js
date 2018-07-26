function verifyDetails() {
    var robotname = document.getElementById("robotname").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var postal = document.getElementById("postal").value;
    var phone = document.getElementById("phone").value;
    
    try {
        var str = document.getElementById("robotname").value;
        if(str.length > 10) {
            throw "Robot's name must not over 10 characters";
        }
        
        var pattern = /[0-9]+/;
        var output = pattern.test(name);
        
        if (output) {
            throw "Name cannot contain digits";
        }

        pattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        output = pattern.test(email);
        
        if (!output) {
            throw "Invalid email address";
        }
        
        pattern = /(Toronto|Brampton|Mississauga)/i;
        output = pattern.test(city);
        
        if (!output) {
            throw "City must be only any one of the these [Toronto, Brampton, Mississauga].";
        }
        
        pattern = /[A-Z]+[0-9]+[A-Z]+[0-9]+[A-Z]+[0-9]/igm;
        output = pattern.test(postal);
        
        if (!output) {
            throw "Invalid postal code. Ex) L1M2Y3";
        }
        
        pattern = /^\d{10}$/;
        output = pattern.test(phone);
        
        if (isNaN(phone)) {
            throw "Phone number must be in the number format";
        } else if (!output) {
            throw "Phone number must be exactly 10 digits";
        }
        

    } catch(err) {
        alert(err);
    }
}
    