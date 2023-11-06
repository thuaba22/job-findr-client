import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mb-20 p-5">
        <h1 className="text-4xl font-bold text-center mb-5">My Blog</h1>

        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            What is an access token and refresh token?
          </h2>
          <p>
            An access token is a string of characters used to authenticate a
            user to a specific resource, like a web application or API. It
            provides limited access rights and is used to access protected
            resources without user credentials. Access tokens have a short
            lifespan, typically minutes to hours, for security.
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-4">
            How do they work and where should we store them on the client-side?
          </h2>
          <p>
            Access tokens are obtained during user login and used for making
            authenticated requests to the server. When they expire, refresh
            tokens are used to obtain new access tokens. It&#39;s crucial to
            securely store tokens on the client-side. You can use HTTP cookies
            with HttpOnly and Secure flags for secure storage. Alternatively,
            you can use web storage (localStorage or sessionStorage) but be
            aware that it&#39;s less secure due to potential XSS attacks.
          </p>

          <h2 className="text-2xl font-semibold mt-4 mb-4">
            What is Express.js and Nest JS?
          </h2>
          <p>
            Express.js is a minimal and flexible Node.js web application
            framework designed for building web applications and APIs. Nest JS
            is a Node.js framework built on top of Express.js. It uses
            TypeScript and follows a modular architecture, making it powerful
            for building server-side applications.
          </p>

          <h2 className="text-2xl font-semibold mt-4 mb-4">
            Explain your code
          </h2>
          <p>
            To explain your code, provide detailed documentation or comments
            that describe each part&#39;s purpose. Include explanations of
            variables, functions, and the code&#39;s overall structure. Ensure
            your explanation is clear and comprehensive so that other developers
            can understand and work with your code effectively.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
