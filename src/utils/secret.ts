const CryptoJS = require("crypto-js"); //引用AES源码js
const dayjs = require("dayjs");
import md5 from "js-md5";

const key = CryptoJS.enc.Utf8.parse("2f48eccf22c9d2d5"); //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse("7529edbaf4617265"); //十六位十六进制数作为密钥偏移量

//解密方法
export function decrypt(word: string): string {
    var decrypt = CryptoJS.AES.decrypt(word, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    // console.log('yulan-解密参数',word,'decrypt:',decrypt, '返回：', CryptoJS.enc.Utf8.stringify(decrypt))
    return CryptoJS.enc.Utf8.stringify(decrypt);
}

//加密方法
export function encrypt(word: string): string {
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}

/**
 * 
 * @param url 要拼接的URL
 * @param secret 接口返回的密钥
 * @param expiredTime 过期时间（毫秒） 默认为1天
 * @returns 加密过后的url链接
 */
export const sign = (url: string, secret: string, expiredTime = 86400000): string => {
    let timestamp = dayjs().add(expiredTime).valueOf()
    let random = Math.round(Math.random() * 100);
    let uid = 0
    let u: any

    try {
        u = parseUrl(url)
    } catch (error) {
        throw "URL格式错误"
    }
    let path = u?.pathname
    let sign = path + "-" + timestamp + "-" + random + "-" + uid + "-" + secret;
    let _md5 = (md5 as any)?.(sign)
    let authKey = timestamp + "-" + random + "-" + uid + "-" + _md5;
    return url + (url.includes("?") ? "&" : "?") + "auth_key=" + authKey;
}

/**
 * 通过url链接解析出参数
 * @param url url链接
 * @returns 路由参数
 */
export const parseUrl = (url: string) => {
    let result: any = {};
    let keys = ['href', 'origin', 'protocol', 'host',
        'hostname', 'port', 'pathname', 'search', 'hash'];
    let i: number
    let regexp = /(([^:]+:)\/\/(([^:\/\?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/;
    let match = regexp.exec(url);
    if (match) {
        for (i = keys.length - 1; i >= 0; --i) {
            result[keys[i]] = match[i] ? match[i] : '';
        }
    }
    return result;
}