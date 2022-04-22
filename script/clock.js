function setup() {
    var canvas = document.getElementById("ClockPlace");
    if (canvas.getContext) {
        var context = canvas.getContext("2d");
        var time = new Date();
        var hour = time.getHours();
        var min = time.getMinutes();
        var sec = time.getSeconds();

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

        context.translate(250, 250);
        context.rotate((hour*30 + min*0.5) * Math.PI / 180);
        context.translate(-250, -250);
        context.fillStyle = "rgb(131, 189, 117)";
        context.beginPath();
        context.moveTo(240, 250);
        context.lineTo(240, 125);
        context.arc(250, 125, 10, Math.PI , 2*Math.PI, false);
        context.lineTo(260, 250);
        context.arc(250, 250, 10, 0, Math.PI, false);
        context.closePath();
        context.fill();
        context.translate(250, 250);
        context.rotate(-(hour*30 + min*0.5) * Math.PI / 180);
        context.translate(-250, -250);

        context.translate(250, 250);
        context.rotate(min*6 * Math.PI / 180);
        context.translate(-250, -250);
        context.fillStyle = "rgb(131, 189, 117)";
        context.beginPath();
        context.moveTo(245, 250);
        context.lineTo(245, 70);
        context.arc(250, 70, 5, Math.PI , 2*Math.PI, false);
        context.lineTo(255, 250);
        context.arc(250, 250, 5, 0, Math.PI, false);
        context.closePath();
        context.fill();
        context.translate(250, 250);
        context.rotate(-min*6 * Math.PI / 180);
        context.translate(-250, -250);

        context.translate(250, 250);
        context.rotate(sec*6 * Math.PI / 180);
        context.translate(-250, -250);
        context.fillStyle = "rgb(131, 189, 117)";
        context.beginPath();
        context.moveTo(249, 250);
        context.lineTo(249, 30);
        context.arc(250, 30, 2, Math.PI , 2*Math.PI, false);
        context.lineTo(251, 250);
        context.arc(250, 250, 2, 0, Math.PI, false);
        context.closePath();
        context.fill();
        context.translate(250, 250);
        context.rotate(-sec*6 * Math.PI / 180);
        context.translate(-250, -250);
    }
}

setInterval("setup()", 10)