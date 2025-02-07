import { useState } from "react";
// import { Link } from "react-router-dom";

export default function SignIn({ switchToSignUp }){
  
  const [formData, setFormData] = useState({ 
    email: "", 
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const{name, type, checked, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Data:", formData);
  };

  return(
    <div className="w-full max-w-md bg-white shadow-[0px_7px_29px_rgba(100,100,111,0.2)] rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2"
            />
            Remember Me
          </label>
          <a href="#" className="text-blue-500 text-sm hover:underline">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Sign In
        </button>
      </form>
      <p className="text-sm text-center text-gray-600 mt-4">
        Don't have an account?{" "}
        <button onClick={switchToSignUp} className="text-blue-500 hover:underline">
          Sign Up
        </button>
      </p>
    </div>
  );
}