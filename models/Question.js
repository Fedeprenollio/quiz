export class Question {
    /**
     * 
     * @param {string} text 
     * @param {string[]} choices 
     * @param {string} answer 
     */


  constructor(text, choices, answer) {
    this.text = text,
    this.choices = choices,
    this.answer = answer
}

/**
 * 
 * @param {string} choice 
 * @returns {boolean}
 */
correctAnswer(choice){
    return  choice == this.answer
}
}

const question = new Question("cuanto es 1+1", [1,2,3,4,6],"2 ");

console.log(question.correctAnswer(2));
