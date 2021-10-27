import React, { useCallback, useContext, useState } from 'react';
import { CooperationManagerLoginAuthVO } from '@/api/business';
import { getCache, setCache } from '@/utils';
let defalut = { isLogin: false };
export let LOGIN_INFO = 'LOGIN_INFO';

/* eslint-disable */
export interface LocalLoginInfo extends CooperationManagerLoginAuthVO {
  isLogin?: boolean;
  routes?: [];
}

/**
 * 获取登录信息
 */
export let getLoginInfo = function() {
  let state: LocalLoginInfo = getCache(LOGIN_INFO) || defalut;
  return state;
};
/* eslint-disable */
interface LoginAttribute {
  state?: LocalLoginInfo;
  login: (info: LocalLoginInfo) => void;
  logout: () => void;
  routes?: [];
}

let context: LoginAttribute = {
  state: {},
  login: () => {},
  logout: () => {},
};

let LoginContext = React.createContext(context);
export let useLogin = function() {
  return useContext(LoginContext);
};

export let LoginProvider = function(props: any) {
  const [loginState, setLoginState] = useState(defalut);

  /**
   * login 登录
   * info 登录信息
   */
  let login = useCallback(function(info) {
    setLoginState(info);
    setCache(LOGIN_INFO, info);
  }, []);

  /**
   * logout 退出登录
   */
  let logout = useCallback(function() {
    setLoginState(defalut);
    setCache(LOGIN_INFO, defalut);
  }, []);

  return React.createElement(
    LoginContext.Provider,
    {
      value: {
        state: loginState,
        login: login,
        logout: logout,
      },
    },
    props.children,
  );
};
