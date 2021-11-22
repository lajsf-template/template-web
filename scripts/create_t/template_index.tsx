/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-16 13:19:06
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-22 18:50:18
 */
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { Row, Button, Pagination, message, Modal } from 'antd';
import Table from '@/components/table';
import Search from '@/components/search';
import { formData, TableColumns, title, btn, requestUrl } from './constants';
import styles from './index.less';
import axios from 'axios';

function moduleName() {
  const history = useHistory();

  const [tableData, settableData] = useState([]);

  const [formState, setformState] = useState(formData);

  const [modalVisible, setmodalVisible] = useState(false);
  const [confirmLoading, setconfirmLoading] = useState(false);
  const [modalText, setmodalText] = useState('确认要删除吗？');

  const [pagination, setpagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const [searchfields, setsearchfields] = useState({});

  // 页面挂载触发事件
  useEffect(() => {
    initList(pagination);
  }, []);

  const headers = {
    'Content-Type': 'application/json',
    tenantId: 'nutritiondiet',
    devType: '3',
    userId: '507997599207161856',
    token: '7e9ed620-9d1a-4b0a-aae0-b7854c21be4f',
  };

  // 初始化列表数据
  const initList = (pagination: any, fields = {}) => {
    console.log('初始化列表数据');
    // 获得数据
    axios
      .post(
        requestUrl.listUrl,
        {
          pageNo: pagination.current,
          pageSize: pagination.pageSize,
          param: {
            where: fields,
          },
        },
        {
          headers,
        },
      )
      .then((res) => {
        console.log('res----', res);
        if (res.data.status) {
          settableData(res.data.data.entities);
          setpagination({
            ...pagination,
            total: res.data.data.total || 100,
          });
        }
      });

    // 编辑查看按钮
    TableColumns.map((v, index) => {
      if (v.key === 'operation') {
        v.render = function (text, record, index) {
          if (typeof btn !== 'undefined') {
            return btn.td.map((v: any) => {
              return (
                <a
                  onClick={handleFn.bind(this, record.kid, v.text, v.fn)}
                  key={`${record.kid}_${v.text}`}
                  style={{ marginRight: 10 }}
                >
                  {v.text}
                </a>
              );
            });
          } else {
            return null;
          }
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
    initList(pagination, fields);
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

  const onPageChange = (current, filter) => {
    initList(Object.assign({}, pagination, { current, pageSize: filter }));
  };

  // 删除
  const removeRecord = (cb) => {
    axios({
      method: 'PUT',
      url: requestUrl.removeUrl,
      data: {
        kidList: rowSelection.selectedRowKeys,
        type: 'delete',
        data: { delFlag: 1 },
      },
      headers,
    }).then((res: any) => {
      if (res.data.status) {
        setTimeout(() => {
          message.success('删除成功', 0.8);
        }, 1000);
        setTimeout(() => {
          cb();
          history.go(0);
        }, 1000);
      }
    });
  };
  const onremove = () => {
    if (rowSelection.selectedRowKeys.length === 0) {
      message.error('请先选择删除选项');
      return;
    }
    setmodalVisible(true);
  };
  // handleCancelModal
  const handleCancelModal = () => {
    setmodalVisible(false);
  };
  // handleOkModal
  const handleOkModal = () => {
    setmodalText('正在删除...');
    setconfirmLoading(true);
    removeRecord(() => {
      setmodalVisible(false);
      setconfirmLoading(false);
    });
  };
  return (
    <div className={styles.orderAdmin}>
      <div className={styles.title}>{title}列表</div>
      <div className={styles.center}>
        <Modal
          title="删除"
          visible={modalVisible}
          onOk={handleOkModal}
          confirmLoading={confirmLoading}
          onCancel={handleCancelModal}
        >
          <p>{modalText}</p>
        </Modal>
        <Search formData={formState} onSearch={handleSearch} />
        <Row gutter={24}>
          {typeof btn !== 'undefined'
            ? btn.toolbar.map((v, index) => (
                <Button
                  onClick={handleFn.bind(this, '', v.text, v.fn)}
                  key={index}
                  style={{ marginLeft: 10 }}
                  type="primary"
                >
                  {v.text}
                </Button>
              ))
            : null}
        </Row>
        <div style={{ marginTop: 10 }}></div>
        <Table
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          columns={TableColumns}
          tableData={tableData}
          pagination={false}
          scroll={{ x: 1800, y: 420 }}
        />
        <div style={{ paddingTop: 10 }}>
          <Pagination
            style={{ float: 'right' }}
            showQuickJumper
            hideOnSinglePage={false}
            defaultCurrent={pagination.current}
            current={pagination.current}
            total={pagination.total}
            pageSize={pagination.pageSize}
            onChange={onPageChange}
            showTotal={(e) => {
              return '共有' + e + '条';
            }}
          />
          <div style={{ clear: 'both' }}></div>
        </div>
      </div>
    </div>
  );
}

export default moduleName;
