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
        context.fillText("12", 230, 45);
        context.fillText("1", 355, 75);
        context.fillText("2", 427, 155);
        context.fillText("3", 455, 265);
        context.fillText("4", 425, 370);
        context.fillText("5", 350, 460);
        context.fillText("6", 240, 485);
        context.fillText("7", 127, 460);
        context.fillText("8", 50, 375);
        context.fillText("9", 20, 267);
        context.fillText("10", 37, 153);
        context.fillText("11", 125, 70);
        
    }
}