let btn = document.querySelectorAll('button')
let input = document.querySelector('.input')
let del = document.querySelector('del')


 for (let i = 0; i < btn.length; i++){
      btn[i].addEventListener("click", () => {
          const btnValue = btn[i].textContent
          if (btnValue === "c"){
              clearNum()
          }else if (btnValue === '='){
              resultNum()

          } else {
              appendValue(btnValue)
          }
      })
 }


 let clearNum = () => {
    input.value = ""
 }

 let resultNum = () => {
      input.value  = eval(input.value)
 }

let appendValue = (btnValue) => {
   return input.value += btnValue

}

