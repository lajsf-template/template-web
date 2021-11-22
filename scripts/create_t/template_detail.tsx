/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-16 13:19:06
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-22 10:03:11
 */
import { useEffect, useRef, useState } from 'react';
import { Row, Col } from 'antd';
import {
  formData,
  domain,
  serviceName,
  resourceName,
  title,
} from './constants';

import styles from './index.less';

import { useLocation } from 'react-router';
import axios from 'axios';

const baseUrl = `${domain}${serviceName}/pv/${resourceName}`;
const detailUrl = `${baseUrl}/action/detail`;

function moduleName() {
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
  );
}

export default moduleName;
