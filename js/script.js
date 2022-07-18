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
            }

        }, 10);
        
        document.addEventListener('keydown', jump);