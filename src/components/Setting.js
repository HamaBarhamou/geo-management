import React from 'react';
import { useForm } from "react-hook-form";

const Setting = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <div>
            <h1>Rapport</h1>
            <h2>Setting</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
            <input type="submit" />
            
                <label> Depart :<input type="datetime-local" name="date_debut" /> </label>
                <label> fin :<input type="datetime-local" name="date_fin" /> </label>
                
            </form>
        </div>
    );
};

export default Setting;