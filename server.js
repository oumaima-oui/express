const express = require('express')
const path = require('path')

const app = express()

// Custom middleware to verify the time of the request.
app.use(date = ( req, res, next) =>{
    let requestAt = new Date().getHours()
    console.log(requestAt)
    if (requestAt <9 || requestAt>=17) res.send('Our office is not open now')
    next()
})


app.use(express.static(path.join(__dirname, 'public')))

app.listen(5000, (err) =>{
    if(err){
        throw err
    }else{
        console.log('server is running...')
    }
})