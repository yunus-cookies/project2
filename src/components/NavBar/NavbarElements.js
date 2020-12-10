import { Link } from "gatsby"
import { GiAutoRepair } from "react-icons/gi"
import styled, { css } from "styled-components"

export const Nav = styled.nav`
  background-color: #fff;
  height: 80px;
  box-shadow: ${({ isScroll }) =>
    isScroll ? "0 2px 2px -2px rgba(0, 0, 0, 0.75)" : null};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
  transition: all 0.25s ease;

  @media screen and (max-width: 991px) {
    background-color: ${({ isClick, isScroll }) =>
      !isClick && !isScroll
        ? "transparent"
        : isClick
        ? "#242424"
        : "rgba(36, 36, 36, 0.8)"};
  }
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${props =>
    props.container &&
    css`
      z-index: 1;
      width: 100%;
      max-width: 100%;
      margin-right: auto;
      margin-left: auto;
      padding-right: 50px;
      padding-left: 100px;
    `}
`
export const NavLogo = styled(Link)`
  color: #242424;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  p {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 991px) {
    position: relative;
    right: 70px;
  }
`
export const NavIcon = styled(GiAutoRepair)`
  margin-right: 0.5rem;
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  justify-content: flex-start;

  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ isClick }) => (isClick ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: ${({ isClick }) => (isClick ? "#242424" : "transparent")};
  }
`
export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #f00946;
  }
  @media screen and (max-width: 991px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`

export const NavButtonContainer = styled.li`
  @media screen and (max-width: 991px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 50px;
  }
`

export const NavButton = styled.div`
  padding: 8px 16px;
  height: 100%;
  width: 80%;
`

export const NavLink = styled(Link)`
  color: #242424;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 2rem;
  height: 100%;

  @media screen and (max-width: 991px) {
    text-align: center;
    padding: 2rem;
    margin: 0 auto;
    display: table;
    transition: all 0.3s ease-out;

    &:hover {
      color: #f00946;
      transform: scale(1.2);
      transition: all 0.3s ease;
    }
  }
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 991px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
