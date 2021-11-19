import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { useLocation, history } from 'umi';
import { getLoginInfo } from '@/uses';
import { hanleTreeToArray } from '@/utils';
import './index.less';

/**
 * 面包屑组件
 */
function BreadCrumbComponent(props: any) {
  let { pathname } = useLocation();
  const { routes } = getLoginInfo();
  const [breads, setBreads] = useState([]);
  if (!routes) {
    return null;
  }

  useEffect(() => {
    /** 一维路由数据，通过pathname，找到code */
    const routesArray = hanleTreeToArray(routes, 'routes');
    let route = routesArray.find((item) => {
      let index = item.path.indexOf('/:');
      if (index == -1) {
        return item.path == pathname;
      } else {
        if (item.path.substring(0, index) == pathname.substring(0, index)) {
          return item;
        }
      }
    });
    if (!route) {
      setBreads([]);
      return;
    }
    if (route.menuType != 2) {
      setBreads([]);
      return;
    }

    /** 当前code */
    let { code } = route;
    let codeArr = code.split('.');
    let breadsArr: any = [];
    codeArr.reduce((pre: string, code: string, index: number) => {
      let bread = routesArray.find((item) => {
        if (item.code == pre) {
          return item;
        }
      });
      breadsArr.push(bread);
      return pre + '.' + code;
    });
    breadsArr.push(route);
    setBreads(breadsArr);
    console.log('breadsArr----', breadsArr);
  }, [pathname]);

  return (
    <div className="bread-component">
      <Breadcrumb>
        {breads.map((item: any, index) => {
          return (
            <Breadcrumb.Item key={item.code + index}>
              {breads.length - 2 == index ? (
                <a
                  onClick={() => {
                    history.push(item.path);
                  }}
                >
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumbComponent;
