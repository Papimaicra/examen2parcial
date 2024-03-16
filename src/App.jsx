import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const userData = await response.json();
      setUsers(userData);
    };

    fetchUsers();
  }, []);

  const handleClick = async (userId) => {
    setSelectedUser(userId);
    const response = await fetch(https://jsonplaceholder.typicode.com/comments?postId=${userId});
    const commentData = await response.json();
    const userComments = commentData.filter(comment => comment.postId === userId);
    setComments(userComments);
  };

  return (
    <div>
      <div>
        {users.map((user) => (
          <div key={user.id} onClick={() => handleClick(user.id)}>
            {user.id} - {user.name} - {user.email}
          </div>
        ))}
      </div>
      <div>
        {selectedUser && (
          <div>
            <h2>Comentarios del usuario {selectedUser}</h2>
            {comments.map((comment) => (
              <div key={comment.id}>
                <p>postId: {comment.postId}</p>
                <p>Name: {comment.name}</p>
                <p>Email: {comment.email}</p>
                <p>Body: {comment.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;