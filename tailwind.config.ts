import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			fontFamily: {
				'sample-topweddingdayjp-jomolhari-regular-18-font-family': "Jomolhari-Regular, sans-serif",
				'sample-topweddingdayjp-jomolhari-regular-13-font-family': "Jomolhari-Regular, sans-serif",
				'sample-topweddingdayjp-noto-serif-jp-regular-18-font-family': "NotoSerifJp-Regular, sans-serif",
				'sample-topweddingdayjp-noto-serif-jp-bold-18-font-family': "NotoSerifJp-Bold, sans-serif",
				'sample-topweddingdayjp-noto-serif-jp-regular-14-font-family': "NotoSerifJp-Regular, sans-serif",
				'sample-topweddingdayjp-noto-serif-jp-regular-12-font-family': "NotoSerifJp-Regular, sans-serif",
				'sample-topweddingdayjp-noto-serif-jp-semibold-20-font-family': "NotoSerifJp-SemiBold, sans-serif",
				'sample-topweddingdayjp-noto-serif-jp-regular-14-underline-font-family': "NotoSerifJp-Regular, sans-serif",
				'sample-topweddingdayjp-roboto-medium-14-font-family': "Roboto-Medium, sans-serif",
				'sample-topweddingdayjp-roboto-regular-12-font-family': "Roboto-Regular, sans-serif",
				'sample-topweddingdayjp-noto-serif-jp-regular-13-font-family': "NotoSerifJp-Regular, sans-serif",
				'sample-topweddingdayjp-noto-sans-jp-demilight-16-font-family': "NotoSansJp-DemiLight, sans-serif",
			},
			fontSize: {
				'sample-topweddingdayjp-jomolhari-regular-18-font-size': "18px",
				'sample-topweddingdayjp-jomolhari-regular-13-font-size': "13px",
				'sample-topweddingdayjp-noto-serif-jp-regular-18-font-size': "18px",
				'sample-topweddingdayjp-noto-serif-jp-bold-18-font-size': "18px",
				'sample-topweddingdayjp-noto-serif-jp-regular-14-font-size': "14px",
				'sample-topweddingdayjp-noto-serif-jp-regular-12-font-size': "12px",
				'sample-topweddingdayjp-noto-serif-jp-semibold-20-font-size': "20px",
				'sample-topweddingdayjp-noto-serif-jp-regular-14-underline-font-size': "14px",
				'sample-topweddingdayjp-roboto-medium-14-font-size': "14px",
				'sample-topweddingdayjp-roboto-regular-12-font-size': "12px",
				'sample-topweddingdayjp-noto-serif-jp-regular-13-font-size': "13px",
				'sample-topweddingdayjp-noto-sans-jp-demilight-16-font-size': "16px",
			},
			fontWeight: {
				'sample-topweddingdayjp-jomolhari-regular-18-font-weight': "400",
				'sample-topweddingdayjp-jomolhari-regular-13-font-weight': "400",
				'sample-topweddingdayjp-noto-serif-jp-regular-18-font-weight': "400",
				'sample-topweddingdayjp-noto-serif-jp-bold-18-font-weight': "700",
				'sample-topweddingdayjp-noto-serif-jp-regular-14-font-weight': "400",
				'sample-topweddingdayjp-noto-serif-jp-regular-12-font-weight': "400",
				'sample-topweddingdayjp-noto-serif-jp-semibold-20-font-weight': "600",
				'sample-topweddingdayjp-noto-serif-jp-regular-14-underline-font-weight': "400",
				'sample-topweddingdayjp-roboto-medium-14-font-weight': "500",
				'sample-topweddingdayjp-roboto-regular-12-font-weight': "400",
				'sample-topweddingdayjp-noto-serif-jp-regular-13-font-weight': "400",
				'sample-topweddingdayjp-noto-sans-jp-demilight-16-font-weight': "400",
			},
			lineHeight: {
				'sample-topweddingdayjp-jomolhari-regular-18-line-height': "28.8px",
				'sample-topweddingdayjp-jomolhari-regular-13-line-height': "20.8px",
				'sample-topweddingdayjp-noto-serif-jp-regular-18-line-height': "32.4px",
				'sample-topweddingdayjp-noto-serif-jp-bold-18-line-height': "28.8px",
				'sample-topweddingdayjp-noto-serif-jp-regular-14-line-height': "22.4px",
				'sample-topweddingdayjp-noto-serif-jp-regular-12-line-height': "19.2px",
				'sample-topweddingdayjp-noto-serif-jp-semibold-20-line-height': "25.6px",
				'sample-topweddingdayjp-noto-serif-jp-regular-14-underline-line-height': "25.6px",
				'sample-topweddingdayjp-roboto-medium-14-line-height': "normal",
				'sample-topweddingdayjp-roboto-regular-12-line-height': "normal",
				'sample-topweddingdayjp-noto-serif-jp-regular-13-line-height': "25.6px",
				'sample-topweddingdayjp-noto-sans-jp-demilight-16-line-height': "25.6px", 
			},
			letterSpacing: {
				 
			},
			borderRadius: {
					
			},
			colors: {
				'sample-topweddingdayjp-nero': '#ffffff',
				'sample-topweddingdayjp-spring-wood': '#f7f7f0',
				'sample-topweddingdayjp-black-30percent': 'rgba(0, 0, 0, 0.30)',
				'sample-topweddingdayjp-nero-70percent': 'rgba(255, 255, 255, 0.70)',
				'sample-topweddingdayjp-emperor': '#505050',
				'sample-topweddingdayjp-alto': '#dddddd',
				'sample-topweddingdayjp-gray': '#808080',
				'sample-topweddingdayjp-westar': '#e5e3df',
				'sample-topweddingdayjp-black': '#000000',
				'sample-topweddingdayjp-royal-blue': '#1a73e8',
				'sample-topweddingdayjp-mercury': '#e6e6e6',
				'sample-topweddingdayjp-cornflower-blue': '#4285f4',
				'sample-topweddingdayjp-cinnabar': '#e94235',
				'sample-topweddingdayjp-selective-yellow': '#fabb05',
				'sample-topweddingdayjp-chateau-green': '#34a853',
				'sample-topweddingdayjp-wild-sand': '#f5f5f5',
				
			},
			spacing: {
					
			},
			width: {
				 
			},
			minWidth: {
				 
			},
			maxWidth: {
				 
			},
			height: {
				 
			},
			minHeight: {
				 
			},
			maxHeight: {
				 
			}
		}
	},
};

export default config;
