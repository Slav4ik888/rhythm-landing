
export const SETTINGS = {
  mode   : 'dev', // 'prod', //  
  prefix : '/api',
  get url() {
    return (this.mode === 'dev' ? 'http://localhost:9090' : 'https://rhy.thm.su') + this.prefix;
  }
};
