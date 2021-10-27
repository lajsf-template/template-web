/**表单校验 */

/**
 * 登录账号
 * 英文、数字最多输入20字
 */
export const validateLoginName = (rule: any, value: any, callback: any) => {
  let reg = /^[0-9A-Za-z]{1,20}$/;
  if (value && !reg.test(value)) {
    callback(new Error('格式：英文、数字最多不超过20字'));
  } else {
    callback();
  }
};
/**
 * 姓名
 * 中文、英文、数字，最多不超过20字
 */
export const validateUserName = (rule: any, value: any, callback: any) => {
  let reg = /^[0-9A-Za-z\u4e00-\u9fa5]{1,20}$/;
  if (value && !reg.test(value)) {
    callback(new Error('格式：中文、英文、数字，最多不超过20字'));
  } else {
    callback();
  }
};
/**
 * 电话
 * 11位数字
 */
export const validatePhone = (rule: any, value: any, callback: any) => {
  let reg = /^[0-9]{11}$/;
  if (value && !reg.test(value)) {
    callback(new Error('格式：11位数字'));
  } else {
    callback();
  }
};
