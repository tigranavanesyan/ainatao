let accordionItems = document.querySelectorAll(".accordion__item")

accordionItems.forEach(e => {
    e.addEventListener("click",(el) =>{
        e.classList.toggle("accordion__item_active")
        e.querySelector(".tab__arrow").classList.toggle("to-top")
    })
})


function selectNumber(n){
    let arr = document.querySelector(".tab__arrow_select")
    document.querySelector(`#selectWrapper${n} #select`).addEventListener("click",()=>{
         arr.classList.toggle("to-top")
        document.querySelector(`#selectWrapper${n} #selectOptions`).classList.toggle("open")
    })
    document.querySelectorAll(`#selectWrapper${n} .selectOption`).forEach((el) => (
        el.addEventListener("click",(e)=>{
            arr.classList.toggle("to-top")
            selectedValue(e)
        })
    ))
    
    function selectedValue (e){
        document.querySelector(`#selectWrapper${n} #selectOptions`).classList.remove("open")
        document.querySelector(`#selectWrapper${n} #select`).innerText = e.target.innerText
    }
}
selectNumber(1)