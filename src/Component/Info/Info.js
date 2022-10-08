// import 'react-toastify/dist/ReactToastify.css'
// import { ToastContainer, toast } from 'react-toastify'
import './Info.css'


const Info = (props) => {

    const { getTime } = props
    let total = 0
    for (const dalivery of getTime) {
        total = total + parseInt(dalivery.time)
    }

    // const notify = () => toast("It's Very Hard", {
    //     position: toast.POSITION.TOP_CENTER
    // });
    return (
        <div>
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpc4ZL8BY12f9UuW2iZSFFL3sg883J_e8qdllEdQ&s" alt="" />
                <h2 className='text-info'>Yeanur Rahman</h2>
            </div>
            <div style={{ textAlign: 'center', margin: '8px' }}>
                <ul className='ul-cls p-4'>
                    <li className='btn-cls'>75kg Weight</li>
                    <li className='btn-cls'> 6.5 Height</li>
                    <li className='btn-cls'>23 Age</li>
                </ul>
            </div>
            <div className="add-break">
                <h2>Traffic Jam </h2>
                <ul style={{ textAlign: 'center' }} className='ul-cls'>

                </ul>
            </div>
            <div className="ex-details">
                <h2>Exercise Details</h2>
            </div>
            <div className="ex-time">
                <h4 className='text-muted'>Dalivery :  {total} Munites</h4>
                <h4 className='text-muted'>Jam Dhaka : </h4>
            </div>
            {/* <button className='btn btn-info' onClick={notify}>Dalivery Done</button>
            <ToastContainer /> */}
        </div>
    );
};

export default Info