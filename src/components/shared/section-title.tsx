// Section title
export default function SectionTitle({
  title,
  icon: Icon,
}: {
  title: string;
  icon: any;
}) {
  return (
    <div className="flex items-center space-x-3">
      <Icon className="h-4 text-white" />
      <div className="text-sm font-bold uppercase tracking-wide text-green-400">
        {title}
      </div>
    </div>
  );
}
