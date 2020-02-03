if (!process.env.DBPSW) {
  console.log('DBPSW env fault.');
  process.exit(1);
}
if (!process.env.DBUSR) {
  console.log('DBUSR env fault.');
  process.exit(1);
}
if (!process.argv[2]) {
  console.log('Kitty name fault.');
}

const mongoose = require('mongoose');
const connString = `mongodb+srv://${process.env.DBUSR}:${process.env.DBPSW}@asistente-empresarial-c0-mvt1t.gcp.mongodb.net/udemy_biblianodejs?retryWrites=true&w=majority`;

mongoose.connect(connString, { useNewUrlParser: true, useUnifiedTopology: true });

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: process.argv[2] });
kitty.save()
  .then(() => {
    console.log('Kitty saved. All kittys are:');
    Cat.find()
      .then(kitties => {
        console.log(kitties);
        process.exit(0);
      })
      .catch(console.log);
  })
  .catch(console.log);
