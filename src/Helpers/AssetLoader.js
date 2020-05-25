export default class AssetLoader {
    /**
     * @see https://stackoverflow.com/questions/52059596/loading-an-image-on-web-browser-using-promise
     * @param {string} src
     * @return {Promise<HTMLImageElement>}
     */
    static image(src) {
        return new Promise(((resolve, reject) => {
            const img = new Image();
            img.addEventListener("load", () => resolve(img));
            img.addEventListener("error", err => reject(err));
            img.src = src;
        }));
    }

    /**
     * @param {string} src
     * @return {Promise<any>}
     */
    static json(src) {
        return fetch(src).then((response) => {
            return response.json();
        });
    }
}