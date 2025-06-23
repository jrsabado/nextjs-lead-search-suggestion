'use client';

import React from 'react';
import { allDepartments } from '@/utils/generateLeads';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function DepartmentFilter({ value, onChange }: Props) {
  return (
    <TextField
      select
      label="Department"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
    >
      {allDepartments.map((dept) => (
        <MenuItem key={dept} value={dept}>
          {dept}
        </MenuItem>
      ))}
    </TextField>
  );
}
