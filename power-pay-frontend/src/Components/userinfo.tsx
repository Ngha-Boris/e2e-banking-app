import React from 'react';
import { useFormik } from 'formik';
import { Outlet, Link } from "react-router-dom";
import './style.css'
import FakeAapi from './fakeaapi';
function UserInfo() {
    const formik = useFormik({
        initialValues: {
            phone: '',
            amount: ''
        },
        onSubmit: () => {} // Placeholder onSubmit function
    });

    console.log(formik.values, formik.values);
    return (
        <div className='userinfo'>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='phone'>Phone Number</label>
        <FakeAapi Phone={formik.values.phone} />
                <br></br>
                <input type="text" id="phone" name="phone" onChange={formik.handleChange} value={formik.values.phone} />
                <br></br>

                <label htmlFor='amount'>Amount to send</label>
        <FakeAapi Phone={formik.values.phone} />
                <br></br>
                <input type="text" id="amount" name="amount" onChange={formik.handleChange} value={formik.values.amount} />
                <Link to={`/UserInfo/Comfirmation/`}>
                <div>
                    <button type="submit">Send</button>
                </div>
                </Link>
            </form>
        </div>
    )
}

export default UserInfo;