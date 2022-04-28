module.exports = {
	content: ['./src/**/*.{js,jsx}', './public/index.html'],
	theme: {
		// NOTE THESE ARE NOT THE REAL COLORS YET
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			yellow1: '#F1AD2B',
			yellow2 :'#222642',
			yellow3: '#ff49db',
			green1: '#12a47a',
			green2: '#734C92',
			green3: '#34eb3d',
			darkBlue1: '#0F1E2B',
			// 'darkBlue2': '#fff620',
			darkBlue3: '#8492a6',
			blac: '#000000',
			black: '#000000',
			white: '#ffffff',
		},
		
		fontFamily: {
			Poppins: ['Poppins', 'sans-serif'],
			// sans: ['Graphik', 'sans-serif'],
			// PUT SOME cool fonts here
		},

		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			backgroundImage: {
				'poly-bg': "url(../public/poly-bg.png)",
				
			},

		},
	},
	plugins: [require('daisyui')],
};
