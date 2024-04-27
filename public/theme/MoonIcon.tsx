import Image from "next/image";

export const MoonIcon = () => {
  return (
    <Image
      priority={true}
      src={"/theme/moon.svg"}
      width={30}
      height={30}
      alt="Moon"
    />
  );
};
