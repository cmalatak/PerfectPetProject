const isQuestionAnswered = (question) => {
    for (let i=0; i < question.length; i++){ 
        const option = question[i];
   
        if (option.checked) {
            console.log(`${option} is the answer to ${question}`);
            return true
        }
    }
    return false;
}

const areAllQuestionsAnswered = questions => {
    const numOfQuestions = questions.length;

    let counter = 0;

    for (let i=0; i < questions.length; i++) {
        const question = questions[i];
        
        if(isQuestionAnswered(question)) {
            counter += 1;
        }
    }

    return numOfQuestions === counter;
}

export {isQuestionAnswered, areAllQuestionsAnswered};