export type SkillListObjectType = {
  [index: string]: string;
  title: string;
  'Front-End': string;
  'Back-End': string;
  Database: string;
  Deployment: string;
};

type ImagePropertyType = {
  [index: string]: number;
  width: number;
  height: number;
};

type LinkType = {
  [index: string]: string;
  name: string;
  url: string;
};

export type ExperienceObjectType = {
  [index: string]: string | ImagePropertyType | LinkType[];
  title: string;
  src: string;
  size: ImagePropertyType;
  link: LinkType[];
  text: string;
};
