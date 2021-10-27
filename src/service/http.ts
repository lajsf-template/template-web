import md5 from 'js-md5';
import { baseRequest, reigistRefreshTokenEvent, OptionType } from './http-base';
import env from '@/constants/env.json';
import { message } from 'antd';
import { history } from 'umi';

interface RequestParamsProps {
  url: string;
  data?: any;
  contentType?: string;
}

const baseOptions = (
  params: RequestParamsProps,
  method = 'GET',
  config?: KeyValuePair,
) => {
  let { url, data } = params;
  let contentType = 'application/json';
  contentType = params.contentType || contentType;
  console.log('http', data);
  //请求头加devKey
  let timeStamp = new Date().getTime().toString();
  let md5TimeStamp = md5(`${timeStamp}lajsf.com`);
  const option: OptionType = {
    url: url.indexOf('http') !== -1 ? url : env.httpBaseUrl + url,
    data: data,
    method: method,
    headers: {
      'Content-Type': contentType,
      tenantId: 'nutritiondiet',
      authType: 'merchant',
      devType: '3',
      devKey: `${timeStamp}${md5TimeStamp}`
    },
    ...config,
  };

  return option;
};

//注册http 刷新token 回调
reigistRefreshTokenEvent(
  new Promise(function (resolve) {
    let token = '';
    resolve(token);
  }),
);

const handleResponse = (res: any, option: any) => {
  const code = res.code;
  switch (Number(code)) {
    case 200:
      return res.data;
    case 103:
    case 104:
    case 105:
      {
        //执行退出登录操作
      }
      break;
    default: {
      if (option?.data?.responseType == 'blob') {
        return res;
      } else {
        if (res.msg) {
          message.error(res.msg);
        }
        throw res;
      }
    }
  }
};

const request = (option: OptionType) => {
  return baseRequest(option)
    .then((res: any) => {
      console.warn(
        '--------请求数据--------',
        option,
        '--------响应数据--------',
        res,
      );
      return handleResponse(res, option);
    })
    .catch((e: any) => {
      if (e?.data?.code === '101') {
        return history.replace('/login');
      }
      throw e;
    });
};

export const httpGet = (
  url: string,
  data?: any,
  config?: KeyValuePair,
): Promise<any> => {
  const option = baseOptions({ url, data }, 'GET', config);
  return request(option);
};

export const httpPost = (url: string, data?: any): Promise<any> => {
  let option = baseOptions({ url, data }, 'POST');
  return request(option);
};

export const httpDelete = (url: string, data?: any): Promise<any> => {
  let option = baseOptions({ url, data }, 'DELETE');
  return request(option);
};

export const httpPut = (url: string, data?: any): Promise<any> => {
  let option = baseOptions({ url, data }, 'PUT');
  return request(option);
};
