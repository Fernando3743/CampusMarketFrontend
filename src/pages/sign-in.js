import { signIn } from "next-auth/client";
import { useState } from "react";
import Link from "next/link";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result.error) {
      window.location.href = "/";
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={{justifyContent: "center", display: "flex", alignItems: "center", height: "70vh"}}>
      <div style={{width: "50%"}}>

        <div style={{padding: 20}} className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-3xl font-normal text-gray-900 mb-4">Sign in</h2>
          
          <form style={{marginTop: 20}} onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded">
                {error}
              </div>
            )}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email 
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password 
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-2 rounded-md border border-yellow-500 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Continue
            </button>
          </form>
          
          <div style={{marginTop: 20}} className="mt-4 text-xs text-gray-600">
            <p>
              By continuing, you agree to Campus Market Conditions of Use and Privacy Notice.

            </p>
          </div>
        </div>
        
        <div style={{marginTop: 40}} className="mt-4 text-center">
        <Link href="/sign-up">
          <a className="inline-block w-full bg-gray-100 text-gray-900 py-2 rounded-md border border-gray-300 hover:bg-gray-200">
              Create A New Account
          </a>
        </Link>
        </div>
      </div>
    </div>
  );
}