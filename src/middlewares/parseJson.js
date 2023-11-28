module.exports = (req, res, next) => {
    req.writeHead(200, {
        'Content-type': 'application/json'
    })
    req.send = (data) => {
        req.end(JSON.stringify(data))
    }
}