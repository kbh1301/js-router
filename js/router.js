const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState(null, null, event.target.href);
    handleLocation();
};

const routes = {
    home: "./pages/home.html",
    "/lorem": "./pages/lorem.html",
};

const handleLocation = async () => {
    let path = Object.keys(routes).find(name => window.location.pathname.includes(name))
    const route = routes[path] || routes["home"];
    fetch(route)
    .then((data) => data.text())
    .then(html => document.getElementById("main-page").innerHTML = html);
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();