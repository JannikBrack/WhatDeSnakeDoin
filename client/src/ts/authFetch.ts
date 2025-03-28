export const authFetch = async (url: string, options={}) => {
    try {
        return await fetch(url, {...options, credentials: "include"});
    } catch (error) {
        console.error(`Fetching Error, Link: ${url}, Error: ${error}`);
        return null;
    }
}