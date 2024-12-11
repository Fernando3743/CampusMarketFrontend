import { useState } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setError("Please complete the CAPTCHA");
      return;
    }

    // Simulate user registration logic (replace with API call)
    if (name && email && password) {
      setSuccess("Account created successfully! Redirecting...");
      setError("");

      // Simulate a redirect after a short delay
      setTimeout(() => {
        window.location.href = "/sign-in";
      }, 2000);
    } else {
      setError("All fields are required.");
      setSuccess("");
    }
  };

  return (
    <div style={{ justifyContent: "center", display: "flex", alignItems: "center", height: "100vh" }}>
      <div style={{ width: "50%" }}>

        <div style={{ padding: 20 }} className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-3xl font-normal text-gray-900 mb-4">Create Account</h2>

          <form style={{ marginTop: 20 }} onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded">
                {success}
              </div>
            )}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

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
            </div>

            <div>
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

            <div>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-2 rounded-md border border-yellow-500 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Create Account
            </button>
          </form>

          <div style={{ marginTop: 20 }} className="mt-4 text-xs text-gray-600">
            <p>
              By creating an account, you agree to Campus Market's Conditions of Use and Privacy Notice.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 40 }} className="mt-4 text-center">
          <Link href="/sign-in">
            <a className="inline-block w-full bg-gray-100 text-gray-900 py-2 rounded-md border border-gray-300 hover:bg-gray-200">
              Already have an account? Sign In
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}