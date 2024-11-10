/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config/config.ts":
/*!**************************!*\
  !*** ./config/config.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    host: 'http://localhost:3000/api'
};


/***/ }),

/***/ "./src/components/answer.ts":
/*!**********************************!*\
  !*** ./src/components/answer.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Answer = void 0;
var url_manager_1 = __webpack_require__(/*! ../utils/url-manager */ "./src/utils/url-manager.ts");
var auth_1 = __webpack_require__(/*! ../services/auth */ "./src/services/auth.ts");
var custom_http_1 = __webpack_require__(/*! ../services/custom-http */ "./src/services/custom-http.ts");
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var Answer = /** @class */ (function () {
    function Answer() {
        this.quiz = null;
        this.testId = null;
        this.routeParams = url_manager_1.UrlManager.getQueryParams();
        this.testNameElement = null;
        this.answerQuestionOptionsElement = null;
        this.answerQuestionOptionElement = null;
        this.labelElement = null;
        this.currentQuestionIndex = null;
        this.answerQuestionTitleElement = null;
        this.quizResults = [];
        this.rightAnswers = [];
        this.init();
    }
    // Инициализация
    Answer.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userInfo = auth_1.Auth.getUserInfo();
                        if (!userInfo) {
                            location.href = '#/';
                            return [2 /*return*/];
                        }
                        this.testId = this.routeParams.id || null;
                        if (!this.testId) {
                            location.href = '#/';
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request("".concat(config_1.default.host, "/tests/").concat(this.testId, "/result/details?userId=").concat(userInfo.userId))];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            this.quiz = result;
                            this.quizResults = result.test.questions;
                            this.rightAnswers = result.test.questions.answers;
                            this.showTest();
                        }
                        else {
                            throw new Error("No result data");
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        location.href = '#/';
                        return [3 /*break*/, 4];
                    case 4:
                        this.setupGoBackButton();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Настроить кнопку "назад"
    Answer.prototype.setupGoBackButton = function () {
        var _this = this;
        var goBackButton = document.getElementById('go-back-answer');
        if (goBackButton) {
            goBackButton.addEventListener('click', function () {
                location.href = "#/result?id=".concat(_this.routeParams.id);
            });
        }
    };
    // Отображение теста
    Answer.prototype.showTest = function () {
        if (!this.quiz)
            return;
        this.testNameElement = document.getElementById('test-name');
        if (this.testNameElement) {
            this.testNameElement.innerText = this.quiz.test.name;
        }
        this.answerQuestionTitleElement = document.getElementById('answer-question-title');
        this.answerQuestionOptionsElement = document.getElementById('answer-options');
        this.answerQuestionOptionElement = document.getElementById('answer-question-option');
        this.displayUserInfo();
        this.renderQuestions();
    };
    // Отображение информации о пользователе
    Answer.prototype.displayUserInfo = function () {
        var performerNameElement = document.getElementById('performer');
        var userInfo = auth_1.Auth.getUserInfo();
        var userEmail = auth_1.Auth.getUserEmail();
        if (performerNameElement && userInfo && userEmail) {
            var fullName = userInfo.fullName;
            performerNameElement.innerText = "".concat(fullName, ", ").concat(userEmail);
        }
        else {
            console.error('User information not found');
        }
    };
    // Отображение вопросов и ответов
    Answer.prototype.renderQuestions = function () {
        var _this = this;
        if (!this.quiz || !this.answerQuestionOptionsElement)
            return;
        this.quiz.test.questions.forEach(function (question, index) {
            var currentQuestionIndex = index + 1;
            var questionTitle = document.createElement('div');
            questionTitle.className = 'answer-question-title';
            questionTitle.innerHTML = "<span>\u0412\u043E\u043F\u0440\u043E\u0441 ".concat(currentQuestionIndex, ":</span> ").concat(question.question);
            if (_this.answerQuestionOptionsElement) {
                _this.answerQuestionOptionsElement.appendChild(questionTitle);
            }
            question.answers.forEach(function (answer) {
                _this.renderAnswer(question, answer);
            });
        });
    };
    // Отображение конкретного ответа
    Answer.prototype.renderAnswer = function (question, answer) {
        if (!this.answerQuestionOptionsElement)
            return;
        var answerOptionElement = document.createElement('div');
        answerOptionElement.className = 'answer-question-option';
        var inputId = "answer-".concat(answer.id);
        var inputElement = document.createElement('input');
        inputElement.className = 'answer-option';
        inputElement.disabled = true;
        inputElement.setAttribute('value', answer.id);
        inputElement.setAttribute('type', 'radio');
        var labelElement = document.createElement('label');
        labelElement.setAttribute('for', inputId);
        labelElement.innerHTML = answer.answer;
        // Проверка на правильность ответа
        this.quizResults.forEach(function (result) {
            if (result.questionId === question.id) {
                if (answer.correct) {
                    labelElement.style.color = '#5FDC33';
                    inputElement.style.border = '6px solid #5FDC33';
                }
                else {
                    labelElement.style.color = '#DC3333';
                    inputElement.style.border = '6px solid #DC3333';
                }
            }
        });
        answerOptionElement.appendChild(inputElement);
        answerOptionElement.appendChild(labelElement);
        this.answerQuestionOptionsElement.appendChild(answerOptionElement);
    };
    return Answer;
}());
exports.Answer = Answer;


/***/ }),

/***/ "./src/components/choice.ts":
/*!**********************************!*\
  !*** ./src/components/choice.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Choice = void 0;
var url_manager_1 = __webpack_require__(/*! ../utils/url-manager */ "./src/utils/url-manager.ts");
var custom_http_1 = __webpack_require__(/*! ../services/custom-http */ "./src/services/custom-http.ts");
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var auth_1 = __webpack_require__(/*! ../services/auth */ "./src/services/auth.ts");
var Choice = /** @class */ (function () {
    function Choice() {
        this.quizzes = [];
        this.testResult = null;
        this.quizzes = [];
        this.testResult = null;
        this.routeParams = url_manager_1.UrlManager.getQueryParams();
        this.init();
    }
    Choice.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1, userInfo, result, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests')];
                    case 1:
                        _a.quizzes = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        return [2 /*return*/, console.log(error_1)];
                    case 3:
                        userInfo = auth_1.Auth.getUserInfo();
                        if (!userInfo) return [3 /*break*/, 7];
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests/results?userId=' + userInfo.userId)];
                    case 5:
                        result = _b.sent();
                        if (result) {
                            if (result.error !== undefined) {
                                throw new Error(result.message);
                            }
                            this.testResult = result;
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _b.sent();
                        return [2 /*return*/, console.log(error_2)];
                    case 7:
                        this.processQuizzes();
                        return [2 /*return*/];
                }
            });
        });
    };
    Choice.prototype.processQuizzes = function () {
        var _this = this;
        var choiceOptionsElement = document.getElementById('choice-options');
        if (this.quizzes && this.quizzes.length > 0 && choiceOptionsElement) {
            this.quizzes.forEach(function (quiz) {
                var that = _this;
                var choiceOptionElement = document.createElement('div');
                choiceOptionElement.className = 'choice-option';
                choiceOptionElement.setAttribute('data-id', quiz.id.toString());
                choiceOptionElement.onclick = function () {
                    that.chooseQuiz(this);
                };
                var choiceOptionTextElement = document.createElement('div');
                choiceOptionTextElement.className = 'choice-option-text';
                choiceOptionTextElement.innerText = quiz.name;
                var choiceOptionArrowElement = document.createElement('div');
                choiceOptionArrowElement.className = 'choice-option-arrow';
                if (_this.testResult) {
                    var result = _this.testResult.find(function (item) { return item.testId === quiz.id; });
                    if (result) {
                        var choiceOptionResultElement = document.createElement('div');
                        choiceOptionResultElement.className = 'choice-option-result';
                        choiceOptionResultElement.innerHTML = '<div>Результат</div><div>' + result.score + '/' + result.total + '</div>';
                        choiceOptionElement.appendChild(choiceOptionResultElement);
                    }
                }
                var choiceOptionImageElement = document.createElement('img');
                choiceOptionImageElement.setAttribute('src', '/images/arrow.png');
                choiceOptionImageElement.setAttribute('alt', 'arrow');
                choiceOptionArrowElement.appendChild(choiceOptionImageElement);
                choiceOptionElement.appendChild(choiceOptionTextElement);
                choiceOptionElement.appendChild(choiceOptionArrowElement);
                choiceOptionsElement.appendChild(choiceOptionElement);
            });
        }
    };
    Choice.prototype.chooseQuiz = function (element) {
        var dataId = element.getAttribute('data-id');
        if (dataId) {
            location.href = '#/test?id=' + dataId;
        }
    };
    return Choice;
}());
exports.Choice = Choice;


/***/ }),

