/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-17 13:21:48
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-17 18:10:13
 */
import React, { useEffect, useState } from 'react';
import { Modal as AModal, Button, Form } from 'antd';
import './index.less';
import useFormRender from '../hooks/useFormRender';

const Modal: React.FC = ({
  isShowModal,
  onShowModal,
  formData,
  onSubmit,
  modalProps,
}: any) => {
  const showModal = () => {
    onShowModal(true);
  };

  const handleOk = () => {
    onShowModal(false);
    onSubmit();
  };

  const handleCancel = () => {
    onShowModal(false);
  };

  return (
    <AModal
      title={`${modalProps.type}${modalProps.title}`}
      visible={isShowModal}
      onOk={handleOk}
      onCancel={handleCancel}
      width={800}
      style={{ top: 20 }}
    >
      <Form
        layout="vertical"
        style={{ height: '400px', overflow: 'hidden', overflowY: 'auto' }}
        size="small"
      >
        {formData.map((item, index) => {
          return (
            <div key={Math.random() + index} style={{ marginTop: '10px' }}>
              <span className="label">{item.label}</span>
              {useFormRender(item, index)}
            </div>
          );
        })}
      </Form>
    </AModal>
  );
};

export default Modal;
