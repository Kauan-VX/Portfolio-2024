import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { TranslateIcon } from "../../../../public/translate/translate";

const DropDownLanguage = () => {
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: string) => {
    const nextLocale = e;
      router.replace(`/${nextLocale}`);
  };
  console.log(localActive);
  

  // Verifica se o idioma atual é "pt"
  const isPortuguese = localActive === 'pt';

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button disableAnimation className="bg-transparent outline-none">
          <TranslateIcon/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
  {isPortuguese ? (
      <DropdownItem key="en" onClick={() => onSelectChange('en')}>
        Inglês
      </DropdownItem>
  ) : (
      <DropdownItem key="pt" onClick={() => onSelectChange('pt')}>
        Português
      </DropdownItem>
  )}
</DropdownMenu>

    </Dropdown>
  );
}

export default DropDownLanguage;
