const proxy = require('./proxy');
const axios = require('axios');
const argv = require('optimist').argv;
let count =0;
requestOnce = async (proxy) => {
    return axios.get('https://yigeplus.xyz/?mref=', {proxy: proxy}).then((res) => {
        count++;
    })
};

main = async () => {
    const proxyList = await proxy.getProxy();
    const waitList = [];
    proxyList.forEach(x => {
        waitList.push(requestOnce(x))
    });
    await Promise.all(waitList);
    console.log(`successfully requested ${count} times`)
};

const n = argv.n;
for (let i = 0; i < n; i++) {
    main();
}
