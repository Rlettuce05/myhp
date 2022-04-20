function setup() {
    var canvas = document.getElementById("ClockPlace");
    if (canvas.getContext) {
        var context = canvas.getContext("2d");
        context.fillStyle = "rgb(180, 225, 151)";
        context.beginPath();
        context.arc(250, 250, 250, 0, Math.PI * 2, true);
        context.fill();
        context.fillStyle = "rgb(233, 239, 192)";
        context.beginPath();
        context.arc(250, 250, 200, 0, Math.PI * 2, true);
        context.fill();
    }
}