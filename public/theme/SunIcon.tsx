import Image from "next/image";

export const SunIcon = () => (
  <Image
    priority={true}
    src={"/theme/sun.svg"}
    alt="Sun"
    width={32}
    height={32}
  />
);
