// Don't pollute the global scope
{
    const questionOne = document.getElementsByName('answer-one');
    const questionTwo = document.getElementsByName('answer-two');
    const questionThree = document.getElementsByName('answer-three');
    const questions = [questionOne, questionTwo, questionThree];

    const input = document.querySelector('input');

    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event);

        if(true) {
            console.log('show pet');
        } else {
            alert("you didn't answer all the questions, dummy");
        }
    })

    debugger;

    const isQuestionAnswered = () => {
        for (let k=0; k<input; k++){
            input[k].checked === true;
            if (true) {
                console.log('This is the answer');
            } //else k++ here instead?
        }
    }

    const isFormValid = questions => {
        const formIsValid = false;
        for (let i=0; i<questions.length; i++){
            const question = questions[i];
            for(let j=0; j<question; j++){
                isQuestionAnswered(question);
            }
        } 
        return formIsValid;
    }


    const perfectPet = () => {
        const question1Answer = () => {
            // if inputResult0,1,2,3, (or prompt?) checked === true, then value = the number value of the input 
            //question1 = value of checked input
        }
        const question2Answer = () => {
            // if inputResult4,5,6,7, (or prompt?) checked === true, then value = the number value of the input 
            //question2 = value of checked input
        }
        const question3Answer = () => {
            // if inputResult8,9,10,11, (or prompt?) checked === true, then value = the number value of the input 
            //question3 = value of checked input
        }
        const finalScore = (x+y+z);
            const x = parseInt(question1Answer);
            const y = parseInt(question2Answer);
            const z = parseInt(question3Answer);
        if (parseInt(finalScore) <= 16) {
            let perfectPet = "Cat!"
            console.log('Your perfect pet is a...')
            console.log(perfectPet)
        } else {
            let perfectPet = "Dog!"
            console.log('Your perfect pet is a...')
            console.log(perfectPet)
        }
    }
}