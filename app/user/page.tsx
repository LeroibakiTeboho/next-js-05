import React from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

async function UsersPage() {
  const respond = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await respond.json();
  console.log(users);

  return (
    <div className="grid grid-cols-2 gap-2 p-4">
        {users.map((user: User) => (
            <div 
            key={user.id}
            className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-gray-700"
            >
                <div className="flex flex-col space-y-1">
                    <h2 className="text-lg font-semibold">{user.name}</h2>
                    <p className="text-md">{user.username}</p>
                </div>
                <div className="flex flex-col space-y-1 items-end">
                    <div className="text-md">{user.email}</div>
                    <div className="text-md">{user.phone}</div>
                </div>
            </div>
        ))}
    </div>

)
}

export default UsersPage;