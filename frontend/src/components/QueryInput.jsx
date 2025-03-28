import React, { useState } from 'react';
import { Search, Send } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuery, addToHistory, setLoading, setResults } from '../store/querySlice';

const mockApiCall = async (query) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return [
    { date: '2024-01', value: 65 },
    { date: '2024-02', value: 78 },
    { date: '2024-03', value: 89 },
    { date: '2024-04', value: 94 },
    { date: '2024-05', value: 102 },
  ];
};

export default function QueryInput() {
  const dispatch = useDispatch();
  const { currentQuery, suggestions } = useSelector((state) => state.query);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentQuery.trim()) return;

    dispatch(setLoading(true));
    dispatch(addToHistory(currentQuery));

    try {
      const results = await mockApiCall(currentQuery);
      dispatch(setResults(results));
    } catch (error) {
      console.error('Error processing query:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="relative w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <Search className="absolute left-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={currentQuery}
            onChange={(e) => dispatch(setCurrentQuery(e.target.value))}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Ask anything about your AI system's performance..."
            className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          />
          <button
            type="submit"
            className="absolute right-2 p-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={() => {
                dispatch(setCurrentQuery(suggestion));
                setShowSuggestions(false);
              }}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
