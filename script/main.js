$(() => {
    $(".pagelink").each(function () {
        $(this).mouseover(function () { 
            $(".titles").addClass("visible");
            $(".pagelink-img").addClass("visible");
        });
        $(this).mouseleave(function () { 
            $(".titles").removeClass("visible");
            $(".pagelink-img").removeClass("visible");
        });
    })
})