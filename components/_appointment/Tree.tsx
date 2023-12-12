import * as React from 'react';

interface TreeItemProps {
  xmembers: any[];
  name: string;
}

const TreeItem: React.FC<TreeItemProps> = ({ xmembers, name }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div onClick={toggleExpand}>
        {xmembers.length > 0 && <span>{isExpanded ? '-' : '+'}</span>}
        <span>{name}</span>
      </div>
      {isExpanded &&
        xmembers.map((item, index) => (
          <TreeItem key={index} xmembers={item.xmembers} name={item.name}/>
        ))}
    </div>
  );
};

const Tree: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <TreeItem key={index} xmembers={item.xmembers} name={item.name}/>
      ))}
    </div>
  );
};