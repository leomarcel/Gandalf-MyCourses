function updateNameOfCourses() {
    let elementsCourses = document.querySelectorAll('#main-navigation0')[0].closest(".nav-item").querySelectorAll("a[class*='dropdown-item']");
	for (let elementsCourse of elementsCourses) {
        if (elementsCourse.getAttribute("title")) {
            let id = elementsCourse.innerHTML.split("_")[0]
            elementsCourse.innerHTML = "<b>" + id + "</b> | " + elementsCourse.title
            elementsCourse.removeAttribute("title")
        }
    }
}
updateNameOfCourses()