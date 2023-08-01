import React, { CSSProperties } from 'react';
import { TextField } from '@mui/material';

interface TextInputFieldProps {
  type: string;
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  style?: CSSProperties;
  className?: string;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  type,
  id,
  name,
  label,
  value,
  onChange,
  required = false,
  style,
  className,
}) => {
  return (
    <TextField
      type={type}
      id={id}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      required={required}
      style={style}
      className={className}
      fullWidth
      InputLabelProps={{ variant:'filled' }}
    />
  );
};

export default TextInputField;
