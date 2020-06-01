//Get Data
let AnimateObjects = document.querySelectorAll('.animate')

//Show Data
let ShowData = () => {
    let scrollTop = window.scrollY + window.innerHeight;
    AnimateObjects.forEach(animate => {
        if (animate.offsetTop <= scrollTop) {
            let timer = animate.getAttribute('delay')
            let type = animate.getAttribute('type')
            let responsive = animate.getAttribute('responsive')
            if (responsive === 'true') {
                if (window.innerHeight > animate.offsetTop) {
                    setTimeout(() => {
                        animate.classList.add(type);
                    }, timer * 1000);
                }
                else{
                    setTimeout(() => {
                        animate.classList.add(type);
                    }, 0,3 * 1000);
                }
            } else {
                setTimeout(() => {
                    animate.classList.add(type);
                }, timer * 1000);
            }
        }
    })
}

window.addEventListener('scroll', ShowData);
window.addEventListener('load', ShowData);