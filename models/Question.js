export class Question {
    /**
     * 
     * @param {string} text 
     * @param {string[]} choices 
     * @param {string} answer 
     */


  constructor(text, choices, answer,difficulty,points) {
    this.text = text,
    this.choices = choices,
    this.answer = answer,
    this.difficulty = difficulty,
    this.points = points
    
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

const question = new Question();

