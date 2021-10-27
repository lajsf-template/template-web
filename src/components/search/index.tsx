import React, { useState } from 'react';
import {
  DatePicker,
  Select,
  Input,
  Button,
  InputProps,
  DatePickerProps,
} from 'antd';
import './index.less';
const { RangePicker } = DatePicker;
const { Option } = Select;

export interface FormItemIpo {
  /**表单类型daterange（日期区间）date（日期）select radio input */
  type: string;
  /**表单标签文字说明 */
  label?: string;
  /**表单placeholder */
  placeholder?: string;
  /**表单传入服务端的字段名称 */
  key: string;
  /**表单宽度 */
  width?: number;
  /**字段对应的值 */
  value?: any;
  /**是否带搜索功能 */
  showSearch?: boolean;
  /**额外数据：例如下拉的配置项 、日期的format*/
  options?: any;
  props?: InputProps | DatePickerProps;
}
interface ObjIpo {
  [k: string]: any;
}
interface SearchFormProps<T = {}> {
  formData: { [k in keyof T]: FormItemIpo };
  clickSearch: (v: any) => void;
  /**额外的按钮 */
  extraBtn?: () => JSX.Element;
}
/**搜索组件
 * formData：搜索的数据
 * clickSearch：点击搜索触发的事件
 */
function SearchForm<T>({
  formData,
  clickSearch,
  extraBtn,
}: SearchFormProps<T>) {
  /**obj-arr */
  const toArr = (obj: any) => {
    let arr = Object.keys(obj).map((key) => {
      return obj[key];
    });
    return arr;
  };
  /**form数据-arr */
  const [data] = useState(() => {
    return toArr(formData);
  });

  /**搜索监听 */
  const search = () => {
    let form: ObjIpo = {};
    data.map((item) => {
      form[item.key] = item.value;
    });
    clickSearch(form);
  };
  /**表单变化监听 */
  const onFormItemChange = (value: any, type: string, index: number) => {
    let formValue: any = value;
    if (type == 'input') {
      formValue = value.target.value;
    }
    data[index].value = formValue;
  };

  /**日期区间ui */
  const renderRangePicker = (item: FormItemIpo, index: number) => {
    return (
      <RangePicker
        style={{ width: item.width }}
        allowClear={true}
        {...item.options}
        onChange={(data, dateString) => {
          onFormItemChange(dateString, item.type, index);
        }}
      />
    );
  };
  /**日期ui */
  const renderDatePicker = (item: FormItemIpo, index: number) => {
    return (
      <DatePicker
        style={{ width: item.width }}
        allowClear={true}
        {...item.options}
        onChange={(data, dateString) => {
          onFormItemChange(dateString, item.type, index);
        }}
      />
    );
  };
  /**下拉 */
  const renderSelect = (item: FormItemIpo, index: number) => {
    return (
      <Select
        showSearch={item.showSearch || false}
        defaultValue={item.value}
        style={{ width: item.width || 140 }}
        placeholder={item.placeholder}
        onChange={(value) => {
          onFormItemChange(value, item.type, index);
        }}
        filterOption={(input, option) => {
          return option
            ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            : false;
        }}
      >
        {item.options?.map((option: any) => {
          return (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          );
        })}
      </Select>
    );
  };
  /**输入框 */
  const renderInput = (item: FormItemIpo, index: number) => {
    return (
      <Input
        {...(item.props as InputProps)}
        style={{ width: item.width }}
        allowClear={true}
        defaultValue={item.value}
        placeholder={item.placeholder}
        onChange={(e) => {
          onFormItemChange(e, item.type, index);
        }}
      />
    );
  };
  /**根据表单类型渲染表单ui */
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

export default SearchForm;
