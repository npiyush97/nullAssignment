import React, { useState, useEffect } from "react";
import Signup from "./SignUp";
import "./App.css";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./DashBoard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Welcome from "./Welcome";
import Profile from "./Profile";
import GuestOutlet from "./GuestOutlet";

function App() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "100%" }}>
                <HashRouter>
                    <AuthProvider>
                        <Routes>
                            <Route path="/" element={<Welcome />} />
                            <Route exact path="/" element={<PrivateRoute />}>
                                <Route
                                    exact
                                    path="/dashboard"
                                    element={
                                        <Dashboard
                                            users={users}
                                            posts={posts}
                                        />
                                    }
                                />
                            </Route>
                            <Route path="/" element={<GuestOutlet />}>
                                <Route
                                    exact
                                    path="/profile/:id"
                                    element={<Profile users={users} />}
                                />
                            </Route>
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </AuthProvider>
                </HashRouter>
            </div>
        </Container>
    );
}

export default App;
