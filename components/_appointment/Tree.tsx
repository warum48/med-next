import * as React from 'react';
import classes from './Tree.module.css';
import { IconCheck, IconCircleChevronRight } from '@tabler/icons-react';
import { Box, Group } from '@mantine/core';
import { TextInfo, TitleLabel } from '../TextBlocks/TextBlocks';

interface TreeItemProps {
  xmembers: any[];
  name: string;
  nextStep: () => void;
}

const TreeItem: React.FC<TreeItemProps> = ({ xmembers, name, nextStep }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Box onClick={xmembers.length > 0 ? toggleExpand : nextStep} my={4} style={{ cursor:
         //xmembers.length > 0 ? 'pointer' : 'default' 
         'pointer'
         }} className={classes.item}>
        <Group align="center" gap="xs" wrap='nowrap' >
          {xmembers.length > 0 ? (
            <IconCircleChevronRight
              style={{
                transform: `rotate(${isExpanded ? '90deg' : '0deg'})`,
                transition: 'all 0.3s ease-in-out',
              }}
            />
          ): <IconCheck/>}
          <TitleLabel>{name}</TitleLabel>
          {xmembers.length > 0 && <TextInfo>({xmembers.length})</TextInfo>}
        </Group>
      </Box>
      <div className={isExpanded ? classes.expanded : classes.collapsed}>
        {xmembers.map((item, index) => (
          <Box ml={36} key={'item-tree'+index}>
            <TreeItem key={index} xmembers={item.xmembers} name={item.name} nextStep={nextStep}/>
          </Box>
        ))}
      </div>
    </div>
  );
};

export const Tree: React.FC<{ data: any[], nextStep: () => void }> = ({ data, nextStep }) => {
  return (
    <div>
      {data.map((item, index) => (
        <TreeItem key={index} xmembers={item.xmembers} name={item.name} nextStep={nextStep}/>
      ))}
    </div>
  );
};

/*

*/
