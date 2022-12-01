//validate form inputs
function runValidate(form){
    validateName(form);
    validatePhone(form);
    validateCheckInDate(form);
    validateCheckOutDate(form);
    validateDate(form);
}

function validateName(form){

    var name = form.elements["fullName"];
    if(name.validity.valueMissing){
        name.setCustomValidity("Please enter your full name");
        return false;
    }
    else{
        name.setCustomValidity("");
        return true;
    }
}


function validatePhone(form){

    var phoneNumber = form.elements["phoneNumber"];

    if(phoneNumber.validity.valueMissing){
        phoneNumber.setCustomValidity("Please enter your phone number");
        return false;
    }
    else if(phoneNumber.validity.patternMismatch){
        phoneNumber.setCustomValidity("Phone number must be in xxx-xxx-xxxx format");
        return false;
    }
    else{
        phoneNumber.setCustomValidity("");
        return true;
    }
}

function validateCheckInDate(form){

    var checkIn = form.elements["checkIn"];

    if(checkIn.validity.valueMissing){
        checkIn.setCustomValidity("Please enter your check in date");
        return false;
    }
    else{
        checkIn.setCustomValidity("");
        return true;
    }
}

function validateCheckOutDate(form){

    var checkOut = form.elements["checkOut"];

    if(checkOut.validity.valueMissing){
        checkOut.setCustomValidity("Please enter your check out date");
        return false;
    }
    else{
        checkOut.setCustomValidity("");
        return true;
    }
}

function validateDate(form){

    var startDate = document.getElementById("checkIn").value;
    var endDate = document. getElementById("checkOut").value;

    var checkOut = form.elements["checkOut"];

    if(endDate <= startDate){
        checkOut.setCustomValidity("Check-out time must be later than check-in time");
        return false;
    }else{
        checkOut.setCustomValidity("");
        return true;
    }
}

//Image changing
var orderIndex = 1;

setInterval(function() {

  if(orderIndex > 12) orderIndex = 1;

  switch(orderIndex){
    case 1: document.getElementById("timerImage").src = "images/limestones.jpg";
            break;
    case 2: document.getElementById("timerImage").src = "images/cruises.jpeg";
            break;
    case 3: document.getElementById("timerImage").src = "images/cave.jpeg";
            break;
    case 4: document.getElementById("timerImage").src = "images/fields.jpg";
            break;
    case 5: document.getElementById("timerImage").src = "images/fansipan.jpeg";
            break;
    case 6: document.getElementById("timerImage").src = "images/market.jpg";
            break;
    case 7: document.getElementById("timerImage").src = "images/hoian.jpg";
            break;
    case 8: document.getElementById("timerImage").src = "images/light-river.jpg";
            break;
    case 9: document.getElementById("timerImage").src = "images/food.jpg";
            break;
    case 10: document.getElementById("timerImage").src = "images/lyson.jpg";
            break;
    case 11: document.getElementById("timerImage").src = "images/stonegate.jpeg";
            break;
    case 12: document.getElementById("timerImage").src = "images/black-garlic.jpg";
            break;
    default:break;
  }

  orderIndex++;

}, 1000);

