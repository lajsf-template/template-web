import React, { useState } from 'react';
import { Button, Form } from 'antd';
import './index.less';

import useFormRender from '../hooks/useFormRender';

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
  onSearchClick: (v: any) => void;
  /** 额外的按钮(例：导出按钮) */
  extraBtn?: () => JSX.Element;
}

/**
 * Search组件
 */
function Search<T>({ formData, onSearchClick, extraBtn }: SearchProps<T>) {
  /** form数据 */
  const [data] = useState(() => {
    let arr = Object.keys(formData).map((key: string) => {
      return (formData as any)[key];
    });
    return arr;
  });

  /** 搜索监听 */
  const search = () => {
    let form: ObjIpo = {};
    data.map((item) => {
      form[item.key] = item.value;
    });
    onSearchClick(form);
  };

  return (
    <div className="common-searchDiv">
      <div className="search-ipt-box">
        <Form
          layout="inline"
          size="small"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          {data.map((item, index) => {
            return (
              <div className="searchItem" key={Math.random() + index}>
                <span className="label">{item.label}</span>
                {useFormRender(item, index)}
              </div>
            );
          })}
        </Form>
      </div>
      <div className="searchBtn">
        <Button type="primary" onClick={search}>
          搜索
        </Button>
        {extraBtn && extraBtn()}
      </div>
    </div>
  );
}

export default Search;
