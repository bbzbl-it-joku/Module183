'use client'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Animated gradient blobs */}
      <div className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-yellow-400/20 dark:bg-yellow-400/30 opacity-50 dark:opacity-50 blur-[100px] animate-blob" />
      <div className="absolute right-1/2 -top-20 h-[500px] w-[500px] rounded-full bg-amber-500/20 dark:bg-amber-500/30 opacity-50 dark:opacity-50 blur-[100px] animate-blob animation-delay-1000" />
      <div className="absolute left-1/3 top-1/3 h-[500px] w-[500px] rounded-full bg-orange-500/20 dark:bg-orange-500/30 opacity-50 dark:opacity-50 blur-[100px] animate-blob animation-delay-3000" />
      <div className="absolute right-1/3 top-1/2 h-[500px] w-[500px] rounded-full bg-red-500/20 dark:bg-red-500/30 opacity-50 dark:opacity-50 blur-[100px] animate-blob animation-delay-5000" />
      <div className="absolute -right-20 -bottom-20 h-[500px] w-[500px] rounded-full bg-red-600/20 dark:bg-red-600/30 opacity-50 dark:opacity-50 blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute left-1/2 -bottom-20 h-[500px] w-[500px] rounded-full bg-yellow-500/20 dark:bg-yellow-500/30 opacity-50 dark:opacity-50 blur-[100px] animate-blob animation-delay-4000" />
    </div>
  )
}