import { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#2d80ff',
    colorInfo: '#2d80ff',
    borderRadius: 12,
    fontFamily: `'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif`,
  },
  components: {
    Button: {
      controlHeightLG: 48,
      fontWeight: 600,
    },
    Input: {
      controlHeightLG: 44,
    },
    Card: {
      borderRadiusLG: 18,
    },
  },
};

export default theme;

