'use client';

import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SearchSuggestions from '@/components/SearchSuggestions';

export default function SearchSuggestionsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          Lead Finder
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" gutterBottom>
          Search your leads by name, company or department
        </Typography>
        <SearchSuggestions />
      </Paper>
    </Container>
  );
}
