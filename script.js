const questions = [
    {
        question: "Qual é a capital da França?",
        choices: ["Paris", "Londres", "Berlim", "Roma"],
        answer: 0
    },
    {
        question: "Qual é o resultado de 5 + 7?",
        choices: ["10", "12", "13", "15"],
        answer: 1
    },
    {
        question: "Quem é o fundador da Microsoft?",
        choices: ["Steve Jobs", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
        answer: 2
    },
    {
        question: "Qual é o maior mamífero do mundo?",
        choices: ["Elefante", "Baleia Azul", "Rinoceronte", "Girafa"],
        answer: 1
    },
    {
        question: "Quem ganhou a Copa do Mundo de 2018?",
        choices: ["Brasil", "Alemanha", "França", "Argentina"],
        answer: 2
    },
    {
        question: "Qual é a Linguagem de Programação mais popular do Mundo?",
        choices: ["Java", "C++", "Python", "Basic"],
        answer: 2
    },
    {
        question: "Quem é o maior campeão da Copa do Mundo de Futebol?",
        choices: ["França", "Brasil", "Espanha", "Alemanha"],
        answer: 1
    },
    {
        question: "Qual é o maior país do mundo em extensão territorial?",
        choices: ["Argentina", "Rússia", "Brasil", "China"],
        answer: 1
    },
    {
        question: "Qual é o país mais populoso do mundo?",
        choices: ["China", "Brasil", "Estados Unidos", "Índia"],
        answer: 3
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        choices: ["Saturno", "Mercúrio", "Júpiter", "Urano"],
        answer: 2
    },
    {
        question: "Quem fundou o Google?",
        choices: ["Steve Jobs", "Bill Gates", "Larry Page", "Steve Austin"],
        answer: 2
    },
    {
        question: "Quem ganhou a Copa do Mundo de 2022?",
        choices: ["Argentina", "França", "Brasil", "Alemanha"],
        answer: 0
    },
    {
        question: "As Redes Sociais Whatsapp, Facebook, Instagram são controladas por qual empresa?",
        choices: ["IBM", "Space X", "Meta", "Apple"],
        answer: 2
    },
    {
        question: "Quais desses ritmos musicais são originais do Brasil?",
        choices: ["Sertenajo, Samba, Rock", "Funk, Axé, Pagode", "Sertanejo, Forró, Lambada", "Funk, Samba, Pagode"],
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
            document.getElementById("feedback").textContent = "Parabéns, você completou o quiz!";
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
