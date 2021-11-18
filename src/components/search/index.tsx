import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './index.less';

import FormRender from '../form-render/FormRender';

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

  const form: any = {};

  /** 搜索 */
  const search = () => {
    onSearch(form);
  };

  // 单个输入监控
  const handleFormItemChange = (e: any, item, index) => {
    if (item.type == 'text') {
      form[item.field] = e.target.value;
    }
  };

  const [expand, setExpand] = useState(false);

  const getFields = () => {
    const count = expand ? 10 : 6;
    const children = [];
    formData.length > 0 &&
      formData.map((item, index) => {
        console.log(!!!item.search);
        item.search &&
          children.push(
            <Col span={8} key={index}>
              <Form.Item label={item.label} name={item.label}>
                <FormRender
                  item={item}
                  key={index}
                  index={index}
                  onFormItemChange={handleFormItemChange}
                />
              </Form.Item>
            </Col>,
          );
      });
    return children;
  };

  return (
    <div className="common-searchDiv">
      <div className="search-ipt-box">
        <Form className="ant-advanced-search-form">
          <Row gutter={24}>{getFields()}</Row>
          {getFields().length > 0 && (
            <Row>
              <Col span={24} style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit" onClick={search}>
                  搜索
                </Button>
              </Col>
            </Row>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Search;
