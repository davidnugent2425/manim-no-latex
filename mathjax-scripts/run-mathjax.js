const { mathjax } = require('mathjax-full/js/mathjax.js');
const { TeX } = require('mathjax-full/js/input/tex.js');
const { SVG } = require('mathjax-full/js/output/svg.js');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');
const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);

const tex = new TeX();
const svg = new SVG({fontCache: 'none'});
const mathjaxDocument = mathjax.document('', {InputJax: tex, OutputJax: svg});

const cheerio = require('cheerio');

function processLatexString(latexString) {
  const math = mathjaxDocument.convert(latexString, {display: true});
  const html = adaptor.outerHTML(math);

  // Use Cheerio to parse the HTML and extract the SVG element
  const $ = cheerio.load(html);
  const svg = $('svg').parent().html();

  return svg;
}

const latexString = process.argv[2]; // Get the LaTeX string from the command line
const svgOutput = processLatexString(latexString);
console.log(svgOutput); // Output the SVG