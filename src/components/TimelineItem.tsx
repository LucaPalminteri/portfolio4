import { ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  children?: ReactNode;
}

export function TimelineItem({ title, subtitle, period, children }: TimelineItemProps) {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group hover-lift">
      <div className="font-medium text-lg text-gray-900 dark:text-gray-100 mb-1 sm:mb-0">{title}</div>
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-gray-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full hover-scale">
          {period.split(" - ")[0]}
        </time>
        {period.split(" - ")[1] != "Present" && (
          <time className="sm:absolute -bottom-2 left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-20 h-6 text-red-600 bg-red-100 rounded-full hover-scale mb-2">
            {period.split(" - ")[1]}
          </time>
        )}
        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{subtitle}</div>
      </div>
      <div className="text-gray-600 dark:text-gray-400">{children}</div>
    </div>
  );
}
