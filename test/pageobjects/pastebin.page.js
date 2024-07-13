let expect;

(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();

class PastebinPage {
    get codeInput() { return $('#postform-text') }
    get syntaxDropdown() { return $('#select2-postform-format-container') }
    get syntaxSearchInput() { return $('.select2-search__field') }
    get expirationDropdown() { return $('#select2-postform-expiration-container') }
    get expirationSearchInput() { return $('.select2-search__field') }
    get pasteNameInput() { return $('#postform-name') }
    get submitButton() { return $('button[type="submit"]') }
    get pasteContent() { return $('.textarea') }
    get syntaxHighlighting() { return $('.bash') }

    open() {
        browser.url('https://pastebin.com/');
    }

    createNewPaste(code, syntax, expiration, name) {
        this.codeInput.setValue(code);
        this.syntaxDropdown.click();
        this.syntaxSearchInput.setValue(syntax);
        browser.keys('Enter');
        this.expirationDropdown.click();
        this.expirationSearchInput.setValue(expiration);
        browser.keys('Enter');
        this.pasteNameInput.setValue(name);
        this.submitButton.click();
    }

    async verifyPaste(name, code) {
        expect(await browser.getTitle()).to.equal(name);
        expect(this.syntaxHighlighting).to.exist;
        expect(await this.pasteContent.getText()).to.equal(code);
    }
}

module.exports = new PastebinPage();
