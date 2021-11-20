/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-16 13:19:06
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-20 11:28:14
 */
import { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import { Button, Col, Row, Form, message } from 'antd';
import FormRender from '@/components/form-render';

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

import axios from 'axios';

const baseUrl = `${domain}${serviceName}/pv/${resourceName}`;
const addUrl = `${baseUrl}/action/create`;
const editUrl = `${baseUrl}/action/update`;
const detailUrl = `${baseUrl}/action/detail`;
const listUrl = `${baseUrl}/action/list-page`;

function moduleName() {
  const [data, setdata] = useState({});
  const { state } = useLocation<any>();
  const [formState, setformState] = useState<any>([]);
  // 页面挂载触发事件
  useEffect(() => {
    if (state?.kid) {
      initList();
    } else {
      setformState([...formData]);
    }
  }, []);

  const headers = {
    'Content-Type': 'application/json',
    tenantId: 'platform',
    devType: '3',
    userId: '507997599207161856',
    token: '7e9ed620-9d1a-4b0a-aae0-b7854c21be4f',
  };

  // 得到详情

  // 初始化列表数据
  const initList = (fields = '') => {
    axios
      .get(detailUrl, {
        params: { kid: state.kid },
        headers,
      })
      .then((res: any) => {
        if (res.status) {
          console.log('res.data.data---', res.data.data);
          const tempAry = [];
          formData.map((v) => {
            const temp = Object.assign({}, { ...v });
            temp['value'] = res.data.data[v['field']];
            tempAry.push(temp);
          });
          setformState([...tempAry]);
        }
      });
  };

  // 单个输入监控
  const handleFormItemChange = (e: any, item, index) => {
    const tempAry = [...formState];
    tempAry.map((v, i) => {
      if (i === index) {
        if (item.type === 'text' || item.type === 'hidden') {
          tempAry[index].value = e.target.value;
        } else {
          tempAry[index].value = e.toString();
        }
      }
    });
    setformState([...tempAry]);
  };

  // 渲染dom
  const getFields = () => {
    const children = [];
    formState.length > 0 &&
      formState.map((item, index) => {
        item.search &&
          children.push(
            <Form.Item
              label={item.label}
              name={item.label}
              style={{ marginBottom: 10 }}
            >
              <FormRender
                item={item}
                key={'s_sub' + index}
                index={index}
                onFormItemChange={handleFormItemChange}
              />
            </Form.Item>,
          );
      });
    return children;
  };

  // 表单请求
  const doneWithForm = (reqType, url, param, cb) => {
    axios[reqType](
      url,
      {
        param,
      },
      {
        headers,
      },
    ).then((res: any) => {
      cb(res);
    });
  };

  // 提交表单【包括编辑/或新增】
  const loadWithResponse = (info: any) => {
    if (info.data.status) {
      message.success(info.data.msg, 2.5);
    } else {
      message.error(info.data.msg, 2.5);
    }
  };
  const handleSubmit = () => {
    const params = {};
    formState.map((v) => {
      params[v.field] = v.value;
    });
    message.loading('数据请求中...', 2.5).then(() => {
      if (state?.kid) {
        // 编辑
        doneWithForm('put', editUrl, params, loadWithResponse);
      } else {
        // 添加
        doneWithForm('post', addUrl, params, loadWithResponse);
      }
    });
  };

  return (
    <div className={styles.orderAdmin}>
      <div className={styles.title}>{title}</div>
      <Form className="ant-advanced-search-form">
        {getFields()}
        {getFields().length > 0 && (
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            提交
          </Button>
        )}
      </Form>
    </div>
  );
}

export default moduleName;
