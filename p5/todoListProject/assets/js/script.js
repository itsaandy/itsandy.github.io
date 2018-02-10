// Add strike through on click to list elements.
$("ul").on("click", "li", function() {   // WHEN A "li" IS CLICKED INSIDE A "ul"
    $(this).toggleClass("completed");
});

// Adding a delete property to the class "delete".
$("ul").on("click", ".delete", function() {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})

// Detecting the enter key getting pressed.
$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        var value = $(this).val();
        $(this).val("");
        $("ul").append("<li><span class=\"delete\"><i class=\"fas fa-trash-alt\"></i></span> " + value + " </li>")
        console.log($(this).val());
    }
});

$("h1").on("click", ".fa-plus", function() {
    $("input[type='text']").slideToggle(100);
})
