const glasess = document.querySelectorAll(".liquid")

let classLiquid
glasess.forEach((item) => {
    item.addEventListener('click', function(){
        if(item.className.split(" ")[1]) {
            classLiquid = item.className.split(" ")[1]
            item.classList.remove(classLiquid)
        } else {
            item.classList.add(classLiquid)
        }
      
    })
})