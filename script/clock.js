function setup() {
    var canvas = document.getElementById("ClockPlace");
    if (canvas.getContext) {
        var context = canvas.getContext("2d");
        context.fillstyle = "rgb(180, 225, 151)";
        context.arc(250, 250, 250, 0, Math.PI * 2, true);
        context.fill();
    }
}