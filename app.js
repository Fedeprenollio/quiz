import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

/**
 *
 * @param {Quiz} quiz
 * @param {UI} ui
 */

const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
   ui.showScore(quiz.score)
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);

    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);

    setTimeout(()=>ui.showChoiceCorrect(quiz.getQuestionIndex2().answer),500)
      setTimeout( ()=>{  renderPage(quiz, ui)} ,1500 )
      
    });
    ui.showProgres(quiz.questionIndex+1, quiz.question.length, quiz.score)

    ui.showDifficulty(quiz.getQuestionIndex().difficulty, quiz.getQuestionIndex().points)
  }

};

const main = () => {
  const quiz = new Quiz(questions);
  const ui = new UI();
  renderPage(quiz, ui);
};

main();
