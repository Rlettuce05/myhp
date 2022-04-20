$(() => {
    var context = $("#ClockPlace").getContext("2d");
    if (!context) {
        $("#message").removeClass("hide");
    }
})