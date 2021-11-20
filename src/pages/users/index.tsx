/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-16 13:19:06
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-19 18:02:49
 */
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';

import Table from '@/components/table';
import Search from '@/components/search';
import Modal from '@/components/modal';
import { Button, Col, Row } from 'antd';

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
import { text } from '@umijs/deps/compiled/express';

const baseUrl = `${domain}${serviceName}/pv/${resourceName}`;
const addUrl = `${baseUrl}/action/create`;
const editUrl = `${baseUrl}/action/update`;
const detailUrl = `${baseUrl}/action/detail`;
const listUrl = `${baseUrl}/action/list-page`;

function Users() {
  const history = useHistory();
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>(
    'checkbox',
  );

  const [tableData, settableData] = useState([]);
  const tableRef = useRef<KeyValuePair>({});
  const [isShowModal, setisShowModal] = useState(false);
  const [modalProps, setmodalProps] = useState({
    type: '添加',
    title,
  });

  const [formState, setformState] = useState(formData);

  // 页面挂载触发事件
  useEffect(() => {
    initList();
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
    console.log('初始化列表数据');
    // 获得数据
    axios
      .post(
        listUrl,
        {
          pageNo: 1,
          pageSize: 10,
          param: {
            where: fields,
          },
        },
        {
          headers,
        },
      )
      .then((res) => {
        settableData(res.data.data.entities);
      });

    // 编辑查看按钮
    TableColumns.map((v, index) => {
      if (v.key === 'operation') {
        console.log('v.render---', v.render);
        v.render = function (text, record, index) {
          return btn.td.map((v: any) => {
            return (
              <a onClick={handleFn.bind(this, record.kid, v.text, v.fn)}>
                {v.text}
              </a>
            );
          });
        };
      } else {
        v.render = function (text) {
          return text;
        };
      }
    });
  };

  //列表搜索
  const handleSearch = (fields: any) => {
    initList(fields);
  };

  // 分发方法
  const handleFn = (kid: any, type, fn) => {
    if (kid) {
      eval('on' + fn + '(kid, type)');
    } else {
      eval('on' + fn + '()');
    }
  };

  // 编辑
  const onedit = (kid: any, type) => {
    history.push('/users/form', {
      kid,
    });
  };

  // 查看
  const ondetail = (kid: any) => {
    history.push('/users/detail', {
      kid,
    });
  };

  // 新增
  const onadd = () => {
    history.push('/users/form');
  };

  // 删除
  const onremove = () => {
    alert(
      `onremove --- ${rowSelection.selectedRowKeys.length}项：--` +
        rowSelection.selectedRowKeys.join('----'),
    );
    console.log('rowSelection-----', rowSelection);
  };

  // 提交表单【包括编辑/或新增】
  const handleSubmit = (fields) => {
    console.log('fields--222--', fields);
    // setisShowModal(false);
  };

  const onSelectChange = (selectedRowKeys) => {
    setselectedRowKeys([...selectedRowKeys]);
  };
  const [selectedRowKeys, setselectedRowKeys] = useState([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleFormData = (data) => {
    setformState([...data]);
  };

  return (
    <div className={styles.orderAdmin}>
      <Modal
        onFormData={handleFormData}
        formData={formState}
        isShowModal={isShowModal}
        onShowModal={setisShowModal}
        onSubmit={handleSubmit}
        modalProps={modalProps}
      />
      <div className={styles.title}>{title}列表</div>
      <div className={styles.center}>
        <Search formData={formState} onSearch={handleSearch} />
        <Row gutter={24}>
          {btn.toolbar.map((v, index) => (
            <Button
              onClick={handleFn.bind(this, '', v.text, v.fn)}
              key={index}
              style={{ marginRight: 10 }}
            >
              {v.text}
            </Button>
          ))}
        </Row>
        <Table
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          ref={tableRef}
          loading={false}
          columns={TableColumns}
          tableData={tableData}
          scroll={{ x: 1800, y: 800 }}
        />
      </div>
    </div>
  );
}

export default Users;
