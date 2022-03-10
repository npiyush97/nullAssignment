import React from "react";
import Posts from "./Posts";

export default function Home({users,posts}) {
    return (
        <>
            {users &&
                posts &&
                posts
                    .filter((element, index) => {
                        return index % 10 === 1;
                    })
                    .map((post) => {
                        return (
                            <Posts
                                key={post.id}
                                post={post}
                                users={users[post.userId - 1]}
                            />
                        );
                    })}
        </>
    );
}
