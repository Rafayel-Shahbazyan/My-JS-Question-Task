let task0 = 'Տարվա մեջ քանի ամիս ունի 28 օր',
    task1 = 'Մետրոն ունի 10 վագոն դու նստած ես վերջից հաշված 3 վագոնում սկզբից հաշված որ երորդ վագոնում ես գտնվում';
const data_array = [
    [task0, '5', '1', '7', '12', 4],
    [task1, '7', '5', '4', '10', 1]
]
let plus = 0;
let cur_answer = 0;
let count_answer = data_array.length;
let i = 0;
const arr = [
    'Hello', 'JavaScript', 'React'
]
function resultAnswer(titleAnswer,  correctAnswer, selectedAnswer) {
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    const div = document.createElement('div');
    h2.innerHTML = titleAnswer;
    div.innerHTML = `
        <p>correct answer ${correctAnswer} </p>
        <p>selected answer ${selectedAnswer}</p>
    `;
    section.appendChild(h2);
    section.appendChild(div)
    document.getElementById('test').appendChild(section)
}
function check(num) {
    if(num === 0) { 
        document.getElementById('option1').style.display = 'block';
        document.getElementById('option2').style.display = 'block';
        document.getElementById('option3').style.display = 'block';
        document.getElementById('option4').style.display = 'block';
        
        document.getElementById('question').innerHTML = data_array[cur_answer][0]
        document.getElementById('option1').innerHTML = data_array[cur_answer][1];
        document.getElementById('option2').innerHTML = data_array[cur_answer][2];
        document.getElementById('option3').innerHTML = data_array[cur_answer][3];
        document.getElementById('option4').innerHTML = data_array[cur_answer][4];
        document.getElementById('start').style.display = 'none'
    }else {
            const titleAnswer = data_array[cur_answer][0];
            const correctAnswerIndex = data_array[cur_answer][5];
            const correctAnswer = data_array[cur_answer][correctAnswerIndex]; 
            const selectedAnswer = data_array[cur_answer][num];
        if(num === data_array[cur_answer][5]) { 
            plus++;
            resultAnswer(titleAnswer, correctAnswer, selectedAnswer)
            
        }else {
            resultAnswer(titleAnswer, correctAnswer, selectedAnswer)
        }
    
        cur_answer++ 
        if(cur_answer < count_answer) {
            document.getElementById('question').innerHTML = data_array[cur_answer][0]
            document.getElementById('option1').innerHTML = data_array[cur_answer][1];
            document.getElementById('option2').innerHTML = data_array[cur_answer][2];
            document.getElementById('option3').innerHTML = data_array[cur_answer][3];
            document.getElementById('option4').innerHTML = data_array[cur_answer][4];
        }
        else{
            document.getElementById('option1').style.display = 'none';
            document.getElementById('option2').style.display = 'none';
            document.getElementById('option3').style.display = 'none';
            document.getElementById('option4').style.display = 'none';
            document.getElementById('question').style.display = 'none'
            document.getElementById('result').innerHTML = `${plus} of ${count_answer}`;
            document.getElementById('test').style.display = 'block'
        }
    }
}