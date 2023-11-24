export const projectsData = [
  {
    name: "qazini",
    nameSlug: "qazini",
    summary:
      "A job search friend querying RapidAPI, with Graphql and Postgres for backend ops",
    gradientStyle:
      "bg-gradient-to-br from-[#FFD3EB] via-[#ff98d0] to-[#ff229a]",
    fullDescription:
      "Qazini is a job search site built with lots of love by Lifen Creatives (the name of my company). It utilizes technologies including Node Graphql with Apollo, Postgres using pg ORM(Object Relational Mapper) with its instance hosted on Fly.io, React and RapidAPI.\nThe frontend queries RapidAPI's JSearch jobs provider service for the latest jobs, and receives 10 for a freemium plan. The received jobs array updates the jobs state in context, array mapped through and jobs displayed on jobs feed.\nApollo client enables for caching and managing the loading states. GraphQL errors thrown on the Apollo server backend are actionable on the frontend with Apollo client, mostly shown on toasts.\nThe backend comes in if the user wants to save jobs from the jobs feed. They'll need to create an account first because only a registered/signed in user will access the board page to manage their account and view the jobs they saved (user info and saved jobs fetched from Postgres). Since the saved jobs reside on the database and not freshly fetched from JSearch, some jobs may overlive their expiry dates, so the job card for saved jobs comes with extra functionalities including support for delete, an operation that's not available on jobs feed cards.\nThe application's filter values are autogenerated and also has support for sort and search.\nIt is still under development.",
    websiteLink: "https://qazini-jobs.vercel.app",
    gitHubLink: "https://github.com/pptrgi/qazini-jobs",
    images: [
      {
        source: "/images/projects/qazini/q-filters.png",
        text: "Autogenerated Filters",
      },
      {
        source: "/images/projects/qazini/q-about.png",
        text: "About",
      },
      {
        source: "/images/projects/qazini/q-cta.png",
        text: "CTA",
      },
      {
        source: "/images/projects/qazini/q-profile.png",
        text: "User's Board",
      },
      {
        source: "/images/projects/qazini/q-home.png",
        text: "Home",
      },
      {
        source: "/images/projects/qazini/q-contact.png",
        text: "Contact",
      },
    ],
    technologies: [
      "Apollo",
      "Graphql",
      "Postgres",
      "RapidAPI",
      "Node.js",
      "React",
      "Fly CLI",
      "JSON Web Tokens",
      "Context API",
    ],
    features: [
      "Apollo Graphql API",
      "Postgres DB on Fly",
      "Caching",
      "Actionable errors",
      "Fully responsive",
      "Authentication and authorization",
      "JWT protected routes",
      "Autogenerated filter values",
      "Sort and Search",
      "RapidAPI jobs provider",
    ],
  },
  {
    name: "nyumbaHub",
    nameSlug: "nyumbahub",
    summary:
      "A vacant houses finding service enjoying the MERN stack and vibrant minimalistic design",
    gradientStyle: "bg-gradient-to-bl to-[#00aeff] from-[#1e73be]",
    fullDescription:
      "NyumbaHub is a vacant houses finding service based in Kenya. It includes a non-relational database MongoDB, Node/Express.js RESTful API hosted as a serverless function, and a React frontend.\nThe API employs the MVC design pattern. It uses mongoose ODM (Object-Data Modelling) for db operations, JSON Web Token (JWT) to protect routes, and images are uploaded to cloudinary after modifications by multer and sharp.\nThe backend accepts URL query from a request to query the database and return filtered and/or sorted response data. It is a serverless function and has a UI to help users efficiently navigate through it.\nThe application's frontend includes an aesthetic, functional and easy to use fully responsive UI that observes the UI/UX design principles. It manages state including loading, success and error states thanks to Redux and redux toolkit. It has a number of navigation options including breadcrumbs, pagination, and ham menu for mobile. To enhance security, the frontend will privatize routes that need not be open.\nThe overall application also has support for filter & sort and search. Including a UI for both frontend and backend. Also present is the well-outlined terms of service and privacy policy.",
    websiteLink: "https://nyumbahub.vercel.app",
    gitHubLink: "https://github.com/pptrgi/nyumbahub-frontend",
    images: [
      {
        source: "/images/projects/nyumbahub/nh-home.png",
        text: "Home",
      },
      {
        source: "/images/projects/nyumbahub/nh-property-detail.png",
        text: "Detail Page",
      },
      {
        source: "/images/projects/nyumbahub/nh-change-password.png",
        text: "User Change Password",
      },
      {
        source: "/images/projects/nyumbahub/nh-property-cards.png",
        text: "Section Property Cards",
      },
      {
        source: "/images/projects/nyumbahub/nh-all-properties.png",
        text: "All Properties",
      },
      {
        source: "/images/projects/nyumbahub/nh-disclaimer-hook.png",
        text: "Disclaimer & Hook",
      },
      {
        source: "/images/projects/nyumbahub/nh-single-type-category.png",
        text: "Single Type / Category",
      },
      {
        source: "/images/projects/nyumbahub/nh-user-wishlist.png",
        text: "User Jerry's Wishlist",
      },
      {
        source: "/images/projects/nyumbahub/nh_backend.png",
        text: "Backend UI",
      },
    ],
    technologies: [
      "Node/Express.js",
      "React",
      "Mongoose",
      "Redux & Toolkit",
      "Mongodb",
      "Cloudinary",
      "Multer & Sharp",
      "Nodemailer",
      "EmailJS",
      "Cookie-parser",
      "Serverless-http",
      "JSON Web Token(JWT)",
      "Bcrypt",
      "Formik & Yup",
      "React Paginate",
    ],
    features: [
      "Serverless",
      "Authorization and authentication",
      "JWT protected routes",
      "MongoDB database",
      "Images upload",
      "State management",
      "Fully responsive",
      "Pagination",
      "Breadcrumbs",
      "Horizontal scrolling",
      "Dynamic pages titling",
      "Terms & Privacy",
      "URL encoded text and email",
      "Open Graph meta tags ",
      "Filter, sort & Search",
    ],
  },
  {
    name: "seedlings by mwalim",
    nameSlug: "seedlingsbymwalim",
    summary:
      "A seedlings e-commerce using Firebase authentication and Mpesa prompt for checkout",
    gradientStyle: "bg-gradient-to-r from-[#5267DF] to-[#9fadfd]",
    fullDescription:
      "Seedlings By Mwalim is an online seedlings selling site that is integrated with M-Pesa for the payment service. It is built with React on the frontend and the Node.js backend communicates with Safaricom's Daraja API to initiate the payment process.\nTo checkout, the user needs to sign in to their Google account using Sign-In With Popup provided by Firebase authentication. They then input their Safaricom phone number as 07… which is passed to the backend server together with the total amount.\nThe server initiates the payment process by sending a get request with basic authorization headers (base64-encoded Daraja account credentials) to Daraja API for authentication. If successful, the backend server receives an access token that'll be attached to the bearer auth headers making a post request with the data required by MPesa to process a payment request\ni.e. sender's and receiver's information, to the Daraja API endpoint responsible for processing these types of requests.\nThe API then sends an STK to the user's phone prompting them to enter their MPesa password to complete the transaction. After the user pays, a payment processing request is forwarded to MPesa by the API.\nThe application uses React Redux to manage the state, Tailwind for styling, and Canva to create the logo.",
    websiteLink: "https://seedlingsbymwalim.vercel.app",
    gitHubLink: "https://github.com/pptrgi/seedlings_by_mwalim_ecommerce_site",
    images: [
      {
        source: "/images/projects/seedling_by_mwalim/sbm-home.png",
        text: "Home",
      },
      {
        source: "/images/projects/seedling_by_mwalim/sbm-categories.png",
        text: "Seedling Categories",
      },
      {
        source: "/images/projects/seedling_by_mwalim/sbm-checkout.png",
        text: "Mpesa Checkout",
      },
      {
        source: "/images/projects/seedling_by_mwalim/sbm-user-signin.png",
        text: "Google Auth",
      },
      {
        source: "/images/projects/seedling_by_mwalim/sbm-seedling-detail.png",
        text: "Seedling Detail",
      },
    ],
    technologies: [
      "React",
      "Daraja API",
      "Firebase auth",
      "Redux",
      "Tailwind",
      "EmailJS",
      "Font Awesome",
      "Typed.js",
    ],
    features: [
      "Mpesa STK push checkout",
      "Sign-in with popup",
      "Typing simulation",
      "Swiper for products",
      "State persistence",
      "Hamburger menu",
      "EmailJS email service",
    ],
  },
  {
    name: "personal website",
    nameSlug: "personalwebsite",
    summary:
      "Meet me on my personal and portfolio website. It is developed with Next.js 14",
    gradientStyle: "bg-gradient-to-r from-titleColor to-titleColorDark",
    fullDescription:
      "My personal website developed with Next.js 14. I like to write my name as p.Gitonga on this site for simplicity, and also it looks nice that way (believe me it does).",
    websiteLink: "https://pgitonga.vercel.app",
    gitHubLink: "https://github.com/pptrgi/next-personal-website",
    images: [
      {
        source: "/images/projects/personal_website/np-home.png",
        text: "Hero",
      },
      {
        source: "/images/projects/personal_website/np-about.png",
        text: "About",
      },
      {
        source: "/images/projects/personal_website/np-projects.png",
        text: "Projects",
      },
      {
        source: "/images/projects/personal_website/np-project-detail.png",
        text: "Project Detail",
      },
    ],
    technologies: ["Next.js 14", "Tailwind", "Framer motion"],
    features: [
      "Minimalistic",
      "Code splitting",
      "SEO friendly",
      "Elegant",
      "Animated with framer",
      "Illustrations",
    ],
  },
];
