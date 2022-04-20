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
        context.fillStyle = "rgb(78, 148, 79)";
        context.font = "45px Akshar"
        context.beginPath();
        context.fillText("12", 235, 45);
        context.fillText("1", 355, 75);
        context.fillText("2", 425, 150);
        context.fillText("3", 455, 250);
        context.fillText("4", 425, 370);
        context.fillText("5", 358, 452);
        context.fillText("6", 250, 485);
        context.fillText("9", 25, 255);
    }
}