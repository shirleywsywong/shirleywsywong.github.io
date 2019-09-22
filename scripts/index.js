document.getElementById("root").onscroll = function() {fix()};
function fix() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        // document.getElementById("cta").className = "test";
        document.getElementById("cta").classList.add("fix");

    } else {
        // document.getElementById("cta").className = "";
        document.getElementById("cta").classList.remove("fix");
    }
}