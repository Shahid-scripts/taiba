import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { footerData } from "../data/menuData"
import MenuButton from "./buttons/MenuButton"

const Footer = () => {
	const [isOpen, setIsOpen] = useState(false)
	function handleClick(event) {
		setIsOpen(!isOpen)
		event.preventDefault()
	  }

	return (
		<Wrapper>
		<FooterGroup>
			<div className="container">
				<div className="sec aboutus">
					<h2>About Us</h2>
					<p>As the ultimate resource for developers, Shahid's Script produces weekly lessons so you can learn what you need to succeed as a Developer.<br /> Site made with React, Gatsby,Netlify and Contentful. Learn how.</p>
					<br />
					<h2>Follow Us</h2>
					<br />
					<ul>
						<li>
							<Link to="/">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span><img src="/images/icons/facebook.svg" alt="logo" /></span>
							</Link>
						</li>
						<li>
							<Link to="/">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span><img src="/images/icons/instagram.svg" alt="logo" /></span>
							</Link>
						</li>
						<li>
							<Link to="/">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span><img src="/images/icons/twitter.svg" alt="logo" /></span>
							</Link>
						</li>
						<li>
							<Link to="/">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span><img src="/images/icons/youtube.svg" alt="logo" /> </span>
							</Link>
						</li>
						<li>
							<Link to="/">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span><img src="/images/icons/google.svg" alt="logo" /> </span>
							</Link>
						</li>
					</ul>
				</div>
				<div className="sec quickLinks">
					<h2>Quick Links</h2>
					<MenuWrapper count={footerData.length}>
						{footerData.map((item, index) =>
							item.link === "/account" ? (
								<MenuButton
								key={index}
								item={item}
								onClick={event => handleClick(event)}
								/>
							) : (
								<MenuButton key={index} item={item} />
							)
						)}
					</MenuWrapper>
				</div>
        <div className="sec contact">
            <div class="app-section block-style-1">
              <div class="title">Download<br /><span>Our App</span></div>
              <p>Shining new app,<br /> made just <br />for you! It's Free,<br /> Easy &amp; Smart.</p>
              <span class="app-icon"><span class="prcs-d" data-p="play-store,f"><i class="app"></i></span></span>
              <span class="app-icon"><span class="prcs-d" data-p="app-store,f"><i class="app ios"></i></span></span>
              <div class="app-mobile">
                <span class="prcs-d" data-p="play-store,f">
                  <img class=" lazyloaded" src="/images/icons/mobile.png" alt="" />
                </span>
              </div>
          </div>
        </div>
				{/*<div className="sec contact">
					<h2>Contact Info</h2>
					<ul className="info">
						<li>
							<span><li><img src="/images/icons/location.svg" alt="logo" /></li></span>
							<span>Shahid Script <br />Gaya, Bihar-823001 (India)<br /></span>
						</li>
						<li>
							<span><li><img src="/images/icons/phone.svg" alt="logo" /></li></span>
							<p><Link to="tel:+919955038475">+91 9955 038 475</Link> <br />
								<Link to="tel:+919955038475">+91 9955 038 475</Link></p>
						</li>
						<li>
							<span><li><img src="/images/icons/email.svg" alt="logo" /></li></span>
							<p><Link to="mailto:shahidalam0786@gmail.com">shahidalam0786@gmail.com</Link></p>
						</li>
					</ul>
				</div>*/}
			</div>
		</FooterGroup>
		</Wrapper>
	)
}

export default Footer

const MenuWrapper = styled.div`
	display: grid;
  grid-template-columns: 2fr 2fr;
`
const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	min-height: 50vh;  
	flex-direction: column;
	background: #ede7f6;
