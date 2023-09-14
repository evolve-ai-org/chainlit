import { Box, Stack, Typography } from '@mui/material';

interface AuthTemplateProps {
  children: React.ReactNode;
  renderLogo?: React.ReactElement;
  title?: string;
}

const AuthTemplate = ({
  title,
  children,
  renderLogo
}: AuthTemplateProps): JSX.Element => {
  return (
    <Stack
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        height: '100vh',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={(theme) => ({
          backgroundColor: (theme) => theme.palette.background.paper,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          padding: theme.spacing(5, 5),
          width: '100%',
          height: '100%',

          [theme.breakpoints.up('sm')]: {
            maxWidth: '400px',
            height: 'auto',
            maxHeight: '90%'
          }
        })}
      >
        <Stack
          sx={{
            alignItems: 'center',
            gap: 3,
            marginBottom: 3
          }}
        >
          {renderLogo}
          {title ? (
            <Typography textAlign="center" color="text.primary">
              {title}
            </Typography>
          ) : null}
        </Stack>
        <Stack gap={1} paddingX={3}>
          {children}
        </Stack>
      </Box>
    </Stack>
  );
};

export { AuthTemplate };
