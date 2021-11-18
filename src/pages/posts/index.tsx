/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-16 13:19:06
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-18 11:57:05
 */
import { useEffect, useRef, useState } from 'react';

import Table from '@/components/table';
import Search from '@/components/search';
import Modal from '@/components/modal';
import { Button } from 'antd';

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

const baseUrl = `${domain}${serviceName}/pv/${resourceName}`;
const addUrl = `${baseUrl}/action/create`;
const editUrl = `${baseUrl}/action/update`;
const detailUrl = `${baseUrl}/action/detail`;
const listUrl = `${baseUrl}/action/list-page`;

function Users() {
  const [tableData, settableData] = useState([]);
  const tableRef = useRef<KeyValuePair>({});
  const [isShowModal, setisShowModal] = useState(false);
  const [modalProps, setmodalProps] = useState({
    type: '添加',
    title,
  });

  const test = (v) => {
    return <a onClick={editRecord.bind(this, v)}>编辑</a>;
  };

  // 页面挂载触发事件
  useEffect(() => {
    initList();
  }, []);

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
            sql,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            tenantId: 'platform',
            devType: '3',
            userId: '507997599207161856',
            token: '7e9ed620-9d1a-4b0a-aae0-b7854c21be4f',
          },
        },
      )
      .then((res) => {
        settableData(res.data.data.entities);
      });
    // 整理配置
    TableColumns.map((v) => {
      if (v.render) {
        v.render = function (item) {
          return <a onClick={editRecord.bind(this, item)}>123</a>;
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
  const singleList = () => {
    console.log('单条记录详情');
  };
  // 弹出编辑窗口
  const editRecord = (v) => {
    console.log('弹出编辑窗口', v);
    setmodalProps({
      type: '编辑',
      title,
    });
    setisShowModal(true);
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
    console.log('fields-----', fields);
    setisShowModal(false);
  };

  return (
    <div className={styles.orderAdmin}>
      <Modal
        formData={formData}
        isShowModal={isShowModal}
        onShowModal={setisShowModal}
        onSubmit={handleSubmit}
        modalProps={modalProps}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.center}>
        <Search formData={formData} onSearch={handleSearch} />
        <Button onClick={addRecord}>新增</Button>
        <Table
          ref={tableRef}
          loading={false}
          columns={TableColumns}
          tableData={tableData}
          scroll={{ x: '100%' }}
        />
      </div>
    </div>
  );
}

export default Users;
