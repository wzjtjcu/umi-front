import React, { useState } from 'react';
import Input from '@/components/Input';
import { colorType } from '@/utils/home';
import style from './index.less';

const Home = () => {
  const [color, setColor] = useState('红');
  const onChange = value => {
    setColor(value);
  };

  return (
    <div className={style.container}>
      <Input
        onChange={onChange}
        value={color}
        style={style.input}
        placeholder={'支持输入红黄蓝改变文字颜色'}
      />
      <span style={{ color: colorType[color] }}>
        支持输入红黄蓝改变文字颜色
      </span>
    </div>
  );
};

export default Home;
