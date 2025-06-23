import { faker } from '@faker-js/faker';

export interface Lead {
  id: string;
  name: string;
  company: string;
  department: string;
}

const departments = [
  'Sales',
  'Marketing',
  'Support',
  'Engineering',
  'Finance',
  'HR',
  'Operations',
];

export function generateLeads(count: number = 50): Lead[] {
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    company: faker.company.name(),
    department: faker.helpers.arrayElement(departments),
  }));
}

export const allDepartments = ['All', ...departments];
