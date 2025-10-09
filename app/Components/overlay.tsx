interface OverlayProps {
  showOverlay: boolean;
}

export default function Overlay({ showOverlay }: OverlayProps) {
  return (
    <div
      className={`absolute inset-0 z-40 bg-black/20 backdrop-blur-lg transition-opacity duration-200
        ${showOverlay ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    />
  );
}
