class Shared {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    async blockGoogleAds() {
        await this.page.route('**/*', (route) => {
            const url = route.request().url();
            if (url.includes('googleads.g.doubleclick.net') || url.includes('adservice.google.com')) {
                route.abort(); // Block ad requests
            } else {
                route.continue(); // Allow other requests
            }
        });
    }
}

export default Shared;
