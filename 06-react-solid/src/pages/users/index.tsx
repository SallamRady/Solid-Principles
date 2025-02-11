import { useState, useEffect } from "react";
import { User } from "../../types/User.type";

const UsersPage = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/users");
        const result = await response.json();
        setData(result as User[]);
      } catch (error) {
        setError("error 101");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Users Data</h1>
      {data?.map((user) => (
        <div key={user.id}>{user.username}</div>
      ))}
    </div>
  );
};

export default UsersPage;
