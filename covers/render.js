/*
var animData = {
        container: document.getElementById('gatsbycontainer'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'gamin.json'
    };
    var anim = bodymovin.loadAnimation(animData);;
*/

function animate(element) {
    var anim = bodymovin.loadAnimation({
        container: element,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: element.getAttribute('data-json')
    });
    element.onclick = function() {
        anim.goToAndPlay(0);
    };
}

var containers = document.getElementsByClassName('container');

for (var i = containers.length - 1; i >= 0; i--) {
    animate(containers[i]);
}