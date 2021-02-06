import React from 'react';

export default class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(ev) {
        const term = ev.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input 
                className="form-control search-input"
                type="text"
                placeholder="Search tweets"
                value={this.state.term}
                onChange={this.onUpdateSearch}
            />
        )
    }
}
