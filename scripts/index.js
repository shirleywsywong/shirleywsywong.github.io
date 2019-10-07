app = {};

document.getElementById("root").onscroll = function() {app.fix()};
app.fix = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 450) {
        document.getElementById("cta").classList.add("fix");

    } else {
        document.getElementById("cta").classList.remove("fix");
    }
}

app.projectFilter = () => {

    const selectedCategory = document.querySelector('input[name="project"]:checked')
    app.filterCat = selectedCategory.dataset.filter;
    console.log(app.filterCat)
    
}
document.getElementById("project-filter").addEventListener("change", app.projectFilter);

//find the corresponding category for the selected filter
if (app.filterCat === 'react') {
    //render react cards
} else if (app.filterCat === 'jQuery') {
    //render jquery cards
} else if (app.filterCat == 'psd') {
    //render psd cards
} else {
    //render all
}
