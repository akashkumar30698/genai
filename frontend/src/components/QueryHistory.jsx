import React from 'react';
import { History, ArrowRight } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentQuery } from '../store/querySlice';

export default function QueryHistory() {
  const dispatch = useDispatch();
  const queryHistory = useSelector((state) => state.query.queryHistory);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center gap-2 mb-4">
        <History className="h-5 w-5 text-gray-600" />
        <h2 className="text-lg font-semibold">Query History</h2>
      </div>
      <div className="space-y-2">
        {queryHistory.map((query, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-2 p-2 text-left hover:bg-gray-50 rounded transition-colors group"
            onClick={() => dispatch(setCurrentQuery(query))}
          >
            <span className="flex-1 text-gray-600 truncate">{query}</span>
            <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
        {queryHistory.length === 0 && (
          <p className="text-gray-500 text-sm">No queries yet</p>
        )}
      </div>
    </div>
  );
}
