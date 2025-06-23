'use client';

import React from 'react';
import TextField from '@mui/material/TextField';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: Props) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label="Search Leads"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
