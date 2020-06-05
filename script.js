window.onscroll = function() {
  scrollFunction()
};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("home-btn").style.display = "block";
        } else {
            document.getElementById("home-btn").style.display = "none";
        }
    }

    function returnHome() {
        document.documentElement.scrollTop = 0;
    }