`

const FooterGroup = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	padding: 50px 100px;
	background: #111;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	.container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		flex-direction: row;
	}

	.sec {
		margin-right: auto;
	}

	.aboutus {
		width: 30%;
	}

	h2 {
		position: relative;
		color: #fff;
		font-weight: 500;
		margin-bottom: 15px;
	}
	h2:before {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 50px;
		height: 2px;
		background: #f00;
	}

	p {
		color: #999;
	}

	.aboutus ul {
		position: relative;
		margin: 20px 0;
		padding:0;
		display: flex;
	}
	.aboutus ul li {
		position: relative;
		list-style: none;
		width: 30px;
		height: 30px;
		margin: 0 15px;
		transform: rotate(-30deg) skew(25deg);
	}
	.aboutus ul li span {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000;
		transition: 0.5s;
		display: flex !important;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 30px !important;
	}
	.aboutus ul li:hover span {
		box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.1);
	}
	.aboutus ul li:hover span:nth-child(5) {
		transform: translate(40px, -40px);
		opacity: 1;
	}
	.aboutus ul li:hover span:nth-child(4) {
		transform: translate(30px, -30px);
		opacity: 0.8;
	}
	.aboutus ul li:hover span:nth-child(3) {
		transform: translate(20px, -20px);
		opacity: 0.6;
	}
	.aboutus ul li:hover span:nth-child(2) {
		transform: translate(10px, -10px);
		opacity: 0.4;
	}
	.aboutus ul li:hover span:nth-child(1) {
		transform: translate(0, 0);
		opacity: 0.2;
	}
	.aboutus ul li:nth-child(1) span {
		background: #3b5999;
	}
	.aboutus ul li:nth-child(2) span {
		background: #55acee;
	}
	.aboutus ul li:nth-child(3) span {
		background: #dd4b39;
	}
	.aboutus ul li:nth-child(4) span {
		background: #0077b5;
	}
	.aboutus ul li:nth-child(5) span {
		background: #e4405f;
	}

	.quickLinks {
		position: relative;
		width: 25%;
	}
	.quickLinks ul li {
		list-style: none;
	}
	.quickLinks ul li a {
		color: #999;
		text-decoration: none;
		margin-bottom: 10px;
		display: inline-block;
	}
	.quickLinks ul li a:hover {
		color: #fff;
  }
  /** 
{/* 
	.contact {
		width: calc(35% - 60px);
		margin-right: 0 !important;
	}
	.contact .info {
		position: relative;
	}
	.contact .info li {
		display: flex;
		margin-bottom: 16px;
	}
	.contact .info li span:nth-child(1) {
		color: #fff;
		font-size: 20px;
		margin-right: 10px;
	}
	.contact .info li span {
		color: #999;
	}
	.contact .info li a {
		color: #999;
	}
  */}
  **/



 .contact {
		width: calc(55% - 60px);
		margin-right: 0 !important;
	}
.app-section {
    
    position: relative;
    height: 170px;
    width: 160px;
    color: #9babc4;
    padding: 0 0 0 0;
    margin-top: 16px;
    margin-left: 8px;
}
 .app-section.block-style-1 .title {
    position: static;
    color: #9babc4;
    font-size: 27px;
    line-height: 26px;
    padding-bottom: 20px;
}
.block-style-1 .title {
    position: absolute;
    top: initial;
    left: 45px;
    right: initial;
    bottom: 38px;
    color: #272b65;
    font-family: Muli,Arial,sans-serif;
    font-size: 50px;
    font-weight: 100;
}
.block-style-1>div {
    padding-bottom: 10px;
}
.app-section p {
    padding-bottom: 7px;
    padding-left: 4px;
}
.app-section .app-icon {
    padding-left: 3px;
    cursor: pointer;
    display: block;
}
.prcs-dl, .prcs-d {
    cursor: pointer;
}
 .app-section .app-icon i.app {
    width: 101px;
    height: 30px;
    display: inline-block;
    background: url(//kinnpimg2.bluestone.com/resources/themes/bluestone/images/new/sprite-v8.png) no-repeat -185px -50px;
    border-radius: 4px;
} 
.app-section .app-icon i.app.ios {
    background-position: -55px -168px;
}
 .app-section .app-icon i.app {
    width: 101px;
    height: 30px;
    display: inline-block;
    background: url(//kinnpimg2.bluestone.com/resources/themes/bluestone/images/new/sprite-v8.png) no-repeat -185px -50px;
    border-radius: 4px;
}

@media (max-width: 1140px) and (min-width: 768px) {
 .app-section .app-mobile {
    top: -70px;
    right: 0;
    width: 140px;
}
}
@media (max-width: 1279px) {
 .app-section .app-mobile {
    position: absolute;
    right: -28px;
    top: -108px;
    width: 169px;
    right: 0;
    right: -27px;
    overflow: hidden;
}
}
 @media (max-width: 1367px) {
 .app-section .app-mobile {
    width: 199px;
    overflow: hidden;
    right: -60px;
}
}
 .app-section .app-mobile {
    position: absolute;
    right: -165px;
    top: -128px;
    cursor: pointer;
}
.prcs-dl, .prcs-d {
    cursor: pointer;
}

	@media (max-width: 991px) {
		padding: 40px;
		.container {
			flex-direction: column;
		}
		.container .sec {
			margin-right: 0;
			margin-bottom: 40px;
		}
		.container .sec.aboutus,
		.quickLinks,
		.contact {
			width: 100%;
		}
		.app-section .app-mobile {
    		position: absolute;
    		right: -140px;
    		top: -128px;
			cursor: pointer;
    overflow: hidden;
		}
	}
`

