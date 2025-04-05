$(document).ready(function() {
    $(".lbl1").hide();
    $(".lbl2").show();
    $(".lbl2").fadeTo(1, 0.7);
    
    // Social media hover effects
    $(".fb").mouseenter(function() {
        $(this).css("width", "37px");
    });
    $(".twitter").mouseenter(function() {
        $(this).css("width", "37px");
    });
    $(".instagram").mouseenter(function() {
        $(this).css("width", "37px");
    });
    $(".linkedin").mouseenter(function() {
        $(this).css("width", "37px");
    });
    $(".fb").mouseleave(function() {
        $(this).css("width", "35px");
    });
    $(".twitter").mouseleave(function() {
        $(this).css("width", "35px");
    });
    $(".instagram").mouseleave(function() {
        $(this).css("width", "35px");
    });
    $(".linkedin").mouseleave(function() {
        $(this).css("width", "35px");
    });

    // Form label behavior
    $(".lbl2").click(function(){ 
        $(this).hide();
        $(this).siblings(".lbl1").show();
    }); 
    
    $(".input").focus(function(){ 
        $(this).siblings(".lbl2").hide();
        $(this).siblings(".lbl1").show();
    });
    
    $(".input").blur(function(){
        if($(this).val() === "") {
            $(this).siblings(".lbl1").hide();
            $(this).siblings(".lbl2").show();
        }
    });
});