const { threadId } = require('worker_threads')
const Post = require('../models/Post')

module.exports = app => {
    
    app.post('/home', (req, res) => {
        const post = new Post({
            title: req.body.title,
            description: req.body.description
        })

        post.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ message: err })
        })
        
    })
} 

