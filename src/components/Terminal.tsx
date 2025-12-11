import { useEffect, useRef, useState } from "react";

type TerminalProps = {
  lines: string[];              // lines to type, in order
  typingSpeed?: number;         // ms per character
  lineDelay?: number;           // ms between finishing one line and starting next
  className?: string;
};

export default function Terminal({
  lines,
  typingSpeed = 30,
  lineDelay = 600,
  className = "",
}: TerminalProps) {
  const [visible, setVisible] = useState(true);
  const [minimized, setMinimized] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const currentLine = useRef(0);
  const currentChar = useRef(0);
  const typingTimeout = useRef<number | null>(null);

  useEffect(() => {
    // start typing from scratch whenever 'lines' changes
    resetTyping();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines]);

  useEffect(() => {
    startTyping();
    return cleanupTimeout;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedLines.length]);

  function resetTyping() {
    clearTypingTimeout();
    currentLine.current = 0;
    currentChar.current = 0;
    setDisplayedLines([]);
    // small delay to ensure useEffect triggers
    setTimeout(startTyping, 100);
  }

  function cleanupTimeout() {
    clearTypingTimeout();
  }

  function clearTypingTimeout() {
    if (typingTimeout.current) {
      window.clearTimeout(typingTimeout.current);
      typingTimeout.current = null;
    }
  }

  function startTyping() {
    // if all lines are displayed, stop
    if (currentLine.current >= lines.length) return;

    const lineToType = lines[currentLine.current];

    // initialize the line in displayedLines if not present
    setDisplayedLines((prev) => {
      if (prev[currentLine.current] !== undefined) return prev;
      const copy = [...prev];
      copy[currentLine.current] = "";
      return copy;
    });

    // type character-by-character
    function typeChar() {
      if (currentChar.current <= lineToType.length - 1) {
        setDisplayedLines((prev) => {
          const copy = [...prev];
          copy[currentLine.current] =
            (copy[currentLine.current] ?? "") + lineToType[currentChar.current];
          return copy;
        });
        currentChar.current += 1;
        typingTimeout.current = window.setTimeout(typeChar, typingSpeed);
      } else {
        // finished current line
        currentLine.current += 1;
        currentChar.current = 0;
        // delay before next line
        typingTimeout.current = window.setTimeout(() => {
          // ensure the next line is added as an empty string so UI updates
          setDisplayedLines((prev) => {
            const copy = [...prev];
            if (copy[currentLine.current] === undefined) copy[currentLine.current] = "";
            return copy;
          });
        }, lineDelay);
      }
    }

    // kick off
    typingTimeout.current = window.setTimeout(typeChar, typingSpeed);
  }

  if (!visible) return null;

  return (
    <div
      className={`${
        fullscreen ? "fixed inset-0 z-50 flex items-start justify-center p-8" : "relative"
      } ${className}`}
    >
      <div
        className={`w-full max-w-3xl bg-[#0b1020] rounded-2xl border border-white/10 shadow-xl overflow-hidden transition-all
                    ${minimized ? "h-14" : "h-72 md:h-96"} ${
          fullscreen ? "max-w-full h-full rounded-none" : ""
        }`}
        role="region"
        aria-label="Terminal"
      >
        {/* Header (buttons + title) */}
        <div
          className="flex items-center gap-3 px-4 py-3 bg-black/30 border-b border-white/5"
          style={{ WebkitBackdropFilter: "blur(4px)" }}
        >
          {/* window control buttons */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Close"
              onClick={() => setVisible(false)}
              className="w-3.5 h-3.5 rounded-full bg-red-500 flex items-center justify-center text-black/70 text-[10px] hover:scale-105 transition"
              title="Close"
            >
              ×
            </button>

            <button
              aria-label="Minimize"
              onClick={() => setMinimized((v) => !v)}
              className="w-3.5 h-3.5 rounded-full bg-yellow-400 flex items-center justify-center text-black/70 text-[10px] hover:scale-105 transition"
              title="Minimize"
            >
              –
            </button>

            <button
              aria-label="Expand"
              onClick={() => setFullscreen((v) => !v)}
              className="w-3.5 h-3.5 rounded-full bg-green-400 flex items-center justify-center text-black/70 text-[10px] hover:scale-105 transition"
              title="Expand"
            >
              ⤢
            </button>
          </div>

          {/* title */}
          <div className="ml-3 text-sm text-gray-300 font-medium select-none">
            Satvik@portfolio — bash
          </div>

          {/* spacer */}
          <div className="flex-1" />

          {/* optional right-aligned controls / copy */}
          <div className="text-xs text-gray-400 hidden md:block">➜ typing demo</div>
        </div>

        {/* Body */}
        <div
          className={`px-4 py-4 md:px-6 md:py-6 text-sm text-gray-200 font-mono leading-relaxed overflow-auto ${
            minimized ? "pointer-events-none opacity-0 h-0 p-0" : "opacity-100"
          }`}
          style={{ background: "linear-gradient(180deg,#071026, #04101a)" }}
        >
          <div className="space-y-2">
            {displayedLines.map((ln, idx) => (
              <div key={idx} className="flex gap-2 items-start">
                <span className="text-green-400">➜</span>
                <pre className="m-0 whitespace-pre-wrap break-words">{ln}</pre>
              </div>
            ))}

            {/* blinking cursor for the current typing line */}
            {currentLine.current < lines.length && !minimized && (
              <div className="flex gap-2 items-start">
                <span className="text-green-400">➜</span>
                <div className="inline-flex items-center">
                  <span className="mr-1 font-mono">
                    {displayedLines[currentLine.current] ?? ""}
                  </span>
                  <span
                    className="inline-block w-1 h-5 bg-gray-200 animate-pulse"
                    aria-hidden="true"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
