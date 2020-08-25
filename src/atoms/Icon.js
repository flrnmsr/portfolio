// import React from 'react'
// import styled from 'styled-components'
// import Icons from '@assets/svgs/sprite.svg'

// export const SvgStyled = styled.svg`
//   cursor: ${({ clickable }) => clickable && 'pointer'};
//   width: ${({ width }) => width && width};
//   height: ${({ height }) => height && height};
//   fill: ${({ color }) => color && color};
//   margin: ${({ margin }) => margin && margin};
//   &:hover {
//     fill: ${({ hcolor }) => hcolor && hcolor};
//   }
// `
// const Icon = ({ type, size, color, clickable, margin, ...restProps }) => (
//   <SvgStyled
//     xmlns="http://www.w3.org/2000/svg"
//     margin={margin}
//     clickable={clickable}
//     width={size}
//     height={size}
//     fill={color}
//     {...restProps}
//   >
//     <use href={`${Icons}#${type}`} xlinkHref={`${Icons}#${type}`} />
//   </SvgStyled>
// )
// // Icon.defaultProps = {
// //   size: "20px",
// //   color: "black"
// // };
// // Icon.propTypes = {
// //   type: PropTypes.string.isRequired,
// //   size: PropTypes.string,
// //   color: PropTypes.string
// // };
// export default Icon
