import { ICertificate } from "../../src/components/card-certificate";

export const translateCertificate = (t: any): ICertificate[] => {
  return [
    {
      platform: "Udemy",
      title: t("certificate.react_native.title"),
    },
  ];
};
