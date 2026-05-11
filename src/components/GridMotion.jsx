import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './GridMotion.css';

const GridMotion = ({ items = [], gradientColor = 'black' }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);
  const mouseXRef = useRef(window.innerWidth / 2);

  const totalItems = 28;
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = e => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 400;
      const baseDuration = 0.5;
      const inertiaFactors = [0.4, 0.3, 0.2, 0.1];
      const time = Date.now() * 0.0005; // Sped up time factor (was 0.0001)

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const mouseMoveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction;
          const autoMoveAmount = Math.sin(time + index) * 150; // Increased auto movement (was 50)
          
          gsap.to(row, {
            x: mouseMoveAmount + autoMoveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: 'power2.out',
            overwrite: 'auto'
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      removeAnimationLoop();
    };
  }, []);

  return (
    <div className="noscroll loading" ref={gridRef}>
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`
        }}
      >
        <div className="gridMotion-container">
          {[...Array(4)].map((_, rowIndex) => (
            <div key={rowIndex} className="row" ref={el => (rowRefs.current[rowIndex] = el)}>
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                return (
                  <div key={itemIndex} className="row__item">
                    <div className="row__item-inner" style={{ backgroundColor: 'transparent' }}>
                      {typeof content === 'string' && content.startsWith('http') ? (
                        <div
                          className="row__item-img"
                          style={{
                            backgroundImage: `url(${content})`
                          }}
                        ></div>
                      ) : (
                        <div className="row__item-content">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="fullview"></div>
      </section>
    </div>
  );
};

export default GridMotion;
