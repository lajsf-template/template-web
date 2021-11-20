/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-16 13:19:06
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-19 16:44:42
 */
import { useEffect, useRef, useState } from 'react';

import {
  formData,
  TableColumns,
  domain,
  serviceName,
  resourceName,
  title,
  btn,
} from './constants';

import styles from './index.less';
import Breadcrumb from '@/components/breadcrumb';
import { Fragment } from 'react';
import { Button, Col, Row } from 'antd';

import { useHistory, useLocation } from 'react-router';
import axios from 'axios';

const baseUrl = `${domain}${serviceName}/pv/${resourceName}`;
const addUrl = `${baseUrl}/action/create`;
const editUrl = `${baseUrl}/action/update`;
const detailUrl = `${baseUrl}/action/detail`;
const listUrl = `${baseUrl}/action/list-page`;

function UsersDetail() {
  const { state } = useLocation<{ kid: string }>();
  const [data, setdata] = useState({});

  // 页面挂载触发事件
  useEffect(() => {
    initList();
  }, []);

  const headers = {
    'Content-Type': 'application/json',
    tenantId: 'platform',
    devType: '3',
    userId: '507997599207161856',
    token: '7e9ed620-9d1a-4b0a-aae0-b7854c21be4f',
  };
  // 初始化列表数据
  const initList = (fields = '') => {
    axios
      .get(detailUrl, {
        params: { kid: state.kid },
        headers,
      })
      .then((res: any) => {
        if (res.status) {
          setdata({ ...res.data.data });
        }
      });
  };

  return (
    <Fragment>
      <div className={styles.orderAdmin}>
        <div className={styles.title}>{title}详情</div>
        <div className={styles.center}>
          {formData.map((v, index) => {
            return (
              <Row
                key={index}
                style={{
                  marginBottom: 16 + 'px',
                }}
              >
                <Col
                  style={{
                    width: 168,
                    marginRight: 16,
                    color: '#8c93a1',
                    fontSize: 14,
                    textAlign: 'right',
                  }}
                  span={2}
                >
                  {v.label}:
                </Col>
                {data[v.field]}
              </Row>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default UsersDetail;
