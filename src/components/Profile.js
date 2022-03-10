import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Profile({ users }) {
    const { id } = useParams();
    return (
        <Card>
            <Card.Body>
                <div className="w-100 d-flex align-items-center justify-content-center">
                    <div className="d-flex">
                        {users.map((user) => {
                            if (user.id == id) {
                                return (
                                    <>
                                        <img
                                            className="m-auto"
                                            style={{
                                                height: "40px",
                                                width: "40px",
                                            }}
                                            src={`https://avatars.dicebear.com/api/human/${user.name}.svg`}
                                            alt="user_image"
                                        />
                                        <p className="m-auto p-5">
                                            {user.username}
                                        </p>
                                        <div className="ml-2">
                                            <h3>Name:</h3>
                                            <p>{user.name}</p>
                                            <h3>Email:</h3>
                                            <p>{user.email}</p>
                                            <h3>Phone:</h3>
                                            <p>{user.phone}</p>
                                        </div>
                                    </>
                                );
                            }
                        })}
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}
