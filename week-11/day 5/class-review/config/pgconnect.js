const knex = require('knex')

const db = knex({
    client: 'pg',
    connection:{
        host:'127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: '123456',
        database: 'postgres'
    }
});

// console.log(db)

// db('prdocuts')
//     .select('id','name','price','description')
//     .then((rows)=>{
//         console.log(rows)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// db.raw("insert into products (name, price, description) values ('iPad', 899, 'Best iPad')")
//     .then((data)=>{
//             console.log(data.rows)
//     })
//     .catch((err)=>{
//             console.log(err)
//     })

db('products')
// .insert([
//     {name: 'Airpods Max', price: 899, description:'The sound is good'},
//     {name: 'Airpods Pro', price: 399, description:'The sound is fun'}
// ],['id','name'])
// .update({name:'iMac Pro M1'},['*'])
.del(['*'])
.where({id:6})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

