import React, { Fragment, useEffect, useRef, useState } from 'react';
import {
  Button,
  Space,
} from 'antd';
import { useHistory } from 'umi';
import classnames from 'classnames';
import Table from '@/components/table';
import Search from '@/components/search';
import {
  formDataOrder, mealsType, expressType, bootstrapStatus,
  deliveryStatus, obj
 } from './constants';
import styles from './index.less';
import business, {
  PageRequest,
  PostSaleAdminQueryRequest,
  FoodOrderStoreListVO,
} from '@/api/business';

const Demo = () => {
  const tableRef = useRef<KeyValuePair>({});
  const [searchData, setSearchData] = useState<
    PageRequest<PostSaleAdminQueryRequest>
  >({ param: {} });

  //列表搜索
  const clickSearch = (data: any) => {};
  const history = useHistory();

  const columns = [
    {
      title: '订单号',
      dataIndex: 'orderNo',
      width: 100,
      fixed: 'left',
    },
    {
      title: '下单人',
      dataIndex: 'userName',
      width: 100,
    },
    {
      title: '手机号',
      dataIndex: 'userPhone',
      width: 100,
    },
    {
      title: '支付时间',
      dataIndex: 'payFinishTime',
      width: 100,
    },
    {
      title: '订餐时间类型',
      dataIndex: 'mealsType' /** 3.午餐 5.晚餐 */,
      width: 150,
      render: (value: any, data: FoodOrderStoreListVO) => {
        return (
          <Space size="middle">
            {mealsType.find((item) => item.value === value) ?.label}
          </Space>
        );
      },
    },
    {
      title: '取/送餐时间',
      dataIndex:
        'takeTimeSectionStart' /** 取货时间区间  takeTimeSectionStart  takeTimeSectionEnd*/,
      width: 150,
      render: (value: any, data: FoodOrderStoreListVO) => {
        const start = value && value.slice(5).slice(0, -3).split('-').join('/');
        const end =
          data.takeTimeSectionEnd &&
          data.takeTimeSectionEnd.split(' ')[1].slice(0, -3);
        return start + '-' + end;
      },
    },
    {
      title: '总价',
      dataIndex: 'totalPrice',
      width: 100,
      render: (value: any) => {
        return '¥' + value;
      },
    },
    {
      title: '配送费',
      dataIndex: 'expressAmount',
      width: 100,
      render: (value: any) => {
        return '¥' + value;
      },
    },
    {
      title: '优惠',
      dataIndex: 'platCouponAmount',
      width: 100,
      render: (value: any) => {
        return '¥' + value;
      },
    },
    {
      title: '实付',
      dataIndex: 'payAmount',
      width: 100,
      render: (value: any) => {
        return '¥' + value;
      },
    },
    {
      title: '订单类型',
      dataIndex: 'expressType',
      width: 100,
      render: (value: any) => {
        return (
          <Space size="middle">
            {expressType.find((item) => item.value === value) ?.label}
          </Space>
        );
      },
    },
    {
      title: '订单状态',
      dataIndex: 'orderStatus',
      width: 100,
      render: (value: any, data: FoodOrderStoreListVO) => {
        const orderStatus =
          data.expressType === 0 ? bootstrapStatus : deliveryStatus;
        const statusColorList = [
          '',
          '',
          styles.status2,
          styles.status3,
          styles.status4,
          '',
        ];
        const style = statusColorList[value];
        return (
          <div className={styles.statusColor}>
            <span className={styles.status + ' ' + style}></span>
            {orderStatus.find((item) => item.value === value) ?.label}
          </div>
        );
      },
    },
    {
      title: '配送状态',
      dataIndex: 'meituanDeliveryStatus',
      width: 100,
      render: (value: any) => {
        return (
          <Button style={{ marginLeft: 8 }} onClick={() => {
            history.push('/demo/demo-3')
          }}>查看</Button>
        );
      },
    },
    
  ];

  const renderExtraBtn = () => {
    return (
      <Fragment>
        <Button style={{ marginLeft: 8 }} onClick={()=>{
        }}>导出</Button>
      </Fragment>
    );
  };

  
  return (
    <div className={styles.orderAdmin}>
      <div className={styles.title}>订单管理</div>
      <div className={styles.center}>
        <Search
          formData={formDataOrder}
          clickSearch={clickSearch}
          extraBtn={renderExtraBtn}
        />
        <Table
          ref={tableRef}
          loading={false}
          // listApi={business.foodOrders.storeListPage}
          searchData={searchData}
          responseCb={(data: FoodOrderStoreListVO[]) => {
            // onHandleData(data);
          }}
          columns={columns}
          tableData={obj}
          scroll={{ x: '100%' }}
        />
      </div>
    </div>
  );
};

export default Demo;
