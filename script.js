// Array de preguntas y respuestas
const questions = [
    {
        question: "¿Cuál es la capital de Japón?",
        options: ["Tokio", "Seúl", "Pekín", "Bangkok"],
        correctAnswer: "Tokio"
    },
    {
        question: "¿Quién pintó la Capilla Sixtina?",
        options: ["Leonardo Da Vinci", "Miguel Ángel", "Rafael", "Rembrandt"],
        correctAnswer: "Miguel Ángel"
    },
    {
        question: "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",
        options: ["1776", "1789", "1801", "1812"],
        correctAnswer: "1776"
    },
    {
        question: "¿Qué planeta es conocido como el 'Planeta Rojo'?",
        options: ["Marte", "Júpiter", "Saturno", "Venus"],
        correctAnswer: "Marte"
    },
    {
        question: "¿Cuántos continentes hay en el mundo?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7"
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        options: ["Gabriel García Márquez", "Mario Vargas Llosa", "Pablo Neruda", "Jorge Luis Borges"],
        correctAnswer: "Gabriel García Márquez"
    },
    {
        question: "¿Cuál es el océano más grande del planeta?",
        options: ["Atlántico", "Índico", "Pacífico", "Ártico"],
        correctAnswer: "Pacífico"
    },
    {
        question: "¿Quién fue el primer hombre en pisar la Luna?",
        options: ["Yuri Gagarin", "Neil Armstrong", "Alan Shepard", "John Glenn"],
        correctAnswer: "Neil Armstrong"
    },
    {
        question: "¿Qué es la fotosíntesis?",
        options: ["El proceso por el cual las plantas producen energía a partir del sol", "La transformación de la luz en calor", "La respiración de las plantas", "La absorción de agua por las raíces"],
        correctAnswer: "El proceso por el cual las plantas producen energía a partir del sol"
    },
    {
        question: "¿Cuántos jugadores hay en un equipo de fútbol?",
        options: ["9", "10", "11", "12"],
        correctAnswer: "11"
    },
    {
        question: "¿Cuál es el símbolo químico del oro?",
        options: ["Ag", "Au", "Fe", "O"],
        correctAnswer: "Au"
    },
    {
        question: "¿Qué evento histórico comenzó el 28 de junio de 1914?",
        options: ["La Revolución Rusa", "La Primera Guerra Mundial", "La Segunda Guerra Mundial", "La Guerra de Independencia de los Estados Unidos"],
        correctAnswer: "La Primera Guerra Mundial"
    },
    {
        question: "¿En qué país se encuentra la Gran Muralla China?",
        options: ["Japón", "China", "Corea del Sur", "India"],
        correctAnswer: "China"
    },
    {
        question: "¿Quién es el autor de la famosa obra 'Don Quijote de la Mancha'?",
        options: ["Gabriel García Márquez", "Benito Pérez Galdós", "Miguel de Cervantes", "Juan José Arreola"],
        correctAnswer: "Miguel de Cervantes"
    },
    {
        question: "¿Qué instrumento musical tiene 88 teclas?",
        options: ["Guitarra", "Piano", "Violín", "Trompeta"],
        correctAnswer: "Piano"
    },
    {
        question: "¿En qué continente se encuentra el desierto del Sahara?",
        options: ["Asia", "América", "África", "Oceanía"],
        correctAnswer: "África"
    },
    {
        question: "¿Quién inventó la bombilla eléctrica?",
        options: ["Nikola Tesla", "Albert Einstein", "Thomas Edison", "Alexander Graham Bell"],
        correctAnswer: "Thomas Edison"
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
        correctAnswer: "Amazonas"
    },
    {
        question: "¿Qué animal es conocido como el 'Rey de la Selva'?",
        options: ["Tigre", "León", "Elefante", "Gorila"],
        correctAnswer: "León"
    },
    {
        question: "¿Cuál es la moneda oficial de Japón?",
        options: ["Won", "Peso", "Yen", "Dólar"],
        correctAnswer: "Yen"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Función para cargar la pregunta actual
function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    
    // Cargar el texto de la pregunta
    document.getElementById("question-text").innerText = questionData.question;
    
    // Limpiar las opciones anteriores
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = '';
    
    // Mostrar las opciones de respuesta
    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("btn", "btn-outline-primary", "w-100", "mb-2");
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    // Configurar los botones de navegación
    document.getElementById("prev-button").style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    document.getElementById("next-button").style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById("finish-button").style.display = currentQuestionIndex === questions.length - 1 ? 'inline-block' : 'none';
}

// Función para verificar si la respuesta es correcta
function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        score++;
        localStorage.setItem("score", score); // Guardar la puntuación en localStorage
    }
    navigate('next');
}

// Función para navegar entre preguntas
function navigate(direction) {
    if (direction === 'next' && currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
    } else if (direction === 'prev' && currentQuestionIndex > 0) {
        currentQuestionIndex--;
    }
    
    if (currentQuestionIndex === questions.length) {
        endGame();
    } else {
        loadQuestion();
    }
}

// Función para terminar el juego
function endGame() {
    // Mostrar la puntuación final
    document.getElementById("question-container").style.display = 'none';
    document.getElementById("score-container").style.display = 'block';
    document.getElementById("score-text").innerText = `Tu puntuación es: ${score}`;
}

// Función para reiniciar el juego
function restartGame() {
    score = 0;
    localStorage.setItem("score", score); // Resetear el puntaje en localStorage
    currentQuestionIndex = 0;
    document.getElementById("score-container").style.display = 'none';
    document.getElementById("question-container").style.display = 'block';
    loadQuestion();
}

// Iniciar el juego
function startGame() {
    const storedScore = localStorage.getItem("score");
    if (storedScore) {
        score = parseInt(storedScore);
    }
    loadQuestion();
}

// Cargar la primera pregunta cuando se inicia el juego
window.onload = startGame;
