import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';

// import styles from './Home.module.css';

const TEXT_SIZE = 16;

const reasons = [
  {
    name: 'Start building on day one',
    text: 'Tooling, linting, testing, styling and deployment are already configured, so your first commit is a feature, not a setup. You skip hours of reading documentation and wiring tools together, and go straight to the part of the project that matters.',
  },
  {
    name: 'Fast feedback',
    text: 'Vite gives you an instant dev server with hot module replacement and quick production builds, and Vitest runs your unit and component tests with the same configuration. Changes show up in the browser in milliseconds.',
  },
  {
    name: 'Type safety everywhere',
    text: 'TypeScript is on from the start, so mistakes show up in your editor instead of in production. Typed components, hooks and props make refactoring safer and make the codebase easier to understand for new team members.',
  },
  {
    name: 'One tool for code quality',
    text: 'Biome formats and lints in a single fast tool, so the whole team writes code in the same style. There is no need to juggle separate ESLint and Prettier configurations that slowly drift apart.',
  },
  {
    name: 'Same setup on every machine',
    text: 'mise pins the Node.js and Yarn versions, which removes the "works on my machine" problem. A new developer clones the repository, runs one command and gets the exact same environment as the rest of the team and the CI server.',
  },
  {
    name: 'Installable and offline-ready',
    text: 'PWA support is built in, so your app can be installed on a phone or desktop and keep working with a weak connection. A web manifest and a service worker are already set up, which helps with repeat visits and perceived performance.',
  },
  {
    name: 'Styles that do not leak',
    text: 'CSS Modules scope every style to its component, so changing one screen never breaks another. Class names are generated automatically, which means no naming conflicts and no global stylesheet that grows out of control.',
  },
];

const techStack = [
  {
    name: 'React',
    text: 'the most popular library for building component-based user interfaces, used here with function components and hooks.',
  },
  {
    name: 'Vite',
    text: 'the build tool and dev server that makes development fast and produces optimized, tree-shaken bundles for production.',
  },
  {
    name: 'TypeScript',
    text: 'adds static types to JavaScript, catching bugs before the code runs.',
  },
  {
    name: 'Vitest',
    text: 'a fast test runner that shares the Vite configuration, so tests behave like the real app.',
  },
  {
    name: 'Biome',
    text: 'a single tool for formatting and linting JavaScript, TypeScript and CSS.',
  },
  {
    name: 'CSS Modules',
    text: 'locally scoped CSS that keeps component styles isolated and predictable.',
  },
  {
    name: 'PWA',
    text: 'a web manifest and service worker that make the app installable and able to work offline.',
  },
  {
    name: 'mise',
    text: 'a version manager that pins Node.js and Yarn, so every machine runs the same toolchain.',
  },
];

const designSystem = [
  {
    name: 'Grid',
    text: 'handles page layout, like the centered container with a maximum width that this page uses.',
  },
  {
    name: 'Typography',
    text: 'keeps headings and body text consistent through variants and appearances, instead of one-off font styles.',
  },
  {
    name: 'TextBox',
    text: 'sets text sizes separately for mobile and desktop, so copy stays readable on every screen.',
  },
];

const audience = [
  {
    name: 'Freelancers and agencies',
    text: 'who start many client projects and want the same reliable foundation every time.',
  },
  {
    name: 'Startups and small teams',
    text: 'who need to ship a first version quickly without giving up quality, testing or type safety.',
  },
  {
    name: 'Developers learning modern React',
    text: 'who want to see how a real project is structured with current tools and best practices.',
  },
  {
    name: 'Side projects and prototypes',
    text: 'that may grow into something bigger and should not need a rewrite later.',
  },
];

const faq = [
  {
    question: 'What is React Starter?',
    answer:
      'React Starter is a free, open-source boilerplate for building React applications. It combines Vite, TypeScript, Vitest, Biome, CSS Modules and PWA support with the najwer23morsels design system, so a new project is ready for development from the first minute.',
  },
  {
    question: 'Is React Starter free to use?',
    answer:
      'Yes. The source code is open and available on GitHub. You can clone it, use it for personal or commercial projects, and adapt it to your needs.',
  },
  {
    question: 'Why Vite instead of Create React App?',
    answer:
      'Vite starts the dev server almost instantly, updates the browser as you type and builds smaller production bundles. Create React App is no longer the recommended way to start a new React project, while Vite is actively maintained and widely adopted.',
  },
  {
    question: 'Can I use it without the najwer23morsels components?',
    answer:
      'Yes. The design system is optional. The build, testing, linting and PWA setup work on their own, so you can replace the components with your own or with another UI library.',
  },
  {
    question: 'Does it work as a Progressive Web App?',
    answer:
      'Yes. A web manifest and a service worker are included, so users can install the app on mobile and desktop, and parts of it keep working without a stable internet connection.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Clone the repository from GitHub, install the pinned Node.js and Yarn versions with mise, run yarn install, and start the dev server. The README describes every command, including tests, linting and production builds.',
  },
];

