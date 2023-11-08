function App(props) {
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usersObject => setUsers(usersObject))
    }, [])

    const [users, setUsers] = React.useState([]);



    return(
        <React.Fragment>
        {
            users.map((u) =>(
                <UserCard key={u.id} user={u}/>
            ))
        }
        </React.Fragment>
    )
}

function UserCard({user}) {
    

    return (
        <ul className="user-card">
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.company.name}</li>
            <li>{user.phone}</li>
            <li>{user.website}</li>
        </ul>
    )
}

//ReactDOM.render(<App/>, document.querySelector('#app'))



function NameForm(props){


  const [value, setState] = React.useState('');
  const  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'text' ? target.checked : target.value;
    const name = target.name;
    setState(e.target.value);
  }

  const handleSubmit = (e) =>{
    alert('Le nom a été soumis : ' + value);
    e.preventDefault();
    alert('Un essai a été envoyé : ' + value);
    e.preventDefault();



  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Envoyer" />

      <label>
        Nom :
        <textarea type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
}

function EssayForm(props){


  const [value, setState] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré');
  const  handleChange = (e) => {
    setState(e.target.value);
  }

  const handleSubmit = (e) =>{
    alert('Un essai a été envoyé : ' + value);
    e.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
}

const MultiForm = () => {
  const [inputs, setInputs] = React.useState({
    name: '',
    text: 'text from essay',
    flavor: 'coconut',
  });

  const handleNameChange = (e) => {
    setInputs({ ...inputs, name: e.target.value });
  };

  const handleTextChange = (e) => {
    setInputs({ ...inputs, text: e.target.value });
  };

  const handleFlavorChange = (e) => {
    setInputs({ ...inputs, flavor: e.target.value });
  };

  const handleSubmit = (e) => {
    alert('Le formulaire a été soumis');
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={inputs.name} onChange={handleNameChange} />
      </label>
      <label>
        Texte :
        <textarea value={inputs.text} onChange={handleTextChange} />
      </label>
      <label>
        Choisissez votre parfum favori :
        <select value={inputs.flavor} onChange={handleFlavorChange}>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option value="coconut">Noix de coco</option>
          <option value="mango">Mangue</option>
        </select>
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

ReactDOM.render(<MultiForm />, document.querySelector('#app'));