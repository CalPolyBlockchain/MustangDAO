module.exports = {
	content: ['./src/**/*.{js,jsx}', './public/index.html'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			yellow1: '#20FFFF',
			yellow2 :'#222642',
			yellow3: '#ff49db',
			green1: '#391A51',
			green2: '#734C92',
			green3: '#34eb3d',
			darkBlue1: '#ffffff',
			darkBlue2: '#FFF620',
			darkBlue3: '#8492a6',
			blac: '#000000',
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
				
			},

		},
	},
	plugins: [require('daisyui')],
};
