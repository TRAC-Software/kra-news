import parse from 'html-react-parser';

export const parseHtml = (htmlContent) => {
  return parse(htmlContent);
}; 