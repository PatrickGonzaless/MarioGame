const mario = document.querySelectorAll('.mario')[0];
const pipe = document.querySelectorAll('.pipe')[0];

        const jump = () => {
            mario.classList.add("jump");

            setTimeout(()=>{

                mario.classList.remove('jump');

            },600);
        }

        const loop = setInterval(() => {

            const pipePosition = pipe.offsetLeft;
            const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

            if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 110){
                
                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;

                mario.style.animation = 'none';
                mario.style.bottom = `${marioPosition}px`;

                mario.src = "./Imagens/game-over.png";
                mario.style.width = "75px";
                mario.style.marginLeft = "50px";

                clearInterval(loop);

                document.querySelector(".game-over").style.display="block";

                stop();

            }
            

        }, 10);

        function reiniciar(){

            return document.location.reload()
            

            }   

            function temporizador(cond){
                let teste = 0;
             
                 setInterval(() => {
                     if(cond == true) {
                         teste += 1
                         console.log(teste)
                     }
                 }, 1000)
             };
             
            //  if(teste2 == true) {
            //      temporizador();
            //  }

            window.addEventListener('load', () => start())

            var sec=0
            var min=0
            var hr=0
            
            var interval
            
            function twoDigits(digit){
                if(digit<10){
                    return('0'+digit)
                }else{
                    return(digit)
                }
            }
            
            function start(){
                watch()
                interval= setInterval(watch,10)
            
            
            }
            
            function pause(){
                clearInterval(interval)
            
            }
            
            function stop(){
                clearInterval(interval)
                sec=0
                min=0
                window.alert("You've stopped at: "+document.getElementById('watch').innerText)
                document.getElementById('watch').innerText='00:00:00'
            
            }
            
            function watch(){
                sec++
                if(sec==60){
                    min++
                    sec=0
                    if(min==60){
                        min=0
                        hr++
                    }
                }
                document.querySelector('.pontos').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
            }
            
        document.addEventListener('keydown' , jump);
