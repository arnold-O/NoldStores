
  
         const btnOpen = document.querySelectorAll('.first')
    
                 const secondAgleDown = document.querySelectorAll('.secondAgle')

            const selector =document.querySelectorAll('.takeItDown')
            console.log(selector)
            console.log(secondAgleDown)
            console.log(btnOpen)

for(let i = 0; i<selector.length; i++)
            selector[i].addEventListener('click', ()=>{
                btnOpen[i].classList.remove('hidden')
                document.querySelectorAll('.takeItDown')[i].classList.add('hidden')
                document.querySelectorAll('.the-other-angle')[i].classList.remove('hidden')
                document.querySelectorAll('.adder')[i].style.color = "green"
                document.querySelectorAll('.adder')[i].style.fontSize = "20px"
                document.querySelectorAll('.main-box-border-above')[i].style.borderTop = " 2px solid green"

            })

            for(let i = 0; i<secondAgleDown.length; i++)
            secondAgleDown[i].addEventListener('click', ()=>{
                btnOpen[i].classList.add('hidden')
                document.querySelectorAll('.takeItDown')[i].classList.remove('hidden')
                document.querySelectorAll('.the-other-angle')[i].classList.add('hidden')
                document.querySelectorAll('.adder')[i].style.color = ""
                document.querySelectorAll('.adder')[i].style.fontSize = "14px"
                document.querySelectorAll('.main-box-border-above')[i].style.borderTop = ""

            })



            