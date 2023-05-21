const paragrafo = document.getElementById('text')
const texto= 'Aulas de Nataçao, Capoeira, xadrez e Dança para alunos internos e externos. Os interessados devem contactar a secretaria.'
const inter = 100;
function escrever( a, b, c){
    const caracteres= b.split("").reverse()
    const intervalo= setInterval(() => {
        if (!caracteres.length) {
            return clearInterval(intervalo) 
        }
        const proximo = caracteres.pop()
        paragrafo.innerHTML+= proximo
    }, inter);
}
escrever(paragrafo, texto, inter)