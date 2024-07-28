import {UrlManager} from "../utils/url-manager.js";
import {Auth} from "../services/auth.js";
import {CustomHttp} from "../services/custom-http.js";
import config from "../../config/config.js";

export class Answer {
    constructor() {

        this.quiz = null;
        this.testId = null;
        this.routeParams = UrlManager.getQueryParams();


        this.testNameElement = null;
        this.answerQuestionOptionsElement = null;
        this.answerQuestionOptionElement = null;
        this.labelElement = null;
        this.currentQuestionIndex = null;
        this.answerQuestionTitleElement = null;


        this.init();

    }

    async init() {
        const userInfo = Auth.getUserInfo();
        if (!userInfo) {
            location.href = '#/';
            return;
        }

        this.testId = this.routeParams.id;


        try {

            const result = await CustomHttp.request(config.host + '/tests/' + this.testId + '/result/details?userId=' + userInfo.userId);

            if (result) {
                this.quiz = result;
                this.quizResults = result.test.questions;
                this.rightAnswers = this.quiz.test.questions.answers;
                this.showTest();
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.log(error);
            location.href = '#/';
        }

        const goBackButton = document.getElementById('go-back-answer');
        goBackButton.addEventListener('click', () => {

            location.href = '#/result?id=' + this.routeParams.id;
        });
    }


    showTest() {

        if ( !this.quiz) return;

            this.testNameElement = document.getElementById('test-name');
            this.testNameElement.innerText = this.quiz.test.name;

            this.answerQuestionTitleElement = document.getElementById('answer-question-title');
            this.answerQuestionOptionsElement = document.getElementById('answer-options');

            this.answerQuestionOptionElement = document.getElementById('answer-question-option');


           const performerNameElement = document.getElementById('performer');
           const userInfo = Auth.getUserInfo();
           const userEmail = Auth.getUserEmail();
             if (userInfo && userEmail) {
            const fullName = userInfo.fullName;
            performerNameElement.innerText = fullName + ', ' + userEmail;
            } else {
            console.error('error');
            }


                this.quiz.test.questions.forEach((question, index) => {
                const currentQuestionIndex = index + 1;
                const answerQuestionTitleElement = document.createElement('div');
                answerQuestionTitleElement.className = 'answer-question-title';
                answerQuestionTitleElement.innerHTML = '<span>Вопрос ' + currentQuestionIndex + ':</span> ' + question.question;

                this.answerQuestionOptionsElement.appendChild(answerQuestionTitleElement);

                    question.answers.forEach(answer => {
                    const answerQuestionOptionElement = document.createElement('div');
                    answerQuestionOptionElement.className = 'answer-question-option';

                    const inputId = 'answer-' + answer.id;
                    const inputElement = document.createElement('input');
                    inputElement.className = 'answer-option';
                    inputElement.disabled = true;
                    inputElement.setAttribute('value', answer.id);
                    inputElement.setAttribute('type', 'radio');

                    const labelElement = document.createElement('label');
                    labelElement.setAttribute('for', inputId);
                    labelElement.innerHTML = answer.answer;


                    this.quizResults.find(result => result.questionId === question.id);
                    if (this.quizResults && this.quizResults[index]) {
                        if (answer.correct === false) {
                            labelElement.style.color = '#DC3333';
                            inputElement.style.border = '6px solid #DC3333';
                        } if (answer.correct === true) {
                            labelElement.style.color = '#5FDC33';
                            inputElement.style.border = '6px solid #5FDC33';
                        }
                    }

                    answerQuestionOptionElement.appendChild(inputElement);
                    answerQuestionOptionElement.appendChild(labelElement);

                    this.answerQuestionOptionsElement.appendChild(answerQuestionOptionElement);


                });

            });
        }

}










