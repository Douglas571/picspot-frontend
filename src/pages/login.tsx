import React, { useState, useRef, FocusEvent, SyntheticEvent } from 'react';

import {
  Box,
  Paper,
  Stack,
  TextField,
  Button,
  Divider,
  Typography,
  Link,
} from '@mui/material';

type UserCredentials = {
  nickname: string;
  password: string;
};

export default function Login(): JSX.Element {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    nickname: '',
    password: '',
  });

  function handleInput(evt: FocusEvent<HTMLInputElement>) {
    if (['nickname', 'password'].includes(evt.currentTarget.name)) {
      setUserCredentials({
        ...userCredentials,
        [evt.currentTarget.name]: evt.currentTarget.value,
      });
    }
    console.log("ERROR: the input doesn't contain a valid input name.");
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '500',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper sx={{ p: 5, mb: 2, maxWidth: '300px' }} variant="outlined">
          <Box sx={{ mb: 3, py: 5, textAlign: 'center' }}>
            <img src="/logo_striped.png" height={'50px'} />
          </Box>
          <Stack gap={2}>
            <TextField
              onBlur={handleInput}
              placeholder="Phone, nickname or email"
              name="nickname"
            />
            <TextField onBlur={handleInput} placeholder="Password" name="password" />
            <Button variant="contained" disableRipple disableElevation>
              Sing in
            </Button>
          </Stack>
          <Divider sx={{ mt: 3, mb: 3 }}></Divider>
          <Typography sx={{ textAlign: 'center' }}>
            <Link href="/recover" sx={{ textDecoration: 'none' }}>
              Do you forgot your password?
            </Link>
          </Typography>
        </Paper>

        <Paper variant="outlined" sx={{ p: 3, textAlign: 'center' }}>
          <Typography>
            don't you have an account?{' '}
            <Link href="/singup" sx={{ textDecoration: 'none' }}>
              Sing up
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
