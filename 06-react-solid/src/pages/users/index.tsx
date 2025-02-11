import ErrorComponent from "../products/components/Error";
import LoadingComponent from "../products/components/Loading";
import useFetchUsersData from "./hooks/useFetchUsersData";

const UsersPage = () => {
  const { data, loading, error } = useFetchUsersData();

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent />;
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
