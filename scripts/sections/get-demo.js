import { getById } from '../utils/get-by-id.js';
import { getFormData } from '../utils/get-form-data.js';
import { getRequest } from '../utils/requests.js';
import { validate } from '../utils/validate.js';

// --------------------
// --  GET DEMO
// ----------------------------------------------------------------------------------

const
  $GetDemoForm = getById("get-demo-form"),
  $GetDemoBtn = getById("get-demo-btn");


$GetDemoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const body = getFormData('get-demo-form');

  if (! validate(body, 'get-demo')) return;

  $GetDemoBtn.disabled = true;
  getRequest(body, 'get-demo', $GetDemoBtn);
});
