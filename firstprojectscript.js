// Don't pollute the global scope
{
    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event);
    })
}

// if ("#question").val() == "1" {
//     if($("#answer").val() == "A"){

//     } else if($("#answer").val() == "B"){

//     } else if($("#answer").val() == "C"){

//     } else if($("#answer").val() == "D"){

//     } else
// }

// if ($("#question").val() == "2") {
//     if($("#answer").val() == "A"){

//     } else if($("#answer").val() == "B"){

//     } else if($("#answer").val() == "C"){

//     } else if($("#answer").val() == "D"){

//     } else
// }

// if ($("#question").val() == "3") {
//     if($("#answer").val() == "A"){

//     } else if($("#answer").val() == "B"){

//     } else if($("#answer").val() == "C"){

//     } else if($("#answer").val() == "D"){

//     } else
// }