export const formData = [
  {
    label: '主键ID',
    field: 'kid',
    type: 'hidden',
    value: '',
    desc: '',
    required: false,
    search: false,
  },
  {
    label: '内容',
    field: 'content',
    type: 'text',
    value: '',
    desc: '',
    required: true,
    search: true,
  },
  {
    label: '反馈图片，最多6张',
    field: 'image',
    type: 'text',
    value: '',
    desc: '',
    required: true,
    search: false,
  },
];
export const TableColumns = [
  { dataIndex: 'kid', key: 'kid', title: 'ID', hide: true, sort: false },
  { title: '内容', dataIndex: 'content', key: 'content' },
  { title: '反馈图片，最多6张', dataIndex: 'image', key: 'image' },
  { dataIndex: 'createDate', title: '创建时间', key: 'createDate' },
  {
    dataIndex: 'createUserId',
    title: '创建人',
    key: 'createUserId',
    render:
      "function (d) {return fieldFormat.fmtUser(d.createUserId,'userNickName');}",
  },
  {
    title: '操作',
    key: 'operation',
    toolbar: '#tool-ops',
    fixed: 'right',
    width: 150,
  },
];
export const btn = {
  toolbar: [
    { text: '添加', fn: 'add' },
    { text: '删除', fn: 'remove' },
  ],
  td: [
    { text: '查看', fn: 'detail' },
    { text: '编辑', fn: 'edit' },
  ],
};
export const title = '用户';
export const domain = 'https://api-dev.yryz.com/gateway';
export const serviceName = '/yangshan-business/v1.0';
export const resourceName = 'feedback-infos';
export const argv = 'sysManager/users';
export const requestUrl = {
  addUrl:
    'https://api-dev.yryz.com/gateway/yangshan-business/v1.0/pv/feedback-infos/action/create',
  editUrl:
    'https://api-dev.yryz.com/gateway/yangshan-business/v1.0/pv/feedback-infos/action/update',
  detailUrl:
    'https://api-dev.yryz.com/gateway/yangshan-business/v1.0/pv/feedback-infos/action/detail',
  listUrl:
    'https://api-dev.yryz.com/gateway/yangshan-business/v1.0/pv/feedback-infos/action/list-page',
  removeUrl:
    'https://api-dev.yryz.com/gateway/yangshan-business/v1.0/pv/feedback-infos/action/batch-update',
};
