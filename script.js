function sayHello(name) {
    alert('Hello ' + name + '!');
    }


let links = document.querySelectorAll("nav a");

let path = window.location.pathname;
ids = path.lastIndexOf('/');
iddot = path.lastIndexOf('.')
path = path.substring(ids, iddot);
console.log(path);

for (let link of links){
    let attr = link.getAttribute("href")
    if (path == attr) {
        link.classList.add('active')
    }
}