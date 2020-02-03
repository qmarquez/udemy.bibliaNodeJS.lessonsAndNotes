const { CRUD } = require('./lib/helpers');
const db = require('./models');

const { argv } = process;

if (argv.length <= 2) {
  process.exit(0);
}

const args = argv.slice(2);

const [command, entity] = args[0].split(':');

switch (command) {
  case CRUD.CREATE:
    const data = {};
    args.slice(1)
      .forEach(arg => {
        const [key, value] = arg.replace('--', '').split('=');
        data[key] = value;
      });


    db[entity].create(data)
      .then(() => console.log('Created'))
      .catch(console.log);
    break;
  case CRUD.READ:
    db[entity].findAll()
      .then(results => console.log(results.map(e => e.toJSON())))
      .catch(console.log);
    break;
  case CRUD.UPDATE:
    console.log('Method not implemented.');
    break;
  case CRUD.DELETE:
    console.log('Method not implemented.');
    break;
  default:
    console.log('Method not allowed.');
    break;
}
