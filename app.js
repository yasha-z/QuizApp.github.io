const questions = [
    {
        'que': 'Who invented C++?',
        'a' : 'Ken Thompson',
        'b' : 'Brian Kernighan',
        'c' : 'Bjarne Stroustrup',
        'd' : 'Dennis Ritchie',
        'correct': 'c',
    },
    {
        'que': 'Which of the following is used for comments in C++?',
        'a' : ' /* comment */',
        'b' : '// comment */',
        'c' : '// comment',
        'd' : 'both // comment or /* comment */',
        'correct': 'd',
    },
    {
        'que': 'Which of the following is not a type of Constructor in C++?',
        'a' : 'Friend constructor',
        'b' : 'Copy constructor',
        'c' : 'Parameterized constructor',
        'd' : 'Default constructor',
        'correct': 'a',
    },
    {
        'que': 'Which of the following correctly declares an array in C++?',
        'a' : 'array{10};',
        'b' : 'array array[10];',
        'c' : 'int array;',
        'd' : 'int array[10];',
        'correct': 'd',
    }

];

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText = ` ${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}



const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;

    if (index === total) {
        return endQuiz();
    } else {
        loadQuestion();
    }
}

// submit button
const submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", submitQuiz);

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer =  input.value;
  
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:centre">
        <h3> Congrats! You've completed the Quiz <\h3>
        <h2> Your Score: ${right} / ${total} <\h>
        </div>
    `
}

loadQuestion();