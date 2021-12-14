/*
 * @Description: 详情页面
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-16 13:19:06
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-24 17:21:32
 */
import { useEffect, useRef, useState } from 'react';
import { Row, Col } from 'antd';
import { formData, title, requestUrl } from '../constants';
import styles from './index.less';
import { useLocation } from 'react-router';
import axios from 'axios';

function FeedbackDetail() {
  const { state } = useLocation<{ kid: string }>();
  const [data, setdata] = useState({});

  // 页面挂载触发事件
  useEffect(() => {
    initList();
  }, []);

  const headers = {
    'Content-Type': 'application/json',
    tenantId: 'nutritiondiet',
    devType: '3',
    userId: '507997599207161856',
    token: '7e9ed620-9d1a-4b0a-aae0-b7854c21be4f',
  };

  // 初始化列表数据
  const initList = (fields = '') => {
    axios
      .get(requestUrl.detailUrl, {
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
      <div className={styles.title}>查看{title}</div>
      <div className={styles.center} style={{ minHeight: 500 }}>
        {formData.map((v, index) => {
          return (
            <Row
              key={index}
              style={{
                marginBottom: 16 + 'px',
              }}
            >
              <label
                style={{
                  width: 188,
                  marginRight: 16,
                  color: '#8c93a1',
                  fontSize: 14,
                  textAlign: 'right',
                }}
                span={2}
              >
                {v.label}:
              </label>
              {data[v.field]}
            </Row>
          );
        })}
      </div>
    </div>
  );
}

export default FeedbackDetail;
