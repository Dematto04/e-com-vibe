export default function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-300 ${className}`} />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <Skeleton className="aspect-[3/4] w-full border-b-3 border-black" />
      <div className="p-4 space-y-3 bg-[var(--color-brutal-bg)]">
        <div className="flex justify-between">
          <Skeleton className="h-6 w-2/3 bg-black/20" />
          <Skeleton className="h-6 w-8 bg-black/20" />
        </div>
        <Skeleton className="h-8 w-1/3 bg-black/20" />
        <Skeleton className="h-4 w-1/4 mt-2 bg-black/20" />
      </div>
    </div>
  );
}
