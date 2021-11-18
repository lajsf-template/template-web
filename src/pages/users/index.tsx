/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-16 13:19:06
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-18 18:29:30
 */
import { useEffect, useRef, useState } from 'react';

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
  const initList = (sql = '') => {
    console.log('初始化列表数据');
    // 获得数据
    axios
      .post(
        listUrl,
        {
          pageNo: 1,
          pageSize: 10,
          param: {
            where: sql,
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
          return [
            <a onClick={checkDetail.bind(this, record.kid, '查看')}>查看</a>,
            <a onClick={checkDetail.bind(this, record.kid, '编辑')}>编辑</a>,
          ];
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
    console.log('fields-----', fields);
    initList(fields);
  };

  // 详情
  const checkDetail = (kid: any, type) => {
    axios
      .get(detailUrl, {
        params: { kid },
        headers,
      })
      .then((res) => {
        console.log('res.data.data---', res.data.data);
        if (res.status) {
          const formState = [];
          formData.map((v) => {
            const temp = Object.assign({}, v);
            temp.value = res.data.data[v.field];
            formState.push(temp);
          });
          setformState([...formState]);
          setmodalProps({
            type,
            title,
          });
          setisShowModal(true);
        }
      });
  };
  // 弹出编辑窗口
  const editRecord = (kid: any) => {
    alert('编辑---' + kid);

    // setmodalProps({
    //   type: '编辑',
    //   title,
    // });
    // setisShowModal(true);
  };

  // 弹出新增窗口
  const addRecord = () => {
    console.log('弹出新增窗口');
    setmodalProps({
      type: '添加',
      title,
    });
    setisShowModal(true);
  };

  // 提交表单【包括编辑/或新增】
  const handleSubmit = (fields) => {
    console.log('fields--222--', fields);
    // setisShowModal(false);
  };

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div className={styles.orderAdmin}>
      <Modal
        formData={formState}
        isShowModal={isShowModal}
        onShowModal={setisShowModal}
        onSubmit={handleSubmit}
        modalProps={modalProps}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.center}>
        <Search formData={formState} onSearch={handleSearch} />
        <Row gutter={24}>
          <Col span={24}>
            <Button onClick={addRecord}>新增</Button>
          </Col>
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
          scroll={{ x: 1300 }}
        />
      </div>
    </div>
  );
}

export default Users;
