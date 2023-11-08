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

/*{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom :
          <input type="text" value={props.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}*/


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
    </form>
  );
}
ReactDOM.render(<NameForm/>, document.querySelector('#app'))
/*function Clock(props){
  const  [date, setDate]= React.useState(new Date());
  this.state = {date: new Date()};
  React.useEffect(()=> {
    
    tick()
    return () => {
      
    }
  }, []);
  const tick = () =>{
    console.log("tick")
    setInterval(function(){
      console.log("interval")
      setDate(new Date());
    },1000)
  }
  return (
    <div>
      <h1>Bonjour, monde !</h1>
      <h2>Il est {date.toLocaleTimeString()}.</h2>
      
    </div>
  );
}
ReactDOM.render(<Clock/>,document.getElementById('root'));*/