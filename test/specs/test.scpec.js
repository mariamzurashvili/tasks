describe('Pastebin automation', () => {
    it('should create a new paste with given attributes', async () => {
        await browser.url('https://pastebin.com/');

        const codeInput = await $('#postform-text');
        await codeInput.setValue('Hello from WebDriver');

        const expirationDropdown = await $('#select2-postform-expiration-container');
        await expirationDropdown.click();
        const tenMinutesOption = await $('//li[text()="10 Minutes"]');
        await tenMinutesOption.click();

        const nameInput = await $('#postform-name');
        await nameInput.setValue('helloweb');

        const submitButton = await $('button[type="submit"]');
        await submitButton.click();

        await browser.pause(3000);
        const pasteURL = await browser.getUrl();
        console.log('Created paste URL:', pasteURL);
    });
});

