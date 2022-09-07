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
} else {
}

var txt = [
    'print("Hello!")',
    'std::cout<<"Hello!";',
    'Console.WriteLine("Hello!");',
    'echo "Hello!";',
    'System.out.println("Hello!");',
    'console.log("Hello!")',
]

var i = x = 0

type()

function deleteType() {
    if (document.getElementById("type").innerText.length != 0) {
        document.getElementById("type").innerText = document.getElementById("type").innerText.slice(0, -1);
        if (document.getElementById("type").innerText == "") {
            document.getElementById("type").innerText = " ";
        }
        setTimeout(deleteType, 50);
    } else {
        if (x == 5) {
            x = 0
        } else {
            x++;
        }
        i = 0;
        type()
    }
}

function type() {
    if (i < txt[x].length) {
        if (document.getElementById("type").innerText == " ") {
            document.getElementById("type").innerText = document.getElementById("type").innerText.slice(0, -1);
        }
        document.getElementById("type").innerText += txt[x].charAt(i)
        i++;
        setTimeout(type, 100);
    } else {
        setTimeout(deleteType, 2500);
    }
}