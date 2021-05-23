$(document).ready(function(){
    const mobilecontent = document.getElementsByClassName("mobileContent");
    const bar = document.getElementsByClassName("menu-icon");

    $(".menu-icon").click(function(){
        $(".mobileContent").fadeIn()
    });
    $(".mobileContent").click(function(){
        $(".mobileContent").fadeOut()
    });
    

})