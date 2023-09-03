import tw, { styled, css } from "twin.macro";

const HeaderStyle = styled.header(() => [
  tw`h-28 bg-orange-300 text-sm flex justify-center items-center`,
  css`
    .inner {
      font-size: 20px;
      text-align: center;
      max-width: 1280px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      border: 1px solid red;
      line-height: 60px;
    }
  `
])

export default HeaderStyle;