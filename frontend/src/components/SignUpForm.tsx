import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Box, TextField, Button } from '@mui/material';
import { useHttp, useNotification } from '../hooks';
import { yupResolver } from '@hookform/resolvers/yup';

export const SignUpForm = () => {

  //TODO: Fix types
const formSchema: any = Yup.object({
  password: Yup.string()
    .required('Password is mandatory')
    .min(3, 'Password must be at least 3 characters long'),
  passwordConfirm: Yup.string()
    .required('Password confirmation is mandatory')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
});

const formOptions = { resolver: yupResolver(formSchema) };

  const showNotification = useNotification();
  const { request, error } = useHttp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const handlerSignUp = async ({ email, password }) => {
    try {
      const data = await request('/api/auth/signup', 'POST', {
        email: email,
        password: password,
      });
      showNotification({
        message: data.message,
      });
    } catch (e) {
      showNotification({
        message: error,
      });
    }
  };

  const onSubmit = data => {
    handlerSignUp(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mt={8} px={2} width={400}>
        <TextField
          required
          id="standard-required"
          label="Email"
          variant="standard"
          type="email"
          fullWidth
          error={errors['email'] ? errors['email'].message : ''}
          {...register('email', { required: true })}
        />
      </Box>
      <Box mt={4} px={2}>
        <TextField
          required
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          fullWidth
          error={errors['password'] ? errors['password'].message : ''}
          {...register('password', { required: true, min: 8 })}
        />
      </Box>
      <Box mt={4} px={2}>
        <TextField
          required
          id="standard-password-confirm-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          fullWidth
          error={errors['passwordConfirm'] ? errors['passwordConfirm'].message : ''}
          {...register('passwordConfirm', { required: true, min: 8 })}
        />
      </Box>
      <Box mt={4} px={2}>
        <Button variant="contained" style={{ background: '#9ea3f5', color: '#fff' }} type="submit">
          Sign up
        </Button>
      </Box>
    </form>
  );
};
