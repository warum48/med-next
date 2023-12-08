// components/SwitchWithText/SwitchWithText.tsx

import React, { useState, ChangeEvent } from 'react';
import styles from './Switch.module.css';
import { Card_pretitle, FormItemLabel, TitleLabel } from '../TextBlocks/TextBlocks';
import { Space } from '@mantine/core';


type SwitchWithTextProps = {
  leftText?: string;
  rightText?: string;
  label?: string;
  checked: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SwitchWithText: React.FC<SwitchWithTextProps> = ({
  leftText = 'left',
  rightText = 'right',
  label = 'label',
  checked,
  handleChange
}) => {
  //const [checked, setChecked] = useState(false);
//
  //const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //  setChecked(e.target.checked);
  //};

  return (
    <>
      <FormItemLabel>
        {label}
      </FormItemLabel>
      <Space h='sm'/>
      <div className={styles.toggle_slider} id="toggler">
        <div className={styles.texts}>
          <div className={ `${styles.text} ${styles.text_left} ${ checked ? styles.selected : ''}`}>{leftText}</div>
          <div className={ `${styles.text} ${styles.text_right} ${ checked ? styles.selected : ''}`}>{rightText}</div>
        </div>

        <input
          type="checkbox"
          id="toggle"
          checked={checked}
          onChange={handleChange}
          className={'toggle togg'}
        />
        <label htmlFor="toggle" className={styles.slider} />
      </div>
    </>
  );
};

 //</>xport default SwitchWithText;

//based on https://www.tutorialspoint.com/how-to-create-a-switch-in-reactjs
