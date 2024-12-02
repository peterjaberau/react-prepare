export const boardItemI18nStrings: any = {
  dragHandleAriaLabel: 'Drag handle',
  dragHandleAriaDescription: 'Use Space or Enter to activate drag, arrow keys to move, Space or Enter to submit, or Escape to discard.',
  resizeHandleAriaLabel: 'Resize handle',
  resizeHandleAriaDescription: 'Use Space or Enter to activate resize, arrow keys to move, Space or Enter to submit, or Escape to discard.',
};



function createAnnouncement(operationAnnouncement: string, conflicts: readonly any[], disturbed: readonly any[]) {
  const conflictsAnnouncement = conflicts.length > 0 ? `Conflicts with ${conflicts.map((c) => c.data.title).join(', ')}.` : '';
  const disturbedAnnouncement = disturbed.length > 0 ? `Disturbed ${disturbed.length} items.` : '';
  return [operationAnnouncement, conflictsAnnouncement, disturbedAnnouncement].filter(Boolean).join(' ');
}


export const boardI18nStrings: any = {
  liveAnnouncementDndStarted(operationType: any) {
    return operationType === 'resize' ? 'Resizing' : 'Dragging';
  },
  liveAnnouncementDndItemReordered(op: any) {
    const columns = `column ${op.placement.x + 1}`;
    const rows = `row ${op.placement.y + 1}`;
    return createAnnouncement(`Item moved to ${op.direction === 'horizontal' ? columns : rows}.`, op.conflicts, op.disturbed);
  },
  liveAnnouncementDndItemResized(op: any) {
    const columnsConstraint = op.isMinimalColumnsReached ? ' (minimal)' : '';
    const rowsConstraint = op.isMinimalRowsReached ? ' (minimal)' : '';
    const sizeAnnouncement = op.direction === 'horizontal' ? `columns ${op.placement.width}${columnsConstraint}` : `rows ${op.placement.height}${rowsConstraint}`;
    return createAnnouncement(`Item resized to ${sizeAnnouncement}.`, op.conflicts, op.disturbed);
  },
  liveAnnouncementDndItemInserted(op: any) {
    const columns = `column ${op.placement.x + 1}`;
    const rows = `row ${op.placement.y + 1}`;
    return createAnnouncement(`Item inserted to ${columns}, ${rows}.`, op.conflicts, op.disturbed);
  },
  liveAnnouncementDndCommitted(operationType: any) {
    return `${operationType} committed`;
  },
  liveAnnouncementDndDiscarded(operationType: any) {
    return `${operationType} discarded`;
  },
  liveAnnouncementItemRemoved(op: any) {
    return createAnnouncement(`Removed item ${op.item.data.title}.`, [], op.disturbed);
  },
  navigationAriaLabel: 'Board navigation',
  navigationAriaDescription: 'Click on non-empty item to move focus over',
  navigationItemAriaLabel: (item: any) => (item ? item.data.title : 'Empty'),
} as any;
