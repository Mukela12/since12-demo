interface ViewerCountProps {
  count: number;
}

export default function ViewerCount({ count }: ViewerCountProps) {
  const formatted = count >= 1000 ? `${(count / 1000).toFixed(1)}K` : String(count);
  return (
    <div className="sticker" style={{ background: '#000', color: '#fff', borderColor: '#000' }}>
      {formatted} WATCHING
    </div>
  );
}
