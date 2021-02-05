import React from 'react';

import './app.css';
import styled from 'styled-components';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const StyledAppBlock = styled(AppBlock)`
    background-color: grey;
`

const App = () => {

    const data = [
        {label: 'Hello, Reactwitter!', important: true, id: 'wqwq'},
        {label: 'I passed my exams perfectly', important: false, id: 'qwegfg'},
        {label: 'Damn, it is raining outside', important: false, id: 'asgge'}
    ];

    return (
        <StyledAppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data} />
            <PostAddForm/>
        </StyledAppBlock>
    )
}

export default App;