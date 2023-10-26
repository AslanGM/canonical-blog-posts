/* eslint-disable */
const { alias } = require( 'react-app-rewire-alias' );

module.exports = function override ( config ) {
    alias( {
        '@': './src',
        '@components': './src/components',
        '@api': './src/api',
        '@utils': './src/utils',
        '@hooks': './src/hooks',
        '@styles': './src/styles',
        '@assets': './public'
    } )( config );

    return config;
};
