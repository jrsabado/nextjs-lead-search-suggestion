'use client';

import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props {
  items: {
    name: string;
    company: string;
    department: string;
  }[];
}

export default function SuggestionList({ items }: Props) {
  if (items.length === 0) {
    return (
      <Typography variant="body2" align="center" color="text.secondary" sx={{ mt: 4 }}>
        No matching leads found.
      </Typography>
    );
  }

  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index} divider>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {item.company}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ({item.department})
            </Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
