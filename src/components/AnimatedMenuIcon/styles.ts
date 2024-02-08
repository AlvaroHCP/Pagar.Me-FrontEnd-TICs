"use client"

import styled from 'styled-components'
import { keyframes } from "styled-components";
import { AnimationProps } from './interface';

export const MenuButtonStyled = styled.button`
  --IconHeight: 50px;
  --IconWidth: 50px;
  
  --SpanWidth: 30px;
  --SpanHeight: 3px;
  --SpanSpacing: 7.5px;

  --1stSpanPosition: calc( ( var(--IconHeight) - (3 * var(--SpanHeight)) - (2 * var(--SpanSpacing)) ) / 2 );
  
  z-index: 999;
  position: fixed;
  top:16px;
  right: 10px;
  border: 0px;
  width: var(--IconWidth);
  height: var(--IconHeight);
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  span {
    height: var(--SpanHeight);
    width: var(--SpanWidth);
    background: black;
    opacity: 1;
  }

  .span1 {
    margin-top: var(--1stSpanPosition);
  }
  
  .spanSpaced {
    margin-top: calc( var(--SpanSpacing) );
  }
`


export const animatedSpan1 = keyframes`

0% {
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  }

100% {
  margin-top: calc( ( (var(--IconHeight) - var(--SpanHeight)) / 2 ) );
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
  }
`
export const reverseAnimatedSpan1 = keyframes`

0% {
  margin-top: calc( (var(--IconHeight) - var(--SpanHeight)) / 2);
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
  
  }

100% {
  margin-top: var(--1stSpanPosition);
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  }
`


export const animatedSpan2 = keyframes`

0% {
}

100% {
  margin-top: calc( - var(--SpanSpacing) + (var(--IconHeight) / 2) - var(--SpanHeight) );
  height: 0%;
  opacity: 0;
  }
`
export const reverseAnimatedSpan2 = keyframes`

0% {
  margin-top: calc( - var(--SpanSpacing) + (var(--IconHeight) / 2) - var(--SpanHeight) );
  height: 0%;
  opacity: 0;
  }

100% {  
  margin-top: calc( var(--SpanSpacing) );
  height: var(--SpanHeight);
  opacity: 1;
  }
`


export const animatedSpan3 = keyframes`

0% {
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  }

100% {
  margin-top: calc( -1px - (var(--SpanHeight) / 2) );
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
  }
`
export const reverseAnimatedSpan3 = keyframes`

0% {
  margin-top: calc( -1px - (var(--SpanHeight) / 2) );
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
  }

100% {  
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  }
`


export const MenuButtonAnimatedStyled = styled(MenuButtonStyled) <AnimationProps>`

  .span1Animation {
    animation: 0.25s ${props => props.allowAnimation ? (props.active ? animatedSpan1 : reverseAnimatedSpan1) : ""} forwards;
  }

  .span2Animation {
    animation: 0.25s ${props => props.allowAnimation ? (props.active ? animatedSpan2 : reverseAnimatedSpan2) : ""} forwards;
  }

  .span3Animation {
    animation: 0.25s ${props => props.allowAnimation ? (props.active ? animatedSpan3 : reverseAnimatedSpan3) : ""} forwards;
  }

`
