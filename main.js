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
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
  
    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Remarque : il faut gérer les erreurs ici plutôt que dans
          // un bloc catch() afin que nous n’avalions pas les exceptions
          // dues à de véritables bugs dans les composants.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
  ReactDOM.render(
    <MyComponent />,
    document.querySelector('#root')
  );