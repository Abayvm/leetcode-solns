// 1108. Defanging an IP Address

var defangIPaddr = function(address) {
    const ipArr = address.split('');
    let resultIp = [];
    for(let i=0; i<=ipArr.length; i++){
        if(ipArr[i] === '.'){
            resultIp.push('[.]');
        }else{
            resultIp.push(ipArr[i]);
        }
    }
    let ipAddress = resultIp.join('');
    return ipAddress;
};