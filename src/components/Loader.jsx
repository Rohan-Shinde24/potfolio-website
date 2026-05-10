import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
         <div className="absolute inset-0 border-2 border-white/10 rounded-full"></div>
         <div 
           className="absolute inset-0 border-2 border-[#7C3AED] rounded-full border-t-transparent animate-spin"
           style={{ animationDuration: '0.8s' }}
         ></div>
         <p className="text-white font-mono font-bold text-xs">
           {progress.toFixed(0)}%
         </p>
      </div>
      <p className="text-white/40 font-space font-bold uppercase tracking-[0.3em] text-[10px] mt-6">
        Initializing 3D Core
      </p>
    </Html>
  );
};

export default CanvasLoader;
