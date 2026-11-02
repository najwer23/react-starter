import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';

// import styles from './Home.module.css';

export const Home = () => {
  useDocumentTitle('React Starter | Mariusz Najwer');

  return (
    <Grid layout="container" padding={'0 0 40px 0'} margin={0}>
      <main>
        <TextBox tag="h1" desktopSize={30} mobileSize={24} fontWeight={500}>
          React Starter
        </TextBox>

        <TextBox tag="p" desktopSize={16} mobileSize={14} fontWeight={400}>
          An open-source React starter kit by <a href={'https://najwer23.github.io/'}>Mariusz Najwer</a>. It comes with
          Vite, TypeScript, CSS Modules, PWA support and a ready-to-use design system, so you can start a new project
          without the setup work.
        </TextBox>

        <TextBox tag="p" desktopSize={16} mobileSize={14} fontWeight={400}>
          Source code:{' '}
          <a href={'https://github.com/najwer23/react-starter'} target="_blank" rel="noopener noreferrer">
            github.com/najwer23/react-starter
          </a>
        </TextBox>
      </main>
    </Grid>
  );
};
