
let task0 = 'Տարվա մեջ քանի ամիս ունի 28 օր ?',
    task1 = 'Մետրոն ունի 10 վագոն դու նստած ես վերջից հաշված 3 վագոնում սկզբից հաշված որ երորդ վագոնում ես գտնվում ?';

const data_array = [
    [task0, '5', '1', '7', '12', 4],
    [task1, '7', '5', '4', '10', 1],
]

let plus = 0;
let cur_answer = 0;
let count_answer = data_array.length;

const byId = (id, value) => {
    document.getElementById(id).innerHTML = value;
};

const resultAnswer = (titleAnswer,  correctAnswer, selectedAnswer) => {
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    const div = document.createElement('div');
    h2.innerHTML = titleAnswer;
    div.innerHTML = `
        <p>Correct answer ${correctAnswer} </p>
        <p>Selected answer ${selectedAnswer}</p>
    `;
    section.appendChild(h2);
    section.appendChild(div)
    document.getElementById('test').appendChild(section)
}

const check = num => {

    if(num === 0) {
        document.getElementById('answer_button_content').style.display = 'block';
        byId('question', data_array[cur_answer][0]);
        byId('option1', data_array[cur_answer][1]);
        byId('option2', data_array[cur_answer][2]);
        byId('option3', data_array[cur_answer][3]);
        byId('option4', data_array[cur_answer][4]);

        document.getElementById('start').style.display = 'none';

    }else {
            const titleAnswer = data_array[cur_answer][0];
            const correctAnswerIndex = data_array[cur_answer][5];
            const correctAnswer = data_array[cur_answer][correctAnswerIndex];
            const selectedAnswer = data_array[cur_answer][num];


        if(num === correctAnswerIndex) {
            plus++;
            resultAnswer(titleAnswer, correctAnswer, selectedAnswer)

        }else {
            resultAnswer(titleAnswer, correctAnswer, selectedAnswer)
        }

        cur_answer++
        if(cur_answer < count_answer) {
            byId('question', data_array[cur_answer][0]);
            byId('option1', data_array[cur_answer][1]);
            byId('option2', data_array[cur_answer][2]);
            byId('option3', data_array[cur_answer][3]);
            byId('option4', data_array[cur_answer][4]);
        }else {
            const percent = Math.round(plus/count_answer * 100)
            document.getElementById('answer_button_content').style.display = 'none'
            document.getElementById('test').style.display = 'block';
            byId('result', `${plus} of ${count_answer} <p>${percent} %</p>`);
            byId('question', '');
        }
    }
}