/***/ "./src/components/form.ts":
/*!********************************!*\
  !*** ./src/components/form.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Form = void 0;
var custom_http_1 = __webpack_require__(/*! ../services/custom-http */ "./src/services/custom-http.ts");
var auth_1 = __webpack_require__(/*! ../services/auth */ "./src/services/auth.ts");
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var Form = /** @class */ (function () {
    function Form(page) {
        this.fields = [];
        this.agreeElement = null;
        this.processElement = null;
        this.page = page;
        var accessToken = localStorage.getItem(auth_1.Auth.accessTokenKey);
        if (accessToken) {
            location.href = '#/choice';
            return;
        }
        this.fields = [
            {
                name: 'email',
                id: 'email',
                element: null,
                regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                valid: false,
            },
            {
                name: 'password',
                id: 'password',
                element: null,
                regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                valid: false,
            },
        ];
        if (this.page === 'signup') {
            this.fields.unshift({
                name: 'name',
                id: 'name',
                element: null,
                regex: /^[А-Яа-яA-Za-z]+\s*$/,
                valid: false,
            }, {
                name: 'lastName',
                id: 'last-name',
                element: null,
                regex: /^[А-Яа-яA-Za-z]+\s*$/,
                valid: false,
            });
        }
        var that = this;
        this.fields.forEach(function (item) {
            item.element = document.getElementById(item.id);
            if (item.element) {
                item.element.onchange = function () {
                    that.validateField.call(that, item, this);
                };
            }
        });
        this.processElement = document.getElementById('process');
        if (this.processElement) {
            this.processElement.onclick = function () {
                that.processForm();
            };
        }
        if (this.page === 'signup') {
            this.agreeElement = document.getElementById('agree');
            if (this.agreeElement) {
                this.agreeElement.onchange = function () {
                    that.validateForm();
                };
            }
        }
    }
    Form.prototype.validateField = function (field, element) {
        if (element.parentNode) {
            if (!element.value || !element.value.match(field.regex)) {
                element.parentNode.style.borderColor = 'red';
                field.valid = false;
            }
            else {
                element.parentNode.removeAttribute('style');
                field.valid = true;
            }
        }
        this.validateForm();
    };
    Form.prototype.validateForm = function () {
        var validForm = this.fields.every(function (item) { return item.valid; });
        var isValid = this.agreeElement ? this.agreeElement.checked && validForm : validForm;
        if (this.processElement) {
            if (isValid) {
                this.processElement.removeAttribute('disabled');
            }
            else {
                this.processElement.setAttribute('disabled', 'disabled');
            }
        }
        return isValid;
    };
    Form.prototype.processForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var email, password, result, error_1, result, error_2;
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (!this.validateForm()) return [3 /*break*/, 7];
                        email = ((_b = (_a = this.fields.find(function (item) { return item.name === 'email'; })) === null || _a === void 0 ? void 0 : _a.element) === null || _b === void 0 ? void 0 : _b.value) || '';
                        password = ((_d = (_c = this.fields.find(function (item) { return item.name === 'password'; })) === null || _c === void 0 ? void 0 : _c.element) === null || _d === void 0 ? void 0 : _d.value) || '';
                        if (!email || !password) {
                            console.log('Email или пароль не заполнены');
                            return [2 /*return*/];
                        }
                        if (!(this.page === 'signup')) return [3 /*break*/, 4];
                        _j.label = 1;
                    case 1:
                        _j.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/signup', 'POST', {
                                name: (_f = (_e = this.fields.find(function (item) { return item.name === 'name'; })) === null || _e === void 0 ? void 0 : _e.element) === null || _f === void 0 ? void 0 : _f.value,
                                lastName: (_h = (_g = this.fields.find(function (item) { return item.name === 'lastName'; })) === null || _g === void 0 ? void 0 : _g.element) === null || _h === void 0 ? void 0 : _h.value,
                                email: email,
                                password: password,
                            })];
                    case 2:
                        result = _j.sent();
                        if (result) {
                            if (result.error || !result.user) {
                                throw new Error(result.message);
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _j.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        _j.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/login', 'POST', {
                                email: email,
                                password: password,
                            })];
                    case 5:
                        result = _j.sent();
                        if (result) {
                            if (result.error || !result.accessToken || !result.refreshToken || !result.fullName || !result.userId) {
                                throw new Error(result.message);
                            }
                            auth_1.Auth.setTokens(result.accessToken, result.refreshToken);
                            auth_1.Auth.setUserInfo({
                                fullName: result.fullName,
                                userId: result.userId
                            });
                            auth_1.Auth.setUserEmail(email);
                            location.href = '#/choice';
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _j.sent();
                        console.log(error_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return Form;
}());
exports.Form = Form;


/***/ }),

/***/ "./src/components/result.ts":
/*!**********************************!*\
  !*** ./src/components/result.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Result = void 0;
var url_manager_1 = __webpack_require__(/*! ../utils/url-manager */ "./src/utils/url-manager.ts");
var custom_http_1 = __webpack_require__(/*! ../services/custom-http */ "./src/services/custom-http.ts");
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var auth_1 = __webpack_require__(/*! ../services/auth */ "./src/services/auth.ts");
var Result = /** @class */ (function () {
    function Result() {
        this.answers = [];
        this.routeParams = url_manager_1.UrlManager.getQueryParams();
        this.init();
    }
    Result.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo, result, resultScoreElement, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userInfo = auth_1.Auth.getUserInfo();
                        if (!userInfo) {
                            location.href = '#/';
                            return [2 /*return*/];
                        }
                        if (!this.routeParams.id) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests/' + this.routeParams.id + '/result?userId=' + userInfo.userId)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            if (result.error !== undefined) {
                                throw new Error(result.message);
                            }
                            resultScoreElement = document.getElementById('result-score');
                            if (resultScoreElement) {
                                resultScoreElement.innerText = result.score + '/' + result.total;
                            }
                            return [2 /*return*/];
                            // const seeCorrectAnswers = document.getElementById('see-answer-questions');
                            // if (seeCorrectAnswers) {
                            //     seeCorrectAnswers.addEventListener('click', async () => {
                            //         location.href = '#/answer?id=' + this.routeParams.id;
                            //
                            //     });
                            // }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        location.href = '#/';
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        location.href = '#/';
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return Result;
}());
exports.Result = Result;


/***/ }),

/***/ "./src/components/test.ts":
/*!********************************!*\
  !*** ./src/components/test.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Test = void 0;
var url_manager_1 = __webpack_require__(/*! ../utils/url-manager */ "./src/utils/url-manager.ts");
var custom_http_1 = __webpack_require__(/*! ../services/custom-http */ "./src/services/custom-http.ts");
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var auth_1 = __webpack_require__(/*! ../services/auth */ "./src/services/auth.ts");
var action_test_type_1 = __webpack_require__(/*! ../types/action-test.type */ "./src/types/action-test.type.ts");
var Test = /** @class */ (function () {
    function Test() {
        this.interval = 0;
        this.currentQuestionIndex = 1;
        this.progressBarElement = null;
        this.questionTitleElement = null;
        this.optionsElement = null;
        this.nextButtonElement = null;
        this.prevButtonElement = null;
        this.quiz = null;
        this.passButtonElement = null;
        this.userResult = [];
        this.routeParams = url_manager_1.UrlManager.getQueryParams();
        this.init();
    }
    Test.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.routeParams.id) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests/' + this.routeParams.id)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            if ('error' in result) {
                                throw new Error(result.message);
                            }
                            this.quiz = result;
                            this.startQuiz();
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Test.prototype.startQuiz = function () {
        var _this = this;
        if (!this.quiz)
            return;
        this.progressBarElement = document.getElementById('progress-bar');
        this.questionTitleElement = document.getElementById('title');
        this.optionsElement = document.getElementById('options');
        this.nextButtonElement = document.getElementById('next');
        if (this.nextButtonElement) {
            this.nextButtonElement.onclick = function () { return _this.move(action_test_type_1.ActionTestType.next); };
        }
        this.passButtonElement = document.getElementById('pass');
        if (this.passButtonElement) {
            this.passButtonElement.onclick = function () { return _this.move(action_test_type_1.ActionTestType.pass); };
        }
        var preTitleElement = document.getElementById('pre-title');
        if (preTitleElement) {
            preTitleElement.innerText = this.quiz.name;
        }
        this.prevButtonElement = document.getElementById('prev');
        if (this.prevButtonElement) {
            this.prevButtonElement.onclick = function () { return _this.move(action_test_type_1.ActionTestType.prev); };
        }
        this.prepareProgressBar();
        this.showQuestion();
        var timerElement = document.getElementById('timer');
        var seconds = 59;
        var that = this;
        this.interval = window.setInterval(function () {
            seconds--;
            if (timerElement) {
                timerElement.innerText = seconds.toString();
            }
            if (seconds === 0) {
                clearInterval(_this.interval);
                that.complete();
            }
        }, 1000);
    };
    Test.prototype.prepareProgressBar = function () {
        if (!this.quiz)
            return;
        for (var i = 0; i < this.quiz.questions.length; i++) {
            var itemElement = document.createElement('div');
            itemElement.className = 'test-progress-bar-item' + (i === 0 ? ' active' : '');
            var itemCircleElement = document.createElement('div');
            itemCircleElement.className = 'test-progress-bar-item-circle';
            var itemTextElement = document.createElement('div');
            itemTextElement.className = 'test-progress-bar-item-text';
            itemTextElement.innerText = 'Вопрос ' + (i + 1);
            itemElement.appendChild(itemCircleElement);
            itemElement.appendChild(itemTextElement);
            if (this.progressBarElement) {
                this.progressBarElement.appendChild(itemElement);
            }
        }
    };
    Test.prototype.showQuestion = function () {
        var _this = this;
        if (!this.quiz)
            return;
        var activeQuestion = this.quiz.questions[this.currentQuestionIndex - 1];
        if (this.questionTitleElement) {
            this.questionTitleElement.innerHTML = '<span>Вопрос ' + this.currentQuestionIndex + ':</span> ' + activeQuestion.question;
        }
        if (this.optionsElement) {
            this.optionsElement.innerHTML = '';
        }
        var that = this;
        var chosenOption = this.userResult.find(function (item) { return item.questionId === activeQuestion.id; });
        activeQuestion.answers.forEach(function (answer) {
            var optionElement = document.createElement('div');
            optionElement.className = 'test-question-option';
            var inputId = 'answer-' + answer.id;
            var inputElement = document.createElement('input');
            inputElement.className = 'option-answer';
            inputElement.setAttribute('id', inputId);
            inputElement.setAttribute('type', 'radio');
            inputElement.setAttribute('name', 'answer');
            inputElement.setAttribute('value', answer.id.toString());
            if (chosenOption && chosenOption.chosenAnswerId === answer.id) {
                inputElement.setAttribute('checked', 'checked');
            }
            inputElement.onchange = function () {
                that.chooseAnswer();
            };
            var labelElement = document.createElement('label');
            labelElement.setAttribute('for', inputId);
            labelElement.innerHTML = answer.answer;
            optionElement.appendChild(inputElement);
            optionElement.appendChild(labelElement);
            if (_this.optionsElement) {
                _this.optionsElement.appendChild(optionElement);
            }
        });
        if (this.nextButtonElement) {
            if (chosenOption && chosenOption.chosenAnswerId) {
                this.nextButtonElement.removeAttribute('disabled');
            }
            else {
                this.nextButtonElement.setAttribute('disabled', 'disabled');
            }
        }
        if (this.nextButtonElement) {
            if (this.currentQuestionIndex === this.quiz.questions.length) {
                this.nextButtonElement.innerText = 'Завершить';
            }
            else {
                this.nextButtonElement.innerText = 'Далее';
            }
        }
        if (this.prevButtonElement) {
            if (this.currentQuestionIndex > 1) {
                this.prevButtonElement.removeAttribute('disabled');
            }
            else {
                this.prevButtonElement.setAttribute('disabled', 'disabled');
            }
        }
    };
    Test.prototype.chooseAnswer = function () {
        if (this.nextButtonElement) {
            this.nextButtonElement.removeAttribute('disabled');
        }
    };
    Test.prototype.move = function (action) {
        var _this = this;
        if (!this.quiz)
            return;
        var activeQuestion = this.quiz.questions[this.currentQuestionIndex - 1];
        var chosenAnswer = Array.from(document.getElementsByClassName('option-answer')).find(function (element) {
            return element.checked;
        });
        var chosenAnswerId = null;
        if (chosenAnswer && chosenAnswer.value) {
            chosenAnswerId = Number(chosenAnswer.value);
        }
        var existingResult = this.userResult.find(function (item) {
            return item.questionId === activeQuestion.id;
        });
        if (chosenAnswerId) {
            if (existingResult) {
                existingResult.chosenAnswerId = chosenAnswerId;
            }
            else {
                this.userResult.push({
                    questionId: activeQuestion.id,
                    chosenAnswerId: chosenAnswerId
                });
            }
        }
        localStorage.setItem('quizResults', JSON.stringify({
            userResult: this.userResult
        }));
        console.log(this.userResult);
        if (action === action_test_type_1.ActionTestType.next || action === action_test_type_1.ActionTestType.pass) {
            this.currentQuestionIndex++;
        }
        else {
            this.currentQuestionIndex--;
        }
        if (this.currentQuestionIndex > this.quiz.questions.length) {
            clearInterval(this.interval);
            this.complete();
            return;
        }
        if (this.progressBarElement) {
            Array.from(this.progressBarElement.children).forEach(function (item, index) {
                var currentItemIndex = index + 1;
                item.classList.remove('complete');
                item.classList.remove('active');
                if (currentItemIndex === _this.currentQuestionIndex) {
                    item.classList.add('active');
                }
                else if (currentItemIndex < _this.currentQuestionIndex) {
                    item.classList.add('complete');
                }
            });
        }
        this.showQuestion();
    };
    Test.prototype.complete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userInfo = auth_1.Auth.getUserInfo();
                        if (!userInfo) {
                            location.href = '#/';
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests/' + this.routeParams.id + '/pass', 'POST', {
                                userId: userInfo.userId,
                                results: this.userResult
                            })];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            if (result.error !== undefined) {
                                throw new Error(result.message);
                            }
                            location.href = '#/result?id=' + this.routeParams.id;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Test;
}());
exports.Test = Test;


