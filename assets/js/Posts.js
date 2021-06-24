import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
            .then(res => {
                const posts = res.data.slice(0,15);
                setPosts(posts);
                setIsLoading(false);
            }
        )
    }, []);

    return (
        <div>
            <section className="row-section">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center"><span>List of posts</span>Created with <i
                            className="fa fa-heart"></i> by yemiwebby </h2>
                    </div>

                    {isLoading ? (
                        <div className={'row text-center'}>
                            <span className="fa fa-spin fa-spinner fa-4x"></span>
                        </div>

                    ) : (
                        <div className={'row'}>
                            {posts.map(post =>
                                <div className="col-md-10 offset-md-1 row-block" key={post.id}>
                                    <ul id="sortable">
                                        <li>
                                            <div className="media">
                                                <div className="media-body">
                                                    <h4>{post.title}</h4>
                                                    <p>{post.body}</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
};
    
export default Posts;
