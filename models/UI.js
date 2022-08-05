export class UI {
  constructor() {}

    showDifficulty(texto, points){
        const element = document.getElementById("difficulty")
        element.innerText = `Nivel: ${texto}. Puntos: ${points}`
    }


  showQuestion(texto) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerText = texto;
  }

  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = " ";
let button
    for (let i = 0; i < choices.length; i++) {
       button = document.createElement("button");
      button.innerText = choices[i];
      choicesContainer.append(button);
      button.className = "btn";

      button.addEventListener("click", () => callback(choices[i]))
      // console.log(button.textContent)
   
    }


  }
  
  showChoiceCorrect( correctAnswer ){
    let btn = document.getElementsByClassName("btn")
    // console.log("soy feudal", correctAnswer)

    for (let i = 0; i<btn.length; i++){
console.log(i)
      if(btn[i].innerText ==  correctAnswer){
       
        btn[i].className = "btn correct"
      }
    }

}
  /**
   *
   * @param {number} score
   */

  showScore(score) {
    const quizEndHTML = `
    <h2>Resultado: </h2>
    <h3>Tu puntaje es ${score} sobre 90 posibles</h3>
    `;
    let status
if(score <= 5){
   status =  `Sos terrible manco!`
  }else if ( score>5 & score < 60 ){
  status =  `Quizas le ganas a la IA en nivel facil`

}else{
  status = "Tienes un pase directo a la Red Bull "
}

const element = document.getElementById("quiz");
element.innerHTML = quizEndHTML;
  const h2 = document.createElement("h2")
  h2.innerText =status 
  element.appendChild(h2)

  }

/**
 * 
 * @param {number} currentIndex 
 * @param {number} total 
 */

  showProgres(currentIndex, total){
    const element = document.getElementById("progress")
    element.innerHTML = `Pregunta ${currentIndex} de ${total}`
  }
}
