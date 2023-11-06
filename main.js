

class FormatFirstName extends React.Component {
    render() {
        return <span className="firstName">{this.props.value}</span>;
    }
}

class FormatLastName extends React.Component {
    render() {
        return <span className="red-text lastName">{this.props.value}</span>;
    }
}

const firstName = 'marion';
const lastName = 'girard';

const HelloWorld = (
    <h1>
        Hello <FormatFirstName value={firstName} /> <FormatLastName value={lastName} />
    </h1>
);





ReactDOM.render(helloWorld, document.querySelector('#app'));






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
