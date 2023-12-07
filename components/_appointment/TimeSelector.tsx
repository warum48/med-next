import { Button, Group, Paper, ScrollArea } from '@mantine/core';
import { profAr, timeTable } from './mockdata';
import { TextInfo } from '../TextBlocks/TextBlocks';
import classes from './TimeSelector.module.css';

export const TimeSelector = () => {
  return (
    
      <div className={classes.container} >
        {timeTable.map((item: string, index: number) => (
            <div className={classes.gridItem} key={'time' + index} >
          <Button variant="outline" key={'profAr' + index}  w='100%' size="xs" >
            {item}
          </Button>
          </div>
        ))}
      </div>
      
  );
};
