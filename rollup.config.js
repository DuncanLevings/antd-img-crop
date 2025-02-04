import replace from '@rollup/plugin-replace';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';
import pkg from './package.json';

const input = 'src/index.jsx';
const deps = [...Object.keys(pkg.peerDependencies), ...Object.keys(pkg.dependencies)];
const external = (id) => deps.includes(id) || /antd\/|@babel\/runtime\//.test(id);
const plugins = (isEsm) => [
  !isEsm && replace({ '/es/': '/lib/' }),
  babel({
    plugins: [['@babel/plugin-transform-runtime', { useESModules: isEsm }]],
    runtimeHelpers: true,
  }),
  sass({ insert: true }),
];

export default [
  { input, output: { file: pkg.main, format: 'cjs' }, external, plugins: plugins(false) },
  { input, output: { file: pkg.module, format: 'es' }, external, plugins: plugins(true) },
];
