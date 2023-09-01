// Calendar day
export const CalendarDay = ({
  isAvailable,
  isWeekend,
}: {
  isAvailable: boolean
  isWeekend: boolean
}) => (
  <div
    className={`flex-1 rounded-sm border transition-opacity ${
      isWeekend && isAvailable
        ? 'border-transparent bg-gray-400'
        : isAvailable
        ? 'border-transparent bg-gray-30 opacity-40 hover:opacity-100'
        : 'border-gray-400'
    }`}
  ></div>
)

// Calendar week
export const CalendarWeek = ({ isAvailable }: { isAvailable: boolean }) => (
  <div className="flex h-full w-full gap-1">
    {[...Array(7)].map((_, i) => (
      <CalendarDay
        key={i}
        isAvailable={isAvailable}
        isWeekend={[5, 6].includes(i)}
      />
    ))}
  </div>
)

// Calendar
export const Calendar = ({ availability }: { availability: boolean[] }) => (
  <div className="flex h-12 w-24 flex-col gap-1">
    {availability.map((isAvailable, i) => (
      <CalendarWeek key={i} isAvailable={isAvailable} />
    ))}
  </div>
)
