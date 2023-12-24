import { Global } from '@emotion/react';

const Fonts = () => (
    <Global
        styles={'@font-face { font-family: "M PLUS Rounded 1c"; font-style: normal; font-weight: 400; src: url("/fonts/MPLUS1p-Regular.ttf") format("truetype"); }'}
    />
);

export default Fonts;