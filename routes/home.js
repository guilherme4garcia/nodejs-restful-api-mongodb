

module.exports = app => {
    app.get('/home', (req, res) => {
        console.log('Test')
        res.send('We are on home')
    })

    app.post('/home', (req, res) => {
        const home = req.body
        res.send(home)
    })
} 

