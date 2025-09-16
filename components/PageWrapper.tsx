export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-[1400px] px-10 bg-transparent">{children}</div>
  );
}
