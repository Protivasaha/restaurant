
const UserProfile = () => {
    const user = localStorage.getItem("user")
    const userData = JSON.parse(user)
    console.log(user)
  return (
    <div>
      <h1>User Name: {userData.name}</h1>
      <p>User Email: {userData.email}</p>
    </div>
  );
};

export default UserProfile;