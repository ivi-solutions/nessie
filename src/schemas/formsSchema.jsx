const formsSchema = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    required: true,
    placeholder: 'Enter your first name',
    validation: {
      required: 'First Name is required',
      pattern: {
        value: /^[A-Za-z]+$/,
        message: 'First name must contain only letters'
      }
    }
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    required: true,
    placeholder: 'Enter your last name',
    validation: {
      required: 'Last Name is required',
      pattern: {
        value: /^[A-Za-z]+$/,
        message: 'Last name must contain only letters'
      }
    }
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    required: true,
    placeholder: 'Enter your email',
    validation: {
      required: 'Email is required',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Please enter a valid email address'
      }
    }
  },
  {
    name: 'acceptTerms',
    label: 'I accept the terms and conditions',
    type: 'checkbox',
    required: true,
    validation: {
      required: 'You must accept the terms and conditions'
    }
  }
];

export default formsSchema;