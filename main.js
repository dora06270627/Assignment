function swapStyleSheet(sheet) {
    document.getElementById('pagestyle').setAttribute('href', sheet);
    var persistStylesheet = document.getElementById('pagestyle').getAttribute('href');
    localStorage.setItem('stylesheet', persistStylesheet);
}
function setStyleSheet() {
    var getStoreValue = localStorage.getItem('stylesheet');
    if(getStoreValue) {
        document.getElementById('pagestyle').setAttribute('href', getStoreValue);
    }

}

function validateForm() {
    var x1 = document.forms["contactForm"]["name"].value;
    if (x1 == null || x1 == "") {
        alert("Name must be filled out");
        return false;
    }
    if (checkLetter(x1)){
        return true;
    }


    var x2  = document.forms["contactForm"]["email"].value;
    if (x2 == null || x2 == "") {
        alert("Email must be filled out");
        return false;
    }
    var x3  = document.forms["contactForm"]["comment"].value;
    if (x3 == null || x3 == "") {
        alert("Your massage must be filled out");
        return false;
    }

}

function checkLetter()
{

    if ((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123)
        || event.keyCode == 32)
        return true;
    else
    {
        alert("Please enter only letters");
        return false;

    }

}


function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:","");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}




function initMap() {
    var uluru = {lat: 47.6062, lng: -122.3321};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

function nextSlides(n) {
    showDivs(slideIndex = n);

}




