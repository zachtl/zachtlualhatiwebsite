if ((navigator.userAgent.indexOf("Chrome") > -1) && (navigator.userAgent.indexOf("Safari") > -1)) {
    window.addEventListener("scroll", function (event) {
        let scroll = this.scrollY;
        if (((~window.innerHeight + 100) + scroll) > 0) {
            document.querySelector("nav").classList.add("navfil");
        } else {
            document.querySelector("nav").classList.remove("navfil");
        }
        var scrolltotop = document.scrollingElement.scrollTop;
        var target = document.getElementById("main1");
        var xvalue = "center";
        var factor = 0.75;
        var yvalue = scrolltotop * factor;
        target.style.backgroundPosition = xvalue + " " + yvalue + "px";
        document.querySelector("div.prog").style = "width: " + ((scroll * 100) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) + "%";
    })
}