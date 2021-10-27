import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Upload, UploadProps } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import './index.scss';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import { upload as uploadRequest } from '@/utils/upload';
import React from 'react';
import { shallowEqual } from '@/utils/toos';

interface UploaderProps extends UploadProps {}

const Uploader: React.ForwardRefRenderFunction<any, UploaderProps> = (
  props,
  ref,
) => {
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const urls = useRef<string[]>([]);
  const previousFileList = useRef<any[]>([]);
  const showAdd = (props.maxCount || 1) - fileList.length > 0;

  useEffect(() => {
    urls.current = [];
  }, [fileList]);

  useEffect(() => {
    if (previousFileList.current.length === props.fileList?.length) {
      if (
        props.fileList.every(
          (item, index) => item.url === previousFileList.current[index]?.url,
        )
      ) {
        return;
      }
    }
    if (props.fileList?.length) {
      previousFileList.current = props.fileList as [];
      setFileList(props.fileList || []);
    }
  }, [props.fileList]);

  const upload = async () => {
    if (fileList.some((item) => item.url?.includes('https'))) {
      return fileList.map((item) => item.url);
    }
    if (urls.current.length) {
      return Promise.resolve(urls.current);
    }
    let result = [];
    for (let i = 0; i < fileList.length; i++) {
      let res = await uploadRequest(true, false, fileList[i]);
      result.push(res);
    }
    urls.current = result;
    return result;
  };

  const onChange = function (e: UploadChangeParam) {
    setFileList(Array.from(e.fileList));
  };

  useImperativeHandle(ref, () => {
    return {
      upload,
    };
  });

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>点击上传</div>
    </div>
  );

  return (
    <div>
      <Upload {...props} fileList={fileList} onChange={onChange}>
        {showAdd ? uploadButton : null}
      </Upload>
    </div>
  );
};

export default React.forwardRef(Uploader);
