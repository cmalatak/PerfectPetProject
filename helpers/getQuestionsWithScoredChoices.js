const getQuestionsWithScoredChoices = questions => {
    return questions.map((questionChoices, i) => {
        return questionChoices.map((choice, i) => {
            return {
                choice: choice,
                score: i + 1,
            }
        })
    });
}

export default getQuestionsWithScoredChoices;