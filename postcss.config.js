module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false }
    }
  }
};

// module.exports = {
//   plugins: [require('tailwindcss'), require('autoprefixer')]
// };
