$(function() {

    $("[data-toggle='tooltip']").tooltip();


    $(".card-title").click(function() {
        $(".card-text").fadeToggle();
    });

    $(".somos").on("click", function() {
        $("#us").css("background-color", "#fbce37");
    }, );





});