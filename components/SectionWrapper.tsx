import React, { useEffect, useRef, useState } from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "" }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when 20% of the section is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`h-screen w-full snap-start snap-always relative overflow-hidden flex flex-col justify-center ${className}`}
    >
      {/* 
        This div wraps the content and applies the transition class.
        We pass 'isVisible' state to children if needed, but primarily we animate the wrapper.
      */}
      <div className={`container mx-auto px-6 h-full flex flex-col justify-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 filter-blur-0' : 'opacity-0 translate-y-12 blur-sm'}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;