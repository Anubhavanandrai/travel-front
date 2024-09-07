import { MdDashboard } from "react-icons/md";
import './admin.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Manager from "../admin_hooks/useusermanage";

const App = () => {
    const [num, setNum] = useState(1);
    const [details, setDetails] = useState([]);
    const { deleteuser, setadmin, Approveclass, Rejectclass ,adminLogout} = Manager();
    

    const Admin_name = localStorage.getItem("user");

    const fetchData = async (num) => {
        switch(num) {
            case 1:
                try {
                    let getted = await axios.get("http://localhost:8000/class/admin/allclass");
                    setDetails(getted.data);
                } catch (error) {
                    console.log("Frontend :: in admin.jsx get all journey: ", error);
                }
                break;
            case 2:
                try {
                    let getted = await axios.get("http://localhost:8000/user/get-all-users");
                    setDetails(getted.data);
                } catch (error) {
                    console.log("Frontend :: in admin.jsx get all users: ", error);
                }
                break;
            default:
                setDetails([]);
        }
    };

    useEffect(() => {
        fetchData(num);
    }, [num]);

    

    return (
        <div className="admin">
            <div className='admin-nav'>
                {Admin_name}
                <button className="admin-nav-logout-button" onClick={adminLogout}>Logout</button>
            </div>
            <div className='admin-dashboard'>
                <label> 
                    <i><MdDashboard size={25} /></i>
                    <h5>Dashboard</h5>     
                </label>
                <div className="admin-dashboard-options">
                    <div className="options" onClick={() => setNum(1)}> All Journey</div>
                    <div className="options" onClick={() => setNum(2)}> All Users</div>
                    <div className="options" onClick={() => setNum(3)}> Create Note</div>
                </div>
            </div>
            <div className="actual-content">
                {num === 1 ? (
                    <div className="actual-content-cardOuter">
                        {details.map((product) => (
                            <div key={product._id} className="actual-content-card">
                                <div className="cardiimg">
                                    <img src={product.file} alt={product.tripname} />
                                </div>
                                <div className="cardtitle">{product.tripname}</div>
                                <div className="Description">{product.description}</div>
                                <div className="seat">Seat: {product.availableseat}</div>
                                <div className="seat">Email: {product.email}</div>
                                <div className="Price">Fee: ${product.fee}</div> 
                                <button onClick={() => Approveclass(product)}>Accept</button>
                                <button onClick={() => Rejectclass(product)}>Reject</button>
                            </div>
                        ))}
                    </div>
                ) : (num === 2 ? (
                  <div className="admin-show">
                  <table className="admin-table">
                      <thead>
                          <tr>
                              <th>Username</th>
                              <th>Email</th>
                              <th>Mobile no</th>
                              <th>Gender</th>
                              <th>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {details.map((de) => (
                              <tr key={de._id}>
                                  <td>{de.Username}</td>
                                  <td>{de.Email}</td>
                                  <td>{de.Mobile}</td>
                                  <td>{de.Gender}</td>
                                  <td>
                                      <button onClick={() => deleteuser(de)}>Delete User</button>
                                      <button onClick={() => setadmin(de)}>Make Admin</button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
                ) : null)}
            </div>
        </div>
    );
};

export default App;
