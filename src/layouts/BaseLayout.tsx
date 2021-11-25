import type {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
} from '@ant-design/pro-layout';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
import { Link } from 'umi';
import { useHistory } from 'react-router';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

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
  const [activeKey, setactiveKey] = useState<any>(
    pathname.replace(/\//g, '-').substring(1, pathname.length),
  );
  const onChange = (activeKey: any) => {
    setactiveKey(activeKey);
    history.push('/' + activeKey.replace(/\-/g, '/'));
  };

  // 添加路由
  const add = (item: {
    title: string;
    content: string;
    key: string;
    closable: boolean;
  }) => {
    const __pathname = history.location.pathname;
    let __activeKey = __pathname
      .replace(/\//g, '-')
      .substring(1, __pathname.length);
    const newPanes = [...panels];

    newPanes.push(item);

    setpanels(newPanes);
    setactiveKey(__activeKey);
  };
  // 删除路由
  const remove = (targetKey: string) => {
    const tempAry = [...tabPageAry];
    const removeIndex = tabPageAry.indexOf(targetKey);
    const newPanes = [...panels];

    console.log('newPanes---111-', newPanes);

    console.log('tempAry---111-', tempAry);

    if (removeIndex > -1) {
      //如果有路由
      tempAry.splice(removeIndex, 1);
      newPanes.splice(removeIndex, 1);
    }
    console.log('tempAry---22-', tempAry);
    setpanels(newPanes);
    setactiveKey(newPanes[newPanes.length - 1]);
    setTabPageAry([...tempAry]);
    history.push('/' + newPanes[newPanes.length - 1].key.replace(/\-/g, '/'));
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

  useEffect(() => {
    setwindowheight(window.innerHeight);
    window.onresize = function () {
      onWindowResize();
    };
  }, []);

  const [tabPageAry, setTabPageAry] = useState([]);
  useEffect(() => {
    const __pathname = history.location.pathname;
    const __activeKey = __pathname
      .replace(/\//g, '-')
      .substring(1, __pathname.length);

    console.log('__activeKey----', __activeKey);
    if (tabPageAry.indexOf(__activeKey) === -1) {
      // 如果是新路由，则加入路由
      if (__activeKey.split('-').length >= 2) {
        // 如果是子页面
        setTabPageAry([...tabPageAry, __activeKey]);
        setTimeout(() => {
          add({
            title: `${document.title}`,
            content: `${__activeKey}`,
            key: __activeKey,
            closable: false,
          });
        }, 200);
      } else {
        // 如果是目录，就默认加载子页面
        // history.push()
        console.log('__pathname---', __pathname);
      }
    }
    setactiveKey(__activeKey);
  }, [history.location.pathname]);

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
        activeKey={activeKey}
        onEdit={edit}
      >
        {panels.map((pane) => (
          <TabPane tab={pane.title} key={pane.key} closable={true}></TabPane>
        ))}
      </Tabs>
      <div style={{ height: windowheight - 200 }}>{children}</div>
    </ProLayout>
  );
};

export default BasicLayout;
