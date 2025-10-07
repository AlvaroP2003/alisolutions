
interface OverlayProps {
  showOverlay: boolean;
}


export default function Overlay({showOverlay}:OverlayProps) {
    return (
       <div
            className={`inset-0 fixed z-40 bg-black/20 backdrop-blur-sm transition-all duration-200
                ${showOverlay ? 'opacity-100' : 'opacity-0'}`}
            ></div>
    )
}