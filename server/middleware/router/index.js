"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const get_demo_1 = require("../../controllers/get-demo");
const get_prices_1 = require("../../controllers/get-prices");
// import controllers from '../../controllers';
const router = new koa_router_1.default({ prefix: '/api' });
// { files } = controllers;
router.post('/get-demo', get_demo_1.getDemo);
router.post('/get-prices', get_prices_1.getPrices);
// router.post('/files', checkUserSession, () => { console.log('Hello its /files') });
// Testing
router.get('/hello', (ctx) => {
    console.log('Hello wolrd!');
    ctx.body = { string: 'Hello wolrd!' };
});
// Отправка запроса POST
// fetch('http://rhy.thm.su/api/hello', {
//   method: 'GET',
//   // body: JSON.stringify({key: 'value'}),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
// .then((response) => response.json())
// .then((data) => {
//   console.log(data); // Вывод ответа сервера
// })
// .catch((error) => {
//   console.error(error); // Обработка ошибок
// });
router.get('/hello/:id', (ctx) => {
    // console.log('ctx.path: ', ctx.path); // /api/hello
    const { id } = ctx.params;
    console.log('Hello wolrd! \n with id:', id);
    ctx.body = `Hello wolrd! \n with id: ${id}`;
});
router.get('/throw/:status', (ctx) => {
    const { status } = ctx.params;
    ctx.throw(400, 'not valid status', { userStatus: `user status: ${status}` });
});
exports.default = router;
