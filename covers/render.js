document.addEventListener('readystatechange', function() {
    if (event.target.readyState !== 'complete') {
        return
    }

    function animate(element) {
        var anim = bodymovin.loadAnimation({
            container: element,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: element.getAttribute('data-json')
        });
        console.log(bodymovin.loadAnimation);
        element.addEventListener("click", function() {
            anim.goToAndPlay(0);
        });
    }

    var containers = document.getElementsByClassName('container');

    for (var i = containers.length - 1; i >= 0; i--) {
        animate(containers[i]);
        console.log("woot");
    }
})