'use client';

import React, { useState, useEffect, useMemo } from 'react';
import SearchInput from './SearchInput';
import DepartmentFilter from './DepartmentFilter';
import SuggestionList from './SuggestionList';
import { generateLeads, Lead } from '@/utils/generateLeads';

export default function SearchSuggestions() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('All');

  useEffect(() => {
    setLeads(generateLeads(50));
  }, []);

  const filtered = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.company.toLowerCase().includes(search.toLowerCase());
      const matchesDept = department === 'All' || lead.department === department;
      return matchesSearch && matchesDept;
    });
  }, [search, department, leads]);

  return (
    <div className="space-y-4">
      <SearchInput value={search} onChange={setSearch} />
      <div style={{ marginTop: '1rem' }}>
        <DepartmentFilter value={department} onChange={setDepartment} />
      </div>
      <div style={{ minHeight: '500px', maxHeight: '500px', overflowY: 'auto', marginTop: '2rem' }}>
        <SuggestionList
        items={filtered.map((lead) => ({
            name: lead.name,
            company: lead.company,
            department: lead.department,
        }))}
        />
      </div>
    </div>
  );
}
