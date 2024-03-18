import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function DetailForm() {
  const history = useHistory();
  const initialValues = {
    name: "",
    DOB: "",
    photoUrl: "",
    birthPlace: "",
    CareerDescription: "",
    numberOfMatches: "",
    score: "",
    fifties: "",
    centuries: "",
    wickets: "",
    average: "",
  };
  const submitHandler = (data) => {
    axios
      .post("http://localhost:3001/playerDetail", data)
      .then(() => {
        console.log("posted");
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    DOB: Yup.date().required(),
    photoUrl: Yup.string().required(),
    birthPlace: Yup.string().required(),
    CareerDescription: Yup.string().required(),
    numberOfMatches: Yup.number().required(),
    score: Yup.number().required(),
    fifties: Yup.number().required(),
    centuries: Yup.number().required(),
    wickets: Yup.number().required(),
    average: Yup.number().required(),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        <div>
          <Form>
            <div>
              <h1></h1>
              <p></p>
            </div>
            <label>Name</label>
            <ErrorMessage
              name="name"
              component="span"
              className="text-red-800"
            />
            <Field
              id="inputDetailForm"
              name="name"
              placeholder="Full Name"
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label>Date Of Birth</label>
            <ErrorMessage
              name="DOB"
              component="span"
              className="text-red-800"
            />
            <Field
              type="date"
              id="inputDetailForm"
              name="DOB"
              placeholder="Date of Birth"
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label> Photo Url</label>
            <ErrorMessage
              name="photoUrl"
              component="span"
              className="text-red-800"
            />
            <Field
              id="inputDetailForm"
              name="photoUrl"
              placeholder="Photo Url"
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label>Birth Place</label>
            <ErrorMessage
              name="birthPlace"
              component="span"
              className="text-red-800"
            />
            <Field
              id="inputDetailForm"
              name="birthPlace"
              placeholder="birthPlace"
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label>Career Description</label>
            <ErrorMessage
              name="careerDescription"
              component="span"
              className="text-red-800"
            />
            <Field
              type="text"
              id="inputDetailForm"
              name="CareerDescription"
              placeholder="Career Description"
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label>Number of Matches</label>
            <ErrorMessage
              name="numberOfMatches"
              component="span"
              className="text-red-800"
            />
            <Field
              type="number"
              id="inputDetailForm"
              name="numberOfMatches"
              placeholder="Number Of Matches"
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label>Score</label>
            <ErrorMessage
              name="score"
              component="span"
              className="text-red-800"
            />
            <Field
              type="number"
              id="inputDetailForm"
              name="score"
              placeholder="Score"
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label>Fifties</label>
            <ErrorMessage
              name="fifties"
              component="span"
              className="text-red-800"
            />
            <Field
              type="number"
              id="inputDetailForm"
              name="fifties"
              placeholder="Fifties"
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label>Centuries</label>
            <ErrorMessage
              name="centuries"
              component="span"
              className="text-red-800"
            />
            <Field
              type="number"
              id="inputDetailForm"
              name="centuries"
              placeholder="Centuries"
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label>Wickets</label>
            <ErrorMessage
              name="wickets"
              component="span"
              className="text-red-800"
            />
            <Field
              type="number"
              id="inputDetailForm"
              name="wickets"
              placeholder="Wickets"
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label>Average</label>
            <ErrorMessage
              name="average"
              component="span"
              className="text-red-800"
            />
            <Field
              type="number"
              id="inputDetailForm"
              name="average"
              placeholder="Average Score"
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="shadow hover:bg-blue-400 py-2 px-4 rounded text-white font-bold focus:outline-none focus:shadow-outline"
            >
              SUBMIT
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  );
}

export default DetailForm;
