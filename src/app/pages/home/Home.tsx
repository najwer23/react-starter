import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';

// import styles from './Home.module.css';

const TEXT_SIZE = 16;

const reasons = [
  {
    name: 'Start building on day one',
    text: 'Tooling, linting, testing, styling and deployment are already configured, so your first commit is a feature, not a setup.',
  },
  {
    name: 'Fast feedback',
    text: 'Vite gives you an instant dev server and quick production builds, and Vitest runs your tests with the same configuration.',
  },
  {
    name: 'Type safety everywhere',
    text: 'TypeScript is on from the start, so mistakes show up in your editor instead of in production.',
  },
  {
    name: 'One tool for code quality',
    text: 'Biome formats and lints in a single fast tool, so the whole team writes code in the same style.',
  },
  {
    name: 'Same setup on every machine',
    text: 'mise pins the Node.js and Yarn versions, which removes the "works on my machine" problem.',
  },
  {
    name: 'Installable and offline-ready',
    text: 'PWA support is built in, so your app can be installed on a phone or desktop and keep working with a weak connection.',
  },
  {
    name: 'Styles that do not leak',
    text: 'CSS Modules scope every style to its component, so changing one screen never breaks another.',
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

export const Home = () => {
  useDocumentTitle('React Starter | Mariusz Najwer');

  return (
    <Grid layout="container" widthMax={'900px'} padding={'0 20px 0px 20px'}>
      <Typography appearance="light" variant="display">
        React Starter
      </Typography>

      <Typography appearance="light" variant="body">
        An open-source React starter kit by <a href={'https://najwer23.github.io/'}>Mariusz Najwer</a>. It comes with
        Vite, TypeScript, CSS Modules, PWA support and a ready-to-use design system, so you can start a new project
        without the setup work.
      </Typography>

      <Typography appearance="light" variant="body">
        <strong>Why use this starter</strong>
      </Typography>

      <ul>
        {reasons.map(({ name, text }) => (
          <li key={name}>
            <TextBox mobileSize={TEXT_SIZE} desktopSize={TEXT_SIZE}>
              <strong>{name}.</strong> {text}
            </TextBox>
          </li>
        ))}
      </ul>

      <Typography appearance="light" variant="body">
        <strong>A design system included</strong>
      </Typography>

      <Typography appearance="light" variant="body">
        The UI is built with <em>najwer23morsels</em>, a collection of reusable React components made for consistent,
        scalable applications. Because every screen uses the same building blocks, the look stays uniform and a change
        to one component updates the whole app. This page is built from three of them:
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

      <Typography appearance="light" variant="body">
        The components are written in TypeScript, bundled for tree shaking, so you only ship what you use, and
        documented in Storybook, where you can try each one before adding it to your code.{' '}
        <a href={'https://najwer23.github.io/najwer23morsels'} target="_blank" rel="noopener noreferrer">
          Browse the component library
        </a>
        .
      </Typography>

      <Typography appearance="light" variant="body">
        Source code:{' '}
        <a href={'https://github.com/najwer23/react-starter'} target="_blank" rel="noopener noreferrer">
          github.com/najwer23/react-starter
        </a>
      </Typography>
    </Grid>
  );
};
