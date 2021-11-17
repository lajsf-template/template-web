import React, { useRef, useState } from 'react';
import Uploader from '@/components/Uploader';
import { Button } from 'antd';
import styles from './index.less';

const Demo = () => {
  const uploader = useRef<{
    upload: () => Promise<string[]>;
  }>();
  const [data, setData] = useState<any>({});

  return (
    <div className={styles.main}>
      <div className={styles.title}>选择图片</div>
      <Uploader
        listType="picture-card"
        ref={uploader}
        maxCount={1}
        accept="image/gif, image/jpeg"
        multiple={false}
        fileList={
          data.storeImgs
            ? [
                {
                  uid: '',
                  name: '',
                  url: data.storeImgs,
                },
              ]
            : []
        }
      ></Uploader>
      <Button
        style={{ marginLeft: 8 }}
        onClick={async () => {
          const urls = await uploader.current?.upload?.();
          console.log('urls', urls);
        }}
      >
        保存
      </Button>
    </div>
  );
};

export default Demo;
