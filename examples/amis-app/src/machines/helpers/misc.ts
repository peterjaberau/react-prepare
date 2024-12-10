export const getTotalDuration = (entries: any[]): number => {
  return entries.reduce((total: number, entry: any) => {
    const diff = new Date(entry.end_time).getTime() - new Date(entry.start_time).getTime();
    return total + diff;
  }, 0);
};


export const getEntriesGroupedByDate = (entries: any) => {
  const formatter = new Intl.DateTimeFormat('default', { dateStyle: 'medium' });
  const groupedEntries = entries
    .toReversed() // Entries are sorted by id which is ascending, so we need to reverse them
    .reduce((grouped: any, entry: any) => {
      const date = formatter.format(new Date(entry.start_time));
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(entry); // Order of object keys is not guaranteed but YOLO
      return grouped;
    }, {});
  return Object.entries(groupedEntries)
    .map(([date, dayEntries]: any) => [
      date,
      dayEntries.toReversed(), // Day entries are descending after being grouped, reverse them
      getTotalDuration(dayEntries)
    ]);
};
