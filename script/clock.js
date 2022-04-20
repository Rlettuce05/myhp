var canvas = document.getElementById("#ClockPlace");
if (canvas.getContext) {
    var context = canvas.getContext("2d");
    context.fillstyle = "rgb(180, 225, 151)";
    context.arc(75, 75, 50, 0, Math.PI * 2, true);
}