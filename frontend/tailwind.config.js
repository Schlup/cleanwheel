/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        c12: '#000000',
        c11: '#111111',
        c10: '#2E2E2E',
        c9: '#404040',
        c8: '#595959',
        c7: '#717171',
        c6: '#9C9C9C',
        c5: '#B2B2B2',
        c4: '#CCCCCC',
        c3: '#DEDEDE',
        c2: '#EDEDED',
        c1: '#F7F7F7',
        w: '#ffffff',
        p5: '#332200',
        p4: '#664400',
        p3: '#A66F00',
        p2: '#E4A30B',
        p1: '#FFBB00',
      },
      fontFamily: {
        roboto: ['Roboto'],
        poppins: ['Poppins'],
      },
      fontSize: {
        '1-xxl': [
          '64px',
          {
            lineHeight: '72px',
            fontWeight: '600',
          },
        ],
        '1-xl': [
          '32px',
          {
            lineHeight: '40px',
            fontWeight: '600',
          },
        ],
        '2-l': [
          '24px',
          {
            lineHeight: '36px',
            fontWeight: '400',
          },
        ],
        '2-sl': [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: '500',
          },
        ],
        '1-m': [
          '18px',
          {
            lineHeight: '24px',
            fontWeight: '600',
          },
        ],
        '2-s': [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        '2-cs': [
          '16px',
          {
            lineHeight: '16px',
            fontWeight: '500',
          },
        ],
        '1-s': [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '500',
          },
        ],
        '1-cs': [
          '12px',
          {
            lineHeight: '24px',
            fontWeight: '600',
            letterSpacing: '1.5%',
          },
        ],
      },
      '1-cxs': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '500',
        },
      ],
      spacing: {
        '46px': '46px',
        '77px': '77px',
        '100px': '100px',
        '165px': '165px',
      },
    },
  },
  plugins: [],
};
