export class UI {
  constructor() {}

  showQuestion(texto) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerText = texto;
  }

  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = " ";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerText = choices[i];
      choicesContainer.append(button);
      button.className = "btn";

      button.addEventListener("click", () => callback(choices[i]));
    }

    console.log(choicesContainer);
  }

  /**
   *
   * @param {number} score
   */

  showScore(score) {
    const quizEndHTML = `
    <h2>Resultado: </h2>
    <h3>Tu puntaje es ${score}</h3>
    `;
    const element = document.getElementById("quiz");
    element.innerHTML = quizEndHTML;
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
