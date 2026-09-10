const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Sua escola anunciou que a partir deste trimestre os alunos poderão usar assistentes de IA para tirar dúvidas e organizar rotinas de estudos. Como você reagiu à novidade?",
        alternativas: [
            {
                texto: "Achei incrível! Vai facilitar muito o dia a dia e organizar minha rotina.",
                afirmacao: "Você recebeu a chegada da IA nos estudos com entusiasmo e foco na produtividade."
            },
            {
                texto: "Fiquei receoso. Tenho medo de a gente ficar dependente da tecnologia para pensar.",
                afirmacao: "Você manteve uma postura cautelosa, priorizando a autonomia do pensamento humano."
            }           
        ]
    },
    {
        enunciado: "Na aula de Língua Portuguesa, o professor pediu uma análise crítica sobre um livro clássico. Como você decide utilizar a IA nesse projeto?",
        alternativas: [
            {
                texto: "Uso a IA para resumir a obra e me ajudar a estruturar os tópicos principais da minha análise.",
                afirmacao: "Utilizou a inteligência artificial como um ponto de partida para organizar suas ideias."
            },
            {
                texto: "Prefiro ler o livro por conta própria e discutir o tema direto com meus colegas de turma.",
                afirmacao: "Decidiu focar na leitura direta e no debate humano para construir suas conclusões."
            }
        ]
    },
    {
        enunciado: "Em uma feira de ciências, surge um debate sobre o uso de IA na medicina e diagnóstico de doenças. Qual opinião você defende no painel?",
        alternativas: [
            {
                texto: "A IA é essencial porque processa dados mais rápido que qualquer humano e pode salvar vidas.",
                afirmacao: "Defendeu o uso intensivo da tecnologia para acelerar descobertas e salvar vidas."
            },
            {
                texto: "A IA ajuda, mas a palavra final e o cuidado humano devem continuar sempre com os médicos.",
                afirmacao: "Enfatizou a importância da empatia e da responsabilidade humana acima dos algoritmos."
            }
        ]
    },
    {
        enunciado: "Você precisa criar a capa de uma apresentação sobre o meio ambiente. Qual recurso decide usar para fazer a arte?",
        alternativas: [
            {
                texto: "Geradores de imagens por IA a partir de descrições detalhadas em texto.",
                afirmacao: "Apostou em ferramentas gerativas para criar visuais inovadores rapidamente."
            },
            {
                texto: "Fotografias autorais e ilustrações feitas por você em editores tradicionais.",
                afirmacao: "Valorizou o trabalho autoral e a expressão artística feita pelas próprias mãos."
            }
        ]
    },
    {
        enunciado: "Chega o momento de preparar a conclusão do projeto final da escola. Um colega sugere pedir para o chat escrever o texto inteiro para economizar tempo. O que você responde?",
        alternativas: [
            {
                texto: "Podemos usar o texto como rascunho, mas precisamos reescrever com nossas próprias palavras e conclusões.",
                afirmacao: "Demonstrou senso crítico ao entender a IA como apoio, mantendo a autenticidade do grupo."
            },
            {
                texto: "Acho válido usar o texto gerado, desde que a gente revise os fatos para não entregar informações erradas.",
                afirmacao: "Confiou na capacidade de síntese da maquina, focando na checagem e validação dos dados."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Sua jornada com a tecnologia...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
