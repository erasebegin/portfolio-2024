export type ProjectCard = {
  title: string
  year?: string
  image: string
  // for featured sections only, this should be updated to an array of images eventually
  image2?: string
  description: string
  demoUrl?: string
  repoUrl?: string
  tech?: string[]
  modal?: string[]
}

type ProjectSectionInfo = {
  duration: string
  description: string
  tech: string[]
}

export type ProjectSection = {
  title: string
  subtitle?: string
  color: string
  dividerColor?: string
  buttonColor: string
  feature?: boolean
  sectionInfo?: ProjectSectionInfo
  cards: ProjectCard[]
  columns?: number
  externalUrl?: string
}

const data: ProjectSection[] = [
  {
    title: 'Savisoft',
    subtitle:
      'Leading a team to create large, complex software products for Guardians Ad Litem and similar court-centric roles in the German market',
    color: 'lightBlue',
    buttonColor: 'lightBlue',
    feature: true,
    sectionInfo: {
      duration: 'Sep 2022 - Dec 2024',
      description: `
        <p>For the past two years, I’ve led the development of a highly complex project, transforming it from an early-stage concept into a fully functional product, complete with advanced features. Initially, the project was little more than a collection of rough ideas and sketches. Together with the CEO, we mapped out the full scope, including technical architecture, data structures, and even the go-to-market strategy. Once the vision was clear, I took ownership of choosing the tech stack, designing the system architecture, and writing the core code that would serve as the foundation.</p>

        <p>As the project evolved, I oversaw the onboarding of market researchers, designers, illustrators, and developers, coordinating a multidisciplinary team while ensuring alignment with our overarching goals. With the CEO focused on other commitments, I took full responsibility for day-to-day decision-making and project management, consistently delivering detailed updates and driving the project forward.</p>

        <p>Navigating the complexities of this initiative required making tough, often critical decisions. While we faced unforeseen challenges, each hurdle presented a learning opportunity, and I worked to find solutions that kept us on track. Today, the project stands as a near-complete product and is slated for launch in early 2025. It’s a testament to the dedication, problem-solving, and strategic thinking that went into every stage of its development.</p>
      `,
      tech: ['next-js', 'github', 'chakra', 'prisma', 'supabase', 'react-query', 'stripe'],
    },
    cards: [
      {
        title: 'Savicase',
        year: '2023-2024',
        image: './images/savicase.jpg',
        image2: './images/savicase2.jpg',
        description:
          'A suite of tightly integrated tools that allows Verfahrensbeistände (guardians ad litem) and similar court workers to organise their data, make meaningful connections and expedite various processes such as letter writing and invoice generation',
        demoUrl: 'https://www.savicase.de/',
        tech: ['next-js', 'prisma', 'supabase', 'github', 'chakra', 'jira', 'react-query'],
        modal: [],
      },
    ],
  },
  {
    title: 'Rradar',
    subtitle: "Creating and maintaining supporting tools for Rradar's lawyers and their clients",
    color: 'darkBlue',
    dividerColor: 'lightBlue',
    buttonColor: 'blue',
    sectionInfo: {
      duration: 'Sep 2022 - Dec 2024',
      description:
        'As well as offering legal services, Rradar also has a suite of digital products and tools such as an AI assistant, a vast knowledge base of articles written by Rradar staff and tools for reporting workplace incidents. I was primarily responsible for developing and maintaining their AI assistant which had Android, iOS and web versions.',
      tech: ['react', 'next-js', 'github', 'jira', 'sass', 'react-native', 'vue', 'react-query'],
    },
    cards: [
      {
        title: 'Grace',
        year: '2023-2024',
        image: './images/grace.jpeg',
        description:
          "An AI chat assistant built on top of IBM's Watson that interprets natural language prompts and then traverses a vast database of internally created articles to extract relevant information",
        demoUrl: 'https://www.swanswaygarages.com/',
        tech: ['vue', 'nuxt', 'github', 'jira', 'sass', 'react-query'],
        modal: [
          'Worked with websockets to implement live chat functionality',
          'Translated designs to React Native code whilst navigating the marketing vs. development battlefield',
          'Implemented custom html renderer that can be controlled by the external application code by dynamically injecting ids into the html',
        ],
      },
      {
        title: 'Station',
        year: '2022-2024',
        image: './images/station.png',
        description:
          "A limited access collection of legal articles provided as part of rradar's legal insurance policy. I was part of a team tasked with rebuilding the legacy system in a more modern and performant stack.",
        demoUrl: 'https://station.rradar.com/',
        tech: ['react', 'rspack', 'github', 'jira', 'sass'],
        modal: [
          'Assisted in creation of custom framework built from the ground up using vanilla React and rspack',
          'Worked closely with design team and marketing team to come up with solutions to long-standing issues with previous version of site',
          'Built component diagrams for every page to have a clearer overview of required components and whether they would need to be available to a single component, a single page, site-wide, or included in our standard library to be used across all applications.',
        ],
      },
      {
        title: 'World Properties',
        year: '2022',
        image: './images/world-properties.png',
        description: 'Solo project cloning and customising a template to meet client needs',
        demoUrl: 'https://aabcars.pre.nexuspointdev.co.uk/',
        tech: ['react', 'stitches', 'github', 'jira', 'sass'],
        modal: [
          'Developed a responsive frontend for "World Properties," enabling users to browse, create, and update dynamic property values, such as the national minimum wage, with seamless integration into existing articles.',
          'Structured and styled the application using Stitches, opting for CSS-in-JS to enhance maintainability and collocate styles directly within components.',
          'Architected the file structure, optimizing for scalability and readability within an established project foundation.',
        ],
      },
    ],
  },
  {
    title: 'Nexus Point',
    subtitle: 'Creating ecommerce platforms and services for automotive retailers',
    color: 'lightBlue',
    columns: 5,
    dividerColor: 'darkBlue',
    buttonColor: 'lightBlue',
    sectionInfo: {
      duration: 'Feb 2022 - Aug 2022',
      description:
        'Nexus Point provides the do-it-all "Apex" platform that acts as a CRM, CMS and general admin platform for doing everything from managing inventory and the day-to-day operations of a dealership to updating content on Nexus Point\'s the ecommerce sites. My job was creation and maintenance of various websites for big and small clients.',
      tech: ['vue', 'nuxt', 'github', 'jira', 'sass'],
    },
    cards: [
      {
        title: 'Swansway Garages',
        year: '2022',
        image: './images/swansway.png',
        description:
          "An enormous undertaking that implemented a new and untested in-house site-builder in Nexus Point's bespoke CMS",
        demoUrl: 'https://www.swanswaygarages.com/',
        tech: ['vue', 'nuxt', 'github', 'jira', 'sass'],
        modal: [
          'Building components for use with in-house "page builder"',
          'Biggest UK client with more than 20 dealerships located across the UK',
          'Very tight deadlines with rapid prototyping and deployment',
        ],
      },
      {
        title: 'Sell Your Car in a Flash',
        year: '2022',
        image: './images/sell-your-car-in-a-flash.png',
        description: 'Valuation site incorporating complex user journey with many outcomes',
        demoUrl: 'https://www.sellyourcarinaflash.com/',
        tech: ['vue', 'nuxt', 'github', 'jira', 'sass'],
        modal: [
          'Tasked with total overhaul of valuation process',
          'Modernised and updated according to designs',
          'Incorporated file drag-and-drop',
          'Leveraged in-house custom framework and CMS to generate forms and styling',
        ],
      },
      {
        title: 'AAB Cars',
        year: '2022',
        image: './images/aab-cars.png',
        description: 'Solo project cloning and customising a template to meet client needs',
        demoUrl: 'https://aabcars.pre.nexuspointdev.co.uk/',
        tech: ['vue', 'nuxt', 'github', 'jira', 'sass'],
        modal: [
          'Leveraged custom in-house styling framework and design patterns',
          'Total overhaul of home hero design',
          'New bespoke components to meet client needs e.g. sticky valuation form',
          'implementing 3rd-party apis such as Trustpilot',
        ],
      },
      {
        title: 'UK Best Van Buyer',
        year: '2022',
        image: './images/uk-best-van-buyer.png',
        description:
          'Another solo project cloning and customising a previous project to meet client needs similar to AAB Cars',
        demoUrl: 'https://ukbestvanbuyer.com/',
        tech: ['vue', 'nuxt', 'github', 'jira', 'sass'],
        modal: [
          'First project at the company',
          "Opportunity to learn Nexus Point's in-house styling framework",
          'Significant changes and updates made to user journey including brand new features such as image uploads and email response journeys',
          'Worked directly with client to resolve concerns and create additional functionality',
        ],
      },
      {
        title: 'Holdcroft',
        year: '2022',
        image: './images/holdcroft.png',
        description:
          'Huge UK client with very high expectations regarding delivery time and quality',
        demoUrl: 'https://www.holdcroft.com/',
        tech: ['vue', 'nuxt', 'github', 'jira', 'sass'],
        modal: [
          'Brought in to address a huge list of QA issues',
          'Stringent deadline with rapid testing and deployment required',
          'Maintained excellent communication with leadership coworkers and QA staff',
          'Able to meet deadlines and expectations with zero modifications requested from QA',
        ],
      },
    ],
  },
  {
    title: 'Isha',
    subtitle: 'Designing and creating user experiences to coincide with events throughout the year',
    color: 'darkBlue',
    dividerColor: 'lightBlue',
    buttonColor: 'blue',
    columns: 5,
    sectionInfo: {
      duration: 'Feb 2021 - Present',
      description:
        'Working as part of a small agile React team we make user experiences to drop into the ishayoga.eu PHP behemoth. We make landing pages, critical infrastructure and user journeys to coincide with various events and programs throughout the year',
      tech: [
        'react',
        'styled-components',
        'node',
        'bootstrap',
        'bitbucket',
        'material-ui',
        'tailwind',
        'next-js',
      ],
    },
    cards: [
      {
        title: 'Yoga Veeras Portal',
        year: '2024',
        image: './images/yoga-veeras-portal.jpg',
        description:
          'A portal for yoga teachers to be able to download course materials to host online sessions',
        demoUrl: 'https://www.veeras.yoga',
        tech: ['next-js', 'tailwind', 'github', 'supabase'],
        modal: [
          'Planned, designed and built by myself',
          'Collaborated with several yoga features to build the best possible tool for their needs',
          'Uses Next App Router for improved code readability and project structure',
          'Utilises React Server Components to generate as much as possible on the server side',
          'Accommodates 6 languages with instant language switching using a system devised entirely by myself',
          'Uses a combination of storage buckets on Supabase in combination with Hygraph CMS to allow teachers to modify the site content themselves',
        ],
      },
      {
        title: 'Planet Champion Dashboard',
        year: '2022',
        image: './images/planet-champion-dashboard.png',
        description:
          'A social-media-like profile page backed by a dashboard that allows users to manage events and profile content',
        demoUrl: 'https://mypage.savesoil.cc/dashboard/#/',
        tech: ['react', 'styled-components', 'bitbucket', 'material-ui'],
        modal: [
          'Material UI paired with Emotion used for styling',
          'CRUD operations on SQL database using PHP-based REST backend',
          'Created entirely from scratch by two-person team including myself',
          'Created as SPA using Create React App',
          'Using Context API and localStorage for session persistence',
        ],
      },
      {
        title: 'Stay Connected',
        year: '2021',
        image: './images/isha-europe.png',
        description:
          'A drop-in react app to serve as the final stage of the user journey after attending a webinar.',
        repoUrl: 'https://github.com/erasebegin/yoga-veera-stay-connected',
        demoUrl: 'https://webinar-stay-connected.netlify.app/',
        tech: ['react', 'styled-components', 'bootstrap', 'github'],
        modal: [
          '5 languages (determined by query param)',
          'Provided critical functionality for live event management platform',
          'Integrated React apps inside a PHP website',
          'Pixel-perfect recreations of provided designs',
          'Note: some functionality broken due to lack of maintenance',
        ],
      },
      {
        title: 'New Year',
        year: '2021',
        image: './images/new-year.png',
        description:
          'A two-stage user journey created to coincide with the new year that resulted in 7 different outcomes',
        tech: ['react', 'styled-components', 'bootstrap', 'bitbucket'],
        modal: [
          'Designed and implemented a media viewing platform with collapsing accordion that allowed browsing and viewing of various kinds of media content including PDFs, articles and videos',
          'Very tight deadline to work to',
          'Total project ownership including designs',
          'Tight collaboration and coordination with second devloper',
          'Manually configured and deployed to Apache server via FTP',
        ],
      },
      {
        title: 'Join Now',
        year: '2021',
        image: './images/join-now.png',
        description:
          'A critical piece of infrastructure to connect users arriving from 8 different time zones to Google and Zoom meetings with support for 6 different languages',
        repoUrl: 'https://github.com/erasebegin/yoga-veera-session-welcome-page',
        demoUrl:
          'https://staging.ishayoga.eu/events/join/index.html?region=EU&lang=en&eventType=Yoga%20for%20Immunity&eventTitle=Yoga%20for%20Immunity&eventId=2456&tokenId=71d482b558bca08e1422cb8179e62426&regId=282&t=2022-09-20-15-00&tz=IST',
        modal: [
          'Multi-language support',
          'Provided critical functionality for live event management platform',
          'Integrated React apps inside a PHP website',
          'Pixel-perfect recreations of provided designs',
          'Complex time management logic to account for users from various time zones',
        ],
      },
    ],
  },
  {
    title: 'Apacio',
    subtitle:
      'Created pixel-perfect websites within small teams organised around Agile methodologies',
    color: 'lightBlue',
    dividerColor: 'darkBlue',
    buttonColor: 'lightBlue',
    sectionInfo: {
      duration: 'Jan 2021 - Sep 2021',
      description:
        'Creating websites for businesses of every size, our team of 6 would work closely together using an agile methodology with feature branches to tackle a range of projects',
      tech: [
        'next-js',
        'apollo',
        'styled-components',
        'wagtail',
        'github',
        'jira',
        'formik',
        'graphql',
        'stripe',
      ],
    },
    cards: [
      {
        title: 'Halder',
        year: '2021',
        description: 'Large project made in collaboration with partner design company Chaos',
        image: './images/halder.png',
        demoUrl: 'https://halder.eu',
        modal: [
          'Manipulating CMS data to implement a frontend with various kinds of article pages that could later be altered by the client',
          'Tough styling challenge with many complex layout requirements including sophisticated animated components',
          'Despite layout challenges, we still succeeded in making it fully responsive',
        ],
        tech: ['next-js', 'apollo', 'styled-components', 'wagtail', 'github', 'jira', 'graphql'],
      },
      {
        title: 'Cashmatters',
        year: '2021',
        description: 'Rebuilt original site from the ground up on a completely new tech stack',
        image: './images/cashmatters.png',
        demoUrl: 'https://www.cashmatters.org/',
        modal: [
          'Complete rebuild of large legacy site with just myself and one other team member on the front end',
          'Created complex layouts such as the grid accordion <a href="https://www.cashmatters.org/why-cash-matters-top-20-reasons-for-the-popularity-and-relevance-of-cash" rel="noopener noreferrer" target="_blank">found on this page</a>',
          'Rapid testing and deployment',
        ],
        tech: ['next-js', 'apollo', 'styled-components', 'wagtail', 'github', 'jira', 'graphql'],
      },
      {
        title: 'Aftercloud',
        year: '2021',
        description:
          'Created several user journeys as well as Stripe integration for recurring payments',
        image: './images/after-cloud.png',
        demoUrl: 'https://myaftercloud.com/',
        tech: [
          'next-js',
          'apollo',
          'styled-components',
          'wagtail',
          'github',
          'jira',
          'formik',
          'stripe',
        ],
        modal: [
          'Very short deadline to create a complex site that acts as a companion to the mobile app',
          'Due to time constraints the website was used to supplement parts of the app that were missing such as the payment gateway',
          'Created complex user journey that implemented custom Stripe forms using Formik',
        ],
      },
    ],
  },
  {
    title: 'Thinkdrops',
    subtitle:
      'Created portfolios, landing pages and ecommerce platforms for creative professionals',
    color: 'darkBlue',
    dividerColor: 'lightBlue',
    buttonColor: 'green',
    columns: 4,
    sectionInfo: {
      duration: 'Jan 2019 - Present',
      description:
        'Taking on contracts for small businesses to create blogs, landing pages and eCommerce platforms. Clients have included professionals from a variety of industries including audio production, graphic design and law',
      tech: [
        'gatsby',
        'styled-components',
        'contentful',
        'bulma',
        'graphql',
        'netlify',
        'react',
        'next-js',
        'chakra',
        'firebase',
      ],
    },
    cards: [
      {
        title: 'HAUPT',
        year: '2025',
        description: 'Landing page for upcoming musician HAUPT',
        image: './images/haupt.jpg',
        demoUrl: 'https://www.haupt.house/',
        repoUrl: 'https://github.com/erasebegin/haupt-music',
        tech: ['bun', 'netlify', 'react', 'tailwind'],
        modal: [
          'Designed by HAUPT (yes it is supposed to look janky!)',
          'First time using Bun, absolutely loved it',
          'Made the music carousel totally from scratch',
        ],
      },
      {
        title: 'Steiger Berlin',
        year: '2022',
        description:
          'Enormous project scope that has begun life as a blog and point of contact for a Family Lawyer',
        image: './images/steiger-berlin.png',
        demoUrl: 'https://steiger-berlin.netlify.app/',
        repoUrl: 'https://github.com/erasebegin/steiger-berlin',
        tech: ['styled-components', 'netlify', 'next-js', 'chakra', 'firebase'],
        modal: [
          'Completely designed, planned and implemented by myself',
          'Entirely custom CMS built from scratch using Firebase as the backend',
          'Clean modern designs created from scratch using Figma',
          'Large project scope, set to span CRM service and multiple ecommerce endeavours',
        ],
      },
      {
        title: 'Soulstamina',
        year: '2020',
        description:
          'Ecommerce platform created for designer and artist Soulstamina using Gatsby, Contentful, Bulma and a healthy dose of custom styling',
        image: './images/soulstamina.png',
        demoUrl: 'https://soulstamina-shop.netlify.app/',
        repoUrl: 'https://github.com/erasebegin/soulstamina-shop',
        tech: ['styled-components', 'netlify', 'react', 'bulma', 'contentful'],
        modal: [
          'Elegant self-designed frontend',
          'Bulma UI framework combined with custom Styled Components',
          'Snipcart checkout system',
          'Custom cart system',
        ],
      },
      {
        title: 'Lisna Music',
        year: '2019',
        description: 'Small landing page project for musician Lisna created using React',
        image: './images/lisna.png',
        demoUrl: 'https://lisna.netlify.app',
        repoUrl: 'https://github.com/erasebegin/lisna-music',
        tech: ['netlify', 'react'],
        modal: ['Self-designed frontend', 'Lightweight project with high-impact visuals'],
      },
      {
        title: 'Otherworld',
        year: '2019',
        description:
          'Blog, news and ecommerce platform for illustrator Otherworld Nomad to tie in with his graphic novel launch',
        image: './images/screenshot-otherworld.png',
        demoUrl: 'https://www.otherworldink.com',
        repoUrl: 'https://github.com/erasebegin/otherworld-ink',
        tech: ['netlify', 'gatsby', 'contentful', 'styled-components'],
        modal: [
          'Self-designed frontend',
          'Bespoke parallax animation on home hero',
          'Highly performant Gatsby static site',
          'Custom cart system',
          'Context API combined with localStorage for cart',
          'Paypal API for payments',
        ],
      },
    ],
  },
  {
    title: 'Personal',
    subtitle: 'All sorts of bits and bobs created for fun and learning',
    color: 'lightBlue',
    dividerColor: 'darkBlue',
    buttonColor: 'green',
    columns: 4,
    sectionInfo: {
      duration: 'Jan 2019 - Forever',
      description:
        "Putting the fun in function, these are the projects that have kept me busy in my downtime. I've dabbled with various technologies, but always kept my focus around React",
      tech: [
        'node',
        'styled-components',
        'mongo-db',
        'bootstrap',
        'sass',
        'netlify',
        'react',
        'firebase',
        'gatsby',
        'node',
      ],
    },
    cards: [
      {
        title: 'URL Shortener',
        year: '2021',
        description: 'A small project to get comfortable with the Firebase/Firestore API',
        image: './images/url_shortener.jpg',
        demoUrl: 'https://firebase-url-shortener.netlify.app/',
        repoUrl: 'https://github.com/erasebegin/url-shortener/',
      },
      {
        title: 'Github User Search',
        year: '2021',
        description: 'Search utility to find information and repositories of Github users by name',
        image: './images/github-search.png',
        demoUrl: 'https://git-user-searcher.netlify.app',
        repoUrl: 'https://github.com/erasebegin/git-user-search',
      },
      {
        title: 'Hacker News Front End',
        year: '2021',
        description:
          'A front end for the somewhat quirky Hacker News API showing the top 10 stories and a comment tree',
        image: './images/hacker-news-frontend.png',
        demoUrl: 'https://hacker-news-frontend.netlify.app/',
        repoUrl: 'https://github.com/erasebegin/hacker-news-frontend',
      },
      {
        title: 'Scrabble Letters',
        year: '2020',
        description:
          'A small web app that acts as a virtual scrabble letter bag for use in online classrooms',
        image: './images/scrabble.png',
        demoUrl: 'https://scrabble-letters.netlify.app',
        repoUrl: 'https://github.com/erasebegin/scrabble-letters',
      },
      {
        title: 'Weather Search',
        year: '2020',
        description:
          'Node Express weather API with a Handlebars front-end. Icons are all made by me ^_^',
        image: './images/weather.png',
        demoUrl: 'https://quick-weather-search.herokuapp.com/',
        repoUrl: 'https://github.com/erasebegin/weather-search',
      },
      {
        title: 'Necessary Products',
        year: '2019',
        description:
          'A spoof product page created as one of my first explorations in to front-end development',
        image: './images/necessary.png',
        demoUrl: 'https://erasebegin.github.io/necessary-products',
        repoUrl: 'https://github.com/erasebegin/necessary-products',
      },
      {
        title: 'Jotter',
        year: '2019',
        description:
          'A kind of PWA created in order to experiment with the localStorage browser functionality',
        image: './images/jotter.png',
        demoUrl: 'https://my-jotter.netlify.app/',
        repoUrl: 'https://github.com/erasebegin/jotter',
      },
      {
        title: 'Tyrex Unsurance',
        year: '2019',
        description:
          'Practicing CSS styling, specifically CSS grid by creating a spoof business page',
        image: './images/tyrex.png',
        demoUrl: 'https://erasebegin.github.io/tyrex-unsurance',
        repoUrl: 'https://github.com/erasebegin/tyrex-unsurance',
      },
    ],
  },
  {
    title: 'Illustration',
    color: 'green',
    dividerColor: 'lightBlue',
    buttonColor: 'yellow',
    columns: 3,
    externalUrl: 'https://illustration.thinkdrops.co.uk',
    cards: [
      {
        title: 'Crux',
        description:
          "Illustrations for a tutorial for Juxt's bitemporal database formerly known as Crux",
        demoUrl: 'https://illustration.thinkdrops.co.uk/blog/crux-tutorial/',
        image: './images/crux.png',
      },
      {
        title: 'Penguin School Projects',
        description: 'Earliest projects whilst studying at the Penguin Illustration School',
        demoUrl: 'https://illustration.thinkdrops.co.uk/blog/alien-sushi',
        image: './images/christmas.png',
      },
      {
        title: 'Boris',
        description: 'Cover artwork for Lisna track',
        demoUrl: 'https://illustration.thinkdrops.co.uk/blog/boris',
        image: './images/boris.png',
      },
    ],
  },
]

export default data
