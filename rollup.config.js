import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg-import';

export default [
    {
        input: './src/index.js',
        output:[
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named'
            },
            {
                file: 'dist/index.js',
                format: 'cjs'
            }
        ],
        plugins:[
            postcss({
                plugins: [],
                minimize: false,
            }),
            svg({
                stringify: false
            }),
            babel({
                exclude: 'node_modules/**',
                presets: [['@babel/preset-react', {"runtime": "automatic"}]]
            }),
            external(),
            resolve(),
            
        ]
    }
];