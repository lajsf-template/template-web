import { LayoutProps } from 'antd/lib/layout';
import React from 'react';
import { LoginProvider, getLoginInfo } from '@/uses';
// import { filterRouter } from '@/router-manage/index';
// import HeadRight from '@/components/head-right';
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

/**
 * 运行时配置
 * @param param0
 */
export const layout = ({ initialState }: any): LayoutProps => {
    return {
        onPageChange: () => {
            //可以在此处做页面切换时的监听处理
            //如果没有登录，重定向到 login
            //做埋点统计
            //设置标题
        },
        menuHeaderRender: undefined,
        ...initialState ?.settings,
    };
};

/**
 * 设置Provider
 * @param container
 */
export function rootContainer(container: any) {
    return React.createElement(LoginProvider, null, container);
}
/**
 * 修改路由
 * @param routes
 */
// export function patchRoutes({ routes }) {
//     let userRoute = filterRouter();
//     let redictInfo = { exact: true, path: '/', redirect: '/home' };
//     let route = userRoute.find((item: any) => {
//         return item.path == '/home';
//     });
//     if (!route && userRoute.length > 0) {
//         //没有home,redirect指向路由里的第一个
//         if (userRoute[0].routes && userRoute[0].routes.length > 0) {
//             redictInfo.redirect = userRoute[0].routes[0].path;
//         } else {
//             redictInfo.redirect = userRoute[0].path;
//         }
//     }
//     //console.log('修改路由', routes, userRoute, shopRouter);
//     routes[0].routes = [...userRoute, ...routes[0].routes, redictInfo];
//     console.log('修改后路由', routes);
// }
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
        console.log('lll');
        history.push('/login');
        oldRender();
    }
}
