const glasess = document.querySelectorAll(".liquid")

glasess.forEach((item) => {
    item.addEventListener('click', function(){
        const classLiquid = item.className.split(" ")[1]
        glasess.forEach((el) => {
            if(!(el.className.split(" ")[1])) {
                el.classList.add(classLiquid)
                item.classList.remove(classLiquid)
            }
        })
    })
})