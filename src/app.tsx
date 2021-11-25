import { LayoutProps } from 'antd/lib/layout';
import React from 'react';
import { LoginProvider, getLoginInfo } from '@/uses';
import { history } from 'umi';

let isSubApp = false;
/**
 * 修改渲染根节点
 * @param memo
 */
export function modifyClientRenderOpts(memo: any) {
  return {
    ...memo,
    rootElement: isSubApp ? 'sub-root' : memo.rootElement,
  };
}

// /**
//  * 运行时配置
//  * @param param0
//  */
// export const layout = ({ initialState }: any): LayoutProps => {
//     return {
//         onPageChange: () => {
//             //可以在此处做页面切换时的监听处理
//             //如果没有登录，重定向到 login
//             //做埋点统计
//             //设置标题
//             console.log('history----', history.location);

//         },
//         menuHeaderRender: undefined,
//         ...initialState ?.settings,
//     };
// };

/**
 * 设置Provider
 * @param container
 */
export function rootContainer(container: any) {
  return React.createElement(LoginProvider, null, container);
}

/**
 * 覆写 render。
 * @param oldRender
 */
export function render(oldRender: any) {
  console.log('覆写路由render', oldRender);
  let state = getLoginInfo();
  console.log('覆写路由state', state);
  if (state.isLogin) {
    oldRender();
  } else {
    history.push('/login');
    oldRender();
  }
}
