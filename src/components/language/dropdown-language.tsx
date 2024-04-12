import { Button } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { BrazilIcon } from "../icons/BrazilIcon";
import { EnIcon } from "../icons/EnIcon";

const DropDownLanguage = () => {
  const router = useRouter();
  const locale = useLocale();

  const toggleLocale = () => {
    const nextLocale = locale === "pt" ? "en" : "pt";
    router.replace(`/${nextLocale}`);
  };

  return (
    <Button className="bg-transparent p-2 outline-none" onClick={toggleLocale}>
      {locale === "pt" ? <BrazilIcon /> : <EnIcon />}
    </Button>
  );
};

export default DropDownLanguage;
