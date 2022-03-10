import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

export default function Dashboard({ users, posts }) {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        setError("");
        try {
            await logout();
            navigate("/");
        } catch {
            setError("Failed to log out");
        }
    }

    return (
        <>
            <Card className="m-2">
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                </Card.Body>
                <div className="w-100 m-2 d-flex justify-content-between align-items-center text-center-mt-2">
                    <div>
                        <img
                            style={{ height: "40px", width: "40px" }}
                            src="https://avatars.dicebear.com/api/human/:seed.svg"
                            alt=""
                        />
                        <strong> User: </strong>
                        {currentUser.email}
                    </div>
                    <div>
                        <Button
                            variant="link"
                            onClick={handleLogout}
                            className="btn btn-primary"
                            style={{
                                color: "white",
                                marginRight: "10px",
                                textDecoration: "none",
                            }}
                        >
                            Log Out
                        </Button>
                    </div>
                </div>
            </Card>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Home users={users} posts={posts} />
            </div>
        </>
    );
}
