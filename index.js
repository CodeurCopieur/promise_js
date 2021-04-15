const container = document.getElementById('users');

//Création dela promesse
const getUsers = new Promise((resolve, reject) => {
   typeof USERS !== 'undefined' ?  resolve(USERS) : reject('Accès aux users impossible !');
});

//Recuperer l'état de la promesse
console.log('debut'); //Thread principale
getUsers
  .then( u => {
    //console.log(u);
    for (const user of u) {
      const template = `<li>${user.name}</li>`;
      container.insertAdjacentHTML('beforeend', template);
    } 
    return u.length
  })
  .then( nbUsers => {
    console.log(`Il y a ${nbUsers} users`);
  })
  .catch( e => console.log(e))

console.log('fin'); //Thread principale