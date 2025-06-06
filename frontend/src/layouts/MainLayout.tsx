import { Box, LinearProgress } from '@mui/material';

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  loading?: boolean;
};

export const MainLayout = ({ children, style, loading }: Props) => {
  return (
    <>
      {loading ? <LinearProgress /> : <Box mt="4px"></Box>}
      <Box
        px={2}
        sx={{
          minHeight: '100vh',
          backgroundImage: 'url(https://i.pinimg.com/originals/84/2a/1c/842a1cf0173273e5faa5b6d7a59210bc.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          ...style,
        }}
      >
        {children}
      </Box>
    </>
  );
};
