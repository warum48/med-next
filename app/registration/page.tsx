'use client';
import { CodeConfirm } from '@/components/_registration/CodeConfirm';
import { RegForm } from '@/components/_registration/RegForm';
import { RegFormMax } from '@/components/_registration/RegFormMax';
import { RegSuccess } from '@/components/_registration/RegSuccess';
import * as React from 'react';

//import { FastCommentBlock } from '../../components/FastComment/FastCommentBlock';
//import { CodeConfirm } from './CodeConfirm';
//import { RegForm } from './RegForm';
//import { RegSuccess } from './RegSuccess';

export type TRegStep = 'regForm' | 'confirmCode' | 'success';

export default function Registration() {
  const [step, setStep] = React.useState<TRegStep>('regForm');

  return (
    <>
      {step == 'regForm' && <RegFormMax setStep={setStep}/>}  
      {step == 'confirmCode' && <CodeConfirm setStep={setStep}/>}
      {step == 'success' && <RegSuccess/>}
      {/*<FastCommentBlock /> */}
    </>
  );
}
