import {useState} from "react";
import React from "react";

const useForm = (callback) => {

    const [values, setValues] = useState({});

    const handleSubmit = event => {
        if (event) event.preventDefault();
        callback();
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
    }
};

export default useForm;