/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Router = void 0;
var form_1 = __webpack_require__(/*! ./components/form */ "./src/components/form.ts");
var choice_1 = __webpack_require__(/*! ./components/choice */ "./src/components/choice.ts");
var test_1 = __webpack_require__(/*! ./components/test */ "./src/components/test.ts");
var result_1 = __webpack_require__(/*! ./components/result */ "./src/components/result.ts");
var auth_1 = __webpack_require__(/*! ./services/auth */ "./src/services/auth.ts");
var answer_1 = __webpack_require__(/*! ./components/answer */ "./src/components/answer.ts");
var Router = /** @class */ (function () {
    function Router() {
        this.contentElement = document.getElementById('content');
        this.stylesElement = document.getElementById('styles');
        this.titleElement = document.getElementById('page-title');
        this.profileElement = document.getElementById('profile');
        this.profileFullNameElement = document.getElementById('profile-full-name');
        this.routes = [
            {
                route: '#/',
                title: 'Main',
                template: 'templates/index.html',
                styles: 'styles/index.css',
                load: function () {
                }
            },
            {
                route: '#/signup',
                title: 'Registration',
                template: 'templates/signup.html',
                styles: 'styles/form.css',
                load: function () {
                    new form_1.Form('signup');
                }
            },
            {
                route: '#/login',
                title: 'Log in system',
                template: 'templates/login.html',
                styles: 'styles/form.css',
                load: function () {
                    new form_1.Form('login');
                }
            },
            {
                route: '#/choice',
                title: 'Choice',
                template: 'templates/choice.html',
                styles: 'styles/choice.css',
                load: function () {
                    new choice_1.Choice();
                }
            },
            {
                route: '#/test',
                title: 'Test',
                template: 'templates/test.html',
                styles: 'styles/test.css',
                load: function () {
                    new test_1.Test();
                }
            },
            {
                route: '#/result',
                title: 'Result',
                template: 'templates/result.html',
                styles: 'styles/result.css',
                load: function () {
                    new result_1.Result();
                }
            },
            {
                route: '#/answer',
                title: 'Answers',
                template: 'templates/answer.html',
                styles: 'styles/answer.css',
                load: function () {
                    new answer_1.Answer();
                }
            },
        ];
    }
    Router.prototype.openRoute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var urlRoute, result, newRoute, _a, userInfo, accessToken;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        urlRoute = window.location.hash.split('?')[0];
                        if (!(urlRoute === '#/logout')) return [3 /*break*/, 2];
                        return [4 /*yield*/, auth_1.Auth.logout()];
                    case 1:
                        result = _b.sent();
                        if (result) {
                            window.location.href = '#/';
                            return [2 /*return*/];
                        }
                        else {
                            //...
                        }
                        _b.label = 2;
                    case 2:
                        newRoute = this.routes.find(function (item) {
                            return item.route === urlRoute;
                        });
                        if (!newRoute) {
                            window.location.href = '#/';
                            return [2 /*return*/];
                        }
                        if (!this.contentElement || !this.stylesElement || !this.titleElement || !this.profileElement
                            || !this.profileFullNameElement) {
                            if (urlRoute === '#/') {
                                return [2 /*return*/];
                            }
                            else {
                                window.location.href = '#/';
                                return [2 /*return*/];
                            }
                        }
                        _a = this.contentElement;
                        return [4 /*yield*/, fetch(newRoute.template).then(function (response) { return response.text(); })];
                    case 3:
                        _a.innerHTML =
                            _b.sent();
                        this.stylesElement.setAttribute('href', newRoute.styles);
                        this.titleElement.innerText = newRoute.title;
                        userInfo = auth_1.Auth.getUserInfo();
                        accessToken = localStorage.getItem(auth_1.Auth.accessTokenKey);
                        if (userInfo && accessToken) {
                            this.profileElement.style.display = 'flex';
                            this.profileFullNameElement.innerText = userInfo.fullName;
                        }
                        else {
                            this.profileElement.style.display = 'none';
                        }
                        newRoute.load();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Router;
}());
exports.Router = Router;


/***/ }),

/***/ "./src/services/auth.ts":
/*!******************************!*\
  !*** ./src/services/auth.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Auth = void 0;
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var userInfoType = /** @class */ (function () {
    function userInfoType() {
    }
    return userInfoType;
}());
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.processUnauthorizedResponse = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken, response, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refreshToken = localStorage.getItem(this.refreshTokenKey);
                        if (!refreshToken) return [3 /*break*/, 3];
                        return [4 /*yield*/, fetch(config_1.default.host + '/refresh', {
                                method: 'POST',
                                headers: {
                                    'Content-type': 'application/json',
                                    'Accept': 'application/json',
                                },
                                body: JSON.stringify({ refreshToken: refreshToken })
                            })];
                    case 1:
                        response = _a.sent();
                        if (!(response && response.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        result = _a.sent();
                        if (result && !result.error && result.accessToken && result.refreshToken) {
                            this.setTokens(result.accessToken, result.refreshToken);
                            return [2 /*return*/, true];
                        }
                        _a.label = 3;
                    case 3:
                        this.removeTokens();
                        location.href = '#/';
                        return [2 /*return*/, false];
                }
            });
        });
    };
    Auth.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken, response, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refreshToken = localStorage.getItem(this.refreshTokenKey);
                        if (!refreshToken) return [3 /*break*/, 3];
                        return [4 /*yield*/, fetch(config_1.default.host + '/logout', {
                                method: 'POST',
                                headers: {
                                    'Content-type': 'application/json',
                                    'Accept': 'application/json'
                                },
                                body: JSON.stringify({ refreshToken: refreshToken })
                            })];
                    case 1:
                        response = _a.sent();
                        if (!(response && response.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        result = _a.sent();
                        if (result && !result.error) {
                            Auth.removeTokens();
                            localStorage.removeItem(Auth.userInfoKey);
                            return [2 /*return*/, true];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    Auth.setTokens = function (accessToken, refreshToken) {
        localStorage.setItem(this.accessTokenKey, accessToken);
        localStorage.setItem(this.refreshTokenKey, refreshToken);
    };
    Auth.removeTokens = function () {
        localStorage.removeItem(this.accessTokenKey);
        localStorage.removeItem(this.refreshTokenKey);
    };
    Auth.setUserInfo = function (info) {
        localStorage.setItem(this.userInfoKey, JSON.stringify(info));
    };
    Auth.getUserInfo = function () {
        var userInfo = localStorage.getItem(this.userInfoKey);
        if (userInfo) {
            return JSON.parse(userInfo);
        }
        return null;
    };
    Auth.setUserEmail = function (email) {
        localStorage.setItem(this.userEmailKey, email);
    };
    Auth.getUserEmail = function () {
        return localStorage.getItem(this.userEmailKey);
    };
    Auth.accessTokenKey = 'accessToken';
    Auth.refreshTokenKey = 'refreshToken';
    Auth.userInfoKey = 'userInfo';
    Auth.userEmailKey = 'userEmail';
    return Auth;
}());
exports.Auth = Auth;


/***/ }),

/***/ "./src/services/custom-http.ts":
/*!*************************************!*\
  !*** ./src/services/custom-http.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomHttp = void 0;
var auth_1 = __webpack_require__(/*! ./auth */ "./src/services/auth.ts");
var CustomHttp = /** @class */ (function () {
    function CustomHttp() {
    }
    CustomHttp.request = function (url_1) {
        return __awaiter(this, arguments, void 0, function (url, method, body) {
            var params, token, response, result;
            if (method === void 0) { method = "GET"; }
            if (body === void 0) { body = null; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            method: method,
                            headers: {
                                'Content-type': 'application/json',
                                'Accept': 'application/json',
                            },
                        };
                        token = localStorage.getItem(auth_1.Auth.accessTokenKey);
                        if (token) {
                            params.headers['x-access-token'] = token;
                        }
                        if (body) {
                            params.body = JSON.stringify(body);
                        }
                        return [4 /*yield*/, fetch(url, params)];
                    case 1:
                        response = _a.sent();
                        if (!(response.status < 200 || response.status >= 300)) return [3 /*break*/, 6];
                        if (!(response.status === 401)) return [3 /*break*/, 5];
                        return [4 /*yield*/, auth_1.Auth.processUnauthorizedResponse()];
                    case 2:
                        result = _a.sent();
                        if (!result) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.request(url, method, body)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/, null];
                    case 5: throw new Error(response.statusText);
                    case 6: return [4 /*yield*/, response.json()];
                    case 7: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CustomHttp;
}());
exports.CustomHttp = CustomHttp;


/***/ }),

