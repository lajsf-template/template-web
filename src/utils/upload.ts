import platformSupport, { } from "@/api/platform-support";
import env from "@/constants/env.json"
import { UploadFile } from "antd/lib/upload/interface";
import axios from "axios";
import { decrypt as commonDecypt } from './secret'

/**oss配置 */
export interface OssConfig {
    bucketName: string,
    cdn: string,
    bucketNameS: string,
    cdnS: string
}

export interface UploadSignResult {
    /** AccessKeyId */
    accessId?: string
    /** 当前服务器时间（毫秒） */
    currentTime?: number
    /** 失效时间（毫秒） */
    expireAt?: number
    /** Bucket的host地址 */
    host?: string
    /** Policy表单域 */
    policy?: string
    /** 签名信息 */
    signature?: string
}


let formData: UploadSignResult;

//文件保存路径
let folderPath: (filePath: string) => string;
export const folderPathEvent = (cb: any) => {
    folderPath = cb
}
//解密方法
let decrypt: (signature: string) => string;
export const decryptEvent = (cb: any) => {
    decrypt = cb
};
// 生成文件名
const generateKey = function (filePath: string) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const path = year + (month < 10 ? "0" + month : month).toString();
    const fileKey =
        (folderPath ? folderPath(filePath) : 'default/') +
        path +
        "/" +
        new Date().getTime() +
        filePath.substring(filePath.lastIndexOf("."));
    return fileKey;
};

const executeUpload = async function (
    { host, policy, signature, accessId }: UploadSignResult = {},
    privateOss: boolean = false,
    ossConfig: OssConfig,
    file: UploadFile
): Promise<string> {
    const key = generateKey(file.name);
    const fd = new FormData()
    fd.append('key', key)
    fd.append('OSSAccessKeyId', accessId as string)
    fd.append('policy', policy as string)
    fd.append('Signature', decrypt ? decrypt(signature!) : commonDecypt(signature!))
    fd.append('success_action_status', '200')
    fd.append('file', file.originFileObj as any)
    await axios({
        url: host,
        method: 'post',
        data: fd,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
    const url = ossConfig.cdn + "/" + key
    return url
};

const signatureVerification = function () {
    if (!formData) {
        return null;
    }
    const { expireAt } = formData;
    // 已经快过期了
    if ((expireAt as number) - Date.now() < 30 * 1000) {
        return null;
    }
    return formData;
};

/**
 * @param filePath 小程序的模板路径
 * @param everytimeSignature 是否每次都重新获取签名，默认为true
 * @param privateOss 是否是私有域上传，默认为false
 */
export const uploadToOss = function (
    apiData: { [key: string]: any } = {},
    ossConfig: OssConfig = {
        bucketName: "lajsf-resources",
        cdn: "https://cdn-test.lajsf.com/",
        bucketNameS: "lajsf-resources-test",
        cdnS: "https://cdn-test-s.lajsf.com/"
    },
    everytimeSignature: boolean = true,
    privateOss: boolean = false,
    file: UploadFile
): Promise<string> {
    if (!everytimeSignature) {
        if (signatureVerification()) {
            return executeUpload(
                // filePath,
                signatureVerification() as UploadSignResult,
                privateOss,
                ossConfig,
                file
            );
        }
    }
    return platformSupport.uploads.securitySign(apiData).then(res => {
        formData = res;
        return executeUpload(res, privateOss, ossConfig, file);
    });
};

//获取文件类型
const getFileType = function (filePath: string) {
    const video = [
        "mkv",
        "mp4",
        "avi",
        "rm",
        "rmvb",
        "wmv",
        "3gp",
        "amv",
        "dmv",
        "flv",
    ].some((item) => filePath.includes(item));
    if (video) {
        return "video";
    }

    const images = [
        "bmp",
        "jpg",
        "jpeg",
        "tiff",
        "png",
        "pcx",
        "tga",
        "exif",
        "fpx",
        "svg",
        "psd",
        "cdr",
        "pcd",
        "dxf",
    ].some((item) => filePath.includes(item));
    if (images) {
        return "images";
    }

    const audio = ["mp3", "pcm", "wav", "aac"].some((item) =>
        filePath.includes(item)
    );

    if (audio) {
        return "audio";
    }

    return "other";
};
/**
 * @param filePath 小程序的模板路径
 * @param everytimeSignature 是否每次都重新获取签名，默认为true
 * @param privateOss 是否是私有域上传，默认为false
 */
export const upload = function (
    everytimeSignature: boolean = true,
    privateOss: boolean = false,
    file: UploadFile
) {
    return uploadToOss(
        { permission: privateOss ? 'PT' : 'PB' },
        (env as any)?.oss,
        everytimeSignature,
        privateOss,
        file
    )
}

export const initUpload = function () {
    //上传oss-文件夹名定义
    folderPathEvent((filePath: string) => {
        return `nutritiondiet/${getFileType(filePath)}/default/`
    })
    //上传oss-解密定义
    decryptEvent(decrypt)
}

initUpload()