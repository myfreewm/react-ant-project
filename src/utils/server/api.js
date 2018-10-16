
// 集中管理所有的api接口

const prefix = '';


export default(config => {

    return Object.keys(config).reduce((copy,name)=>{

        copy[name] = `${prefix}${config[name]}`;
        return copy;
    },{})
})({

    "getExampleData":"/api/example/data",
    "getIndex":"/api/example/data",
    "getInion":"/couponRest/receiveRecord",
    "getHomePage":"onionIndex/homePage",
    "getLogin":"app/user/checkTmnIsCloces/v1"
})
