app = {};

document.getElementById("root").onscroll = function() {app.fix()};
app.fix = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 450) {
        // document.getElementById("cta").className = "test";
        document.getElementById("cta").classList.add("fix");

    } else {
        document.getElementById("cta").classList.remove("fix");
        // document.getElementById("cta").className = "";
    }
}
app.projectFilter = function () {
    console.log(`button click`);
}

console.log(app.projectFilter)
//document.getElementById("project-filter").addEventListener("click", app.projectFilter);
document.getElementById("project-filter").addEventListener("click", test);

function test() {
    console.log("asdfasdfsadf")
}
