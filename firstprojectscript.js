// Don't pollute the global scope
{
    const questionOne = document.getElementsByName('answer-one');
    const questionTwo = document.getElementsByName('answer-two');
    const questionThree = document.getElementsByName('answer-three');
    const questions = [questionOne, questionTwo, questionThree];

    const choice = document.querySelector('input');

    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event);
        console.log(questions)
        isFormValid(questions)
        if(true) {
            console.log('show pet');
        } else {
            alert("you didn't answer all the questions, dummy");
        }
    })
    const isQuestionAnswered = () => {
        for (let k=0; k <choice.length; k++){         
            if (choice[k].checked) {
                checked = true;
                console.log(`${choice[k]} is the answer to ${question[j]}`);
            }
        }
    }

    const isFormValid = questions => {
        const formIsValid = false;
        for (let i=0; i <questions.length; i++){
            const question = questions[i];
            for(let j=0; j <question.length; j++){
                isQuestionAnswered(question);
            }
        } 
        return formIsValid;
    }

    const perfectPet = () => {
    //     const finalScore = (answerValues);
    //         const x = parseInt(question1Answer);
    //         const y = parseInt(question2Answer);
    //         const z = parseInt(question3Answer);
    //     if (parseInt(finalScore) <= 16) {
    //         let perfectPet = "Cat!"
    //         console.log('Your perfect pet is a...')
    //         console.log(perfectPet)
    //     } else {
    //         let perfectPet = "Dog!"
    //         console.log('Your perfect pet is a...')
    //         console.log(perfectPet)
    //     }
    }
}