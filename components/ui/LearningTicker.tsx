// components/ui/LearningTicker.tsx
interface Props { items: string[]; }

export default function LearningTicker({ items }: Props) {
  const text = items.map((i) => `⚡ CURRENTLY LEARNING: ${i}`).join("   ·   ");
  const doubled = text + "   ·   " + text;

  return (
    <div className="border-t-[2.5px] border-b-[2.5px] border-brutal-black bg-brutal-black text-brutal-yellow py-2.5 overflow-hidden whitespace-nowrap font-mono text-xs font-bold tracking-wider my-6">
      <div className="inline-block animate-ticker">{doubled}</div>
    </div>
  );
}
