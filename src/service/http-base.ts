import { extend } from 'umi-request';

interface OptionType {
  url: string;
  data?: any;
  method?: any;
  headers: any;
}
/**
 * 被挂起的请求数组
 */
var refreshSubscribers: any[] = [];
/**
 * 刷新token 回调
 */
var refreshTokenFunc: any;
/**
 * token失效标识
 */
var refreshTokenFlag = false;
/**
 * push所有请求到数组中
 * @param cb
 */
var subscribeTokenRefresh = function (cb: any) {
  refreshSubscribers.push(cb);
};
/**
 * 刷新请求（refreshSubscribers数组中的请求得到新的token之后会自执行,用新的token去请求数据)
 * @param token
 */
var onRrefreshed = function (token: any) {
  if (refreshSubscribers.length == 0) return;
  refreshSubscribers.map(function (cb) {
    return cb(token);
  });
};
/**
 * 刷新token监听
 * @param callback
 */
var reigistRefreshTokenEvent = function (callback: any) {
  refreshTokenFunc = callback;
};
/**
 * 执行刷新token相关操作
 */
var triggerRefresh = function () {
  refreshTokenFlag = true;
  refreshTokenFunc.then(function (res: any) {
    onRrefreshed(res.token || '');
    refreshSubscribers = [];
    refreshTokenFlag = false;
  });
};
/**
 * 执行刷新token以及调用后续接口逻辑
 * @param option
 */
var refreshToken = function (option: any) {
  // 执行刷新逻辑
  if (!refreshTokenFlag) {
    triggerRefresh();
  }
  return new Promise(function (resolve, reject) {
    subscribeTokenRefresh(function (token: any) {
      //替换token
      option.header.token = token;
      let request = getRequest(option);
      request(option.url)
        .then(function (res: any) {
          var code = res.data.code || res.statusCode;
          if (code === 200) {
            resolve(res);
          }
        })
        .catch(function (err: any) {
          reject(err);
        });
    });
  });
};
/**
 * 根据接口返回code执行相关操作
 * @param res
 * @param option
 */
var handleResponse = function (res: any, option: any) {
  var code = res.code || res.statusCode;

  switch (Number(code)) {
    case 200: //成功
      return res;
    case 101: // token无效
    case 102: // 短token过期
      return refreshToken(option);
    default: {
      // 业务异常code码
      return res;
    }
  }
};
var baseRequest = function (option: any) {
  let request = getRequest(option);

  return request(option.url)
    .then(function (res: any) {
      return handleResponse(res, option);
    })
    .catch(function (e: any) {
      throw e;
    });
};

var getRequest = function (option: any) {
  let request: any;

  if (option.method === 'GET') {
    option.params = {
      ...option.data,
    };
  }

  const extendRequest = extend(option);
  if (option.method === 'GET') {
    request = extendRequest.get;
  }
  if (option.method === 'POST') {
    request = extendRequest.post;
  }
  if (option.method === 'DELETE') {
    request = extendRequest.delete;
  }
  if (option.method === 'PUT') {
    request = extendRequest.put;
  }
  return request;
};

export { reigistRefreshTokenEvent, baseRequest, OptionType };
