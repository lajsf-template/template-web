import type {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
} from '@ant-design/pro-layout';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
import { Link } from 'umi';
import { useHistory } from 'react-router';
import { Tabs, Breadcrumb } from 'antd';

const { TabPane } = Tabs;

import { navMap } from './navmap';

export type BasicLayoutProps = {
  breadcrumbNameMap: Record<string, MenuDataItem>;
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
} & ProLayoutProps;

export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: Record<string, MenuDataItem>;
};

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] => {
  return menuList.map((item) => {
    return {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
  });
};

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const {
    children,
    location = {
      pathname: '/',
    },
  } = props;
  const history = useHistory();

  const initialPanes: any[] | (() => any[]) = [];

  const [panels, setpanels] = useState(initialPanes);
  const pathname = history.location.pathname;
  const [activeKey, setactiveKey] = useState<any>(pathname);

  // 切换
  const onChange = (activeKey: any) => {
    const __activeKey = activeKey;
    setactiveKey(__activeKey);
    history.push(__activeKey);
  };

  // 添加
  const add = (item: {
    title: string;
    content: string;
    key: string;
    closable: boolean;
  }) => {
    const __pathname = history.location.pathname;
    const newPanes = [...panels];

    setpanels([...newPanes, item]);
    setactiveKey(__pathname);
  };
  // 删除
  const remove = (targetKey: any) => {
    const tempAry = [...tabPageAry];
    const removeIndex = tabPageAry.indexOf(targetKey);
    const newPanes = [...panels];

    if (removeIndex > -1) {
      //如果有路由
      tempAry.splice(removeIndex, 1);
      newPanes.splice(removeIndex, 1);
    }

    setpanels([...newPanes]);
    setTabPageAry([...tempAry]);

    const ___newPanelsKey = newPanes[newPanes.length - 1].key;
    history.push(___newPanelsKey);
  };

  // 编辑
  const edit = (targetKey, action) => {
    if (panels.length > 1) {
      eval(`${action}('${targetKey}')`);
    }
  };

  const [windowheight, setwindowheight] = useState(500);

  const onWindowResize = () => {
    setwindowheight(window.innerHeight);
  };

  const [tabPageAry, setTabPageAry] = useState<any>([]);

  useEffect(() => {
    testFn();
  }, [history.location.pathname]);

  const testFn = () => {
    const __pathname: string = history.location.pathname;
    if (tabPageAry.indexOf(__pathname) === -1) {
      // 如果是新路由，则加入路由
      if (__pathname.split('/').length >= 2) {
        // 如果是子页面
        setTabPageAry([...tabPageAry, __pathname]);
        setTimeout(() => {
          add({
            title: `${__pathname}`,
            content: `${__pathname}`,
            key: __pathname,
            closable: false,
          });
        }, 500);
      } else {
        // 如果是目录，就默认加载子页面
        // history.push()
      }
    }
    setactiveKey(__pathname);
  };

  // 加载页面
  useEffect(() => {
    setwindowheight(window.innerHeight);
    window.onresize = function () {
      onWindowResize();
    };
  }, []);

  return (
    <ProLayout
      layout="mix"
      splitMenus="true"
      {...props}
      onMenuHeaderClick={() => history.push('/')}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (
          menuItemProps.isUrl ||
          !menuItemProps.path ||
          location.pathname === menuItemProps.path
        ) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      menuDataRender={menuDataRender}
    >
      <Tabs
        hideAdd
        type="editable-card"
        onChange={onChange}
        defaultActiveKey={activeKey}
        activeKey={activeKey}
        onEdit={edit}
      >
        {panels.map((pane) => (
          <TabPane
            tab={navMap[pane.key.split('/')[pane.key.split('/').length - 1]]}
            key={pane.key}
            closable={true}
            style={{ display: 'none' }}
          ></TabPane>
        ))}
      </Tabs>
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        {activeKey
          .substring(1, activeKey.length)
          .split('/')
          .map((v: any, index: any) => (
            <Breadcrumb.Item key={index}>{navMap[v]}</Breadcrumb.Item>
          ))}
      </Breadcrumb>
      <div style={{ height: windowheight - 200 }}>{children}</div>
    </ProLayout>
  );
};

export default BasicLayout;
