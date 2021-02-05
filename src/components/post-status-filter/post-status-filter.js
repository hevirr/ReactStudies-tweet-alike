import React from 'react';
import { Button } from 'reactstrap';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button outline color="info">All posts</Button>
            <button type="button"className="btn btn-info">All posts</button>
            <button type="button" className="btn btn-outline-secondary">Liked posts</button>
        </div>
    )
}

export default PostStatusFilter;