import {UrlManager} from "../utils/url-manager.js";
import {CustomHttp} from "../services/custom-http.js";
import config from "../../config/config.js";
import { Auth } from "../services/auth.js";

export class Result {
     answers = [];
     routeParams = {};
     constructor() {
         this.routeParams = UrlManager.getQueryParams();

         this.init();
         }

         async init() {

             const userInfo = Auth.getUserInfo();
             if (!userInfo) {
                 location.href = '#/';
                 return;
             }

             if (this.routeParams.id) {

                 try {
                     const result = await CustomHttp.request(config.host + '/tests/' + this.routeParams.id + '/result?userId=' + userInfo.userId);
                     if (result) {
                         if (result.error) {
                             throw new Error(result.error);
                         }
                         document.getElementById('result-score').innerText = result.score + '/' + result.total;

                         const seeCorrectAnswers = document.getElementById('see-answer-questions');
                         seeCorrectAnswers.addEventListener('click', async () => {
                             location.href = '#/answer?id=' + this.routeParams.id;

                         });
                     } else {
                         throw new Error(result.error);
                     }
                 } catch (error) {
                     console.error( error);
                     location.href = '#/';
                 }
             } else {
                 location.href = '#/';
             }
         }
}






