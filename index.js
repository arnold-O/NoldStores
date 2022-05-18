
  
         const btnOpen = document.querySelector('.first')
    
                 const secondAgleDown = document.querySelector('.secondAgle')

            const selector =document.querySelector('.takeItDown')


            selector.addEventListener('click', ()=>{
                btnOpen.classList.remove('hidden')
                document.querySelector('.takeItDown').classList.add('hidden')
                document.querySelector('.the-other-angle').classList.remove('hidden')
                document.querySelector('.adder').style.color = "green"
                document.querySelector('.adder').style.fontSize = "20px"
                document.querySelector('.main-box-border-above').style.borderTop = " 2px solid green"

            })


            secondAgleDown.addEventListener('click', ()=>{
                btnOpen.classList.add('hidden')
                document.querySelector('.takeItDown').classList.remove('hidden')
                document.querySelector('.the-other-angle').classList.add('hidden')
                document.querySelector('.adder').style.color = ""
                document.querySelector('.adder').style.fontSize = "16px"
                document.querySelector('.main-box-border-above').style.borderTop = ""

            })