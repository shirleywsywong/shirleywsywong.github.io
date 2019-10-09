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
    
    app.selectProject();
}
document.getElementById("project-filter").addEventListener("change", app.projectFilter);

app.selectProject = () => {


    
    if (app.filterCat === 'react') {
        //render react cards
        let unwanted = document.querySelectorAll('[data-category]:not([data-category="react"])')
        for (let i=0; i < unwanted.length; i++) {
            unwanted[i].style.display = 'none';
        }

        let wanted = document.querySelectorAll('[data-category="react"]')
        for (let i = 0; i < wanted.length; i++) {
            wanted[i].style.display = 'block';
        }
        
    } else if (app.filterCat === 'jQuery') {
        //render jquery cards
        let unwanted = document.querySelectorAll('[data-category]:not([data-category="jquery"])')
        for (let i = 0; i < unwanted.length; i++) {
            unwanted[i].style.display = 'none';
        }

        let wanted = document.querySelectorAll('[data-category="jquery"]')
        for (let i = 0; i < wanted.length; i++) {
            wanted[i].style.display = 'block';
        }

    } else if (app.filterCat == 'psd') {
        //render psd cards
        let unwanted = document.querySelectorAll('[data-category]:not([data-category="psd"])')
        for (let i = 0; i < unwanted.length; i++) {
            unwanted[i].style.display = 'none';
        }

        let wanted = document.querySelectorAll('[data-category="psd"]')
        for (let i = 0; i < wanted.length; i++) {
            wanted[i].style.display = 'block';
        }

    } else {
        //render all
        let wanted = document.getElementsByClassName('gallery-item')
        for (let i = 0; i < wanted.length; i++) {
            wanted[i].style.display = 'block';
        }
    }
}


// document.addEventListener("DOMContentLoaded", function () {
//     // app.selectProject();
// });