"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
app_1.default.listen(process.env.PORT || 9090, () => console.log(`Listening on port ${process.env.PORT || 9090}!`));
// 
// git add . && git commit -m "2024-08-05 fix video link" && git push origin main
// 
// sudo apt install certbot
// sudo certbot --nginx
// Deploying Certificate to VirtualHost /etc/nginx/sites-enabled/course.thm.su
// Deploying Certificate to VirtualHost /etc/nginx/sites-enabled/rhy.thm.su
// Congratulations! You have successfully enabled https://course.thm.su and
// https://rhy.thm.su
// You should test your configuration at:
// https://www.ssllabs.com/ssltest/analyze.html?d=course.thm.su
// https://www.ssllabs.com/ssltest/analyze.html?d=rhy.thm.su
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// IMPORTANT NOTES:
//  - Congratulations! Your certificate and chain have been saved at:
//    /etc/letsencrypt/live/course.thm.su/fullchain.pem
//    Your key file has been saved at:
//    /etc/letsencrypt/live/course.thm.su/privkey.pem
//    Your cert will expire on 2024-10-23. To obtain a new or tweaked
//    version of this certificate in the future, simply run certbot again
//    with the "certonly" option. To non-interactively renew *all* of
//    your certificates, run "certbot renew"
//  - Your account credentials have been saved in your Certbot
//    configuration directory at /etc/letsencrypt. You should make a
//    secure backup of this folder now. This configuration directory will
//    also contain certificates and private keys obtained by Certbot so
//    making regular backups of this folder is ideal.
//  - If you like Certbot, please consider supporting our work by:
//    Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
//    Donating to EFF: https://eff.org/donate-le
// 200 OK
// This response code indicates that the request was successful.
// 201 Created
// This indicates the request was successful and a resource was created. It is used to confirm success of a PUT or POST request.
// 400 Bad Request
// The request was malformed. This happens especially with POST and PUT requests, when the data does not pass validation, or is in the wrong format.
// 401 Unauthorized
// This error indicates that you need to perform authentication before accessing the resource.
// 403 Forbidden — сервер понял запрос, но он отказывается его выполнять из-за ограничений в доступе для клиента к указанному ресурсу. 
// 404 Not Found
// This response indicates that the required resource could not be found. This is generally returned to all requests which point to a URL with no corresponding resource.
// 405 Method Not Allowed
// The HTTP method used is not supported for this resource.
// 409 Conflict
// This indicates a conflict. For instance, you are using a PUT request to create the same resource twice.
// 500 Internal Server Error
