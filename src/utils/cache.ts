/**
 * 设置缓存
 * @param key
 * @param value
 */
export const setCache = (key: string, value: any) => {
  let params: any = value;
  if (typeof value == 'object') {
    params = JSON.stringify(value);
  }
  return window.localStorage.setItem(key, params);
};

/**
 * 读取缓存
 * @param key
 */
export const getCache = (key: string) => {
  let result = window.localStorage.getItem(key);
  let res = null;
  if (result) {
    if (isJsonString(result)) {
      res = JSON.parse(result);
    }
  } else {
    return null;
  }
  return res;
};

/**
 * 删除缓存
 * @param key
 */
export const removeCache = (key: string) => {
  return window.localStorage.removeItem(key);
};

/**
 * 是否是 json 字符串
 * @param str
 */
const isJsonString = (str: string) => {
  try {
    if (typeof JSON.parse(str) == 'object') {
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
};
