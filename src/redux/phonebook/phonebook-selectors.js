import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.phonebook.filter;
export const getContacts = state => state.phonebook.contacts;
export const getLoading = state => state.phonebook.loading;
export const getError = state => state.phonebook.error;
export const getFilteredContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizeFilter);
    });
  },
);
