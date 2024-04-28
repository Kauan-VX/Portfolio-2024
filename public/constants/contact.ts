interface IContact {
  imageSrc: string;
  link: string;
  skillName: string;
}

export const CONTACT: IContact[] = [
  {
    imageSrc: "/contact/mail.svg",
    link: "https://nodejs.org/en",
    skillName: "E-mail",
  },
  {
    imageSrc: "/contact/linkedin.svg",
    link: "https://www.mysql.com/",
    skillName: "Linkedin",
  },
  {
    imageSrc: "/skills/github.svg",
    link: "https://github.com/Kauan-VX",
    skillName: "GitHub",
  },
  {
    imageSrc: "/contact/x.svg",
    link: "https://twitter.com/KauanXavierDev",
    skillName: "Twitter/X",
  },
];
