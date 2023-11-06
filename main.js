//const helloWorld = React.createElement('h1', {}, 'Hello world!');


//const helloWorld = <h1> Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)} </span> <span className="red-text">{lastName.toUpperCase()}</span></h1>



/*function formatFirstName(value){
    return <span>{value[0].toUpperCase() + value.slice(1)}</span>
}



function formatLastName(value){
    return <span  className="red-text">{value.toUpperCase()}</span>
}




const helloWorld =(
    <h1>
    hello
    {formatFirstName(firstName)}{" "}
    {formatLastName(lastName)}
    </h1>
    )*/
    
    
    class FormatFirstName extends React.Component {
        render() {
            return <span>{this.props.value[0].toUpperCase() + this.props.value.slice(1)}</span>;
        }
    }
    
    class FormatLastName extends React.Component {
        render() {
            return <span className="red-text">{this.props.value.toUpperCase()}</span>;
        }
    }
    
    const firstName = 'marion';
    const lastName = 'girard';
    
    const HelloWorld = (
        <h1>
            Hello <FormatFirstName value={firstName} /> <FormatLastName value={lastName} />
        </h1>
    );
    
    ReactDOM.render(HelloWorld, document.getElementById('app'));
// Solution sans bonus
//const helloWorld = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1>;



/**
 * 
 * Solution avec bonus
 */

/*
 const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);

 const formatLastName = (value) => value.toUpperCase();
 
 // Solution avec bonus
 const helloWorld = (
   <h1>
     Hello <span>{formatFirstName(firstName)}</span>{" "}
     <span className="red-text">{formatLastName(lastName)}</span>
   </h1>
 );

 */

//ReactDOM.render(helloWorld, document.querySelector('#app'));

