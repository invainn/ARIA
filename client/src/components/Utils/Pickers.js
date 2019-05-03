import React from 'react';
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
} from 'material-ui-pickers';

export const DatePickerField = ({ field, form, ...other }) => {
  const currentError = form.errors[field.name];
  return (
    <DatePicker
      keyboard
      clearable
      disablePast
      name={field.name}
      value={field.value}
      format="dd/MM/yyyy"
      helperText={currentError}
      error={Boolean(currentError)}
      onError={(_, error) => form.setFieldError(field.name, error)}
      onChange={date => form.setFieldValue(field.name, date, true)}
      mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
      {...other}
    />
  );
};

export const TimePickerField = ({ field, form, ...other }) => {
  const currentError = form.errors[field.name];
  return (
    <TimePicker
      keyboard
      clearable
      disablePast
      name={field.name}
      value={field.value}
      format="hh:mm A"
      helperText={currentError}
      error={Boolean(currentError)}
      onError={(_, error) => form.setFieldError(field.name, error)}
      onChange={date => form.setFieldValue(field.name, date, true)}
      mask={value => (value ? [/\d/, /\d/, ': ', /\d/, /\d/, ' ', /a|p/i, 'M'] : [])}
      {...other}
    />
  );
};

export const DateTimePickerField = ({ field, form, ...other }) => {
  const currentError = form.errors[field.name];
  return (
    <DateTimePicker
      clearable
      disablePast
      name={field.name}
      value={field.value}
      format="MM/DD/YYYY hh:mm A"
      helperText={currentError}
      error={Boolean(currentError)}
      onError={(_, error) => form.setFieldError(field.name, error)}
      onChange={date => form.setFieldValue(field.name, date, true)}
      {...other}
    />
  );
};
