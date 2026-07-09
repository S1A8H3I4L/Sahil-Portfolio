// components/Footer.tsx
import type { Profile } from "@/types";
interface Props { profile: Profile; }
export default function Footer({ profile }: Props) {
  return (
    <footer className="border-t-[2.5px] border-brutal-black px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-gray-500">
      <span>
        © {new Date().getFullYear()}{" "}
        <strong className="text-brutal-black">{profile.name}</strong>
        {" "}· Built with ☕ &amp; Neo-Brutalism
      </span>
      <span className="text-brutal-black font-bold">Sahil.dev</span>
    </footer>
  );
}
