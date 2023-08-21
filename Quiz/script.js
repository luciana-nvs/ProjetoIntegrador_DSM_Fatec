const questions = [
    {
      "question": "Qual sua faixa etária/idade?",
      "answer1": "Adolescente: 13 a 17 anos",
      "answer1Total": "1",
      "answer2": "Jovem adulto: 18 a 25 anos",
      "answer2Total": "2",
      "answer3": "Adulto jovem: 26 a 35 anos",
      "answer3Total": "3",
      "answer4": "Adulto de meia-idade: 36 a 50 anos",
      "answer4Total": "4",
      "answer5": "Adultos com: 51 anos ou mais",
      "answer5Total": "5"
    },
    
    {
      "question": "Como você se descreveria em relação à busca por novas experiências",
      "answer1": "Aventureiro(a) e sempre aberto(a) a experimentar novidades",
      "answer1Total": "1",
      "answer2": "Disposto(a) a experimentar coisas novas, mas com cautela",
      "answer2Total": "2",
      "answer3": "Prefiro ficar dentro da minha zona de conforto e evito riscos",
      "answer3Total": "3",
      "answer4": "Gosto de seguir uma rotina estável e não costumo buscar por novidades",
      "answer4Total": "4",
      "answer5": "Não tenho certeza/não se aplica",
      "answer5Total": "5"
    },
    {
      "question": "Qual é a sua preferência em relação ao momento de uso do perfume?",
      "answer1": "Perfumes para uso diurno (durante o dia)",
      "answer1Total": "1",
      "answer2": "Perfumes para uso noturno (à noite)",
      "answer2Total": "3",
      "answer3": "Perfumes versáteis que podem ser usados em qualquer momento",
      "answer3Total": "2",
      "answer4": "Perfumes específicos para ocasiões especiais",
      "answer4Total": "4",
      "answer5": "Não tenho certeza/não se aplica",
      "answer5Total": "5"
    },
    {
      "question": "Até quanto está disposto(a) a pagar por um perfume?",
      "answer1": "Até 120 reais.",
      "answer1Total": "3",
      "answer2": "Até 200 reais.",
      "answer2Total": "2",
      "answer3": "Acima de 200 reais.",
      "answer3Total": "1",
      "answer4": "Até 80 reais.",
      "answer4Total": "4",
      "answer5": "Não tenho limite.",
      "answer5Total": "5"
    },
    {
      "question": "Qual é sua preferência de família olfativa?",
      "answer1": "Cítrico/Frutal",
      "answer1Total": "1",
      "answer2": "Fresco/Aquático.",
      "answer2Total": "2",
      "answer3": "Floral e/ou Herbal.",
      "answer3Total": "3",
      "answer4": "Oriental",
      "answer4Total": "4",
      "answer5": "Amadeirado",
      "answer5Total": "5"
    },
    {
      "question": "Qual sua marca nacional favorita?",
      "answer1": "O Boticário",
      "answer1Total": "3",
      "answer2": "Jequiti",
      "answer2Total": "2",
      "answer3": "Avon",
      "answer3Total": "1",
      "answer4": "Natura",
      "answer4Total": "4",
      "answer5": "Eudora",
      "answer5Total": "5"
    },
    
    {
      "question": "Quando você escolhe um perfume, o que é mais importante para você?",
      "answer1": "A fragrância e a nota olfativa predominante",
      "answer1Total": "1",
      "answer2": "A durabilidade e a fixação da fragrância",
      "answer2Total": "2",
      "answer3": "A embalagem e a apresentação do produto",
      "answer3Total": "3",
      "answer4": "A marca e a reputação do perfume",
      "answer4Total": "4",
      "answer5": "Não tenho certeza/não se aplica",
      "answer5Total": "5"
    }
  ];


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const option5 = document.querySelector('.option5');
const nextButton = document.querySelector('.btn-next');
const previousButton = document.querySelector('.btn-previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    const option5Total = questions[index].answer5Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option2Total}`);
    option5.setAttribute('data-total', `${option5Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
    option5.innerHTML = `${question.answer5}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Resultado';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
         `<h1 class="final-score">Seu resultado é: ${totalScore}</h1>
         <div class="summary">
            <p>Com base nos seus resultados, o tipo de perfume que mais combina com você é:</p>
            <p>Entre 15 e 21: Amadeirada</p>
            <p>Entre 10 e 15: Oriental</p>
            <p>Entre 5 e 10: Floral</p>
            <p>5 ou abaixo disso:  Citríca</p>
        </div>
        <button class="btn btn-success btn-restart">Refazer teste</button>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);