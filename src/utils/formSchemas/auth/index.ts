import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const loginValidationSchema = () =>
  yupResolver(
    Yup.object().shape({
      phone: Yup.string().required(),
      password: Yup.string()
        .required('').max(10)
        .min(8, '')
        .matches('')
        .matches('')
        .matches('')

    }),
  );

export const signupValidationSchema = () =>
  yupResolver(
    Yup.object().shape({
      firstName: Yup.string().required(""),
      lastName: Yup.string().required(""),
      phone: Yup.string().min(8, '')
        .required(""),
      password: Yup.string()
        .required('').max(10)
        .min(8, 'Minimum eight characters  and miximum ten characters, at least one uppercase letter, one lowercase letter and one number')
        .matches(/(?=.*[a-z])/, 'one lowercase letter')
        .matches(/(?=.*[A-Z])/, 'one uppercase letter')
        .matches(/(?=.*\d)/, 'one digit letter')

    }),
  );
export const newPassword = () =>
  yupResolver(
    Yup.object().shape({
      confirmPassword: Yup.string()
        .required('').max(10)
        .min(8, 'Minimum eight characters  and miximum ten characters, at least one uppercase letter, one lowercase letter and one number')
        .matches(/(?=.*[a-z])/, 'one lowercase letter')
        .matches(/(?=.*[A-Z])/, 'one uppercase letter')
        .matches(/(?=.*\d)/, 'one digit letter'),
      newPassword: Yup.string()
        .min(8, "")
        .required('')
        .oneOf([Yup.ref('confirmPassword')], ('Password Does Not Match')),
    }),
  );

export const dummy = () => { };
