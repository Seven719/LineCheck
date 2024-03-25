browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "countLines") {
        countLines();
    }
});

function countLines() {
    const fileName = document.getElementById('file-name-id').textContent.trim();
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
    });
    console.log(`${fileName} has ${maxLineNumber} lines`);
}
