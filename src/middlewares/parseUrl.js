module.exports = (baseUrl) => (req, res) => {
    const parsedUrl = new URL(req.url, baseUrl);
    const params = {};

    // note that the forEach here is different from those in arrays.
    parsedUrl.searchParams.forEach((value, key) => (params[key] = value));

    req.pathname = parsedUrl.pathname;
    req.params = params;
};
