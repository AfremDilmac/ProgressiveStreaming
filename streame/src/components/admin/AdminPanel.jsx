import { useState, useEffect, useMemo } from "react";
import { db } from "../../firebase";
import { collection, getDocs, deleteDoc, updateDoc, doc} from "firebase/firestore";

function AdminPanel() {

  const [users, setUsers] = useState([]);
  //collectie van users 
  const usersCollectionRef = collection(db, "users");

  
// function refreshPage() {
//      window.location.reload(false);
//  }
// const selectedRolekies = document.getElementById("listRole");

// selectedRolekies.option[selectedRolekies.selectedIndex].text

  // update user in firestore
  const updateUserRole = async (id, role) => {
    const userDoc = doc(db, "users", id);
    const newFields = { role: "admin"};
    await updateDoc(userDoc, newFields);
  };

  const updateUserRole2 = async (id, role) => {
    const userDoc = doc(db, "users", id);
    const newFields = { role: "user"};
    await updateDoc(userDoc, newFields);
  };

  //delete user in firestore
  const deleteUser = async (uid) => {
    const userDoc = doc(db, "users", uid);
    const userChats = doc(db, "userChats", uid);
    await deleteDoc(userDoc, userChats );
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (

    <div classNameName="App" >
    <div className="p-4 flex">
        <h1 className="text-3xl">
            Users
        </h1>
    </div>
      {users.map((user) => {
        return (
          
          <div className="text-gray-900 bg-gray-200">
  
    <div className="px-3 py-4 flex ">
        <table className=" table-fixed w-full text-md bg-white shadow-md rounded mb-1 ">
            <tbody>
                <tr className="border-b">
                    <th className="text-left p-3 px-5 ">Name</th>
                    <th className="text-left p-3 px-5 ">Email</th>
                    <th className="text-left p-3 px-5 ">Role</th>
                    
                </tr>
                <tr className="border-b hover:bg-orange-100 bg-gray-100">
                    <td className="p-3 px-5 ">{user.displayName}</td>
                    <td className="p-3 px-5 ">{user.email}</td>
                    <td className="p-3 px-5 ">{user.role}
                        {/* <select value="user.role" className="bg-transparent" id="listRole">
                            <option id="RoleUser" value="user">user</option>
                            <option id="RoleAdmin" value="admin">admin</option>
                        </select> */}
                    </td>
                    <td className="p-3 px-5 flex justify-end">
                      <button type="button"  onClick={() => {updateUserRole(user.id);}} className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Admin </button>
                      <button type="button"  onClick={() => {updateUserRole2(user.id);}} className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">User </button>
                      <button type="button" onClick={() => {deleteUser(user.id); }} className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                      
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
        );
      })}
    </div>
    
  );
}

export default AdminPanel;
