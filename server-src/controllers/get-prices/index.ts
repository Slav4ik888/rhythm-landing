import { cfg } from '../../app/config';
import { Context } from '../../app/types/global';
import { getTemplateByDiscountName, sendMail, TemplateType } from '../../libs/emails';
import { createLogTemp, loggerUsers as logger } from '../../libs/loggers';



export async function getPrices(ctx: Context): Promise<any> {
  const
    logTemp = createLogTemp(ctx, 'getPrices');
  
  try {
    console.log('Get-prices');
    const { name, company, email, utms } = ctx.request.body; // { name: '123', company: '456', email: 'korzan.va@mail.ru' }
    // console.log(ctx.request.body); 


    // mailto Client
    await sendMail({
      to       : email,
      subject  : 'Информация по информационной панели руководителя «Ритм»',
      template : getTemplateByDiscountName(TemplateType.GET_PRICES, utms),
      locals   : {
        url_demo  : cfg.DEMO_URL,
        url_site  : cfg.SITE_URL,
        url_site_primary_secondary: cfg.SITE_URL_PRIMARY_SECONDARY,
        telegramm : cfg.TELEGRAM,
      }
    });

    // mailto me
    await sendMail({
      to       : cfg.ADMIN_EMAIL,
      subject  : 'Прислали запрос на доп условия по панели «Ритм»',
      template : 'notification-get-prices',
      locals   : {
        companyName: company,
        email,
        name,
        utm_source   : utms?.utm_source   || '',
        utm_medium   : utms?.utm_medium   || '',
        utm_campaign : utms?.utm_campaign || '',
        utm_term     : utms?.utm_term     || '',
        utm_content  : utms?.utm_content  || '',
        utm_device   : utms?.utm_device   || '',
        utm_date     : utms?.utm_date     || ''
      }
    });

    ctx.body   = { result: 'Информация по панели отправлена!' };
    logger.info(`${logTemp} success`);
  }
  catch (errors) {
    logger.error(`${logTemp} - ${errors}`);
    logger.error(`${logTemp} - JSON ${JSON.stringify(errors)}`);
  }
}
