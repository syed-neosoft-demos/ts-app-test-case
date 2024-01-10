import axios from "axios";
import { useEffect, useState } from "react";
import "../components/dashboard/User.css";

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        if (data?.length) setUsers(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, []);
  return (
    <div className="user">
      <div className="main">
        <h3>User Listing</h3>
        <div className="user-list">
          {users?.map((user: any) => (
            <div className="list" key={user?.id} data-testid="user-list">
              <img src="https://via.placeholder.com/150/771796" alt="user-list" />
              <div className="content">
                <h6>{user?.name}</h6>
                <p>{`${user?.address?.street}, ${user?.address?.city}, ${user?.address?.zipcode}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserListPage;
