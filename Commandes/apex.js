const Apex = require('apex-api');
const apex = new Apex('b70ab7ff-b449-4e30-b0dd-1d279e9253e9');

apex.user('FC_Erawz', 'pc').then((res) => {
   console.log(`${res.data.children[0].stats[0].metadata.key} : ${res.data.children[0].stats[0].value} `);
})
.catch((err) => {
   if (err) { return console.error(`An error has occured:\n\n${err.message}`); }
});

module.exports.help = {
  name:'apex'
}