import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux' // 1. Import useSelector
import appwriteService from "../appwrite/config" // Adjust this path to your posts service
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    
    // 2. Grab the actual authentication status from Redux
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        // Only attempt to fetch posts from the database if the user is logged in
        if (authStatus) {
            appwriteService.getPosts([]).then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
        }
    }, [authStatus]) // Re-run if authStatus changes
  
    // 3. Condition A: If the user is NOT logged in, tell them to log in
    if (authStatus === false) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to view posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    // 4. Condition B: If the user IS logged in, but the database has no posts yet
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <h1 className="text-2xl font-bold text-white">
                        Welcome! No posts available. Click "Add Post" to create one.
                    </h1>
                </Container>
            </div>
        )
    }

    // 5. Condition C: User is logged in and posts exist -> Render them
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home