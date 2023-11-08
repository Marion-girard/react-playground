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
    
    setState(e.target.value);
  }

  const handleSubmit = (e) =>{
    alert('Le nom a été soumis : ' + value);
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
    name: "totoro",
    text: "text from essay",
    flavor: "coconut",
  });

  React.useEffect(() => {
    console.log(inputs);
  }, [inputs]);
  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input
          name="name"
          type="text"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Essay:
        <textarea
          name="text"
          rows={5}
          cols={35}
          value={inputs.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Choisissez votre parfum favori :
        <select name="flavor" value={inputs.flavor} onChange={handleChange}>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option value="coconut">Noix de coco</option>
          <option value="mango">Mangue</option>
        </select>
      </label>
    </form>
  );
};

ReactDOM.render(<MultiForm />, document.querySelector("#app"));