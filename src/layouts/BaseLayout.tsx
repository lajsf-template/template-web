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

  const [title, setTitle] = useState([...document.title.split('/')]);

  // 切换
  const onChange = (activeKey: any) => {
    const __activeKey = activeKey.substring(0, activeKey.length - 2);
    setactiveKey(__activeKey);
    console.log(activeKey);
    console.log(__activeKey);
    history.push('/' + __activeKey.replace(/\-/g, '/'));
  };

  // 添加
  const add = (item: {
    title: string;
    content: string;
    key: string;
    closable: boolean;
  }) => {
    const __pathname = history.location.pathname;
    let __activeKey = document.title.replace(/\//g, '-');
    const newPanes = [...panels];

    newPanes.push(item);
    setpanels(newPanes);
    setactiveKey(__activeKey);
  };
  // 删除
  const remove = (targetKey: string) => {
    const tempAry = [...tabPageAry];
    const removeIndex = tabPageAry.indexOf(targetKey);
    const newPanes = [...panels];
    console.log('removeIndex-----', removeIndex);
    console.log('tempAry----', tempAry);
    console.log('newPanes----', newPanes);

    if (removeIndex > -1) {
      //如果有路由
      tempAry.splice(removeIndex, 1);
      newPanes.splice(removeIndex, 1);
    }
    console.log('tempAry--2222--', tempAry);
    console.log('newPanes--2222--', newPanes);

    setpanels([...newPanes]);
    setactiveKey(newPanes[newPanes.length - 1]);
    setTabPageAry([...tempAry]);
    const ___newPanelsKey = newPanes[newPanes.length - 1].key;
    history.push(
      '/' +
        ___newPanelsKey
          .substring(0, ___newPanelsKey.length - 2)
          .replace(/\-/g, '/'),
    );
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

  const [tabPageAry, setTabPageAry] = useState([]);

  useEffect(() => {
    // setTitle([...document.title.split('/')])
    testFn(document.title);
  }, [history.location.pathname]);

  const testFn = (title) => {
    const __pathname = history.location.pathname;
    const __activeKey = title.replace(/\//g, '-');

    const __title = title.replace(/\//g, '-').split('-');
    setTitle([...__title]);

    if (tabPageAry.indexOf(__activeKey) === -1) {
      // 如果是新路由，则加入路由
      if (__activeKey.split('-').length >= 2) {
        // 如果是子页面
        setTabPageAry([...tabPageAry, __activeKey]);
        setTimeout(() => {
          add({
            title: `${__title[__title.length - 1]}`,
            content: `${__activeKey}`,
            key: __activeKey,
            closable: false,
          });
        }, 200);
      } else {
        // 如果是目录，就默认加载子页面
        // history.push()
      }
    }
    setactiveKey(__activeKey);
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
        activeKey={activeKey}
        onEdit={edit}
      >
        {panels.map((pane) => (
          <TabPane
            tab={pane.title}
            key={pane.key}
            closable={true}
            style={{ display: 'none' }}
          ></TabPane>
        ))}
      </Tabs>
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>{title[title.length - 3]}</Breadcrumb.Item>
        <Breadcrumb.Item>{title[title.length - 2]}</Breadcrumb.Item>
        <Breadcrumb.Item>{title[title.length - 1]}</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ height: windowheight - 200 }}>{children}</div>
    </ProLayout>
  );
};

export default BasicLayout;
