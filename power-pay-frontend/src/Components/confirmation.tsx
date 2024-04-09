import React from 'react';
import { useFormik } from 'formik';
import './style.css'
import { Outlet, Link } from "react-router-dom";

function Confirmation() {
    const formik = useFormik({
        initialValues: {
            pin: '',
        },
        onSubmit: () => {} // Placeholder onSubmit function
    });

    console.log(formik.values, formik.values);
    return (
        <div className="insert-pin">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='pin'>Enter Pin</label>
                <br></br>
                <input type="text" id="pin" name="pin" onChange={formik.handleChange} value={formik.values.pin} />
                <br></br>
                <div className="confirm">
                    <button type="submit">confirm</button>
                    <Link to={`/`}>
                    <button type="submit">cancel</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
export default Confirmation;