import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useImperativeHandle,
} from 'react';
import { Table } from 'antd';
import { TablePaginationConfig, TableProps } from 'antd/lib/table';
import {
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
} from 'antd/lib/table/interface';
import { PageRequest } from '@/api/business';
import './index.less';

/** 父组件有两种刷新方式: currentPage(当前页刷新) | firstPage(第一页刷新) */
type RefreshType = 'currentPage' | 'firstPage';
/** Item数据结构 */
type ColumnItem<T> = T & { key: string; index: number; kid: string };
/** 默认分页数据结构 */
const DEFAULT_PAGE = { current: 1, pageSize: 10 };

interface TableSearchProps<T = any, P = any> extends TableProps<T> {
  /** 搜索数据 */
  searchData?: PageRequest<P>;
  /** api接口 */
  listApi?: (params?: any) => Promise<T>;
  /** 数据数组 */
  tableData?: any[];
  /** 拿到api响应数据的回调函数 */
  responseCb?: (v: []) => void;
}

/**
 * Table组件
 */
function TableSearch<T = any>(
  {
    searchData,
    listApi,
    tableData,
    pagination,
    responseCb,
    ...otherProps
  }: TableSearchProps,
  ref: React.Ref<unknown> | undefined,
) {
  /** 数据数组，用于维护页面展示的数据 */
  const [dataSource, setDataSource] = useState<ColumnItem<T>[]>([]);
  /** 加载状态 */
  const [loadingStatus, setLoadingStatus] = useState(false);
  /** 分页数据结构 */
  const [paging, setPaging] = useState<any>(
    typeof pagination === 'undefined' ? DEFAULT_PAGE : pagination,
  );
  /** 分页的数量 */
  const [total, setTotal] = useState(0);
  /** 数据的总条数 */
  const showTotal = () => {
    return `共有${total}条`;
  };

  const currentPagination = paging
    ? {
        total,
        showSizeChanger: true,
        ...paging,
        showQuickJumper: true,
        showTotal: showTotal,
      }
    : paging;

  useEffect(() => {
    if (Array.isArray(tableData)) {
      setDataSource(tableData as []);
    }
  }, [tableData]);

  const sourceMap = useMemo(() => {
    const { current, pageSize } = (paging ||
      DEFAULT_PAGE) as TablePaginationConfig;

    return dataSource.map((item, index) => {
      item.key = item.kid || index + '';
      item.index = index + 1 + ((current as number) - 1) * (pageSize as number);
      return item;
    });
  }, [dataSource, paging]);

  useImperativeHandle(ref, () => {
    return {
      /** refresh 对外暴露的刷新页面的方法 */
      refresh: (type: RefreshType = 'currentPage') => {
        refresh(type);
      },
    };
  });

  /**拉取api数据 */
  const fetchApiData = useCallback(() => {
    setLoadingStatus(true);
    const { current, pageSize } =
      (paging as TablePaginationConfig) || ({} as any);
    let params: KeyValuePair = {
      pageNo: current,
      pageSize,
      ...searchData,
    };
    let param = params.param;
    if (param) {
      for (let item in param) {
        if (param[item] === '' || param[item] === null) {
          delete param[item];
        }
      }
    }
    listApi &&
      listApi(params)
        .then(res => {
          let { count, entities } = res || ({} as any);
          /** 有响应回调函数，执行响应回调函数 */
          if (responseCb) {
            responseCb && responseCb(entities || []);
          } else {
            setDataSource(entities || []);
          }
          setLoadingStatus(false);
          setTotal(count);
        })
        .catch(() => {
          setLoadingStatus(false);
        });
  }, [searchData, paging]);

  useEffect(() => {
    fetchApiData();
  }, [fetchApiData]);

  const refresh = (type: RefreshType) => {
    if (type == 'currentPage') {
      return setPaging((old: any) => {
        return { ...old };
      });
    } else {
      return setPaging((old: any) => {
        return { ...old, ...DEFAULT_PAGE };
      });
    }
  };

  /* eslint-disable */
  /** 分页、排序、筛选变化时触发 */
  const handleTableChange = (pagination: TablePaginationConfig) => {
    setPaging(pagination);
    setTotal(pagination.total as number);
  };
  /* eslint-enable */

  return (
    <div>
      <Table
        className="table-search-component"
        {...otherProps}
        dataSource={sourceMap}
        pagination={currentPagination}
        loading={typeof listApi === 'undefined' ? false : loadingStatus}
        onChange={handleTableChange}
      />
    </div>
  );
}

export default React.forwardRef(TableSearch as React.ForwardRefRenderFunction<
  unknown,
  TableSearchProps
>);
