import { createGlobalStyle } from "./styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.cdnfonts.com/css/helvetica-neue-9');

    body {
        font-family:  "Helvetica Neue", "HelveticaNeue-Light", "Helvetica Neue Light";
        color: ${({ theme }) => theme.colors.secondary}
    }
    
    h1 {
        font-size: 3.375rem;
        line-height: 4rem;
        letter-spacing: 0.06rem;
        color: ${({ theme }) => theme.colors.primary};
    }

    h2 {
        font-size: 2.125rem;
        line-height: 2.5rem;
        letter-spacing: 0.0625rem;
        color: ${({ theme }) => theme.colors.primary};
    }

    h4 {
        font-size: 1.25rem;
        line-height: 1.75rem;
        color: ${({ theme }) => theme.colors.black};
        margin: 0;
    }
    
    p {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: 1.375rem;
        line-height: 2rem;
        letter-spacing: 0.0572916875rem;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
    
        h1 {
            font-size: 2rem;
            line-height: 2.5rem;
        }   
    }
`;

export default GlobalStyle;
