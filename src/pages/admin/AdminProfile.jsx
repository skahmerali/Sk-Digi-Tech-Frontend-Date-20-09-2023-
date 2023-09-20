import { useSelector } from 'react-redux';
import './profile.css'

const AdminProfile = () => {

    const { currentUser } = useSelector((state) => state.user);

    return (
        <div className='container'>
            <h1 className="heading">Profile Details</h1>
           <div className="name text"> <h1>Name:</h1> <span>{currentUser.name}</span></div>
            <div className="email text"> <h1>Email:</h1> <span>{currentUser.email}</span></div>
           <div className="school text"> <h1>School: </h1><span>{currentUser.schoolName}</span></div>
            
        </div>
    )
}

export default AdminProfile

