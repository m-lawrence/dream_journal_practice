function User({ users }) {
    let upcaseUsername = users[0].username.charAt(0).toUpperCase() + users[0].username.slice(1)
  
    return (
      <div>
        <h1>Welcome, {upcaseUsername}!</h1><br></br>
      </div>
    );
  }
  
  export default User;