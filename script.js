function showCorrectAnswers() {
    const correctAnswers = {
        q1: 'B',
        q2: 'D',
        q3: 'B',
        q4: 'A',
        q5: 'B',
        q6: 'A',
        q7: 'C'
    };

    let answersHtml = '<h2>Respostas Corretas</h2>';
    answersHtml += '<ul>';
    for (const [question, answer] of Object.entries(correctAnswers)) {
        answersHtml += `<li>${question.toUpperCase()}: ${answer}</li>`;
    }
    answersHtml += '</ul>';

    document.getElementById('responses').innerHTML = answersHtml;
}
