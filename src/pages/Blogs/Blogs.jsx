/* eslint-disable react/no-unescaped-entities */
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
            tokens are used to obtain new access tokens. It's crucial to
            securely store tokens on the client-side. You can use HTTP cookies
            with HttpOnly and Secure flags for secure storage. Alternatively,
            you can use web storage (localStorage or sessionStorage) but be
            aware that it's less secure due to potential XSS attacks.
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
            The project is a comprehensive job listing and management platform
            developed using React. Its primary objective is to enable users to
            create, update, and browse job listings effortlessly. Job seekers
            can apply for the posted jobs, while employers can review and manage
            job applications. The core of the project revolves around React, and
            it interacts with server APIs to facilitate data management,
            fetching and posting job-related information. In terms of its
            structure, the project directory, 'src,' houses the primary source
            code components. It encompasses distinct sections, such as
            'components' for React components, 'providers' to manage context
            providers, 'pages' that define the main application pages, 'utils'
            for utility functions, 'App.js' as the central application entry
            point, and 'index.js' that handles application rendering and
            routing. The core components of the project include 'JobList,' which
            displays job listings, 'JobDetails,' providing in-depth job
            information, 'JobForm' for creating and updating job listings, and
            'AuthContext' for handling user authentication state. API
            integration plays a crucial role in the project, communicating with
            a custom RESTful API through endpoints like '/jobs' and
            '/applications.' React Router governs client-side routing with
            routes like '/', '/job/:id,' and '/my-jobs.' React context is
            employed for state management, storing job data and authentication
            status. Form handling relies on controlled components, and Tailwind
            CSS contributes to the project's responsive and minimalistic design.
            The project also features error handling for API requests and form
            validation, along with deployment on Vercel, incorporating
            continuous integration for automatic deployments from the main
            branch. Future plans include refining API requests for larger
            datasets, introducing user profile management, and implementing
            notifications for job applications.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
