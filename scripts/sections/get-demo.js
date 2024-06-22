import { SETTINGS } from '../consts/index.js';
import { getById } from '../utils/get-by-id.js';
import { getFormData } from '../utils/get-form-data.js';
import { validate } from '../utils/validate.js';

// --------------------
// --  GET DEMO
// ----------------------------------------------------------------------------------

const
  $GetDemoForm = getById("get-demo-form");


$GetDemoForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const body = getFormData('get-demo-form');

  if (! validate(body, 'get-demo')) return;

  try {
    const response = await fetch(SETTINGS.url + '/get-demo', {
      method  : 'POST',
      body    : JSON.stringify(body),
      headers : {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    console.log('Success:', result);
  }
  catch (error) {
    console.error('Error:', error);
  }
});
