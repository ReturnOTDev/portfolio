const createMeteor = () => {
    // setup for meteor static properties
    let meteor = document.createElement("img");
    meteor.src = "../assets/meteor.svg";
    meteor.style.position = "absolute";
    meteor.style.zIndex = "-1";

    // randomizing height
    let height = Math.random() * 100 + 50;
    let width = Math.random() * 100 + 50;
    let end = 1000;
    meteor.style.height = `${height}px`;
    meteor.style.width = `${width}px`;
    meteor.style.top = `-${height}px`;
    meteor.style.right = `-${width}px`;
    // meteor always starts out of view depending on width and height
    meteor.style.setProperty("--verticalStart", `-${height}px`);
    meteor.style.setProperty("--horizontalStart", `-${width}px`);
    meteor.style.setProperty("--verticalEnd", `${end}px`);
    meteor.style.setProperty("--horizontalEnd", `${end}px`);
    // setting animation and randomizing starting position
    meteor.style.animation = `fall 1.5s linear`;
    meteor.style.transform = `translateX(${Math.random() * 100 - 50}rem)`;
    // adding meteor to document
    document.querySelector(".meteors").appendChild(meteor);
    // removing finished meteors
    meteor.addEventListener("animationend", () => {
        meteor.remove();
    });
};

createMeteor();
first = setInterval(createMeteor, 1000);
second = setInterval(createMeteor, 1800);

// removing meteor spawning when out of focus
window.addEventListener("focus", () => {
    createMeteor();
    first = setInterval(createMeteor, 1000);
    second = setInterval(createMeteor, 1800);
});
window.addEventListener("blur", () => {
    clearInterval(first);
    clearInterval(second);
});

const links = document.querySelectorAll("li");

links.forEach((link) => {
    link.addEventListener("click", () => {
        if (document.querySelector(".toggler").checked) {
            document.querySelector(".toggler").checked = false;
        }
    });
});

// auto-scrolling to location of element when link is clicked
const setLink = (name) => {
    document.querySelector(`#${name}`).addEventListener("click", () => {
        window.scrollTo({
            top:
                document.querySelector(`#${name}Loc`).getBoundingClientRect()
                    .top + window.scrollY,
            behavior: "smooth",
        });
    });
};

// HOW TO USE:
// setLink(name) will set the link from id of "name" to the location with an id of (name)Loc

setLink("home");
setLink("work");
setLink("about");
setLink("contact");
