export const formData = [
  {
    label: '主键ID',
    field: 'kid',
    type: 'hidden',
    value: '',
    desc: '',
    required: false,
    search: true,
    options: null,
  },
  {
    label: '登录名',
    field: 'loginName',
    type: 'text',
    value: '',
    desc: '',
    required: true,
    search: true,
    options: null,
  },
  {
    label: '密码',
    field: 'password',
    type: 'password',
    value: '',
    desc: '',
    required: true,
    search: true,
    options: null,
  },
  {
    label: '多点登陆',
    field: 'multiLoginFlag',
    type: 'select',
    value: '',
    desc: '',
    required: true,
    search: true,
    options: [
      { value: 0, label: '单点登录' },
      { value: 1, label: '多点登录' },
    ],
  },
  {
    label: '姓名',
    field: 'name',
    type: 'text',
    value: '',
    desc: '',
    required: true,
    search: true,
    options: null,
  },
  {
    label: '邮箱',
    field: 'email',
    type: 'text',
    value: '',
    desc: '',
    required: true,
    search: true,
    options: null,
  },
  {
    label: '电话',
    field: 'phone',
    type: 'text',
    value: '',
    desc: '',
    required: true,
    search: true,
    options: null,
  },
  {
    label: '用户头像',
    field: 'headIcon',
    type: 'text',
    value: '',
    desc: '',
    required: true,
    search: true,
    options: null,
  },
  {
    label: '是否可登录',
    field: 'loginFlag',
    type: 'select',
    value: '',
    desc: '',
    required: true,
    search: true,
    options: [
      { value: 0, label: '可用' },
      { value: 1, label: '禁用' },
    ],
  },
  {
    label: '备注信息',
    field: 'remarks',
    type: 'textarea',
    value: '',
    desc: '',
    required: true,
    search: true,
    options: null,
  },
  {
    label: '删除标记',
    field: 'delFlag',
    type: 'radio',
    value: '',
    desc: '',
    required: true,
    search: true,
    options: [
      { value: 0, label: '是' },
      { value: 1, label: '否' },
    ],
  },
  {
    label: '绑定钉钉用户id',
    field: 'bindDingTalkId',
    type: 'text',
    value: '',
    desc: '',
    required: true,
    search: true,
    options: null,
  },
];
export const TableColumns = [
  {
    field: 'kid',
    title: 'ID',
    hide: true,
    sort: false,
    key: 'kid',
    dataIndex: 'kid',
    templet: '',
    toolbar: '#tool-ops',
    minWidth: 140,
    fixed: 'left',
  },
  {
    field: 'loginName',
    title: '登录名',
    hide: null,
    sort: null,
    key: 'loginName',
    dataIndex: 'loginName',
    templet: '',
    toolbar: null,
    minWidth: null,
    fixed: 'left',
  },
  {
    field: 'password',
    title: '密码',
    hide: null,
    sort: null,
    key: 'password',
    dataIndex: 'password',
    templet: '',
    toolbar: null,
    minWidth: null,
    fixed: null,
  },
  {
    field: 'multiLoginFlag',
    title: '多点登陆标识 ',
    hide: null,
    sort: null,
    key: 'multiLoginFlag',
    dataIndex: 'multiLoginFlag',
    templet: '',
    toolbar: null,
    minWidth: null,
    fixed: null,
  },
  {
    field: 'name',
    title: '姓名',
    hide: null,
    sort: null,
    key: 'name',
    dataIndex: 'name',
    templet: '',
    toolbar: null,
    minWidth: null,
    fixed: null,
  },
  {
    field: 'email',
    title: '邮箱',
    hide: null,
    sort: null,
    key: 'email',
    dataIndex: 'email',
    templet: '',
    toolbar: null,
    minWidth: null,
    fixed: null,
  },
  {
    field: 'phone',
    title: '电话',
    hide: null,
    sort: null,
    key: 'phone',
    dataIndex: 'phone',
    templet: '',
    toolbar: null,
    minWidth: null,
    fixed: null,
  },
  {
    field: 'headIcon',
    title: '用户头像',
    hide: null,
    sort: null,
    key: 'headIcon',
    dataIndex: 'headIcon',
    templet: '',
    toolbar: null,
    minWidth: null,
    fixed: null,
  },
  {
    field: 'loginFlag',
    title: '是否可登录',
    hide: null,
    sort: null,
    key: 'loginFlag',
    dataIndex: 'loginFlag',
    templet: '',
    toolbar: null,
    minWidth: null,
    fixed: null,
  },
  {
    field: 'remarks',
    title: '备注信息',
    hide: null,
    sort: null,
    key: 'remarks',
    dataIndex: 'remarks',
    templet: '',
    toolbar: null,
    minWidth: null,
    fixed: null,
  },
  {
    field: 'delFlag',
    title: '删除标记',
    hide: null,
    sort: null,
    key: 'delFlag',
    dataIndex: 'delFlag',
    templet: '',
    toolbar: null,
    minWidth: null,
    fixed: null,
  },
  {
    field: 'bindDingTalkId',
    title: '绑定钉钉用户id',
    hide: null,
    sort: null,
    key: 'bindDingTalkId',
    dataIndex: 'bindDingTalkId',
    templet: '',
    toolbar: null,
    minWidth: null,
    fixed: null,
  },
  {
    field: 'createDate',
    title: '创建时间',
    hide: null,
    sort: null,
    key: 'createDate',
    dataIndex: 'createDate',
    templet: '',
    toolbar: null,
    minWidth: null,
    fixed: null,
  },
  {
    field: 'createUserId',
    title: '创建人',
    hide: null,
    sort: null,
    key: 'createUserId',
    dataIndex: 'createUserId',
    templet: null,
    toolbar: null,
    minWidth: null,
    fixed: null,
  },
  {
    field: null,
    title: '操作',
    hide: null,
    sort: null,
    key: 'operation',
    dataIndex: 'operation',
    templet: null,
    toolbar: '#tool-ops',
    minWidth: 140,
    fixed: 'right',
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
export const title = '袁平';
export const domain = 'https://api-dev.yryz.com/gateway';
export const serviceName = '/platform-support/v1.0';
export const resourceName = 'manager-accounts';
