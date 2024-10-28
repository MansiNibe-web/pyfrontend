
import React from "react";
import { useFormik } from "formik";
import axios from "axios";

const Adddata = () => {
  const formik = useFormik({
    initialValues: {
      id: '',         // int
      name: '',       // str
      location: '',   // str
      gametype: '',   // str
      duration: '',   // str
    },
    onSubmit: (values) => {
     
      axios.post('http://127.0.0.1:8080/add_sports', values)
        .then(response => {
          console.log("Form data submitted successfully:", response.data);
        })
        .catch(error => {
          console.error("Error submitting form data:", error.message);
        });
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="id">ID</label>
        <input
          id="id"
          name="id"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.id}
        />
      </div>

      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.location}
        />
      </div>

      <div>
        <label htmlFor="gametype">Game Type</label>
        <input
          id="gametype"
          name="gametype"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.gametype}
        />
      </div>

      <div>
        <label htmlFor="duration">Duration</label>
        <input
          id="duration"
          name="duration"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.duration}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Adddata;
