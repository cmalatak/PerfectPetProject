const getSelectedChoices = (questions) => {
    const selectedChoices = [];

    for (let i=0; i < questions.length; i++) {
        const questionChoices = questions[i];

        for (let j=0; j < questionChoices.length; j++) {
            if(questionChoices[j].choice.checked) {
                selectedChoices.push(questionChoices[j]);
            }
        }
    }
    return selectedChoices;
}

export default getSelectedChoices;