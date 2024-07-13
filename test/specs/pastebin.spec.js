let PastebinPage;

describe('Pastebin Automation', () => {
    before(async () => {
        PastebinPage = await import('../pageobjects/pastebin.page.js');
        PastebinPage = PastebinPage.default;
    });

    it('should create a new paste and verify its details', () => {
        const code = `git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force`;
        const syntax = 'Bash';
        const expiration = '10 Minutes';
        const name = 'how to gain dominance among developers';

        PastebinPage.open();
        PastebinPage.createNewPaste(code, syntax, expiration, name);
        PastebinPage.verifyPaste(name, code);
    });
});
