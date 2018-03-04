function displayLogin() {
    $("hang-signup").fadeOut(200);
    $("hang-login").fadeIn(1000);
}

function displaySignup() {
    $("hang-login").fadeIn(200);
    $("hang-signup").fadeOut(1000);
}

$(document).ready(function() {
    displaySignup();
});
