import React from 'react'
import me from '../../assets/pic.jpg'
const User = () => {
    const arr = [1, 2, 3, 4];
  return (
 <>
  <section className="tableClass mt-5">
      <main>
        <table className='mt-5'>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#sdkfsdfdsf</td>
                <td>AnandTech</td>
                <td>
                  <img src={me} alt="User" />
                </td>
                <td>Admin</td>
                <td>{"24-03-2023"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
 
 </>
  )
}

export default User