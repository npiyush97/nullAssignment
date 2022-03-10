import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Posts({ post, users }) {
    return (
        <Card className="w-100 m-2" styles={{width:'100%'}}>
            <Card.Body>
                <div className="post_card">
                    <div className="profile_name">
                        <img
                            style={{ height: "40px", width: "40px" }}
                            src={`https://avatars.dicebear.com/api/human/${users.name}.svg`}
                            alt="user_image"
                        />
                        {users && (
                            <p>
                                <Link className='text-decoration-none' to={`/profile/${users.id}`}>
                                    {users.name}
                                </Link>
                            </p>
                        )}
                    </div>
                    <br />
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}
