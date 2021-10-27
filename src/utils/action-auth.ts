import { getLoginInfo } from '@/uses';

export interface ActionAuthIpo {
  add?: boolean;
  edit?: boolean;
  delete?: boolean;
  detail?: boolean;
}

/**
 * 将树形结构处理成一维数组 children
 */
export const hanleTreeToArray = (tree: any[], childrenText = 'children') => {
  const resultArray: any[] = [];
  const loopTree = (tree: any[]) => {
    for (let item of tree) {
      resultArray.push(item);
      if (item[childrenText] && item[childrenText].length > 0) {
        loopTree(item[childrenText]);
      }
    }
    return resultArray;
  };
  loopTree(tree);
  return resultArray;
};

/**
 * 根据路由，得到当前路由下的按钮权限
 * 当前路由code（当前路由是权限页）或code+'action'
 * 在权限数组里找，找到了表示有该权限
 */
export const actionAuthority = (route: any) => {
  const loginInfo = getLoginInfo();
  let { permissionCodeList } = loginInfo;
  let code: string = route.code;
  /**权限对象 */
  let auth: ActionAuthIpo = {
    add: false,
    edit: false,
    delete: false,
    detail: false,
  };
  if (!permissionCodeList) {
    return auth;
  }
  if (route.menuType == 2) {
    //权限页面的auth是根据菜单页面来的，所有要根据权限页面找到其对应的菜单页面
    let lastIndex = code.lastIndexOf('.');
    let parentCode = code.substring(0, lastIndex);
    code = parentCode;
  }
  for (let item in auth) {
    let index = permissionCodeList.findIndex(codeItem => {
      //菜单页面
      return codeItem == code + '.' + item;
    });
    if (index > -1) {
      auth[item] = true;
    } else {
      auth[item] = false;
    }
  }
  return auth;
};
