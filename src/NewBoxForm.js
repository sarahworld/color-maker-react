import React,{ useState } from "react";
import { v4 as uuid} from 'uuid';

const NewBoxForm = ({createBox}) => {

    const initialState = {
        width:"",
        height:"",
        backgroundColor:""
    }

    const [formData, setFormData]=useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]:value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("In here")
        
        createBox({...formData, id: uuid()})
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width"></label>
            <input
                type="text"
                value={formData.width}
                placeholder="width"
                onChange={handleChange}
                name="width"
            />

        <label htmlFor="height"></label>
            <input
                type="text"
                value={formData.height}
                placeholder="height"
                onChange={handleChange}
                name="height"
            />

        <label htmlFor="backgroundColor"></label>
            <input
                type="text"
                value={formData.backgroundColor}
                placeholder="backgroundColor"
                onChange={handleChange}
                name="backgroundColor"
            />
        <button>Add new Box!</button>
        
        </form>
    )
}

export default NewBoxForm;