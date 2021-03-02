const anchors = document.querySelectorAll('a[href^="#"]')

for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault()
    let goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
    console.log(goto);
    document.querySelector(goto).scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
    });
}