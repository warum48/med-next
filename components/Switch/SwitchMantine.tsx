// components/SwitchWithText/SwitchWithText.tsx

import React, { useState, ChangeEvent } from 'react';
import styles from './Switch.module.css';
import { TitleLabel } from '../TextBlocks/TextBlocks';
import { Checkbox, CheckboxProps } from '@mantine/core';


type SwitchWithTextProps = {
  leftText?: string;
  rightText?: string;
  label?: string;
  checked?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
 // form?: any;
}

export const SwitchWithTextMantine = ({
  leftText = 'left',
  rightText = 'right',
  label = 'label',
 // form, 
  ...props
  
  //checked,
  //handleChange
}:SwitchWithTextProps & CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

React.useEffect(() => {
    console.log('props, props', props)
},[props])

  return (
    <>
      <TitleLabel>
        {label}
      </TitleLabel>
      <div className={styles.toggle_slider} id={"toggler"+label}
     //  key={"chb"+label+props.checked}
       >
        <div className={styles.texts}>
          <div className={ `${styles.text} ${styles.text_left} ${ props.checked ? styles.selected : ''}`}>{leftText}</div>
          <div className={ `${styles.text} ${styles.text_right} ${ props.checked ? styles.selected : ''}`}>{rightText}</div>
        </div>

        <Checkbox
          type="checkbox"
          id={"toggle"+label}
        //  checked={checked}
        //onChange={handleChange}
          {...props}
        
          className={'toggle togg'}
          label={<label htmlFor={"toggle"+label} className={`${styles.slider} ${ props.checked? styles.checked : ''}`} />}
          
        />
        
      </div>
    </>
  );
};

 //</>xport default SwitchWithText;

//based on https://www.tutorialspoint.com/how-to-create-a-switch-in-reactjs
