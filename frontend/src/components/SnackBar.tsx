import { SnackbarProvider } from 'notistack';

type Props = {
  children: React.ReactNode;
};

export const SnackBar = ({ children }: Props ) => (
  <SnackbarProvider maxSnack={3} autoHideDuration={2500}>
    {children}
  </SnackbarProvider>
);
