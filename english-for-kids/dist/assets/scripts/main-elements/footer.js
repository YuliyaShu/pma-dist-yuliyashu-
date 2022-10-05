const { pageWrapper } = require('./body-wrapper');
const { default: ElementNew } = require('../classes/class-html-element');
const { footerInspired, footerAuthor, footerSchool } = require('../utils/string-variables');

const footerBlocks = new ElementNew(pageWrapper.element.children[2], 'div', 'footer__blocks');
footerBlocks.createElem();

const arrFooterLinks = [
  [footerInspired, 'https://www.freepik.com/author/stories'],
  [footerAuthor, 'https://github.com/YuliyaShu'],
  [footerSchool, 'https://rs.school/'],
];
for (let i = 0; i < arrFooterLinks.length; i += 1) {
  new ElementNew(footerBlocks.element, 'a', 'footer__links', arrFooterLinks[i][0], [['href', arrFooterLinks[i][1]]]).createElem();
}
