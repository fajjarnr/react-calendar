import React from 'react';
import CreateEventBottom from './CreateEventBottom';
import SmallCalendar from './SmallCalendar';
import Labels from './Labels';

export default function Sidebar() {
  return (
    <aside className="border p-5 w-65">
      <CreateEventBottom />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
