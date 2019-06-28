const addScoresForSelectedChoices = (selectedChoicesWithScores) => {
    let totalScore = 0

    for (let i=0; i < selectedChoicesWithScores.length; i++) {
        const selectedChoiceWithScore = selectedChoicesWithScores[i]

        totalScore += selectedChoiceWithScore.score;
    }
    return totalScore;
}

export default addScoresForSelectedChoices;