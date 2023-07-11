import { json, redirect } from "react-router-dom";
<<<<<<< HEAD
=======

>>>>>>> bb22877cfb516828a72da52aeccfc32201977c43
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
<<<<<<< HEAD
    throw json({ message: "Unsupported mode." }, { status: 422 });
=======
    throw json({ message: "Unsupportd mode." }, { status: 422 });
>>>>>>> bb22877cfb516828a72da52aeccfc32201977c43
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

<<<<<<< HEAD
  if (response.status === 422 || response.data === 401) {
=======
  if (response.status === 422 || response.status === 401) {
>>>>>>> bb22877cfb516828a72da52aeccfc32201977c43
    return response;
  }

  if (!response.ok) {
<<<<<<< HEAD
    throw json({ message: "Could not authenticate user." }, { statur: 500 });
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem("token", token);

=======
    throw json({ message: "could not authenticate user" }, { status: 500 });
  }

>>>>>>> bb22877cfb516828a72da52aeccfc32201977c43
  return redirect("/");
}
