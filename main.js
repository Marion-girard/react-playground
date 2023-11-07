

/*class Clock2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
      return (
        <div>
          <h1>Bonjour, monde !</h1>
          <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }*/
  

  /*function Clock(props){
    const  [date, setDate]= React.useState(new Date());
    const [bool, setBool] = React.useState(false);
    const time = bool + " " +date;
    React.useEffect(()=> {
      
      setDate(new Date());
    }, [bool]);
    
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {time}.</h2>
        <button onClick={()=> setBool(!bool)}></button>
      </div>
    );
  }*/

  function Clock(props){
    const  [date, setDate]= React.useState(new Date());
    
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
  ReactDOM.render(<Clock/>,document.getElementById('root'));
  
  




//function FirstName(props) {

    /*
    // Solution avec bonus
    const formatFirstName = (firstName) => {
        return firstName[0].toUpperCase() + firstName.substr(1);
    }

    return <span>{formatFirstName(props.text)}</span>
    */

    // Solution sans bonus
    //return <span>{props.text[0].toUpperCase() + props.text.substr(1)}</span>
//}

//function LastName(props) {

    /*
    // Solution avec bonus
    const formatLastName = (lastName) => {
        return lastName.toUpperCase();
    }

    return <span>{formatLastName(props.text)}</span>
    */

    // Solution sans bonus
    //return <span className="red-text">{props.text.toUpperCase()}</span>

//}

//const helloWorld = <h1>Hello <FirstName text={firstName}/> <LastName text={lastName}/></h1>;
