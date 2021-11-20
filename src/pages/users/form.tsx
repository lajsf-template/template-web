/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-16 13:19:06
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-20 18:39:43
 */
import { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import { Button, Col, Row, Form, message, Input } from 'antd';
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

function UsersForm() {
  const [data, setdata] = useState({});
  const { state } = useLocation<any>();
  const [formState, setformState] = useState<any>([]);
  const [form] = Form.useForm();

  // 页面挂载触发事件
  useEffect(() => {
    if (state?.kid) {
      initList();
    } else {
      const temp = {};
      formData.map((v) => {
        temp[v.field] = v.value;
      });
      form.setFieldsValue({ ...temp });
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
          setformState(res.data.data);
          form.setFieldsValue(res.data.data);
        }
      });
  };

  // 单个输入监控
  const handleFormItemChange = (e: any, item, index) => {
    let tempsingle = null;
    if (item.type === 'text' || item.type === 'hidden') {
      tempsingle = { [item.field]: e.target.value };
    } else {
      tempsingle = { [item.field]: e.toString() };
    }
    form.setFieldsValue(Object.assign({}, { ...formState }, { ...tempsingle }));
  };

  // 渲染dom
  const getFields = () => {
    //这是问题？
    const ary = [];
    console.log('formData--', formData);
    formData.map((item, index) => {
      const __name = item.field;
      ary.push(
        <Form.Item
          name={__name}
          label={item.label}
          rules={[{ required: true }]}
          key={index}
        >
          <Input />
        </Form.Item>,
      );
    });
    return ary;
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
  const onFinish = () => {
    const params = form.getFieldsValue(true);
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

  const onFill = () => {
    // form.setFieldsValue({
    //   name: 'Hello world!',
    //   gender: 'male',
    // });
  };
  return (
    <div className={styles.orderAdmin}>
      <div className={styles.title}>{title}</div>
      <Form
        form={form}
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        {getFields()}
        <Button type="primary" htmlType="submit">
          提交
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form>
    </div>
  );
}

export default UsersForm;
