import Image from "next/image";

export default function HeremuLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`${className} w-20 h-20 relative`}>
      <Image
        src="/heremu-logo.png"
        alt="Heremu Chemicals Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
} 