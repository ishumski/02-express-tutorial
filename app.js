const http = require("http")
const { readFileSync } = require('fs')

const PORT = 5001
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {

    const {url} = req

    //homepage
    if (url === '/') {
        res.writeHead(200, 'OK', {
            "Content-Type": "text/html"
        })
        res.write(homePage)
        res.end()
    //    about page
    } else if (url === '/about') {
        res.writeHead(200, 'OK', {
            "Content-Type": "text/html"
        })
        res.write('<h1>About page</h1>')
        res.end()
    //    styles
    } else if (url === '/styles.css') {
        res.writeHead(200, 'OK', {
            "Content-Type": "text/css"
        })
        res.write(homeStyles)
        res.end()
    //    logo
    }else if (url === '/logo.svg') {
        res.writeHead(200, 'OK', {
            "Content-Type": "image/svg+xml"
        })
        res.write(homeImage)
        res.end()
    //    logic
    }else if (url === '/browser-app.js') {
        res.writeHead(200, 'OK', {
            "Content-Type": "text/javascript"
        })
        res.write(homeLogic)
        res.end()
    } else {
        res.writeHead(404, 'Not Found', {
            "Content-Type": "text/html"
        })
        res.write('<h1>404 page not found</h1>')
        res.end()
    }
})

server.listen(PORT)
