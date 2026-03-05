export const projects = [
  {
    title: 'Keepr',
    description: 'Keeper V3 is a Pinterest-style full stack web app I built from the ground up. Users can create and save "keeps" (image-based posts) organize them into personal vaults, and browse other users profiles. I built the entire backend in C# with .NET Core, designed the MySQL database schema with relational tables including a junction table for the vault-keep relationship, and wired it all together through a RESTful API. The frontend is built in Vue.js with component-based architecture and Auth0 for secure authentication.',
    image: '/images/1.png',
    tags: ['JavaScript', 'C#', 'MySQL', '.NET Core', 'REST API', 'MVC', 'Auth0', 'Vue.js'],
    source: 'https://github.com/juliopleon/keeprv3',
    visit: 'https://google',
    id: 0,
  },
  {
    title: 'E-Commerce Store',
    description: 'A fully functional ecommerce storefront with real Stripe payment processing and Sanity.io headless CMS for live product management. Built with Next.js and React Context for cart state.',
    image: '/images/ecommercehp.png',
    tags: ['React.js', 'Stripe', 'Sanity.io', 'Next.js'],
    source: 'https://github.com/juliopleon/ecommerce',
    visit: 'https://ecommerce-sanity-stripe-ibi5j4m9x-juliopleon.vercel.app/',
    id: 1,
  },
  {
    title: 'Breadit',
    description: "Breadit is a full-featured Reddit clone I built to push myself on a complex, production-grade application. It has everything you'd expect — users can create communities, post rich text and image content using an EditorJS-powered editor, upvote/downvote posts and comments, and search across communities in real time. I used Next.js with the App Router, Prisma ORM with a MySQL database, NextAuth for Google OAuth, Redis for caching, and UploadThing for image hosting.",
    tags: ['Next.js', 'TypeScript', 'MySQL', 'Prisma', 'Redis', 'NextAuth', 'TailwindCSS'],
    source: 'https://github.com/juliopleon/breadit-clone',
    visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'Titanic Survival Predictor',
    description: 'A machine learning classification model predicting Titanic passenger survival using KNN. Includes serious feature engineering, age bins, family size, fare bins, class-based median imputation & hyperparameter tuning via GridSearchCV with 5-fold cross-validation.',
    image: '/images/titanic2.png',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    source: 'https://github.com/juliopleon/titanic-scikit-learn',
    visit: 'https://github.com/juliopleon/titanic-scikit-learn',
    id: 3,
  },
];

export const TimeLineData = [
  // { year: 2017, text: 'Started my journey', },
  // { year: 2018, text: "Worked as Tech Support for Apple's Creative Applications", },
  // { year: 2021, text: 'Found a passion for learning Web Development', },
  // { year: 2022, text: 'Attended CodeWorks and shared my projects with the world', },
  { year: 2023, text: 'Graduated from CodeWorks Full-Stack Web Development', },
  { year: 2024, text: 'Started my Bachelor in Computer Science (AI Specialization)', },
  { year: 2026, text: 'Graduating with my Bachelor in Computer Science (AI Specialization)', },
];