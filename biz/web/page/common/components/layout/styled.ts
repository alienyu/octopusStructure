import styled from 'styled-components'


var WrapperHeaderCmp = styled.div`
    font-size: 18px;
    color: #fff;
    .userName {
        cursor: pointer;
    }
`;

var WrapperFooterCmp = styled.div`
    font-style: italic;
    font-size: 16px;
    .content {
        text-align: center;
        p {margin: 0;}
    }
`;

export { WrapperHeaderCmp, WrapperFooterCmp }