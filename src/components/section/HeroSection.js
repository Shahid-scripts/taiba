import React from "react"
import styled from "styled-components"



function HeroSection() {
  return (
    <Wrapper>
      <div className="slider">
        <input type="radio" name="slide" className="radio1" checked="checked" />
        <input type="radio" name="slide" className="radio2" />
        <input type="radio" name="slide" className="radio3" />
        <div className="slide"></div>
      </div>
    </Wrapper>
    
  )
}
export default HeroSection


const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #333;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  
  .slider input[type="radio"] {
    position: relative;
    z-index: 2;
    margin-bottom: 40px;
    outline: none;
    cursor: pointer;
  }

  .slider .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background-image: url("../images/wallpaper/wallpaper4.jpg");
    transition: 1s;
  }

  .slider input[type="radio"].radio1:checked ~ .slide {
    background-position-x: 0;
  }
`

