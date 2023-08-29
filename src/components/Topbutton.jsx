import React from 'react'

const Topbutton = () => {
    const [backTop, setBackTop] = React.useState(false);

    const moveToTop = () => {
      document.documentElement.scrollTop = 0;
    };
  
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
    return (
      <div>
        {backTop ? (
          <button
            onClick={moveToTop}
            className="position-fixed border-0 topbtn bottom-0 end-0 me-4 mb-4 top_btn rounded-circle z-2 pointer"
          >
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="26"
                cy="26"
                r="26"
                transform="rotate(90 26 26)"
                fill="#02CDCF"
              />
              <path
                d="M26 19L26 35"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M32 25L26.4096 18.1978C26.3584 18.1356 26.2955 18.0858 26.225 18.0517C26.1544 18.0176 26.0779 18 26.0005 18C25.9232 18 25.8467 18.0176 25.7761 18.0517C25.7056 18.0858 25.6426 18.1356 25.5915 18.1978L20 25"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        ) : (
          ""
        )}
      </div>
    );
  };

export default Topbutton