const axios = require('axios');
const url = 'http://test_url';

getProxy = async ()=>{
    return axios.get(url).then((res)=>{
        const data = res.data.msg;
        console.log(data);
        return data.map(x =>{
            return {host: x.ip, port: parseInt(x.port)}
        })
    }).catch((err)=>{
        console.log(err)
    })
};

module.exports={
  getProxy
};
