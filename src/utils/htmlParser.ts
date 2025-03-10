import parse from 'html-react-parser';

export const parseHtml = (htmlContent: string) => {
  return parse(htmlContent);
}; 