{/*
import React from "react"
import styled from "styled-components"

let FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
  justify-content: center;
`

const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
`

const Button = styled.button`
  font-size: 24px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  background: linear-gradient(102.24deg, #9b51e0 0%, #3436e7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`

let LinkGroup = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-items: center;

  a {
    color: #5334f5;
    font-size: 20px;
    font-weight: 500;
    margin: 5px 0;
    transition: 1s;
  }

  a:hover {
    color: black;
  }
`
const Copyright = styled.div`
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`
const AboutGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
const CustomerCare = styled.div`
  a {
    display: grid;
    grid-template-rows: repeat(1, 1fr);
  }

  a:hover {
    color: black;
  }
`

const Title = styled.p`
  margin: 0px;
  color: #00000099;
`

const Footer = ({ data, children }) => (
  <FooterGroup>
    <Text>Taiba - A Complete Jewellery Shop Collection</Text>
    <Button>Tweet</Button>
    <AboutGroup>
      <CustomerCare>
        <Text>Customer Care</Text>
        <Title>Get answers to your questions</Title>
        <a href="/">Sitemap</a>
        <a href="/">About us</a>
        <a href="/">Shipping Policy</a>
        <a href="/">Easy Return Policy</a>
        <a href="/">Privacy & Security Policy</a>
      </CustomerCare>
      <CustomerCare>
        <Text>Featured collections</Text>
        <Title>Browse our popular products</Title>
        <a href="/">New Arrivals</a>
        <a href="/">Jewellery Sets</a>
        <a href="/">Earrings</a>
        <a href="/">Rings</a>
        <a href="/">Shop by Category</a>
        <a href="/">Shop by Collection</a>
        <a href="/">Sale!</a>
      </CustomerCare>
      <CustomerCare>
        <Text>Get in touch</Text>
        <Title>99 5503 8475</Title>
        <a href="/">Whatsapp No. 9955 038 475</a>
        <a href="/">
          2nd floor, Gani Market, <br />
          Gaya (Bihar) 823001
        </a>
        <a href="/">Tweet</a>
        <a href="/">Facebook</a>
        <a href="/">Instagram</a>
      </CustomerCare>
    </AboutGroup>
    <LinkGroup>
      {data.allContentfulLink.edges.map(edge => (
        <a href={edge.node.url}>{edge.node.title}</a>
      ))}
    </LinkGroup>
    <Copyright>{children}</Copyright>
  </FooterGroup>
)

export default Footer
      */}