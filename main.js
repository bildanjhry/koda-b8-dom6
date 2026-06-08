const glasess = document.querySelectorAll(".liquid")

let classLiquid
glasess.forEach((item) => {
    item.addEventListener('click', function(){
        if(item.className.split(" ")[1]) {
            classLiquid = item.className.split(" ")[1]
            if(classLiquid) item.classList.remove(classLiquid)
        } else {
            if(classLiquid) item.classList.add(classLiquid)
        }
      
    })
})