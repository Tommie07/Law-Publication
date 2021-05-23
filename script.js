$(document).ready(function(){
    const mobilecontent = document.getElementsByClassName("mobileContent");
    const bar = document.getElementsByClassName("menu-icon");

    $(".menu-icon").click(function(){
        $(".mobileContent").slideDown()
    });
    $(".mobileContent").click(function(){
        $(".mobileContent").fadeOut()
    });
    

})