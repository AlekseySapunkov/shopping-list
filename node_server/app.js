const express = require("express") ;
const pool = require('./config/database')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5200
app.use(express.json())
app.use(cors())
console.log(process.env.DB_PASSWORD)
pool.query('SELECT NOW()', (err, result)=>{
    if(err){
        console.error('error connecting to the database',err.stack)
    }else{
        console.log('Success connection to the database', result.rows)
    }
})
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})
app.get('/items',(req, resp)=>{
    pool.query('SELECT item_name, date, price FROM shopping_list', (err, result)=>{
        if(err){
            console.error('error connecting to the database',err.stack)
        }else{
            resp.send('Success connection to the database', result.rows)
        }  
    } )
})
app.post('/items',(req, resp)=>{
    const { item_name, date, price } = req.body;
    pool.query('INSERT INTO shopping_list(item_name, date, price) VALUES($1, $2, $3) RETURNING *',[item_name, date, price],(err, result)=>{
        if (err) {
            res.send({ express: 'Проблемы с сервером, пожалуйста отправьте форму повторно' })
            return console.error(err.message);
          } else {
            console.log({ express: 'Ваш запрос доставлен' })
            res.send({ item_name, date, price })
          };
    }  )
})