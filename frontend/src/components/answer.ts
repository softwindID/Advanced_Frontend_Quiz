import {UrlManager} from "../utils/url-manager";
import {Auth} from "../services/auth";
import {CustomHttp} from "../services/custom-http";
import config from "../../config/config";

interface AnswerType {
    id: string;
    answer: string;
    correct: boolean;
}

interface QuestionType {
    id: string;
    question: string;
    answers: AnswerType[];
}

interface QuizType {
    test: {
        name: string;
        questions: QuestionType[];
    };
}

export class Answer {
    private quiz: QuizType | null = null;
    private testId: string | null = null;
    private routeParams: { [key: string]: string } = UrlManager.getQueryParams();

    private testNameElement: HTMLElement | null = null;
    private answerQuestionOptionsElement: HTMLElement | null = null;
    private answerQuestionOptionElement: HTMLElement | null = null;
    private labelElement: HTMLElement | null = null;
    private currentQuestionIndex: number | null = null;
    private answerQuestionTitleElement: HTMLElement | null = null;

    private quizResults: any[] = [];
    private rightAnswers: AnswerType[] = [];

    constructor() {
        this.init();
    }

    // Инициализация
    async init() {
        const userInfo = Auth.getUserInfo();
        if (!userInfo) {
            location.href = '#/';
            return;
        }

        this.testId = this.routeParams.id || null;
        if (!this.testId) {
            location.href = '#/';
            return;
        }

        try {
            const result = await CustomHttp.request(`${config.host}/tests/${this.testId}/result/details?userId=${userInfo.userId}`);

            if (result) {
                this.quiz = result;
                this.quizResults = result.test.questions;
                this.rightAnswers = result.test.questions.answers;
                this.showTest();
            } else {
                throw new Error("No result data");
            }
        } catch (error) {
            console.error(error);
            location.href = '#/';
        }

        this.setupGoBackButton();
    }

    // Настроить кнопку "назад"
    setupGoBackButton() {
        const goBackButton = document.getElementById('go-back-answer');
        if (goBackButton) {
            goBackButton.addEventListener('click', () => {
                location.href = `#/result?id=${this.routeParams.id}`;
            });
        }
    }

    // Отображение теста
    showTest() {
        if (!this.quiz) return;

        this.testNameElement = document.getElementById('test-name');
        if (this.testNameElement) {
            this.testNameElement.innerText = this.quiz.test.name;
        }

        this.answerQuestionTitleElement = document.getElementById('answer-question-title');
        this.answerQuestionOptionsElement = document.getElementById('answer-options');
        this.answerQuestionOptionElement = document.getElementById('answer-question-option');

        this.displayUserInfo();
        this.renderQuestions();
    }

    // Отображение информации о пользователе
    displayUserInfo() {
        const performerNameElement = document.getElementById('performer');
        const userInfo = Auth.getUserInfo();
        const userEmail = Auth.getUserEmail();

        if (performerNameElement && userInfo && userEmail) {
            const fullName = userInfo.fullName;
            performerNameElement.innerText = `${fullName}, ${userEmail}`;
        } else {
            console.error('User information not found');
        }
    }

    // Отображение вопросов и ответов
    private renderQuestions(): void {
        if (!this.quiz || !this.answerQuestionOptionsElement) return;

        this.quiz.test.questions.forEach((question, index) => {
            const currentQuestionIndex = index + 1;
            const questionTitle = document.createElement('div');
            questionTitle.className = 'answer-question-title';
            questionTitle.innerHTML = `<span>Вопрос ${currentQuestionIndex}:</span> ${question.question}`;
            if (this.answerQuestionOptionsElement) {
                this.answerQuestionOptionsElement.appendChild(questionTitle);
            }

            question.answers.forEach(answer => {
                this.renderAnswer(question, answer);
            });
        });
    }

    // Отображение конкретного ответа
    private renderAnswer(question: QuestionType, answer: AnswerType): void {
        if (!this.answerQuestionOptionsElement) return;

        const answerOptionElement = document.createElement('div');
        answerOptionElement.className = 'answer-question-option';

        const inputId = `answer-${answer.id}`;
        const inputElement = document.createElement('input');
        inputElement.className = 'answer-option';
        inputElement.disabled = true;
        inputElement.setAttribute('value', answer.id);
        inputElement.setAttribute('type', 'radio');

        const labelElement = document.createElement('label');
        labelElement.setAttribute('for', inputId);
        labelElement.innerHTML = answer.answer;

        // Проверка на правильность ответа
        this.quizResults.forEach(result => {
            if (result.questionId === question.id) {
                if (answer.correct) {
                    labelElement.style.color = '#5FDC33';
                    inputElement.style.border = '6px solid #5FDC33';
                } else {
                    labelElement.style.color = '#DC3333';
                    inputElement.style.border = '6px solid #DC3333';
                }
            }
        });

        answerOptionElement.appendChild(inputElement);
        answerOptionElement.appendChild(labelElement);
        this.answerQuestionOptionsElement.appendChild(answerOptionElement);
    }
}







