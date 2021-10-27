import React from 'react';
import { IRouteComponentProps } from 'umi';
import BreadCrumbComponent from '@/components/breadcrumb';
import classNames from 'classnames';
import './index.less';

export default function Layout(props: IRouteComponentProps) {
  return (
    <React.Fragment>
      <BreadCrumbComponent />
      <div className={classNames('main-inner')}>{props.children}</div>
    </React.Fragment>
  );
}
