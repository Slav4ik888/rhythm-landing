import { cfg } from '../../app/config';
import { Context } from '../../app/types/global';
import { getTemplateByDiscountName, sendMail, TemplateType } from '../../libs/emails';
import { createLogTemp, loggerUsers as logger } from '../../libs/loggers';



export async function getDemo(ctx: Context): Promise<any> {
  const
    logTemp = createLogTemp(ctx, 'getDemo');
  
  try {
    console.log('Get-demo');
    const { name, company, email, utms } = ctx.request.body; // { name: '123', company: '456', email: 'korzan.va@mail.ru' }
    console.log(ctx.request.body); 


    // mailto Client
    await sendMail({
      to       : email,
      subject  : 'Ссылка на демо-панель «Ритм»',
      template : getTemplateByDiscountName(TemplateType.GET_DEMO, utms),
      locals   : {
        url_demo  : cfg.DEMO_URL,
        url_site  : cfg.SITE_URL,
        telegramm : cfg.TELEGRAM
      }
    });

    // mailto me
    await sendMail({
      to       : cfg.ADMIN_EMAIL,
      subject  : 'Прислали запрос на демо-панель «Ритм»',
      template : 'notification-get-demo',
      locals   : {
        companyName: company,
        email,
        name,
        utms
      }
    });

    ctx.body   = { result: 'Ссылка на демо-панель отправлена!' };
    logger.info(`${logTemp} success`);
  }
  catch (errors) {
    logger.error(`${logTemp} - ${errors}`);
    logger.error(`${logTemp} - JSON ${JSON.stringify(errors)}`);
  }
}
