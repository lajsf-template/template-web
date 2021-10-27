import { useCallback, useMemo } from 'react';

interface Meaasge {
  [k: string]: any;
}
const _message: Meaasge = {};

const useListener = () => {
  /**
   * 开始监听
   * name 事件名
   * fn 回调
   */
  const on = useCallback((name, fn) => {
    if (!_message[name]) {
      _message[name] = [fn];
    } else {
      _message[name].push(fn);
    }
  }, []);

  /**
   * 发起事件
   * name 事件名
   * params 参数
   */
  const emit = useCallback(function(name: string, ...params) {
    const args = Array.prototype.slice.apply(params);
    args.shift();
    if (_message[name]) {
      for (let i = 0; i < _message[name].length; i++) {
        _message[name][i].call(_message[name][i], ...params);
      }
    }
  }, []);

  /**
   * 移除监听
   * name 事件名
   */
  const remove = useCallback((name: string) => {
    if (_message[name]) {
      _message[name] = [];
    }
  }, []);

  return useMemo(() => {
    return { on, emit, remove };
  }, [on, emit, remove]);
};

export { useListener };
