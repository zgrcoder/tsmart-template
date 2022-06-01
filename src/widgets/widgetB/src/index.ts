import config from '../widget.config.json';

export { default as View } from './view';
export { default as Editor } from './editor';
export { default as Settings } from './settings';
export { default as defaultData } from './data.json';

export default {
  ...config,
  icon: require('./icon.svg'),
};
