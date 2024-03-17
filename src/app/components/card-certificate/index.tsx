import Image from 'next/image'
import { UdemyIcon } from '../icons/certificate'

export interface ICertificate {
  platform: 'Udemy' | 'RocketSeat' | 'Alura'
  title: string
}

type PlatformIcons = {
  [key: string]: JSX.Element
}

export default function CardCertificate({ platform, title }: ICertificate) {
  const platformIcons: PlatformIcons = {
    Udemy: <UdemyIcon/>,
  }

  const platformIcon =
    platform in platformIcons ? platformIcons[platform] : null
  return (
    <div className="relative w-[30rem] dark:bg-dark-background-transparent bg-light-background-transparent  shadow-3xl p-3 rounded-3xl ">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <span className="flex items-center justify-center gap-4 dark:text-dark-text text-light-text dark:bg-dark-background  bg-light-background-transparent shadow-3xl rounded-2xl p-2">
          {platformIcon}
          {platform}
        </span>
        <span className="flex items-center">
          <Image
            src={'/certificate/certificate-icon.png'}
            alt="certificate"
            width={36}
            height={36}
          />
        </span>
      </div>
      <div className="my-4"></div>
      <header>
        <h1 className="font-semibold text-xl">{title}</h1>
      </header>
    </div>
  )
}
