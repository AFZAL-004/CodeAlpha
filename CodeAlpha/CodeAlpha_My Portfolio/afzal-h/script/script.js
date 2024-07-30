//logo links
var linkedin = document.getElementById("linkedin_logo");

linkedin.addEventListener('click',function() {

    window.open("https://www.linkedin.com/in/afzal-hakkim-0335b12a2");


});

var github = document.getElementById("github_logo");

github.addEventListener('click',function() {

    window.open("https://github.com/AFZAL-004");


});

var insta = document.getElementById("insta_logo");

insta.addEventListener('click',function() {

    window.open("https://www.instagram.com/afzal_hakkim/?hl=en");


});

var whatsapp = document.getElementById("whatsapp_logo");

whatsapp.addEventListener('click',function() {

    window.open("https://wa.link/0a37kc");


});
//Toolbar buttons
var home = document.getElementById("home_btn");

home.addEventListener('click',function() {

    window.scrollTo({
        top:document.getElementById("home").offsetTop,
        behavior:'smooth'
    })

});

var abt = document.getElementById("abt_btn");

abt.addEventListener('click',function() {

    window.scrollTo({
        top:document.getElementById("about").offsetTop,
        behavior:'smooth'
    })

});

var skill = document.getElementById("skill_btn");

skill.addEventListener('click',function() {

    window.scrollTo({
        top:document.getElementById("skill").offsetTop,
        behavior:'smooth'
    })

});

var edu = document.getElementById("edu_btn");

edu.addEventListener('click',function() {

    window.scrollTo({
        top:document.getElementById("education").offsetTop,
        behavior:'smooth'
    })

});

var exp = document.getElementById("exp_btn");

exp.addEventListener('click',function() {

    window.scrollTo({
        top:document.getElementById("project").offsetTop,
        behavior:'smooth'
    })

});

//about button at home
var about_me = document.getElementById("home-btn");

about_me.addEventListener('click',function() {

    window.scrollTo({
        top:document.getElementById("about").offsetTop,
        behavior:'smooth'
    })

});