/***/ "./src/types/action-test.type.ts":
/*!***************************************!*\
  !*** ./src/types/action-test.type.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionTestType = void 0;
var ActionTestType;
(function (ActionTestType) {
    ActionTestType["next"] = "next";
    ActionTestType["pass"] = "pass";
    ActionTestType["prev"] = "prev";
})(ActionTestType || (exports.ActionTestType = ActionTestType = {}));


/***/ }),

/***/ "./src/utils/url-manager.ts":
/*!**********************************!*\
  !*** ./src/utils/url-manager.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UrlManager = void 0;
var UrlManager = /** @class */ (function () {
    function UrlManager() {
    }
    UrlManager.getQueryParams = function () {
        var qs = document.location.hash.split('+').join('');
        var params = {}, tokens, re = /[?&]([^=]+)=([^&]*)/g;
        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
        return params;
    };
    return UrlManager;
}());
exports.UrlManager = UrlManager;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var router_1 = __webpack_require__(/*! ./router */ "./src/router.ts");
var App = /** @class */ (function () {
    function App() {
        this.router = new router_1.Router();
        window.addEventListener('DOMContentLoaded', this.handleRouteChanging.bind(this));
        window.addEventListener('popstate', this.handleRouteChanging.bind(this));
    }
    App.prototype.handleRouteChanging = function () {
        this.router.openRoute();
    };
    return App;
}());
(new App());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEsc0VBQWtDO0FBRWxDO0lBSUk7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7UUFDM0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRU8saUNBQW1CLEdBQTNCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0wsVUFBQztBQUFELENBQUM7QUFFRCxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aXozLy4vY29uZmlnL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9xdWl6My8uL3NyYy9jb21wb25lbnRzL2Fuc3dlci50cyIsIndlYnBhY2s6Ly9xdWl6My8uL3NyYy9jb21wb25lbnRzL2Nob2ljZS50cyIsIndlYnBhY2s6Ly9xdWl6My8uL3NyYy9jb21wb25lbnRzL2Zvcm0udHMiLCJ3ZWJwYWNrOi8vcXVpejMvLi9zcmMvY29tcG9uZW50cy9yZXN1bHQudHMiLCJ3ZWJwYWNrOi8vcXVpejMvLi9zcmMvY29tcG9uZW50cy90ZXN0LnRzIiwid2VicGFjazovL3F1aXozLy4vc3JjL3JvdXRlci50cyIsIndlYnBhY2s6Ly9xdWl6My8uL3NyYy9zZXJ2aWNlcy9hdXRoLnRzIiwid2VicGFjazovL3F1aXozLy4vc3JjL3NlcnZpY2VzL2N1c3RvbS1odHRwLnRzIiwid2VicGFjazovL3F1aXozLy4vc3JjL3R5cGVzL2FjdGlvbi10ZXN0LnR5cGUudHMiLCJ3ZWJwYWNrOi8vcXVpejMvLi9zcmMvdXRpbHMvdXJsLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vcXVpejMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcXVpejMvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGhvc3Q6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJ1xyXG59IiwiaW1wb3J0IHtVcmxNYW5hZ2VyfSBmcm9tIFwiLi4vdXRpbHMvdXJsLW1hbmFnZXJcIjtcclxuaW1wb3J0IHtBdXRofSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aFwiO1xyXG5pbXBvcnQge0N1c3RvbUh0dHB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jdXN0b20taHR0cFwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcvY29uZmlnXCI7XHJcblxyXG5pbnRlcmZhY2UgQW5zd2VyVHlwZSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgYW5zd2VyOiBzdHJpbmc7XHJcbiAgICBjb3JyZWN0OiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUXVlc3Rpb25UeXBlIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBxdWVzdGlvbjogc3RyaW5nO1xyXG4gICAgYW5zd2VyczogQW5zd2VyVHlwZVtdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUXVpelR5cGUge1xyXG4gICAgdGVzdDoge1xyXG4gICAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgICBxdWVzdGlvbnM6IFF1ZXN0aW9uVHlwZVtdO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuc3dlciB7XHJcbiAgICBwcml2YXRlIHF1aXo6IFF1aXpUeXBlIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHRlc3RJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJvdXRlUGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0gVXJsTWFuYWdlci5nZXRRdWVyeVBhcmFtcygpO1xyXG5cclxuICAgIHByaXZhdGUgdGVzdE5hbWVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBhbnN3ZXJRdWVzdGlvbk9wdGlvbnNFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBhbnN3ZXJRdWVzdGlvbk9wdGlvbkVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGxhYmVsRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudFF1ZXN0aW9uSW5kZXg6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBhbnN3ZXJRdWVzdGlvblRpdGxlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHF1aXpSZXN1bHRzOiBhbnlbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByaWdodEFuc3dlcnM6IEFuc3dlclR5cGVbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPXHJcbiAgICBhc3luYyBpbml0KCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gQXV0aC5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgIGlmICghdXNlckluZm8pIHtcclxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjLyc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGVzdElkID0gdGhpcy5yb3V0ZVBhcmFtcy5pZCB8fCBudWxsO1xyXG4gICAgICAgIGlmICghdGhpcy50ZXN0SWQpIHtcclxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjLyc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEN1c3RvbUh0dHAucmVxdWVzdChgJHtjb25maWcuaG9zdH0vdGVzdHMvJHt0aGlzLnRlc3RJZH0vcmVzdWx0L2RldGFpbHM/dXNlcklkPSR7dXNlckluZm8udXNlcklkfWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWl6ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWl6UmVzdWx0cyA9IHJlc3VsdC50ZXN0LnF1ZXN0aW9ucztcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRBbnN3ZXJzID0gcmVzdWx0LnRlc3QucXVlc3Rpb25zLmFuc3dlcnM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUZXN0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyByZXN1bHQgZGF0YVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBHb0JhY2tCdXR0b24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQndCw0YHRgtGA0L7QuNGC0Ywg0LrQvdC+0L/QutGDIFwi0L3QsNC30LDQtFwiXHJcbiAgICBzZXR1cEdvQmFja0J1dHRvbigpIHtcclxuICAgICAgICBjb25zdCBnb0JhY2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ28tYmFjay1hbnN3ZXInKTtcclxuICAgICAgICBpZiAoZ29CYWNrQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGdvQmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBgIy9yZXN1bHQ/aWQ9JHt0aGlzLnJvdXRlUGFyYW1zLmlkfWA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDQntGC0L7QsdGA0LDQttC10L3QuNC1INGC0LXRgdGC0LBcclxuICAgIHNob3dUZXN0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5xdWl6KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMudGVzdE5hbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QtbmFtZScpO1xyXG4gICAgICAgIGlmICh0aGlzLnRlc3ROYW1lRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnRlc3ROYW1lRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLnF1aXoudGVzdC5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hbnN3ZXJRdWVzdGlvblRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXItcXVlc3Rpb24tdGl0bGUnKTtcclxuICAgICAgICB0aGlzLmFuc3dlclF1ZXN0aW9uT3B0aW9uc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyLW9wdGlvbnMnKTtcclxuICAgICAgICB0aGlzLmFuc3dlclF1ZXN0aW9uT3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXItcXVlc3Rpb24tb3B0aW9uJyk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGxheVVzZXJJbmZvKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJRdWVzdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQntGC0L7QsdGA0LDQttC10L3QuNC1INC40L3RhNC+0YDQvNCw0YbQuNC4INC+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtVxyXG4gICAgZGlzcGxheVVzZXJJbmZvKCkge1xyXG4gICAgICAgIGNvbnN0IHBlcmZvcm1lck5hbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlcmZvcm1lcicpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gQXV0aC5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IEF1dGguZ2V0VXNlckVtYWlsKCk7XHJcblxyXG4gICAgICAgIGlmIChwZXJmb3JtZXJOYW1lRWxlbWVudCAmJiB1c2VySW5mbyAmJiB1c2VyRW1haWwpIHtcclxuICAgICAgICAgICAgY29uc3QgZnVsbE5hbWUgPSB1c2VySW5mby5mdWxsTmFtZTtcclxuICAgICAgICAgICAgcGVyZm9ybWVyTmFtZUVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7ZnVsbE5hbWV9LCAke3VzZXJFbWFpbH1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZXIgaW5mb3JtYXRpb24gbm90IGZvdW5kJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0LLQvtC/0YDQvtGB0L7QsiDQuCDQvtGC0LLQtdGC0L7QslxyXG4gICAgcHJpdmF0ZSByZW5kZXJRdWVzdGlvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnF1aXogfHwgIXRoaXMuYW5zd2VyUXVlc3Rpb25PcHRpb25zRWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnF1aXoudGVzdC5xdWVzdGlvbnMuZm9yRWFjaCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRRdWVzdGlvbkluZGV4ID0gaW5kZXggKyAxO1xyXG4gICAgICAgICAgICBjb25zdCBxdWVzdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uVGl0bGUuY2xhc3NOYW1lID0gJ2Fuc3dlci1xdWVzdGlvbi10aXRsZSc7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uVGl0bGUuaW5uZXJIVE1MID0gYDxzcGFuPtCS0L7Qv9GA0L7RgSAke2N1cnJlbnRRdWVzdGlvbkluZGV4fTo8L3NwYW4+ICR7cXVlc3Rpb24ucXVlc3Rpb259YDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5zd2VyUXVlc3Rpb25PcHRpb25zRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJRdWVzdGlvbk9wdGlvbnNFbGVtZW50LmFwcGVuZENoaWxkKHF1ZXN0aW9uVGl0bGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBxdWVzdGlvbi5hbnN3ZXJzLmZvckVhY2goYW5zd2VyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQW5zd2VyKHF1ZXN0aW9uLCBhbnN3ZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQntGC0L7QsdGA0LDQttC10L3QuNC1INC60L7QvdC60YDQtdGC0L3QvtCz0L4g0L7RgtCy0LXRgtCwXHJcbiAgICBwcml2YXRlIHJlbmRlckFuc3dlcihxdWVzdGlvbjogUXVlc3Rpb25UeXBlLCBhbnN3ZXI6IEFuc3dlclR5cGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuYW5zd2VyUXVlc3Rpb25PcHRpb25zRWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBhbnN3ZXJPcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYW5zd2VyT3B0aW9uRWxlbWVudC5jbGFzc05hbWUgPSAnYW5zd2VyLXF1ZXN0aW9uLW9wdGlvbic7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0SWQgPSBgYW5zd2VyLSR7YW5zd2VyLmlkfWA7XHJcbiAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NOYW1lID0gJ2Fuc3dlci1vcHRpb24nO1xyXG4gICAgICAgIGlucHV0RWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBhbnN3ZXIuaWQpO1xyXG4gICAgICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dElkKTtcclxuICAgICAgICBsYWJlbEVsZW1lbnQuaW5uZXJIVE1MID0gYW5zd2VyLmFuc3dlcjtcclxuXHJcbiAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LrQsCDQvdCwINC/0YDQsNCy0LjQu9GM0L3QvtGB0YLRjCDQvtGC0LLQtdGC0LBcclxuICAgICAgICB0aGlzLnF1aXpSZXN1bHRzLmZvckVhY2gocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5xdWVzdGlvbklkID09PSBxdWVzdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuc3dlci5jb3JyZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxFbGVtZW50LnN0eWxlLmNvbG9yID0gJyM1RkRDMzMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5zdHlsZS5ib3JkZXIgPSAnNnB4IHNvbGlkICM1RkRDMzMnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbEVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI0RDMzMzMyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnN0eWxlLmJvcmRlciA9ICc2cHggc29saWQgI0RDMzMzMyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYW5zd2VyT3B0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIGFuc3dlck9wdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmFuc3dlclF1ZXN0aW9uT3B0aW9uc0VsZW1lbnQuYXBwZW5kQ2hpbGQoYW5zd2VyT3B0aW9uRWxlbWVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7VXJsTWFuYWdlcn0gZnJvbSBcIi4uL3V0aWxzL3VybC1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7Q3VzdG9tSHR0cH0gZnJvbSBcIi4uL3NlcnZpY2VzL2N1c3RvbS1odHRwXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9jb25maWdcIjtcclxuaW1wb3J0IHtBdXRofSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aFwiO1xyXG5pbXBvcnQge1F1ZXJ5UGFyYW1zVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3F1ZXJ5LXBhcmFtcy50eXBlXCI7XHJcbmltcG9ydCB7UXVpekxpc3RUeXBlfSBmcm9tIFwiLi4vdHlwZXMvcXVpei1saXN0LnR5cGVcIjtcclxuaW1wb3J0IHtUZXN0UmVzdWx0VHlwZX0gZnJvbSBcIi4uL3R5cGVzL3Rlc3QtcmVzdWx0LnR5cGVcIjtcclxuaW1wb3J0IHtVc2VySW5mb1R5cGV9IGZyb20gXCIuLi90eXBlcy91c2VyLWluZm8udHlwZVwiO1xyXG5pbXBvcnQge0RlZmF1bHRSZXNwb25zZVR5cGV9IGZyb20gXCIuLi90eXBlcy9kZWZhdWx0LXJlc3BvbnNlLnR5cGVcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hvaWNlICB7XHJcbiAgICBwcml2YXRlIHF1aXp6ZXM6IFF1aXpMaXN0VHlwZVtdID0gW107XHJcbiAgICBwcml2YXRlIHRlc3RSZXN1bHQ6IFRlc3RSZXN1bHRUeXBlW10gfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgcm91dGVQYXJhbXM6IFF1ZXJ5UGFyYW1zVHlwZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnF1aXp6ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnRlc3RSZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucm91dGVQYXJhbXMgPSBVcmxNYW5hZ2VyLmdldFF1ZXJ5UGFyYW1zKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgICAgIHByaXZhdGUgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVpenplcyA9IGF3YWl0IEN1c3RvbUh0dHAucmVxdWVzdChjb25maWcuaG9zdCArICcvdGVzdHMnKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvOiBVc2VySW5mb1R5cGUgfCBudWxsID0gQXV0aC5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgICAgICBpZiAodXNlckluZm8pIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBEZWZhdWx0UmVzcG9uc2VUeXBlIHwgVGVzdFJlc3VsdFR5cGVbXSA9IGF3YWl0IEN1c3RvbUh0dHAucmVxdWVzdChjb25maWcuaG9zdCArICcvdGVzdHMvcmVzdWx0cz91c2VySWQ9JyArIHVzZXJJbmZvLnVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlc3VsdCBhcyBEZWZhdWx0UmVzcG9uc2VUeXBlKS5lcnJvciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHJlc3VsdCBhcyBEZWZhdWx0UmVzcG9uc2VUeXBlKS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXN0UmVzdWx0ID0gcmVzdWx0IGFzIFRlc3RSZXN1bHRUeXBlW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICB0aGlzLnByb2Nlc3NRdWl6emVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwcm9jZXNzUXVpenplcygpOiB2b2lkIHtcclxuICAgICAgICAgICAgY29uc3QgY2hvaWNlT3B0aW9uc0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hvaWNlLW9wdGlvbnMnKTtcclxuICAgICAgICAgICBpZiAodGhpcy5xdWl6emVzICYmIHRoaXMucXVpenplcy5sZW5ndGggPiAwICYmIGNob2ljZU9wdGlvbnNFbGVtZW50KVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgdGhpcy5xdWl6emVzLmZvckVhY2goKHF1aXo6IFF1aXpMaXN0VHlwZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoYXQ6IENob2ljZSA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlT3B0aW9uRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hvaWNlT3B0aW9uRWxlbWVudC5jbGFzc05hbWUgPSAnY2hvaWNlLW9wdGlvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hvaWNlT3B0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBxdWl6LmlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvbkVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5jaG9vc2VRdWl6KDxIVE1MRWxlbWVudD50aGlzKTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlT3B0aW9uVGV4dEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvblRleHRFbGVtZW50LmNsYXNzTmFtZSA9ICdjaG9pY2Utb3B0aW9uLXRleHQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvblRleHRFbGVtZW50LmlubmVyVGV4dCA9IHF1aXoubmFtZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlT3B0aW9uQXJyb3dFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvbkFycm93RWxlbWVudC5jbGFzc05hbWUgPSAnY2hvaWNlLW9wdGlvbi1hcnJvdyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGVzdFJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogVGVzdFJlc3VsdFR5cGUgfCB1bmRlZmluZWQgPSB0aGlzLnRlc3RSZXN1bHQuZmluZChpdGVtID0+IGl0ZW0udGVzdElkID09PSBxdWl6LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNob2ljZU9wdGlvblJlc3VsdEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjaG9pY2VPcHRpb25SZXN1bHRFbGVtZW50LmNsYXNzTmFtZSA9ICdjaG9pY2Utb3B0aW9uLXJlc3VsdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvblJlc3VsdEVsZW1lbnQuaW5uZXJIVE1MID0gJzxkaXY+0KDQtdC30YPQu9GM0YLQsNGCPC9kaXY+PGRpdj4nICsgcmVzdWx0LnNjb3JlICsgJy8nICsgcmVzdWx0LnRvdGFsICsgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hvaWNlT3B0aW9uUmVzdWx0RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICBjb25zdCBjaG9pY2VPcHRpb25JbWFnZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgY2hvaWNlT3B0aW9uSW1hZ2VFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJy9pbWFnZXMvYXJyb3cucG5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICBjaG9pY2VPcHRpb25JbWFnZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhbHQnLCAnYXJyb3cnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBjaG9pY2VPcHRpb25BcnJvd0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hvaWNlT3B0aW9uSW1hZ2VFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hvaWNlT3B0aW9uVGV4dEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgY2hvaWNlT3B0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChjaG9pY2VPcHRpb25BcnJvd0VsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvbnNFbGVtZW50LmFwcGVuZENoaWxkKGNob2ljZU9wdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgY2hvb3NlUXVpeihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhSWQ6IHN0cmluZyB8IG51bGwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgICAgICBpZihkYXRhSWQpIHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnIy90ZXN0P2lkPScgKyBkYXRhSWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gfVxyXG5cclxuIiwiaW1wb3J0IHtDdXN0b21IdHRwfSBmcm9tIFwiLi4vc2VydmljZXMvY3VzdG9tLWh0dHBcIjtcclxuaW1wb3J0IHsgQXV0aCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9jb25maWdcIjtcclxuaW1wb3J0IHtGb3JtRmllbGRUeXBlfSBmcm9tIFwiLi4vdHlwZXMvZm9ybS1maWVsZC50eXBlXCI7XHJcbmltcG9ydCB7U2lnbnVwUmVzcG9uc2VUeXBlfSBmcm9tIFwiLi4vdHlwZXMvc2lnbnVwLXJlc3BvbnNlLnR5cGVcIjtcclxuaW1wb3J0IHtMb2dpblJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uL3R5cGVzL2xvZ2luLXJlc3BvbnNlLnR5cGVcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybSB7XHJcbiAgICByZWFkb25seSBhZ3JlZUVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnR8IG51bGxcclxuICAgIHJlYWRvbmx5IHByb2Nlc3NFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGxcclxuICAgIHJlYWRvbmx5IHBhZ2U6ICdzaWdudXAnIHwgJ2xvZ2luJztcclxuICAgIHByaXZhdGUgZmllbGRzOiBGb3JtRmllbGRUeXBlW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYWdlOiAnc2lnbnVwJyB8ICdsb2dpbicpIHtcclxuICAgICAgICAgICAgdGhpcy5hZ3JlZUVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuOiBzdHJpbmcgfCBudWxsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQXV0aC5hY2Nlc3NUb2tlbktleSk7XHJcbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnIy9jaG9pY2UnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkcyA9IFtcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlbWFpbCcsXHJcbiAgICAgICAgICAgICAgICBpZDogJ2VtYWlsJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByZWdleDogL15bYS16QS1aMC05Ll8tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLDZ9JC8sXHJcbiAgICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICBuYW1lOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICBpZDogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgZWxlbWVudDogbnVsbCxcclxuICAgICAgICAgICAgICAgcmVnZXg6IC9eKD89LipcXGQpKD89LipbYS16XSkoPz0uKltBLVpdKVswLTlhLXpBLVpdezgsfSQvLFxyXG4gICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlID09PSAnc2lnbnVwJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHMudW5zaGlmdCgge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByZWdleDogL15b0JAt0K/QsC3Rj0EtWmEtel0rXFxzKiQvLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2xhc3ROYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdsYXN0LW5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnZXg6IC9eW9CQLdCv0LAt0Y9BLVphLXpdK1xccyokLyxcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRoYXQ6IEZvcm0gPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goKGl0ZW06IEZvcm1GaWVsZFR5cGUgKT0+IHtcclxuICAgICAgICAgICAgaXRlbS5lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCkgYXMgSFRNTElucHV0RWxlbWVudCB8IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZWxlbWVudC5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnZhbGlkYXRlRmllbGQuY2FsbCh0aGF0LCBpdGVtLCA8SFRNTElucHV0RWxlbWVudD50aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2Nlc3MnKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSAge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5wcm9jZXNzRm9ybSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFnZSA9PT0gJ3NpZ251cCcpIHtcclxuICAgICAgICAgICAgdGhpcy5hZ3JlZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWdyZWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWdyZWVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFncmVlRWxlbWVudC5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnZhbGlkYXRlRm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgdmFsaWRhdGVGaWVsZChmaWVsZDogRm9ybUZpZWxkVHlwZSwgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQudmFsdWUgfHwgIWVsZW1lbnQudmFsdWUubWF0Y2goZmllbGQucmVnZXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKGVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuYm9yZGVyQ29sb3IgPSAncmVkJztcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIChlbGVtZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlRm9ybSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2YWxpZGF0ZUZvcm0oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkRm9ybTogYm9vbGVhbiA9IHRoaXMuZmllbGRzLmV2ZXJ5KGl0ZW0gPT4gaXRlbS52YWxpZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQ6IGJvb2xlYW4gPSB0aGlzLmFncmVlRWxlbWVudCA/IHRoaXMuYWdyZWVFbGVtZW50LmNoZWNrZWQgJiYgdmFsaWRGb3JtIDogdmFsaWRGb3JtO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9jZXNzRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYXN5bmMgcHJvY2Vzc0Zvcm0oKTogUHJvbWlzZTx2b2lkPiB7XHJcblxyXG4gICAgICAgICAgIGlmKHRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgY29uc3QgZW1haWwgPSB0aGlzLmZpZWxkcy5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSAnZW1haWwnKT8uZWxlbWVudD8udmFsdWUgfHwgJyc7XHJcbiAgICAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5maWVsZHMuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gJ3Bhc3N3b3JkJyk/LmVsZW1lbnQ/LnZhbHVlIHx8ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFbWFpbCDQuNC70Lgg0L/QsNGA0L7Qu9GMINC90LUg0LfQsNC/0L7Qu9C90LXQvdGLJyk7XHJcbiAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICBpZiAodGhpcy5wYWdlID09PSAnc2lnbnVwJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBTaWdudXBSZXNwb25zZVR5cGUgPSBhd2FpdCBDdXN0b21IdHRwLnJlcXVlc3QoIGNvbmZpZy5ob3N0ICsgJy9zaWdudXAnLCAnUE9TVCcsICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmZpZWxkcy5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSAnbmFtZScpPy5lbGVtZW50Py52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiB0aGlzLmZpZWxkcy5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSAnbGFzdE5hbWUnKT8uZWxlbWVudD8udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IgfHwgIXJlc3VsdC51c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3VsdC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogTG9naW5SZXNwb25zZVR5cGUgPSBhd2FpdCBDdXN0b21IdHRwLnJlcXVlc3QoIGNvbmZpZy5ob3N0ICsgJy9sb2dpbicsICdQT1NUJywgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvciB8fCAhcmVzdWx0LmFjY2Vzc1Rva2VuIHx8ICFyZXN1bHQucmVmcmVzaFRva2VuIHx8ICFyZXN1bHQuZnVsbE5hbWUgfHwgIXJlc3VsdC51c2VySWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzdWx0Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1dGguc2V0VG9rZW5zKHJlc3VsdC5hY2Nlc3NUb2tlbiwgcmVzdWx0LnJlZnJlc2hUb2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRoLnNldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZTogcmVzdWx0LmZ1bGxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogcmVzdWx0LnVzZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRoLnNldFVzZXJFbWFpbChlbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvY2hvaWNlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4iLCJpbXBvcnQge1VybE1hbmFnZXJ9IGZyb20gXCIuLi91dGlscy91cmwtbWFuYWdlclwiO1xyXG5pbXBvcnQge0N1c3RvbUh0dHB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jdXN0b20taHR0cFwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcvY29uZmlnXCI7XHJcbmltcG9ydCB7IEF1dGggfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aFwiO1xyXG5pbXBvcnQge1F1ZXJ5UGFyYW1zVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3F1ZXJ5LXBhcmFtcy50eXBlXCI7XHJcbmltcG9ydCB7VXNlckluZm9UeXBlfSBmcm9tIFwiLi4vdHlwZXMvdXNlci1pbmZvLnR5cGVcIjtcclxuaW1wb3J0IHtQYXNzVGVzdFJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3Bhc3MtdGVzdC1yZXNwb25zZS50eXBlXCI7XHJcbmltcG9ydCB7RGVmYXVsdFJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uL3R5cGVzL2RlZmF1bHQtcmVzcG9uc2UudHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc3VsdCB7XHJcbiAgICBwcml2YXRlIHJvdXRlUGFyYW1zOiBRdWVyeVBhcmFtc1R5cGU7XHJcblxyXG4gICAgIGFuc3dlcnMgPSBbXTtcclxuXHJcbiAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgIHRoaXMucm91dGVQYXJhbXMgPSBVcmxNYW5hZ2VyLmdldFF1ZXJ5UGFyYW1zKCk7XHJcblxyXG4gICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcHJpdmF0ZSBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgICAgICAgY29uc3QgdXNlckluZm86IFVzZXJJbmZvVHlwZSB8bnVsbCA9IEF1dGguZ2V0VXNlckluZm8oKTtcclxuICAgICAgICAgICAgIGlmICghdXNlckluZm8pIHtcclxuICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvJztcclxuICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgaWYgKHRoaXMucm91dGVQYXJhbXMuaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBEZWZhdWx0UmVzcG9uc2VUeXBlIHwgUGFzc1Rlc3RSZXNwb25zZVR5cGUgPSBhd2FpdCBDdXN0b21IdHRwLnJlcXVlc3QoY29uZmlnLmhvc3QgKyAnL3Rlc3RzLycgKyB0aGlzLnJvdXRlUGFyYW1zLmlkICsgJy9yZXN1bHQ/dXNlcklkPScgKyB1c2VySW5mby51c2VySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlc3VsdCBhcyBEZWZhdWx0UmVzcG9uc2VUeXBlKS5lcnJvciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChyZXN1bHQgYXMgRGVmYXVsdFJlc3BvbnNlVHlwZSkubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRTY29yZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtc2NvcmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRTY29yZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTY29yZUVsZW1lbnQuaW5uZXJUZXh0ID0gKHJlc3VsdCBhcyBQYXNzVGVzdFJlc3BvbnNlVHlwZSkuc2NvcmUgKyAnLycgKyAocmVzdWx0IGFzIFBhc3NUZXN0UmVzcG9uc2VUeXBlKS50b3RhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBzZWVDb3JyZWN0QW5zd2VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWUtYW5zd2VyLXF1ZXN0aW9ucycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHNlZUNvcnJlY3RBbnN3ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VlQ29ycmVjdEFuc3dlcnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnIy9hbnN3ZXI/aWQ9JyArIHRoaXMucm91dGVQYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjLyc7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvJztcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7VXJsTWFuYWdlcn0gZnJvbSBcIi4uL3V0aWxzL3VybC1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7Q3VzdG9tSHR0cH0gZnJvbSBcIi4uL3NlcnZpY2VzL2N1c3RvbS1odHRwXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9jb25maWdcIjtcclxuaW1wb3J0IHtBdXRofSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aFwiO1xyXG5pbXBvcnQge1F1ZXJ5UGFyYW1zVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3F1ZXJ5LXBhcmFtcy50eXBlXCI7XHJcbmltcG9ydCB7UXVpekFuc3dlclR5cGUsIFF1aXpRdWVzdGlvblR5cGUsIFF1aXpUeXBlfSBmcm9tIFwiLi4vdHlwZXMvcXVpei50eXBlXCI7XHJcbmltcG9ydCB7VXNlclJlc3VsdFR5cGV9IGZyb20gXCIuLi90eXBlcy91c2VyLXJlc3VsdC50eXBlXCI7XHJcbmltcG9ydCB7RGVmYXVsdFJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uL3R5cGVzL2RlZmF1bHQtcmVzcG9uc2UudHlwZVwiO1xyXG5pbXBvcnQge0FjdGlvblRlc3RUeXBlfSBmcm9tIFwiLi4vdHlwZXMvYWN0aW9uLXRlc3QudHlwZVwiO1xyXG5pbXBvcnQge1VzZXJJbmZvVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3VzZXItaW5mby50eXBlXCI7XHJcbmltcG9ydCB7UGFzc1Rlc3RSZXNwb25zZVR5cGV9IGZyb20gXCIuLi90eXBlcy9wYXNzLXRlc3QtcmVzcG9uc2UudHlwZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0IHtcclxuICAgIHByaXZhdGUgcHJvZ3Jlc3NCYXJFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBwcml2YXRlIHBhc3NCdXR0b25FbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBwcml2YXRlIHByZXZCdXR0b25FbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBwcml2YXRlIG5leHRCdXR0b25FbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uVGl0bGVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBwcml2YXRlIG9wdGlvbnNFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBwcml2YXRlIHF1aXo6IFF1aXpUeXBlIHwgbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudFF1ZXN0aW9uSW5kZXg6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHVzZXJSZXN1bHQ6IFVzZXJSZXN1bHRUeXBlW107XHJcbiAgICBwcml2YXRlIHJvdXRlUGFyYW1zOiBRdWVyeVBhcmFtc1R5cGU7XHJcbiAgICBwcml2YXRlIGludGVydmFsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPSAxO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uVGl0bGVFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9wdGlvbnNFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5leHRCdXR0b25FbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByZXZCdXR0b25FbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnF1aXogPSBudWxsO1xyXG4gICAgICAgIHRoaXMucGFzc0J1dHRvbkVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudXNlclJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHRoaXMucm91dGVQYXJhbXMgPSBVcmxNYW5hZ2VyLmdldFF1ZXJ5UGFyYW1zKCk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICh0aGlzLnJvdXRlUGFyYW1zLmlkKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IERlZmF1bHRSZXNwb25zZVR5cGUgfCBRdWl6VHlwZSA9IGF3YWl0IEN1c3RvbUh0dHAucmVxdWVzdChjb25maWcuaG9zdCArICcvdGVzdHMvJyArIHRoaXMucm91dGVQYXJhbXMuaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgnZXJyb3InIGluIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzdWx0Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXogPSByZXN1bHQgYXMgUXVpelR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydFF1aXooKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0UXVpeigpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMucXVpeikgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzcy1iYXInKTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uVGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zJyk7XHJcbiAgICAgICAgdGhpcy5uZXh0QnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Jyk7XHJcbiAgICAgICAgaWYgKHRoaXMubmV4dEJ1dHRvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0QnV0dG9uRWxlbWVudC5vbmNsaWNrID0gKCkgPT4gdGhpcy5tb3ZlKEFjdGlvblRlc3RUeXBlLm5leHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYXNzQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzJyk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFzc0J1dHRvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXNzQnV0dG9uRWxlbWVudC5vbmNsaWNrID0gKCkgPT4gdGhpcy5tb3ZlKEFjdGlvblRlc3RUeXBlLnBhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJlVGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZS10aXRsZScpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgICAgICBpZiAocHJlVGl0bGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHByZVRpdGxlRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLnF1aXoubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJldkJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpO1xyXG4gICAgICAgIGlmICh0aGlzLnByZXZCdXR0b25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJldkJ1dHRvbkVsZW1lbnQub25jbGljayA9ICgpID0+IHRoaXMubW92ZShBY3Rpb25UZXN0VHlwZS5wcmV2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJlcGFyZVByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgdGhpcy5zaG93UXVlc3Rpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGltZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVyJykgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgICAgIGxldCBzZWNvbmRzID0gNTk7XHJcbiAgICAgICAgY29uc3QgdGhhdDogVGVzdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlY29uZHMtLTtcclxuICAgICAgICAgICAgaWYgKHRpbWVyRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGltZXJFbGVtZW50LmlubmVyVGV4dCA9IHNlY29uZHMudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2Vjb25kcyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIHRoYXQuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJlcGFyZVByb2dyZXNzQmFyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5xdWl6KSByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGl0ZW1FbGVtZW50LmNsYXNzTmFtZSA9ICd0ZXN0LXByb2dyZXNzLWJhci1pdGVtJyArIChpID09PSAwID8gJyBhY3RpdmUnIDogJycpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbUNpcmNsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaXRlbUNpcmNsZUVsZW1lbnQuY2xhc3NOYW1lID0gJ3Rlc3QtcHJvZ3Jlc3MtYmFyLWl0ZW0tY2lyY2xlJztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1UZXh0RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0RWxlbWVudC5jbGFzc05hbWUgPSAndGVzdC1wcm9ncmVzcy1iYXItaXRlbS10ZXh0JztcclxuICAgICAgICAgICAgaXRlbVRleHRFbGVtZW50LmlubmVyVGV4dCA9ICfQktC+0L/RgNC+0YEgJyArIChpICsgMSk7XHJcblxyXG4gICAgICAgICAgICBpdGVtRWxlbWVudC5hcHBlbmRDaGlsZChpdGVtQ2lyY2xlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGl0ZW1UZXh0RWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzQmFyRWxlbWVudCkge1xyXG4gICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFbGVtZW50LmFwcGVuZENoaWxkKGl0ZW1FbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzaG93UXVlc3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5xdWl6KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVRdWVzdGlvbjogUXVpelF1ZXN0aW9uVHlwZSA9IHRoaXMucXVpei5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCAtIDFdO1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMucXVlc3Rpb25UaXRsZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25UaXRsZUVsZW1lbnQuaW5uZXJIVE1MID0gJzxzcGFuPtCS0L7Qv9GA0L7RgSAnICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArICc6PC9zcGFuPiAnICsgYWN0aXZlUXVlc3Rpb24ucXVlc3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc0VsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdGhhdDogVGVzdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIGNvbnN0IGNob3Nlbk9wdGlvbjogVXNlclJlc3VsdFR5cGUgfCB1bmRlZmluZWQgPSB0aGlzLnVzZXJSZXN1bHQuZmluZChpdGVtID0+IGl0ZW0ucXVlc3Rpb25JZCA9PT0gYWN0aXZlUXVlc3Rpb24uaWQpO1xyXG4gICAgICAgICAgICBhY3RpdmVRdWVzdGlvbi5hbnN3ZXJzLmZvckVhY2goKGFuc3dlcjogUXVpekFuc3dlclR5cGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5jbGFzc05hbWUgPSAndGVzdC1xdWVzdGlvbi1vcHRpb24nO1xyXG5cclxuICAgICAgICAgICAgICAgY29uc3QgaW5wdXRJZCA9ICdhbnN3ZXItJyArIGFuc3dlci5pZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0RWxlbWVudDpIVE1MRWxlbWVudCB8IG51bGwgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5jbGFzc05hbWUgPSAnb3B0aW9uLWFuc3dlcic7XHJcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlucHV0SWQpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsICdhbnN3ZXInKTtcclxuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYW5zd2VyLmlkLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaG9zZW5PcHRpb24gJiYgY2hvc2VuT3B0aW9uLmNob3NlbkFuc3dlcklkID09PSBhbnN3ZXIuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jaG9vc2VBbnN3ZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dElkKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsRWxlbWVudC5pbm5lckhUTUwgPSBhbnN3ZXIuYW5zd2VyO1xyXG5cclxuICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc0VsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5uZXh0QnV0dG9uRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNob3Nlbk9wdGlvbiAmJiBjaG9zZW5PcHRpb24uY2hvc2VuQW5zd2VySWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRCdXR0b25FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRCdXR0b25FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIHRoaXMubmV4dEJ1dHRvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID09PSB0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dEJ1dHRvbkVsZW1lbnQuaW5uZXJUZXh0ID0gJ9CX0LDQstC10YDRiNC40YLRjCdcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0QnV0dG9uRWxlbWVudC5pbm5lclRleHQgPSAn0JTQsNC70LXQtSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldkJ1dHRvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldkJ1dHRvbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZCdXR0b25FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBjaG9vc2VBbnN3ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5leHRCdXR0b25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRCdXR0b25FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBtb3ZlKGFjdGlvbjogQWN0aW9uVGVzdFR5cGUpOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnF1aXopIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgYWN0aXZlUXVlc3Rpb246IFF1aXpRdWVzdGlvblR5cGUgPSB0aGlzLnF1aXoucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggLSAxXTtcclxuICAgICAgICAgICAgY29uc3QgY2hvc2VuQW5zd2VyOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvcHRpb24tYW5zd2VyJykpLmZpbmQoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZDtcclxuICAgICAgICAgICAgfSkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGxldCBjaG9zZW5BbnN3ZXJJZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChjaG9zZW5BbnN3ZXIgJiYgY2hvc2VuQW5zd2VyLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjaG9zZW5BbnN3ZXJJZCA9IE51bWJlcihjaG9zZW5BbnN3ZXIudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1Jlc3VsdDogVXNlclJlc3VsdFR5cGUgfCB1bmRlZmluZWQgPSB0aGlzLnVzZXJSZXN1bHQuZmluZChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnF1ZXN0aW9uSWQgPT09IGFjdGl2ZVF1ZXN0aW9uLmlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoY2hvc2VuQW5zd2VySWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Jlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUmVzdWx0LmNob3NlbkFuc3dlcklkID0gY2hvc2VuQW5zd2VySWQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25JZDogYWN0aXZlUXVlc3Rpb24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNob3NlbkFuc3dlcklkOiBjaG9zZW5BbnN3ZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncXVpelJlc3VsdHMnLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB1c2VyUmVzdWx0OiB0aGlzLnVzZXJSZXN1bHRcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJSZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gQWN0aW9uVGVzdFR5cGUubmV4dCB8fCBhY3Rpb24gPT09IEFjdGlvblRlc3RUeXBlLnBhc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXgrKztcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPiB0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0JhckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy5wcm9ncmVzc0JhckVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGl0ZW06IEVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbUluZGV4OiBudW1iZXIgPSBpbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbUluZGV4ID09PSB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50SXRlbUluZGV4IDwgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93UXVlc3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBhc3luYyBjb21wbGV0ZSAoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvOiBVc2VySW5mb1R5cGUgfCBudWxsID0gQXV0aC5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgICAgICBpZiAoIXVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvJztcclxuICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IERlZmF1bHRSZXNwb25zZVR5cGUgfCBQYXNzVGVzdFJlc3BvbnNlVHlwZSA9IGF3YWl0IEN1c3RvbUh0dHAucmVxdWVzdChjb25maWcuaG9zdCArICcvdGVzdHMvJyArIHRoaXMucm91dGVQYXJhbXMuaWQgKyAnL3Bhc3MnLCAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJJbmZvLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogdGhpcy51c2VyUmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKChyZXN1bHQgYXMgRGVmYXVsdFJlc3BvbnNlVHlwZSkuZXJyb3IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHJlc3VsdCBhcyBEZWZhdWx0UmVzcG9uc2VUeXBlKS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjL3Jlc3VsdD9pZD0nICsgdGhpcy5yb3V0ZVBhcmFtcy5pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiIsImltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvcm1cIjtcclxuaW1wb3J0IHsgQ2hvaWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jaG9pY2VcIjtcclxuaW1wb3J0IHsgVGVzdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdGVzdFwiO1xyXG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Jlc3VsdFwiO1xyXG5pbXBvcnQgeyBBdXRoIH0gZnJvbSBcIi4vc2VydmljZXMvYXV0aFwiO1xyXG5pbXBvcnQgeyBBbnN3ZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Fuc3dlclwiO1xyXG5pbXBvcnQge1JvdXRlVHlwZX0gZnJvbSBcIi4vdHlwZXMvcm91dGUudHlwZVwiO1xyXG5pbXBvcnQge1VzZXJJbmZvVHlwZX0gZnJvbSBcIi4vdHlwZXMvdXNlci1pbmZvLnR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3V0ZXIge1xyXG4gICAgcmVhZG9ubHkgY29udGVudEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IHN0eWxlc0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IHRpdGxlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgcHJvZmlsZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IHByb2ZpbGVGdWxsTmFtZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHJvdXRlczogUm91dGVUeXBlW107XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgICAgIHRoaXMuc3R5bGVzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHlsZXMnKTtcclxuICAgICAgICB0aGlzLnRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLXRpdGxlJyk7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlJyk7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlRnVsbE5hbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2ZpbGUtZnVsbC1uYW1lJyk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZTogJyMvJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWFpbicsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ3RlbXBsYXRlcy9pbmRleC5odG1sJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlczogJ3N0eWxlcy9pbmRleC5jc3MnLFxyXG4gICAgICAgICAgICAgICAgbG9hZDogKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjL3NpZ251cCcsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1JlZ2lzdHJhdGlvbicsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ3RlbXBsYXRlcy9zaWdudXAuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXM6ICdzdHlsZXMvZm9ybS5jc3MnLFxyXG4gICAgICAgICAgICAgICAgbG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBGb3JtKCdzaWdudXAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjL2xvZ2luJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9nIGluIHN5c3RlbScsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ3RlbXBsYXRlcy9sb2dpbi5odG1sJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlczogJ3N0eWxlcy9mb3JtLmNzcycsXHJcbiAgICAgICAgICAgICAgICBsb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEZvcm0oJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlOiAnIy9jaG9pY2UnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDaG9pY2UnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZXMvY2hvaWNlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzOiAnc3R5bGVzL2Nob2ljZS5jc3MnLFxyXG4gICAgICAgICAgICAgICAgbG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDaG9pY2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjL3Rlc3QnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUZXN0JyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAndGVtcGxhdGVzL3Rlc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXM6ICdzdHlsZXMvdGVzdC5jc3MnLFxyXG4gICAgICAgICAgICAgICAgbG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUZXN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlOiAnIy9yZXN1bHQnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdSZXN1bHQnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZXMvcmVzdWx0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzOiAnc3R5bGVzL3Jlc3VsdC5jc3MnLFxyXG4gICAgICAgICAgICAgICAgbG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBSZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjL2Fuc3dlcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Fuc3dlcnMnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZXMvYW5zd2VyLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzOiAnc3R5bGVzL2Fuc3dlci5jc3MnLFxyXG4gICAgICAgICAgICAgICAgbG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBBbnN3ZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBvcGVuUm91dGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgdXJsUm91dGU6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMF07XHJcbiAgICAgICAgaWYgKHVybFJvdXRlID09PSAnIy9sb2dvdXQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogYm9vbGVhbiA9IGF3YWl0IEF1dGgubG9nb3V0KCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvJztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vLi4uXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdSb3V0ZTogUm91dGVUeXBlIHwgdW5kZWZpbmVkID0gdGhpcy5yb3V0ZXMuZmluZChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucm91dGUgPT09IHVybFJvdXRlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIW5ld1JvdXRlKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRlbnRFbGVtZW50IHx8ICF0aGlzLnN0eWxlc0VsZW1lbnQgfHwgIXRoaXMudGl0bGVFbGVtZW50IHx8ICF0aGlzLnByb2ZpbGVFbGVtZW50XHJcbiAgICAgICAgICAgIHx8ICF0aGlzLnByb2ZpbGVGdWxsTmFtZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKHVybFJvdXRlID09PSAnIy8nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy8nO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRlbnRFbGVtZW50LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKG5ld1JvdXRlLnRlbXBsYXRlKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSk7XHJcbiAgICAgICAgdGhpcy5zdHlsZXNFbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsIG5ld1JvdXRlLnN0eWxlcyk7XHJcbiAgICAgICAgdGhpcy50aXRsZUVsZW1lbnQgLmlubmVyVGV4dCA9IG5ld1JvdXRlLnRpdGxlO1xyXG5cclxuICAgICAgICBjb25zdCB1c2VySW5mbzogVXNlckluZm9UeXBlIHwgbnVsbCA9IEF1dGguZ2V0VXNlckluZm8oKTtcclxuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbjogc3RyaW5nIHwgbnVsbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEF1dGguYWNjZXNzVG9rZW5LZXkpO1xyXG4gICAgICAgIGlmICh1c2VySW5mbyAmJiBhY2Nlc3NUb2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmlsZUZ1bGxOYW1lRWxlbWVudC5pbm5lclRleHQgPSB1c2VySW5mby5mdWxsTmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdSb3V0ZS5sb2FkKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9jb25maWdcIjtcclxuaW1wb3J0IHtVc2VySW5mb1R5cGV9IGZyb20gXCIuLi90eXBlcy91c2VyLWluZm8udHlwZVwiO1xyXG5pbXBvcnQge1JlZnJlc2hSZXNwb25zZVR5cGV9IGZyb20gXCIuLi90eXBlcy9yZWZyZXNoLXJlc3BvbnNlLnR5cGVcIjtcclxuaW1wb3J0IHtMb2dvdXRSZXNwb25zZVR5cGV9IGZyb20gXCIuLi90eXBlcy9sb2dvdXQtcmVzcG9uc2UudHlwZVwiO1xyXG5cclxuXHJcbmNsYXNzIHVzZXJJbmZvVHlwZSB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgYWNjZXNzVG9rZW5LZXk6IHN0cmluZyA9ICdhY2Nlc3NUb2tlbic7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWZyZXNoVG9rZW5LZXk6IHN0cmluZyA9ICdyZWZyZXNoVG9rZW4nO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdXNlckluZm9LZXk6IHN0cmluZyA9ICd1c2VySW5mbyc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB1c2VyRW1haWxLZXk6IHN0cmluZyA9ICd1c2VyRW1haWwnO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHByb2Nlc3NVbmF1dGhvcml6ZWRSZXNwb25zZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCByZWZyZXNoVG9rZW46IHN0cmluZyB8IG51bGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnJlZnJlc2hUb2tlbktleSk7XHJcbiAgICAgICAgaWYgKHJlZnJlc2hUb2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNvbmZpZy5ob3N0ICsgJy9yZWZyZXNoJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtyZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbn0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzID09PTIwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBSZWZyZXNoUmVzcG9uc2VUeXBlIHwgbnVsbCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgIXJlc3VsdC5lcnJvciAmJiByZXN1bHQuYWNjZXNzVG9rZW4gJiYgcmVzdWx0LnJlZnJlc2hUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlbnMocmVzdWx0LmFjY2Vzc1Rva2VuLCByZXN1bHQucmVmcmVzaFRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbW92ZVRva2VucygpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnIy8nO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9nb3V0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbjogc3RyaW5nIHwgbnVsbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMucmVmcmVzaFRva2VuS2V5KTtcclxuICAgICAgICBpZiAocmVmcmVzaFRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGNvbmZpZy5ob3N0ICsgJy9sb2dvdXQnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7cmVmcmVzaFRva2VuOiByZWZyZXNoVG9rZW59KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IExvZ291dFJlc3BvbnNlVHlwZSB8IG51bGwgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmICFyZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRoLnJlbW92ZVRva2VucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEF1dGgudXNlckluZm9LZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFRva2VucyhhY2Nlc3NUb2tlbjogc3RyaW5nLCByZWZyZXNoVG9rZW46IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuYWNjZXNzVG9rZW5LZXksYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMucmVmcmVzaFRva2VuS2V5LHJlZnJlc2hUb2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVtb3ZlVG9rZW5zKCk6IHZvaWQge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuYWNjZXNzVG9rZW5LZXkpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMucmVmcmVzaFRva2VuS2V5KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VXNlckluZm8oaW5mbzogdXNlckluZm9UeXBlKTogdm9pZCB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy51c2VySW5mb0tleSwgSlNPTi5zdHJpbmdpZnkoaW5mbykpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFVzZXJJbmZvKCk6IFVzZXJJbmZvVHlwZSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvOiBzdHJpbmcgfCBudWxsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy51c2VySW5mb0tleSk7XHJcbiAgICAgICAgaWYgKHVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHVzZXJJbmZvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFVzZXJFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy51c2VyRW1haWxLZXksIGVtYWlsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFVzZXJFbWFpbCgpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy51c2VyRW1haWxLZXkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBBdXRoIH0gZnJvbSBcIi4vYXV0aFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21IdHRwIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcmVxdWVzdCh1cmw6IHN0cmluZywgbWV0aG9kOiBzdHJpbmcgPSBcIkdFVFwiLCBib2R5OiBhbnkgPSBudWxsKTogUHJvbWlzZTxhbnk+IHtcclxuXHJcbiAgICAgICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAgICAgbGV0IHRva2VuOiBzdHJpbmcgfCBudWxsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQXV0aC5hY2Nlc3NUb2tlbktleSk7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcy5oZWFkZXJzWyd4LWFjY2Vzcy10b2tlbiddID0gdG9rZW47XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgcGFyYW1zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcGFyYW1zKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA8IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBib29sZWFuID0gYXdhaXQgQXV0aC5wcm9jZXNzVW5hdXRob3JpemVkUmVzcG9uc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0KHVybCwgbWV0aG9kLCBib2R5KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBlbnVtIEFjdGlvblRlc3RUeXBlICB7XHJcbiAgICBuZXh0ID0gJ25leHQnLFxyXG4gICAgcGFzcyA9ICdwYXNzJyxcclxuICAgIHByZXYgPSAncHJldicsXHJcbn0iLCJpbXBvcnQge1F1ZXJ5UGFyYW1zVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3F1ZXJ5LXBhcmFtcy50eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXJsTWFuYWdlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRRdWVyeVBhcmFtcygpIHtcclxuICAgICAgY29uc3QgcXM6c3RyaW5nID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5zcGxpdCgnKycpLmpvaW4oJycpO1xyXG5cclxuICAgICAgICBsZXQgcGFyYW1zOiBRdWVyeVBhcmFtc1R5cGUgPSB7fSxcclxuICAgICAgICAgICAgdG9rZW5zOiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsLFxyXG4gICAgICAgICAgICByZTogUmVnRXhwID0gL1s/Jl0oW149XSspPShbXiZdKikvZztcclxuXHJcbiAgICAgICAgd2hpbGUgKHRva2VucyA9IHJlLmV4ZWMocXMpKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tkZWNvZGVVUklDb21wb25lbnQodG9rZW5zWzFdKV0gPSBkZWNvZGVVUklDb21wb25lbnQodG9rZW5zWzJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICB9XHJcblxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi9yb3V0ZXJcIjtcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuaGFuZGxlUm91dGVDaGFuZ2luZy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLmhhbmRsZVJvdXRlQ2hhbmdpbmcuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSb3V0ZUNoYW5naW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm9wZW5Sb3V0ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4obmV3IEFwcCgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=