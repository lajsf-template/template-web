import React from 'react';
import { Button } from 'antd';
import { history } from 'umi';
import { useLogin } from '@/uses';
import './index.less';

const Login = () => {
  const { login, logout } = useLogin();

  return (
    <div>
      <Button
        style={{ marginLeft: 8 }}
        onClick={async () => {
          login({ isLogin: true });
          history.push('/demo');
          window.location.reload();
        }}
      >
        登录
      </Button>
    </div>
  );
};

export default Login;
