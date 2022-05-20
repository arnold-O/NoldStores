
//   faq section----------------------------//////
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

            //   faq section----------------------------//////

            

// flash section js logic

const timerDown = document.querySelector('.time-fixing-javascript')
function countdownTimeStart(){

   const ReferenceDownTime = new Date("May 21, 2022 06:00:00").getTime();
    
    // Update the count down every 1 second
    const x = setInterval(function() {
    
        // Get the noe time
        const now = new Date().getTime();
        
        // Find the distance between now an the count down date
        const timerDown = ReferenceDownTime - now;
        
        // Time calculations for days, hours, minutes and seconds
        const hours = Math.floor((timerDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timerDown % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timerDown % (1000 * 60)) / 1000);
        
        
        document.querySelector(".time-fixing-javascript").textContent =`  ${hours }h ${ minutes}m ${seconds}s  `;
        
        
        if (timerDown < 0) {
            clearInterval(x);
            document.querySelector(".time-fixing-javascript").textContent = "EXPIRED";
        }
    }, 1000);
    }

    countdownTimeStart()

// let time = 1600

// setInterval(()=>{
//     // const hour = String(Math.trunc(time/3600)).padStart(2,0)
//     const min = String(Math.trunc(time /60)).padStart(2,0)
//     const sec =String( time % 60).padStart(2, 0)
//     timerDown.textContent =`${min}:${sec}`
//     time--
// },1000)
// flash section js logic
            