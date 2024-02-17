import { useEffect, useState } from "react";
import InputElement from "./InputElement";

interface UserData {
  email: string;
  name: string;
  country: string;
  age: number;
  password: string;
}
interface Error {
  name: string;
  email: string;
  country: string;
  age: string;
  password: string;
}

const Fields = [
  {
    label: "Your Email",
    name: "email",
    placeholder: "Email@mail.com",
    type: "text",
  },
  {
    label: "Your Name",
    name: "name",
    placeholder: "enter your name",
    type: "text",
  },
  {
    label: "Your Country Name",
    name: "country",
    placeholder: "enter your country",
    type: "text",
  },
  {
    label: "Your Age",
    name: "age",
    placeholder: "enter your age",
    type: "number",
  },
  {
    label: "Password",
    name: "password",
    placeholder: "enter your password",
    type: "password",
  },
];

function SignupForm() {
  const initialValue = {
    name: "",
    email: "",
    country: "",
    age: 0,
    password: "",
  };

  const [User, setUser] = useState<UserData>(initialValue);
  const [FormError, setFormError] = useState<Error>({
    name: "",
    email: "",
    country: "",
    age: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const FormValidate = () => {
    const errors = {
      name: "",
      email: "",
      country: "",
      age: "",
      password: "",
    };
  
    // Perform validation for each field
    if (User.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (User.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(User.email)) {
      errors.email = "Invalid email format";
    }
    if (User.country.trim() === "") {
      errors.country = "Country is required";
    }
    if (User.age <= 0|| User.age >80) {
      errors.age = "Invalid Age";
    }
    if (User.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
  if(
    errors.name === "" &&
    errors.email === "" &&
    errors.country === "" &&
    errors.age === "" &&
    errors.password === ""
  ) {
    setButtonDisabled(false);
  } else {
    setButtonDisabled(true);
  }
    // Update the form error state
    setFormError(errors);
  };

  useEffect(() => {
    FormValidate();
  
  },[User]);
  return (
    <>
      <h2 className="text-3xl font-bold mb-5 text-center">Signup</h2>
      <form className="max-w-sm mx-auto">
        {Fields.map((field) => {
          return (
            <InputElement
              key={field.name}
              type={field.type}
              placeholder={field.placeholder}
              label={field.label}
              name={field.name}
              Data={User}
              setData={setUser}
              error={FormError}
            />
          );
        })}
        <button disabled={buttonDisabled} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${buttonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>Signup</button>
      </form>
    </>
  );
}

export default SignupForm;
