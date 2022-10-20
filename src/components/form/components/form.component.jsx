import React from "react";

import "../styles/form.styles.css";

const Form = ({ formData }) => {
    return (
        <form className="form">
            {formData.map(data => (
                data.type === "submit" 
                    ?
                        <button className="form-submit" key={data.id} onClick={data.onclick}>{data.text}</button> 
                    :
                        <label className="form-label" key={data.id}>
                            {data.text}
                            <input className="form-input" type="text" onChange={(e) => data.onchange(e.target.value)} />
                        </label>
            ))}
        </form>
    )
}

export default Form;