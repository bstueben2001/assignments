import { createContext, useContext, useState } from 'react';

export const CATEGORIES = [
  { id: 'health',        label: 'Health',        color: '#4caf82' },
  { id: 'battle',        label: 'Battle',        color: '#e05c5c' },
  { id: 'diplomacy',     label: 'Diplomacy',     color: '#5b8de8' },
  { id: 'economic',      label: 'Economic',      color: '#d4a017' },
  { id: 'romantic',      label: 'Romantic',      color: '#d46fa0' },
  { id: 'entertainment', label: 'Entertainment', color: '#9b6bd4' },
  { id: 'general',       label: 'General',       color: '#8888a0' },
];

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [calendarEvents, setCalendarEvents] = useState([]);

  function addCalendarEvent(event) {
    setCalendarEvents(prev => [...prev, { ...event, id: crypto.randomUUID() }]);
  }

  function editCalendarEvent(id, updates) {
    setCalendarEvents(prev => prev.map(e => e.id === id ? { ...e, ...updates } : e));
  }

  function deleteCalendarEvent(id) {
    setCalendarEvents(prev => prev.filter(e => e.id !== id));
  }

  return (
    <AppContext.Provider value={{ calendarEvents, addCalendarEvent, editCalendarEvent, deleteCalendarEvent }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
