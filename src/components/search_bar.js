import React, { Component } from 'react'; // we write { Component } so we dont have to write React.Component for every component, instead just write 'extends Component'


class SearchBar extends Component {
    constructor(props) {
        super(props);


        this.state = { term: '' };
    }



    render() {
        return (
            <div className="search-bar">
                <input  className="form-controll" placeholder="Search"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}


export default SearchBar;





// Can also be written as return <input onChange={event => console.log(event.target.value)} />;
// Can also be written as return <input onChange={this.onInputChange} />;