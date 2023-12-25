import React from 'react';
import styles from './GroupStretcher.module.css';
export const GridStretcher = ({children}:{children:React.ReactNode}) => {


    return (
        <div className={styles.container} style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
            {children}
        </div>
    )
}