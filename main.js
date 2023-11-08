function UserGreeting(props) {
    return <h1>Bienvenue !</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Veuillez vous connecter</h1>;
  }
  function Greeting(props) {
      const [isLoggedIn, setIsLoggedIn] = React.useState(false);

      const handleLogIn = (e) => {
          e.preventDefault();
          setIsLoggedIn(true);
      }

      const handleLogOut = (e) => {
          e.preventDefault();
          setIsLoggedIn(false);
      }

    return(
        <React.Fragment>
            {isLoggedIn ? 
            <React.Fragment>
                <UserGreeting />
                <button onClick={handleLogOut}>Se déconnecter</button>
            </React.Fragment> : 
            <React.Fragment>
                <GuestGreeting />
                <button onClick={handleLogIn}>Se connecter</button>
            </React.Fragment> }
        </React.Fragment>
    )
  }
  
  ReactDOM.render(
    <Greeting />,
    document.querySelector('#app')
  );

  function MyComponent() {
    
    const [users, setUsers] = React.useState([]);
  

    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    React.useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
          (result) => {
            
            setUsers(result);
          },
          // Remarque : il faut gérer les erreurs ici plutôt que dans
          // un bloc catch() afin que nous n’avalions pas les exceptions
          // dues à de véritables bugs dans les composants.
       
        )
    }, [])
  
   
      return (
        <React.Fragment>
          {users.map((user) =>(
            <UserCard key={user.id} user={user} t />
          ))}
        </React.Fragment>
       /* <ul>
          {items.map(item => (
            <li key={item.id}>
              <ul>
             <li> {item.name} </li>
             <li> {item.email} </li>
              
             <li> {item.company.name}</li>
             <li> {item.phone}</li>
             <li> {item.website}</li>
            </ul>
            
            </li>
          ))}
        </ul>*/
      );
    }
    
          const UserCard = (props) =>{
            const {user} =props 
            return(
              <ul>
              <li> {user.name} </li>
              <li> {user.email} </li>
               
              <li> {user.company.name}</li>
              <li> {user.phone}</li>
              <li> {user.website}</li>
             </ul>
            )
          }
  
  ReactDOM.render(
    <MyComponent />,
    document.querySelector('#root')
  );