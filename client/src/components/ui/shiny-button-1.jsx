import React, { useId } from 'react';
import { Link } from 'react-router-dom';
import './shiny-button-1.css';

const GlowButton = ({ children, href, target, rel, className }) => {
  const id = useId().replace(/:/g, '');
  const filters = {
    unopaq: `unopaq-${id}`,
    unopaq2: `unopaq2-${id}`,
    unopaq3: `unopaq3-${id}`,
  };

  const isInternal = href && href.startsWith('/');

  const Content = () => (
    <div className={`relative group inline-block ${className || ''}`}>
      {/* SVG Filters */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.unopaq}>
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.unopaq2}>
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 3 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.unopaq3}>
          <feColorMatrix values="1 0 0 0.2 0 0 1 0 0.2 0 0 0 1 0.2 0 0 0 0 2 0" />
        </filter>
      </svg>

      {/* Button Container */}
      <div className="relative">
        <div 
          className="absolute inset-0 -z-20 opacity-50 overflow-hidden transition-opacity duration-300
                     group-hover:opacity-75 group-active:opacity-100"
          style={{ filter: `blur(2em) url(#${filters.unopaq})` }}
        >
          <div 
            className="absolute inset-[-150%] group-hover:animate-speen group-hover:animate-woah"
            style={{ 
              background: 'linear-gradient(90deg, #f50 30%, #0000 50%, #05f 70%)',
            }}
          />
        </div>

        <div 
          className="absolute inset-[-0.125em] -z-20 opacity-50 overflow-hidden transition-opacity duration-300
                     group-hover:opacity-75 group-active:opacity-100"
          style={{ 
            filter: `blur(0.25em) url(#${filters.unopaq2})`,
            borderRadius: '0.75em'
          }}
        >
          <div 
            className="absolute inset-[-150%] group-hover:animate-speen group-hover:animate-woah"
            style={{ 
              background: 'linear-gradient(90deg, #f95 20%, #0000 45% 55%, #59f 80%)',
            }}
          />
        </div>

        <div 
          className="p-0.5 bg-[#0005] rounded-[inherit]"
          style={{ 
            clipPath: 'path("M 110 0 C 141 0 146 5 146 33 C 146 61 141 66 110 66 L 33 66 C 5 66 0 61 0 33 C 0 5 5 0 33 0 Z")' 
          }}
        >
          <div className="relative">
            <div 
              className="absolute inset-[-2px] -z-10 opacity-50 overflow-hidden transition-opacity duration-300
                         group-hover:opacity-75 group-active:opacity-100"
              style={{ 
                filter: `blur(2px) url(#${filters.unopaq3})`,
                borderRadius: 'inherit'
              }}
            >
              <div 
                className="absolute inset-[-150%] group-hover:animate-speen group-hover:animate-woah"
                style={{ 
                  background: 'linear-gradient(90deg, #fc9 30%, #0000 45% 55%, #9cf 70%)',
                }}
              />
            </div>
            
            <div 
              className="flex flex-col items-center justify-center w-[140px] h-[60px] bg-[#111215] text-white overflow-hidden text-sm font-bold"
              style={{ 
                clipPath: 'path("M 110 0 C 135 0 140 5 140 30 C 140 55 135 60 110 60 L 30 60 C 5 60 0 55 0 30 C 0 5 5 0 30 0 Z")',
                borderRadius: '0.875em'
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isInternal) {
    return (
      <Link to={href} className="outline-none">
        <Content />
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="outline-none">
        <Content />
      </a>
    );
  }

  return <Content />;
};

export { GlowButton };
