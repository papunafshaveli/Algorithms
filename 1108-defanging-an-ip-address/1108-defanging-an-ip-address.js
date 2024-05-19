/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    const defangedIp = address.replaceAll(".", "[.]");
    return defangedIp;
};