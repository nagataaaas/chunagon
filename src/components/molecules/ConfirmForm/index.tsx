import { Container, Paper, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { useState, VFC } from 'react';
import ConfirmRequest from '../../../models/ConfirmRequest';
import { Button } from '../../atoms/Button';
import { FormInput } from '../../atoms/FormInput';
import { useConfirm, useSignupUser } from '../../context/UserAuthContext';

const buttonStyle: SxProps<Theme> = {
  marginBottom: 8,
};

export const ConfirmForm: VFC = () => {
  const [number, setNumber] = useState('');
  const signupUser = useSignupUser();

  const confirm = useConfirm();

  const handlesignup = () => {
    if (signupUser) {
      const req: ConfirmRequest = {
        token: signupUser.token,
        number,
      };
      confirm(req);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">メールに届いた番号を入力</Typography>
        <FormInput
          type="number"
          placeholder="1234"
          label="Number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          margin="normal"
        />
        <Button value="Confirm" onClick={handlesignup} sx={buttonStyle} />
      </Paper>
    </Container>
  );
};
