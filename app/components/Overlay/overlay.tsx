interface OverlayProps {
  showOverlay: boolean;
}

export default function Overlay({ showOverlay }: OverlayProps) {
  return (
    <div
      className={`-inset-10 fixed z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-200
        ${showOverlay ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    />
  );
}
