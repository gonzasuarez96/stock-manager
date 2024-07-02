import React from "react";

export const ModalButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="220"
      viewBox="0 0 60 220"
      fill="none"
    >
      <g filter="url(#filter0_d_318_13349)">
        <path
          d="M25.2258 63.4483C27.1535 57.2414 49 39.3103 49 39.3103L49 180.69C49 180.69 29.0811 164.828 25.2259 158.621C21.3706 152.414 23.2982 69.6552 25.2258 63.4483Z"
          fill="white"
        />
      </g>
      <path
        d="M35 106L39.1041 110.048L35.1779 114.049"
        stroke="#094B63"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_318_13349"
          x="0.6"
          y="18.9105"
          width="58.8"
          height="174.179"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-6" dy="-4" />
          <feGaussianBlur stdDeviation="8.2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_318_13349"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_318_13349"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const CheckIcon = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
    >
      <path
        d="M28.2845 9.83074L16.4253 22.115L11.8641 17.4013C11.6162 17.1022 11.3113 16.8593 10.9683 16.6879C10.6254 16.5164 10.2518 16.42 9.87108 16.4048C9.49037 16.3896 9.11074 16.4559 8.756 16.5996C8.40126 16.7432 8.07907 16.961 7.80967 17.2395C7.54027 17.5179 7.32946 17.8508 7.19048 18.2174C7.05151 18.584 6.98735 18.9764 7.00206 19.3698C7.01677 19.7632 7.11001 20.1493 7.27594 20.5037C7.44186 20.8581 7.67689 21.1733 7.96627 21.4294L14.4626 28.1715C14.7209 28.4363 15.0272 28.6457 15.364 28.7879C15.7008 28.9301 16.0615 29.0021 16.4253 29C17.1505 28.9968 17.8455 28.6993 18.3604 28.1715L32.1823 13.8874C32.4414 13.6218 32.6471 13.3059 32.7874 12.9577C32.9277 12.6096 33 12.2362 33 11.8591C33 11.4819 32.9277 11.1085 32.7874 10.7604C32.6471 10.4123 32.4414 10.0963 32.1823 9.83074C31.6644 9.29866 30.9637 9 30.2334 9C29.5031 9 28.8025 9.29866 28.2845 9.83074Z"
        fill={fill}
      />
    </svg>
  );
};
