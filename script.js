const questions = [
    {
        question: "Qual � a capital da Fran�a?",
        choices: ["Paris", "Londres", "Berlim", "Roma"],
        answer: 0
    },
    {
        question: "Qual � o resultado de 5 + 7?",
        choices: ["10", "12", "13", "15"],
        answer: 1
    },
    {
        question: "Quem � o fundador da Microsoft?",
        choices: ["Steve Jobs", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
        answer: 2
    },
    {
        question: "Qual � o maior mam�fero do mundo?",
        choices: ["Elefante", "Baleia Azul", "Rinoceronte", "Girafa"],
        answer: 1
    },
    {
        question: "Quem ganhou a Copa do Mundo de 2018?",
        choices: ["Brasil", "Alemanha", "Fran�a", "Argentina"],
        answer: 2
    },
    {
        question: "Qual � a Linguagem de Programa��o mais popular do Mundo?",
        choices: ["Java", "C++", "Python", "Basic"],
        answer: 2
    },
    {
        question: "Quem � o maior campe�o da Copa do Mundo de Futebol?",
        choices: ["Fran�a", "Brasil", "Espanha", "Alemanha"],
        answer: 1
    },
    {
        question: "Qual � o maior pa�s do mundo em extens�o territorial?",
        choices: ["Argentina", "R�ssia", "Brasil", "China"],
        answer: 1
    },
    {
        question: "Qual � o pa�s mais populoso do mundo?",
        choices: ["China", "Brasil", "Estados Unidos", "�ndia"],
        answer: 3
    },
    {
        question: "Qual � o maior planeta do Sistema Solar?",
        choices: ["Saturno", "Merc�rio", "J�piter", "Urano"],
        answer: 2
    },
    {
        question: "Quem fundou o Google?",
        choices: ["Steve Jobs", "Bill Gates", "Larry Page", "Steve Austin"],
        answer: 2
    },
    {
        question: "Quem ganhou a Copa do Mundo de 2022?",
        choices: ["Argentina", "Fran�a", "Brasil", "Alemanha"],
        answer: 0
    },
    {
        question: "As Redes Sociais Whatsapp, Facebook, Instagram s�o controladas por qual empresa?",
        choices: ["IBM", "Space X", "Meta", "Apple"],
        answer: 2
    },
    {
        question: "Quais desses ritmos musicais s�o originais do Brasil?",
        choices: ["Sertenajo, Samba, Rock", "Funk, Ax�, Pagode", "Sertanejo, Forr�, Lambada", "Funk, Samba, Pagode"],
        answer: 2
    }

];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const choices = document.querySelectorAll(".choice");
    choices.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
        button.classList.remove("correct", "wrong");
        button.disabled = false;
    });
    document.getElementById("feedback").textContent = "";
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const choices = document.querySelectorAll(".choice");
    if (selectedIndex === currentQuestion.answer) {
        choices[selectedIndex].classList.add("correct");
        document.getElementById("feedback").textContent = "Correto!";
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(loadQuestion, 1000);
        } else {
            document.getElementById("feedback").textContent = "Parab�ns, voc� completou o quiz!";
        }
    } else {
        choices[selectedIndex].classList.add("wrong");
        choices[currentQuestion.answer].classList.add("correct");
        document.getElementById("feedback").textContent = "Errado! O quiz terminou.";
        choices.forEach(button => button.disabled = true);
    }
}

window.onload = function() {
    questions.sort(() => Math.random() - 0.5);
    loadQuestion();
};
