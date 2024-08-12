import {useState} from "react";
import styles from './Section11.css'

const Forms = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission (e.g., send data to an API)
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div>
                <label>
                    Name *
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Email *
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Phone *
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Address
                    <input
                        type="text"
                        name="address"
                        placeholder="Street Address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="addressLine2"
                        placeholder="Address Line 2"
                        value={formData.addressLine2}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="state"
                        placeholder="State / Province / Region"
                        value={formData.state}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="zip"
                        placeholder="ZIP / Postal Code"
                        value={formData.zip}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );




}

export default Forms