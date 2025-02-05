declare module '*.png';
declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module '*.ttf';
declare module '*.woff2';
declare module 'react-qr-reader';
