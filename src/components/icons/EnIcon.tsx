import Image from "next/image";

export const EnIcon = () => {
  return (
    <Image
      src={"/translate/en.svg"}
      width={32}
      height={32}
      alt="Moon"
      className="size-full"
    />
  );
};
