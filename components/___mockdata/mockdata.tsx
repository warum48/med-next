import * as React from 'react';
export const mockDebt = [
  {
    clinic: 'Онни',
    summ: 1500,
    cliniDebtAr: [
      {
        summ: 1000,
        date: '01.01.2023',
        description: 'Консультация педиатра',
      },
      {
        summ: 500,
        date: '01.01.2023',
        description: 'забор крови',
      },
    ],
  },
  {
    clinic: 'Чудодети',
    summ: 1000,
    cliniDebtAr: [
      {
        summ: 1000,
        date: '21.01.2023',
        description: 'Консультация невролога',
      },
    ],
  },
];

export const appointmentData = [
  {
    date: '01.01.2023',
    speciality: 'Терапевт',
    name: 'Иванов Иван Иванович',
    process: 'Общий анализ крови ',
    status: 'Оказана',
    price: '5000',
    code: 'xxxx-xx'
  },
  {
    date: '01.02.2023',
    speciality: 'Терапевт',
    name: 'Иванов Иван Иванович',
    process: 'Общий анализ крови ',
    status: 'Оказана',
    price: '150000',
    code: 'xxxx-xx'
  },
  {
    date: '01.03.2023',
    speciality: 'Терапевт',
    name: 'Иванов Иван Иванович',
    process: 'Полный анализ крови анализ',
    status: 'Оказана',
    price: '5000',
    code: 'xxxx-xx'
  },
  {
    date: '01.04.2023',
    speciality: 'Терапевт',
    name: 'Иванов Иван Иванович',
    process: 'Общий анализ крови ',
    status: 'Оказана',
    price: '5000',
    code: 'xxxx-xx'
  },
  {
    date: '01.05.2023',
    speciality: 'Терапевт',
    name: 'Иванов Иван Иванович',
    process: 'Общий анализ крови ',
    status: 'Оказана',
    price: '5000',
    code: 'xxxx-xx'
  },
];

export const userInfo = [
  {
    field: 'secondName',
    name: 'Фамилия',
    mock: 'Антонова',
    required: true,
    newValue: '',
    value: '',
  },
  { field: 'firstdName', name: 'Имя', mock: 'Анна', required: true, newValue: '', value: '' },
  {
    field: 'middleName',
    name: 'Отчество',
    mock: 'Антоновка',
    required: false,
    newValue: '',
    value: '',
  },
  {
    field: 'phone',
    name: 'Телефон',
    mock: '+71234567890',
    required: true,
    newValue: '',
    value: '',
    mask: '',
  },
  {
    field: 'email',
    name: 'Email',
    mock: 'mail@gmail.com',
    required: true,
    newValue: '',
    value: '',
    mask: '',
  },
  {
    field: 'birthday',
    name: 'Дата рождения',
    mock: '01.01.2001',
    required: true,
    newValue: '',
    value: '',
    mask: '',
  },
  {
    field: 'city',
    name: 'Город',
    mock: 'Санкт-Петербург',
    required: true,
    newValue: '',
    value: '',
    mask: '',
  },
  {
    field: 'address',
    name: 'Адрес',
    mock: 'Цветочный бульварб д.8 кв.88',
    required: true,
    newValue: '',
    value: '',
    mask: '',
    autosize: true,
  },
  { field: 'inn', name: 'ИНН', mock: '', required: false, newValue: '', value: '', mask: '' },
  { field: 'snils', name: 'Снилс', mock: '', required: false, newValue: '', value: '', mask: '' },
];

export const doctorInfo = <>Образование: 1989&ndash;1995&nbsp;гг. Военно-Медицинская Академия им. С.М. Кирова, 1999&nbsp;г. &mdash;&nbsp;Государственный Институт Усовершенствования Врачей МО&nbsp;РФ&nbsp;&mdash; защита диссертации на&nbsp;соискание степени кандидата медицинских наук, тема: &laquo;Влияние общего охлаждения на&nbsp;реологические показатели крови и&nbsp;их&nbsp;коррекция с&nbsp;помощью полиэтиленоксидов с&nbsp;молекулярной массой 400 и&nbsp;1500&raquo;, 2000&nbsp;г. &mdash;&nbsp;Российская Медицинская Академия Постдипломного Образования, специализация &laquo;Эндоскопия&raquo;, 2005&nbsp;г. &mdash;&nbsp;Российская Медицинская Академия Постдипломного Образования, профессиональная переподготовка &laquo;Организация здравоохранения и&nbsp;общественное здоровье&raquo;, 2010&nbsp;г. &mdash;&nbsp;Российская Медицинская Академия Постдипломного Образования, повышение квалификации на&nbsp;кафедре Организация здравоохранения и&nbsp;общественное здоровье.</>

export const serviceDescription =
  <>Кровь для выполнения лабораторных исследований рекомендуется сдавать утром натощак&nbsp;&mdash; между последним приемом пищи и&nbsp;взятием крови должно пройти не&nbsp;менее 8&nbsp;&mdash; 12&nbsp;часов. Вечером предшествующего дня рекомендуется необильный ужин. Желательно за&nbsp;1&nbsp;&mdash; 2&nbsp;дня до&nbsp;обследования исключить из&nbsp;рациона жирное, жареное и&nbsp;алкоголь.</>


  export const docPhotos = [
"https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1615177393579-5fc7431152c9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]