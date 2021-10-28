import React, { useState } from 'react';
import { DatePicker, Select, Input, Button } from 'antd';
import DatePickerProps from 'antd';
import InputProps from 'antd/lib/input';
import './index.less';
const { RangePicker } = DatePicker;
const { Option } = Select;

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
    data.map(item => {
      form[item.key] = item.value;
    });
    onSearchClick(form);
  };

  /** 表单变化监听 */
  const onFormItemChange = (value: any, type: string, index: number) => {
    let formValue: any = value;
    if (type == 'input') {
      formValue = value.target.value;
    }
    data[index].value = formValue;
  };

  /** 日期区间ui */
  const renderRangePicker = (item: FormItemIpo, index: number) => {
    return (
      <RangePicker
        style={{ width: item.width }}
        allowClear={true}
        {...item.options}
        onChange={(data: any, dateString: string) => {
          onFormItemChange(dateString, item.type, index);
        }}
      />
    );
  };

  /** 日期ui */
  const renderDatePicker = (item: FormItemIpo, index: number) => {
    return (
      <DatePicker
        style={{ width: item.width }}
        allowClear={true}
        {...item.options}
        onChange={(data: any, dateString: string) => {
          onFormItemChange(dateString, item.type, index);
        }}
      />
    );
  };

  /** 下拉 */
  const renderSelect = (item: FormItemIpo, index: number) => {
    return (
      <Select
        showSearch={item.showSearch || false}
        defaultValue={item.value}
        style={{ width: item.width || 140 }}
        placeholder={item.placeholder}
        onChange={(value: any) => {
          onFormItemChange(value, item.type, index);
        }}
        filterOption={(input: any, option: any) => {
          return option
            ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            : false;
        }}
      >
        {item &&
          item.options &&
          item.options.map((option: any) => {
            return (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            );
          })}
      </Select>
    );
  };

  /** 输入框 */
  const renderInput = (item: FormItemIpo, index: number) => {
    return (
      <Input
        {...(item.props as InputProps)}
        style={{ width: item.width }}
        allowClear={true}
        defaultValue={item.value}
        placeholder={item.placeholder}
        onChange={(e: any) => {
          onFormItemChange(e, item.type, index);
        }}
      />
    );
  };

  /** 根据表单类型渲染表单ui */
  const renderFormItem = (item: FormItemIpo, index: number) => {
    let component = null;
    switch (item.type) {
      case 'daterange':
        component = renderRangePicker(item, index);
        break;
      case 'date':
        component = renderDatePicker(item, index);
        break;
      case 'select':
        component = renderSelect(item, index);
        break;
      case 'radio':
        /**暂时未用到 */
        break;
      case 'input':
        component = renderInput(item, index);
        break;
      default:
        component = renderInput(item, index);
    }
    return component;
  };

  return (
    <div className="common-searchDiv flexR">
      <div className="search-ipt-box flexR">
        {data.map((item, index) => {
          return (
            <div className="searchItem flexR" key={item.key + index}>
              <span className="label">{item.label}</span>
              {renderFormItem(item, index)}
            </div>
          );
        })}
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
