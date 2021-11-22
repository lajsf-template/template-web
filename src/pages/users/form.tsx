/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-16 13:19:06
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-22 10:00:14
 */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import {
  Button,
  Form,
  message,
  Input,
  DatePicker,
  TimePicker,
  Select,
  Radio,
} from 'antd';

import {
  formData,
  domain,
  serviceName,
  resourceName,
  title,
} from './constants';

import styles from './index.less';

import axios from 'axios';

const baseUrl = `${domain}${serviceName}/pv/${resourceName}`;
const addUrl = `${baseUrl}/action/create`;
const editUrl = `${baseUrl}/action/update`;
const detailUrl = `${baseUrl}/action/detail`;

function UsersForm() {
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

  // 渲染dom
  const getFields = () => {
    //这是问题？
    const ary = [];
    formData.map((item, index) => {
      const __name = item.field;
      const dateConfig = {
        rules: [
          {
            type: 'object' as const,
            required: true,
            message: 'Please select time!',
          },
        ],
      };
      const rangeConfig = {
        rules: [
          {
            type: 'array' as const,
            required: true,
            message: 'Please select time!',
          },
        ],
      };
      let conponents;
      console.log('item.type---', item.type);
      switch (item.type) {
        case 'text':
          conponents = <Input />;
          break;
        case 'hidden':
          conponents = <Input />;
          break;
        case 'date':
          conponents = <DatePicker {...dateConfig} />;
          break;
        case 'daterange':
          conponents = <DatePicker.RangePicker {...rangeConfig} />;
          break;
        case 'time':
          conponents = <TimePicker {...item.options} />;
          break;
        case 'textarea':
          conponents = <Input.TextArea rows={4} />;
          break;
        case 'password':
          conponents = <Input.Password />;
          break;
        case 'select':
          conponents = (
            <Select>
              {item.options.map((v) => {
                return <Option value={v.value}>{v.label}</Option>;
              })}
            </Select>
          );
          break;
        case 'radio':
          conponents = (
            <Radio.Group>
              {item.options.map((v) => {
                return <Radio value={v.value}>{v.label}</Radio>;
              })}
            </Radio.Group>
          );
          break;
        default:
          conponents = <Input />;
      }
      ary.push(
        <Form.Item
          name={__name}
          label={item.label}
          rules={[{ required: true }]}
          key={index}
        >
          {conponents}
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
      </Form>
    </div>
  );
}

export default UsersForm;
