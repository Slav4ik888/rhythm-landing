
export const SETTINGS = {
  mode   : 'prod', //   'dev', // 
  prefix : '/api',
  get url() {
    return (this.mode === 'dev' ? 'http://localhost:9090' : 'https://rhy.thm.su') + this.prefix;
  }
};

// git add . && git commit -m "2024-08-05 fix sending email" && git push origin main
