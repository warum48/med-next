import * as React from 'react';

type TColorsArray = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];
export type TColorScheme = {
  primaryFlat: string;
  secondaryFlat: string;
  primaryArray: TColorsArray;
  secondaryArray: TColorsArray;
  sketch: any;
};

const sizeAndRadius = {
  buttonRadius:{
   // 'none': { name: 'Нет', style:'0px'},
    'sm':{ name: 'Малый', style:'4px'},
    'md':{ name: 'Средний', style:'10px'},
    'full': { name: 'Полный', style:'100px'}
  }
}

export type TDesignService = {
  sizeAndRadius: typeof sizeAndRadius;
  colorSсheme: TColorScheme;
  setColorScheme: React.Dispatch<React.SetStateAction<TColorScheme>>;
  leftMenuColored: boolean;
  setMenuColored: React.Dispatch<React.SetStateAction<boolean>>;
  backgroundNum: string;
  setBackgroundNum: React.Dispatch<React.SetStateAction<string>>;
  buttonRadius: string;
  setButtonRadius: React.Dispatch<React.SetStateAction<string>>;
};

const pinkAndGreen: TColorScheme = {
  primaryFlat: '#fb6eb5',
  secondaryFlat: '#2fb797',
  primaryArray: [
    '#eefafc',
    '#9ce5ee',
    '#7bf0ea',
    '#6defe6',
    '#30dcdf',

    '#028375',
    '#0f9d8c',
    '#0a9080',
    '#089181',
    '#059080',
  ],
  secondaryArray: [
    '#fee6f6',
    '#ED9BCF',
    '#EC7CC3',
    '#ED5DB8',
    '#F13EAF',

    '#F71FA7',
    '#FF00A1',
    '#E00890',
    '#C50E82',
    '#AD1374',
  ],
  sketch: {
    /*mainBackground: [
      {key:'bgone', name:'default', style:'linear-gradient(232deg, rgba(242,255,240,1) 0%,  #e8fdff 20% ,  #effeff 50% , #f1e8ff 100% )'},
      {key:'bgone', name:'default', style:'linear-gradient(232deg, rgba(242,255,240,1) 0%,  #e8fdff 20% ,  #effeff 50% , #f1e8ff 100% )'},
      {key:'bgone', name:'default', style:'linear-gradient(232deg, rgba(242,255,240,1) 0%,  #e8fdff 20% ,  #effeff 50% , #f1e8ff 100% )'}, 
  ]*/
    mainBackground: {
      one: {
       // key: 'one',
        name: 'Ультралайт',
        style:
          'linear-gradient(232deg, rgba(242,255,240,1) 0%,  #e8fdff 20% ,  #effeff 50% , #f1e8ff 100% )',
      },
      //'two' : {key:'two', name:'two--', style:'linear-gradient(232deg, #e0ffdb 0%,  #ddfbfe 20% ,  #e3fafb 50% , #e0d0f9 100% )'},
      two: {
       // key: 'two',
        name: 'Сочный',
        style: 'linear-gradient(232deg, #e0ffdb 0%,  #e4f7f9 20% ,  #d2f7f9 50% , #e0d0f9 100% )',
      },
    },

    homePageBackground: {
      one: {
       // key: 'one',
        name: 'Ультралайт',
        style:
          'linear-gradient(222deg, rgba(242,255,240,1) 0%,  #e8fdff 20% ,  #effeff 40% , #ffffff 80% )',
      },
      //'two' : {key:'two', name:'two--', style:'linear-gradient(232deg, #e0ffdb 0%,  #ddfbfe 20% ,  #e3fafb 50% , #e0d0f9 100% )'},
      two: {
       // key: 'two',
        name: 'Сочный',
        style: 'linear-gradient(222deg, #e0ffdb 0%,  #e4f7f9 20% ,  #d2f7f9 40% , #ffffff 80% )',
      },
    },
  },
};



//export type TColorScheme = typeof pinkAndGreen;

export const useDesign = () => {
  const [colorSсheme, setColorScheme] = React.useState<TColorScheme>(pinkAndGreen);
  const [leftMenuColored, setMenuColored] = React.useState(false);
  const [backgroundNum, setBackgroundNum] = React.useState<string>('two');
  const [buttonRadius, setButtonRadius] = React.useState('full')

  React.useEffect(() => {
    console.log('backgroundNum', backgroundNum);
  }, [backgroundNum]);

  return {
    DesignService: {
      sizeAndRadius,
      colorSсheme,
      setColorScheme,
      leftMenuColored,
      setMenuColored,
      backgroundNum,
      setBackgroundNum,
      buttonRadius, setButtonRadius
    },
  };
};
