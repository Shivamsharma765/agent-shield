export function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 text-muted-foreground text-sm">
      <div className="typing-indicator flex gap-1">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span className="text-xs">AI is typing...</span>
    </div>
  );
}
