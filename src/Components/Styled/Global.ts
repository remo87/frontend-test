import { createGlobalStyle } from "./styled-components";
import { Theme } from "../../interfaces/style";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.cdnfonts.com/css/helvetica-neue-9');

    body {
        font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue";
    }

    h1 {
        font-size: 54px;
        line-height: 64px;
        letter-spacing: 0.96px;
        color: ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
    
        h1 {
            font-size: 32px;
            line-height: 40px;
        }   
    }
`;

export default GlobalStyle;
