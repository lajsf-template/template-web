/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-17 13:21:48
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-19 18:03:10
 */
import React, { useEffect, useState } from 'react';
import { Modal as AModal, Button, Form } from 'antd';
import './index.less';
import FormRender from '../form-render';

const Modal: React.FC = ({
  isShowModal,
  onShowModal,
  formData,
  onSubmit,
  modalProps,
}: any) => {
  const [form, setform] = useState({});

  const showModal = () => {
    onShowModal(true);
  };

  const handleOk = () => {
    onSubmit(form);
  };

  const handleCancel = () => {
    onShowModal(false);
  };

  // 单个输入监控
  const handleFormItemChange = (e: any, item, index) => {
    const _tempFormField = {};
    if (item.type == 'text') {
      _tempFormField[item.field] = e.target.value;
    }
  };

  useEffect(() => {
    const __tempform: any = {};
    formData.map((v: any) => {
      __tempform[v.field] = v.value;
    });
    setform({ ...__tempform });
  }, [formData]);

  return (
    <AModal
      title={`${modalProps.type}${modalProps.title}`}
      visible={isShowModal}
      onOk={handleOk}
      onCancel={handleCancel}
      width={800}
      style={{ top: 20 }}
    >
      <Form style={{ height: '400px', overflow: 'hidden', overflowY: 'auto' }}>
        {formData.length > 0 &&
          formData.map((item, index) => {
            return (
              <div className="searchItem" key={'m_' + index}>
                <Form.Item
                  label={item.label}
                  rules={[
                    {
                      required: item.required,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <FormRender
                    item={item}
                    modalProps={modalProps}
                    key={'m_sub' + index}
                    index={index}
                    onFormItemChange={handleFormItemChange}
                  />
                </Form.Item>
              </div>
            );
          })}
      </Form>
    </AModal>
  );
};

export default Modal;