export const Home = () => {
  useDocumentTitle('React Starter | Vite, TypeScript and PWA Boilerplate | Mariusz Najwer');

  return (
    <Grid layout="container" widthMax={'900px'} padding={'0 20px 30px 20px'}>
      <header>
        <Typography variant="display">React Starter</Typography>

        <Typography variant="body">
          A free, open-source React boilerplate with Vite, TypeScript, CSS Modules, PWA support and a ready-to-use
          design system.
        </Typography>
      </header>

      <main>
        <section>
          <Typography variant="body">
            React Starter is an open-source React starter kit by{' '}
            <Typography href={'https://najwer23.github.io/'} variant={'link'}>
              Mariusz Najwer
            </Typography>
            . It gives you a modern React project template with Vite, TypeScript, Vitest, Biome, CSS Modules, PWA
            support and a reusable component library, so you can start a new web application without the setup work.
          </Typography>

          <Typography variant="body">
            Every new React project begins with the same chores: choosing a bundler, configuring TypeScript, setting up
            a test runner, agreeing on code style, adding a service worker and deciding how to organize styles. This
            starter does all of that for you with sensible defaults, so you can spend your time on features, users and
            design instead of configuration files.
          </Typography>
        </section>

        <section>
          <Typography variant="heading">Why use this React starter</Typography>

          <ul>
            {reasons.map(({ name, text }) => (
              <li key={name}>
                <TextBox mobileSize={TEXT_SIZE} desktopSize={TEXT_SIZE}>
                  <strong>{name}.</strong> {text}
                </TextBox>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <Typography variant="heading">Tech stack</Typography>

          <Typography variant="body">
            The starter uses a small set of well-supported tools that work together out of the box. Each one solves a
            specific problem, and none of them is hidden behind a custom wrapper, so you can read the documentation for
            any of them and apply it directly to your project.
          </Typography>

          <ul>
            {techStack.map(({ name, text }) => (
              <li key={name}>
                <TextBox mobileSize={TEXT_SIZE} desktopSize={TEXT_SIZE}>
                  <strong>{name}</strong> is {text}
                </TextBox>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <Typography variant="heading">A React design system included</Typography>

          <Typography variant="body">
            The UI is built with <em>najwer23morsels</em>, a collection of reusable React components made for
            consistent, scalable applications. Because every screen uses the same building blocks, the look stays
            uniform and a change to one component updates the whole app. This page is built from three of them:
          </Typography>

          <ul>
            {designSystem.map(({ name, text }) => (
              <li key={name}>
                <TextBox mobileSize={TEXT_SIZE} desktopSize={TEXT_SIZE}>
                  <strong>{name}</strong> {text}
                </TextBox>
              </li>
            ))}
          </ul>

          <Typography variant="body">
            The components are written in TypeScript, bundled for tree shaking, so you only ship what you use, and
            documented in Storybook, where you can try each one before adding it to your code.{' '}
            <Typography
              variant="link"
              href={'https://najwer23.github.io/najwer23morsels'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Browse the component library
            </Typography>
            .
          </Typography>
        </section>

        <section>
          <Typography variant="heading">Who is this starter for</Typography>

          <ul>
            {audience.map(({ name, text }) => (
              <li key={name}>
                <TextBox mobileSize={TEXT_SIZE} desktopSize={TEXT_SIZE}>
                  <strong>{name}</strong> {text}
                </TextBox>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <Typography variant="heading">Frequently asked questions</Typography>

          {faq.map(({ question, answer }) => (
            <article key={question}>
              <Typography variant="subheading">{question}</Typography>
              <Typography variant="body">{answer}</Typography>
            </article>
          ))}
        </section>

        <section>
          <Typography variant="heading">Get the source code</Typography>

          <Typography variant="body">
            React Starter is free and open source. Clone it, star it, report an issue or send a pull request on GitHub:{' '}
            <Typography
              variant="link"
              href={'https://github.com/najwer23/react-starter'}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/najwer23/react-starter
            </Typography>
          </Typography>
        </section>
      </main>
    </Grid>
  );
};
