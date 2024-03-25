/// <reference types="firefox-webext-browser" />
const pageHTML = document.documentElement.outerHTML;

browser.runtime.sendMessage({ htmlContent: pageHTML });

const lineNumberDivs = document.querySelectorAll('.react-line-number.react-code-text');
let maxLineNumber = 0;

lineNumberDivs.forEach(div => {
    const trimmedTextContent = (div.textContent || '').trim(); 
    const lineNumber = parseInt(trimmedTextContent, 10);

    if(isNaN(lineNumber)){
        throw new Error('Value cannot be converted to a number.');
    }

    if(lineNumber > maxLineNumber) {
        maxLineNumber = lineNumber;
    }
})
console.log(maxLineNumber);
