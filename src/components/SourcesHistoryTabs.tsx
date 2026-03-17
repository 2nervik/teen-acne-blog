"use client";

import { useState } from "react";

interface Source {
  title: string;
  url?: string;
}

export default function SourcesHistoryTabs({
  sources,
  writtenDate,
  reviewedDate,
  author,
  reviewedBy,
  reviewerCredentials,
}: {
  sources?: Source[];
  writtenDate: string;
  reviewedDate?: string;
  author: string;
  reviewedBy?: string;
  reviewerCredentials?: string;
}) {
  const [tab, setTab] = useState<"sources" | "history">("sources");

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex gap-6 mb-6 border-b border-[#dcdbdb]">
        <button
          onClick={() => setTab("sources")}
          className={`flex items-center gap-1.5 pb-3 text-[14px] font-bold uppercase tracking-wide border-b-2 transition-colors ${
            tab === "sources"
              ? "text-[#02838d] border-[#02838d]"
              : "text-[#767474] border-transparent hover:text-[#231f20]"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Sources
        </button>
        <button
          onClick={() => setTab("history")}
          className={`flex items-center gap-1.5 pb-3 text-[14px] font-bold uppercase tracking-wide border-b-2 transition-colors ${
            tab === "history"
              ? "text-[#02838d] border-[#02838d]"
              : "text-[#767474] border-transparent hover:text-[#231f20]"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          History
        </button>
      </div>

      {/* Sources content */}
      {tab === "sources" && (
        <div>
          <p className="text-[15px] text-[#767474] mb-5 leading-relaxed">
            Our experts continually monitor the health and wellness space, and
            we update our articles when new information becomes available.
          </p>
          {sources && sources.length > 0 && (
            <ul className="space-y-4">
              {sources.map((source, i) => (
                <li
                  key={i}
                  className="relative pl-5 text-[15px] leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#231f20]"
                >
                  <span className="text-[#231f20]">{source.title}</span>
                  {source.url && (
                    <a
                      href={source.url}
                      className="block text-[#02838d] hover:text-[#08565c] break-all mt-0.5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.url}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* History content */}
      {tab === "history" && (
        <div className="relative pl-6 border-l-2 border-[#02838d] space-y-5">
          <div className="relative">
            <div className="absolute -left-[31px] top-[5px] w-[12px] h-[12px] rounded-full bg-[#02838d]" />
            <p className="font-bold text-[15px] text-[#231f20]">
              Current Version
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-[31px] top-[5px] w-[12px] h-[12px] rounded-full border-2 border-[#02838d] bg-white" />
            <p className="font-bold text-[15px] text-[#231f20]">
              {writtenDate}
            </p>
            <p className="text-[14px] text-[#231f20]">Written By</p>
            <p className="text-[14px] text-[#767474]">{author}</p>
          </div>
          {reviewedBy && (
            <div className="relative">
              <div className="absolute -left-[31px] top-[5px] w-[12px] h-[12px] rounded-full border-2 border-[#02838d] bg-white" />
              <p className="font-bold text-[15px] text-[#231f20]">
                {reviewedDate}
              </p>
              <p className="text-[14px] text-[#231f20]">
                Medically Reviewed By
              </p>
              <p className="text-[14px] text-[#767474]">
                {reviewedBy}
                {reviewerCredentials && `, ${reviewerCredentials}`}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
