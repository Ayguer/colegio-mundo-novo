
let frase= document.getElementById('frase')

let frases= document.getElementById('frases')
let total = 1
setInterval(() => {
    frase.style.visibility='hidden'
    frases.style.visibility='visible'
    frases.style.animationName='abrir'
    setTimeout(() => {
        frase.style.opacity='0%'
        frase.style.animationDuration='1s'
        
        frase.style.animationFillMode='forwards'
        frase.style.display='flex'
        frase.style.animationName='abrir-frase'
    }, 2000);
    setTimeout(() => {
        frase.style.animationName='fechar-frase'
    }, 4000);
    setTimeout(() => {
        frases.style.animationName='fechar'
        frase.style.display='none'
        
        
    }, 4500);
    total+=1
    if (total==1){
        frase.innerHTML='<br>Seja bem-vindo ao Colegio Mundo Novo, local de crescimento como indivíduo e cidadão'
       document.getElementById('imagen').style.backgroundImage="url('../imagens/estudando.jpg.webp')"

    }else if(total==2){
        frase.innerHTML='<br>A educação é o primeiro passo para a construção de um futuro melhor e você está no caminho certo.'
        document.getElementById('imagen').style.backgroundImage="url('../imagens/estuando2.jpeg')"
        
    }else if(total==3){
        frase.innerHTML='<br>Estamos aqui para te ajudar nesta jornada rumo ao aprendizado e conhecimento.'
        total-=3
        document.getElementById('imagen').style.backgroundImage="url('../imagens/estudando3.avif')"
    }
    
}, 8000);