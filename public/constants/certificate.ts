import { ICertificate } from "../../src/components/card-certificate";

export const translateCertificate = (t: Function): ICertificate[] => {
  return [
    {
      platform: "Udemy",
      title: t("certificate.react_native.title"),
    },
    {
      platform: "Udemy",
      title: t("certificate.java_script.title"),
    },
    {
      platform: "Udemy",
      title: t("certificate.nest_js.title"),
    },
  ];
};
