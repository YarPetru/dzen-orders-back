const mongoose = require('mongoose');
const app = require('./app');

mongoose.set('strictQuery', true);

const { DB_HOST, PORT = 9999 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('DB connect success');
    app.listen(PORT, () => console.log(`Server is running... . Use API on port ${PORT}`));
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
