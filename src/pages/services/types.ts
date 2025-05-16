interface FaqItem {
  question: string;
  answer: string | JSX.Element;
}

export interface Service {
  title: string;
  image?: string;
  imageC?: string;
  content?: JSX.Element;
  faqs?: FaqItem[];
  svg?: JSX.Element | string;
}
  
  export type Services = Record<string, Service>;
  