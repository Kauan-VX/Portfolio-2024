import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { TranslateIcon } from '../../../../public/translate/translate'

const DropDownLanguage = () => {
  const router = useRouter()
  const localActive = useLocale()

  const onSelectChange = (e: string) => {
    const nextLocale = e
    router.replace(`/${nextLocale}`)
  }
  console.log(localActive)

  const isPortuguese = localActive === 'pt'

  return (
    <Dropdown>
      <DropdownTrigger className="p-2">
        <Button
          aria-label={
            isPortuguese ? 'Selecionar inglês' : 'Selecionar português'
          }
          disableAnimation
          className="bg-transparent outline-none"
          type="button"
        >
          <TranslateIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {isPortuguese ? (
          <DropdownItem
            className="flex items-center justify-center gap-2 flex-row "
            key="en"
            onClick={() => onSelectChange('en')}
          >
            Inglês
          </DropdownItem>
        ) : (
          <DropdownItem
            className="flex items-center justify-center gap-2 flex-row"
            key="pt"
            onClick={() => onSelectChange('pt')}
          >
            Português
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
}

export default DropDownLanguage
