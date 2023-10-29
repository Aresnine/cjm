async function loopInquirer(question, answerContainer, inquirer) {
    let answer = await inquirer.prompt([question]);
    let simpleAnswer = Object.values(answer).pop();
    answerContainer.push(simpleAnswer);
    if (question.children) {
        if (question.children[simpleAnswer]) {
            await loopInquirer(
                question.children[simpleAnswer],
                answerContainer,
                inquirer
            );
        }
    }
}
