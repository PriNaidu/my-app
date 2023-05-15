import react from "react";

function Users() {
  const data = [
    {   
         id: 1,
         name: "Priyanka" 
    },
    {   
        id: 2,
        name: "Sarvesh" 
   },
   {   
       id: 3,
       name: "Aniket" 
}

];

  return (
  <div>
{
    data.map((users)=>(
        <div>
            {users.name}
       </div>
    ))
}
  </div>
  );
} 
export default Users;
