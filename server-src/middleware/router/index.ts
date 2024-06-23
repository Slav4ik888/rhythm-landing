import Router from 'koa-router';
import { getDemo } from '../../controllers/get-demo';
// import controllers from '../../controllers';


const
  router = new Router({ prefix: '/api' });
  // { files } = controllers;



router.post('/get-demo', getDemo);

router.post('/get-prices', (ctx) => {
  console.log('Get-prices');
  console.log(ctx.request.body); // { name: '123', company: '456', email: 'korzan.va@mail.ru' }
  ctx.body = { str: 'Get-prices Hello wolrd!' };
});

// router.post('/files', checkUserSession, () => { console.log('Hello its /files') });


// Testing
router.get('/hello', (ctx) => {
  console.log('Hello wolrd!');
  ctx.body = 'Hello wolrd!';
});

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

export default router;
