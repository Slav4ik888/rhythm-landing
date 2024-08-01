import { createLogTemp } from '..';
import { Context } from '../../../../app/types/global';


describe('createLogTemp', () => {
  const ctx = {
    state: {
      user: {
        email: 'korzan.va@mail.ru'
      }
    }
  } as Context;

  test('Valid data', () => {
    expect(createLogTemp(ctx, 'USER_TEST')).toEqual('[USER_TEST][korzan.va@mail.ru]');
  });

  test('Valid data with value', () => {
    expect(createLogTemp(ctx, 'USER_TEST', 'some value')).toEqual('[USER_TEST][korzan.va@mail.ru][some value]');
  });

  test('Valid data with context', () => {
    expect(createLogTemp({
      ...ctx,
      // @ts-ignore
      request: {
        body: {
          utms: {
            utm_source   : 'utm_source111',
            utm_medium   : 'utm_medium222',
            utm_campaign : 'utm_campaign333',
            utm_term     : 'utm_term444',
          }
        }
      }
    }, 'USER_TEST', 'some value'))
      .toEqual('[USER_TEST][korzan.va@mail.ru][some value][utms: {\"utm_source\":\"utm_source111\",\"utm_medium\":\"utm_medium222\",\"utm_campaign\":\"utm_campaign333\",\"utm_term\":\"utm_term444\"}]');
  });

  test('Ctx undefined', () => {
    expect(createLogTemp(undefined, 'USER_TEST')).toEqual('[USER_TEST][quest]');
  });

  test('Ctx is a Email', () => {
    expect(createLogTemp('korzan.va@mail.ru', 'USER_TEST')).toEqual('[USER_TEST][korzan.va@mail.ru]');
  });
});

// npm run test:unit create-log-temp.test.ts
