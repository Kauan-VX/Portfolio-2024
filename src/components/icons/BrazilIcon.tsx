import Image from "next/image";

export const BrazilIcon = () => {
  return (
    <Image
      src={"/translate/pt-br.svg"}
      width={32}
      height={32}
      alt="pt-BR"
      className="size-full"
    />
  );
};
