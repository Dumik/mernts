import { Routes, Route } from 'react-router-dom'; // імпорт без перейменування
import { LinksPage, CreatePage, DetailsPage, AuthPage } from '../pages';
import { AUTH, CREATE, DETAILS, LINKS } from './path';

export const RoutesComponent = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path={LINKS} element={<LinksPage />} />
        <Route path={CREATE} element={<CreatePage />} />
        <Route path={`${DETAILS}/:id`} element={<DetailsPage />} />
        <Route path="*" element={<CreatePage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path={AUTH} element={<AuthPage />} />
      <Route path="*" element={<AuthPage />} />
    </Routes>
  );
};
