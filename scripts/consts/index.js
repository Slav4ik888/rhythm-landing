
export const SETTINGS = {
  mode   : 'prod', // 'dev', //  
  prefix : '/api',
  get url() {
    return (this.mode === 'dev' ? 'http://localhost:9090' : 'http://rhy.thm.su') + this.prefix;
  }
};
