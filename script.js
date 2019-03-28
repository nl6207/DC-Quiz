$(".submit").click(function() {
    var iq = parseInt( $(".iq").val());
    var yesno = $(".patnt").val();
    if (iq >= 200){
        $(".lies").show();
        $(".main").hide();
        $(".show").show();
    } else if(iq >= 135 && yesno === "yes"){
        $(".bat").show();
        $(".main").hide();
        $(".show").show();
        $(".empty").hide();
    } else if ( iq >= 135 && yesno === "no"){
        $(".arrow").show();    
        $(".main").hide();
        $(".show").show();
        $(".empty").hide();
    } else if (iq >= 70 && yesno === "yes"){
        $(".super").show();
        $(".main").hide();
        $(".show").show();
        $(".empty").hide();
    } else if (iq >= 70 && yesno === "no") {
        $(".lantern").show();
        $(".main").hide();
        $(".show").show();
        $(".empty").hide();
    }else if ( iq === "" || yesno === ""){
        $(".empty").show();
    }else {
        $(".main").hide();
        $(".show").show();
        $(".no").show();
    }
});
$(".reset").click(function(){
    $(".main").show();
    $(".hide").hide();
    $("input").val("");
});
