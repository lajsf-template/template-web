/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-17 14:02:13
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-19 11:40:58
 */
import { DatePicker, Select, Input, Button } from 'antd';
import DatePickerProps from 'antd';
import InputProps from 'antd/lib/input';
const { RangePicker } = DatePicker;
const { Option } = Select;

/** 表单变化监听 */
// const onFormItemChange = (value: any, type: string, index: number) => {
//   let formValue: any = value;
//   if (type == 'input') {
//     formValue = value.target.value;
//   }
// };

const FormRender = ({ item, onFormItemChange, modalProps, index }) => {
  /** 日期区间ui */
  const renderRangePicker = (item: FormItemIpo, index: number) => {
    return (
      <RangePicker
        style={{ width: item.width }}
        allowClear={true}
        {...item.options}
        onChange={(data: any, dateString: string) => {
          onFormItemChange(dateString, item, index);
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
          onFormItemChange(dateString, item, index);
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
          onFormItemChange(value, item, index);
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
          onFormItemChange(e, item, index);
        }}
        disabled={modalProps?.type === '查看'}
      />
    );
  };

  let component = null;
  if (item) {
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
      case 'text':
        component = renderInput(item, index);
        break;
      default:
        component = renderInput(item, index);
    }
  }
  return component;
};

export default FormRender;
