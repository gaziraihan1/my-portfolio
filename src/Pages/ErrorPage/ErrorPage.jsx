import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 text-center px-4">
      <div className="max-w-md">
        <h1 className="text-9xl font-bold text-error">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Page Not Found</h2>
        <p className="text-base-content mt-2 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <button className="btn btn-primary">
            ⬅ Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
