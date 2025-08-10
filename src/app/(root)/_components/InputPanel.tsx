"use client";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { ScanLine } from "lucide-react";

function InputPanel() {
  const { stdin, setStdin } = useCodeEditorStore();

  return (
    <div className="relative bg-[#181825] rounded-xl p-4 ring-1 ring-gray-800/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#1e1e2e] ring-1 ring-gray-800/50">
            <ScanLine className="w-4 h-4 text-green-400" />
          </div>
          <span className="text-sm font-medium text-gray-300">Input</span>
        </div>
      </div>

      {/* Input Area */}
      <div className="relative">
        <textarea
          className="relative bg-[#1e1e2e]/50 backdrop-blur-sm border border-[#313244] 
        rounded-xl p-4 w-full h-[200px] overflow-auto font-mono text-sm text-white
        focus:outline-none focus:ring-2 focus:ring-green-500"
          value={stdin}
          onChange={(e) => setStdin(e.target.value)}
          placeholder="Enter your input here..."
        />
      </div>
    </div>
  );
}

export default InputPanel;