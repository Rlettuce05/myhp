$(() => {
    $(".pagelink-div").each(function () {
        $(this).mouseover(function () { 
            $(".titles").addClass("visible");
        });
        $(this).mouseleave(function () { 
            $(".titles").removeClass("visible");
        });
    })
})