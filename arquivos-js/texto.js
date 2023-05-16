const paragrafo = document.getElementById('text')
const texto= 'Este é o colegio mundo novo temos como objecivo ensinar para um mundo melhor, garantimos sempre atividades em feriados, palestras e saidas para parques de diversoes cinemas, e sobre tudo o melhor ensino e um atendimento de qualidade. Conceteza no colegio mundo novo garantimos segurança, educaçao, diverçao e o melhor ensino academico possivel para o seu filho'
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