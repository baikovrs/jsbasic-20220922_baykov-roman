

  let friends = [
    {
      firstName: 'Artsiom',
      lastName: 'Mezin'
    },  
    {
      firstName: 'Ilia',
      lastName: 'Kantor'
    },  
    {
      firstName: 'Christopher',
      lastName: 'Michael'
    }
  ];

function makeFriendsList (friends) {
  const ul = document.createElement('ul');
  friends.forEach(
    (item) => {
      const li = document.createElement('li');
      li.appendChild(
        document.createTextNode(`First: '${item.firstName}', Last: '${item.lastName}'`)
        );
      ul.appendChild(li);
    }
  );
  document.body.appendChild(ul);
  return ul;
}
