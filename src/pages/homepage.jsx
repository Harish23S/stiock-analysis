import React, { useEffect, useState } from "react";
import axios from "axios";

function Homepage() {

    const [lists, setPosts] = useState([]);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/data');
                setPosts(response.data);
            } catch (err) {
                setError('Error fetching posts');
            }
        };
        fetchPosts();
    }, []);

    const deleteRecord = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/delete/${id}`);
            setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
        } catch (err) {
            setError('Error deleting record');
        }
    };

    return (
        <div>
            <table>
                <tbody>
                    {lists.map((value, index) => (
                        <tr key={index}>
                            <td>{value.name}</td>
                            <td>{value.pp}</td>
                            <td><button onClick={() => deleteRecord(value.id)}>Click to Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Homepage;
