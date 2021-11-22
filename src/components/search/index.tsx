import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './index.less';

import FormRender from '../form-render';
import { keyword } from '@umijs/deps/compiled/chalk';

export interface FormItemIpo {
  /** 表单类型: daterange（日期区间）| date（日期）| select(选择) | input(输入框) */
  type: string;
  /** 表单标签文字说明 */
  label?: string;
  /** 表单placeholder */
  placeholder?: string;
  /** 表单传入服务端的字段名称 */
  key: string;
  /** 表单宽度 */
  width?: number;
  /** 字段对应的值 */
  value?: any;
  /** 是否带搜索功能 */
  showSearch?: boolean;
  /** 额外数据：例如下拉的配置项 、日期的format */
  options?: any;
  /** other */
  props?: InputProps | DatePickerProps;
}
interface ObjIpo {
  [k: string]: any;
}
interface SearchProps<T = {}> {
  /** 表单数据结构 */
  formData: { [k in keyof T]: FormItemIpo };
  /** 点击搜索回调 */
  onSearch: (v: any) => void;
  /** 额外的按钮(例：导出按钮) */
  extraBtn?: () => JSX.Element;
}

/**
 * Search组件
 */
function Search<T>({ formData, onSearch, extraBtn }: SearchProps<T>) {
  /** form数据 */
  const [data] = useState(() => {
    let arr = Object.keys(formData).map((key: string) => {
      return (formData as any)[key];
    });
    return arr;
  });

  const [form, setform] = useState({});

  /** 搜索 */
  const search = () => {
    onSearch(form);
  };

  // 单个输入监控
  const handleFormItemChange = (e: any, item, index) => {
    const temp: any = Object.assign({}, { ...form });
    if (item.type == 'text' || item.type == 'hidden') {
      console.log('e---->', e.target.value);
      temp[item.field] = e.target.value;
    } else {
      temp[item.field] = e.toString();
    }
    setform({ ...temp });
  };

  const [expand, setExpand] = useState(false);

  const getFields = () => {
    const count = expand ? 10 : 6;
    const children = [];
    formData.length > 0 &&
      formData.map((item, index) => {
        item.search &&
          children.push(
            <Form.Item
              label={item.label}
              name={item.label}
              style={{ marginBottom: 10 }}
              key={index}
            >
              <FormRender item={item} onFormItemChange={handleFormItemChange} />
            </Form.Item>,
          );
      });
    return children;
  };

  return (
    <div className="common-searchDiv">
      <div className="search-ipt-box">
        <Form className="ant-advanced-search-form" layout={'inline'}>
          {getFields()}
          {getFields().length > 0 && (
            <Button type="primary" htmlType="submit" onClick={search}>
              搜索
            </Button>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Search;
