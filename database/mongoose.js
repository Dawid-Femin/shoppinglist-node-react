const mongoose = require('mongoose');
const URL = 'mongodb+srv://Dawid05023:Tracer05023@shoppinglist.otp9jqx.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Database is connected')
    } catch(err) {
        console.log(`Database does not work ${err}`)
    }
}

connect();