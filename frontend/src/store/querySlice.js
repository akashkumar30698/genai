import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuery: '',
  queryHistory: [],
  isLoading: false,
  error: null,
  results: [],
  suggestions: [
    'Show me the trend of API usage over the last week',
    'What are the most common user queries?',
    'Display error rate distribution by endpoint',
    'Compare response times across different models'
  ],
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setCurrentQuery: (state, action) => {
      state.currentQuery = action.payload;
    },
    addToHistory: (state, action) => {
      state.queryHistory.unshift(action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const {
  setCurrentQuery,
  addToHistory,
  setLoading,
  setError,
  setResults,
} = querySlice.actions;

export default querySlice.reducer;
