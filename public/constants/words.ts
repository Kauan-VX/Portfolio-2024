'use client'
interface IWord {
  text: string
  className?: string
}

export const translate = (t : any):IWord[] => {
return [
  {
    text: t('words.hello'),
    className: 'text-6xl  md:text-5xl smMax:text-5xl',
  },
  {
    text: `${t('words.i_m')}`,
    className: 'text-6xl  md:text-5xl smMax:text-5xl',
  },
  {
    text: `${t('words.first_name')}`,
    className: 'text-blue-500 dark:text-blue-500 text-6xl  md:text-5xl smMax:text-5xl',
  },
  {
    text: `${t('words.last_name')}`,
    className: 'text-blue-500 dark:text-blue-500 text-6xl  md:text-5xl smMax:text-5xl',
  },
  {
    text: `${t('words.second_last_name')}`,
    className:
      'text-blue-500 dark:text-blue-500 text-6xl  md:text-5xl smMax:text-5xl',
  },
]
}

