import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Branding from '../components/branding'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>nonintendo</title>
          <meta property="og:title" content="nonintendo" />
        </Head>
        <section className="home-hero">
          <div className="home-main">
            <div className="home-content">
              <header className="home-header">
                <header
                  data-thq="thq-navbar"
                  className="home-navbar-interactive"
                >
                  <Branding rootClassName="branding-root-class-name1"></Branding>
                  <div
                    data-thq="thq-navbar-nav"
                    data-role="Nav"
                    className="home-desktop-menu"
                  >
                    <div className="home-links">
                      <Link href="/">
                        <a className="home-link01 navLink">Compra</a>
                      </Link>
                    </div>
                  </div>
                  <div data-thq="thq-burger-menu" className="home-burger-menu">
                    <button className="button home-button">
                      <svg viewBox="0 0 1024 1024" className="home-icon">
                        <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </button>
                  </div>
                  <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                    <div
                      data-thq="thq-mobile-menu-nav"
                      data-role="Nav"
                      className="home-nav"
                    >
                      <div className="home-container1">
                        <Branding rootClassName="branding-root-class-name"></Branding>
                        <div
                          data-thq="thq-close-menu"
                          className="home-menu-close"
                        >
                          <svg viewBox="0 0 1024 1024" className="home-icon02">
                            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="home-links1">
                        <Link href="/">
                          <a className="home-link03 navLink">Mission</a>
                        </Link>
                        <Link href="/">
                          <a className="home-link05 navLink">Take Action</a>
                        </Link>
                        <Link href="/">
                          <a className="home-link07 navLink">News</a>
                        </Link>
                        <Link href="/">
                          <a className="home-link09 navLink">Contact</a>
                        </Link>
                      </div>
                      <div className="home-icon-group">
                        <svg
                          viewBox="0 0 950.8571428571428 1024"
                          className="home-icon04"
                        >
                          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                        </svg>
                        <svg
                          viewBox="0 0 877.7142857142857 1024"
                          className="home-icon06"
                        >
                          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                        </svg>
                        <svg
                          viewBox="0 0 602.2582857142856 1024"
                          className="home-icon08"
                        >
                          <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </header>
              </header>
              <div className="home-hero-section">
                <h1 className="home-heading">You can make a difference</h1>
                <div className="home-header1">
                  <p className="home-caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-help">
          <div className="home-content1">
            <div id="individuals-content" className="home-save">
              <img
                alt="image"
                src="/nonintendotee1-1400w.jpg"
                loading="lazy"
                className="home-image"
              />
              <div className="home-content2">
                <div className="home-main1">
                  <div className="home-header2">
                    <h2 className="home-heading1">
                      This is the Individuals Tab
                    </h2>
                    <p className="home-caption1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="home-button1">
                  <button className="home-button2 button">
                    <span>Take action</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-petitions">
          <div className="home-content3">
            <div className="home-main2">
              <div className="home-header3">
                <h2 className="home-heading2">
                  Sign our petitions and make your voice heard for the animals
                  that need your help.
                </h2>
                <p className="home-caption2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="home-button3">
              <button className="home-button4 button">
                <span>Sign petition</span>
              </button>
            </div>
          </div>
          <div className="home-container2"></div>
        </section>
        <section className="home-quote-one">
          <div className="home-quote-content">
            <h2 className="home-quote">
              “Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.”
            </h2>
            <div className="home-quoted">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxwb3RyYWl0fGVufDB8fHx8MTY3MDkyNjgxNQ&amp;ixlib=rb-4.0.3&amp;w=200"
                className="home-image1"
              />
              <p className="home-caption3">Michael Belfort, @helpa</p>
            </div>
          </div>
        </section>
        <section className="home-help1">
          <div className="home-content4">
            <div id="individuals-content" className="home-save1">
              <img
                alt="image"
                src="/nonintendotee2-1400w.jpg"
                loading="lazy"
                className="home-image2"
              />
              <div className="home-header4">
                <p className="home-caption4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="home-button5">
                  <button className="home-button6 button">
                    <span>Sign petition</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-top">
            <Branding></Branding>
          </div>
          <div className="home-middle">
            <span className="home-text3">Made by Adsurd</span>
          </div>
          <div className="home-bottom">
            <span className="home-copyright">© Copyright Adsurd– 2024</span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #dd0101;
          }
          .home-main {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 600px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            background-size: contain;
            justify-content: center;
            background-image: url('/mariover-1400w.jpg');
            background-repeat: no-repeat;
            background-position: top;
          }
          .home-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: space-between;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link01 {
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            flex-direction: column;
          }
          .home-link03 {
            text-decoration: none;
          }
          .home-link05 {
            text-decoration: none;
          }
          .home-link07 {
            text-decoration: none;
          }
          .home-link09 {
            text-decoration: none;
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero-section {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading {
            color: #ffffff;
            font-size: 70px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 91px;
          }
          .home-header1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption {
            color: #222223;
            font-size: 20px;
            line-height: 30px;
          }
          .home-help {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-content1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-save {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
          }
          .home-image {
            width: 640px;
            object-fit: cover;
          }
          .home-content2 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            color: rgb(34, 34, 35);
            font-size: 40px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 52px;
          }
          .home-caption1 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-button1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-button2 {
            color: #ffffff;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-buttonradius);
            background-color: #dd0101;
          }
          .home-petitions {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-sixunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-content3 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading2 {
            color: rgb(34, 34, 35);
            font-size: 40px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 52px;
          }
          .home-caption2 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-button3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-button4 {
            color: #ffffff;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-buttonradius);
            background-color: #dd0101;
          }
          .home-container2 {
            width: 100%;
            height: 500px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            background-size: auto;
            background-image: url('/nonintendo-sharing-1400w.png');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-quote-one {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: #dd0101;
          }
          .home-quote-content {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-quote {
            color: #ffffff;
            width: 100%;
            font-size: 32px;
            max-width: 900px;
            font-style: italic;
            font-family: Lora;
            font-weight: 500;
            line-height: 48px;
          }
          .home-quoted {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: row;
          }
          .home-image1 {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-color: #222223;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-caption3 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            font-style: italic;
            font-family: Lora;
            font-weight: 500;
          }
          .home-help1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-content4 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-save1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image2 {
            width: auto;
            height: 100%;
            object-fit: cover;
          }
          .home-header4 {
            gap: var(--dl-space-space-twounits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-caption4 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-button5 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-button6 {
            color: #ffffff;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-buttonradius);
            background-color: #dd0101;
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: #dd0101;
          }
          .home-top {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .home-middle {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 250px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-text3 {
            width: 100%;
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-family: 'Lora';
            font-weight: 500;
            line-height: 36px;
          }
          .home-bottom {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #222223;
            border-style: dashed;
            flex-direction: column;
            justify-content: center;
            border-top-width: 1px;
          }
          .home-copyright {
            color: rgba(0, 0, 0, 0.3);
            width: 100%;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 18px;
          }
          @media (max-width: 1200px) {
            .home-main {
              height: 600px;
              background-position: bottom;
            }
            .home-desktop-menu {
              padding-right: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
          }
          @media (max-width: 991px) {
            .home-main {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-threeunits);
            }
            .home-navbar-interactive {
              gap: 0;
              justify-content: space-between;
            }
            .home-heading {
              font-size: 36px;
              line-height: 46px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-help {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-save {
              flex-direction: column;
            }
            .home-image {
              width: 100%;
            }
            .home-content2 {
              max-width: 100%;
            }
            .home-button1 {
              width: 100%;
            }
            .home-petitions {
              padding-top: 0px;
              flex-direction: column-reverse;
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-content3 {
              max-width: 100%;
            }
            .home-button3 {
              width: 100%;
            }
            .home-quote-one {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-help1 {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-save1 {
              flex-direction: column;
            }
            .home-image2 {
              width: 100%;
            }
            .home-button5 {
              width: 100%;
            }
            .home-footer {
              width: 100%;
              padding-top: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 767px) {
            .home-main {
              gap: var(--dl-space-space-threeunits);
              height: 600px;
              position: relative;
              padding-left: 0px;
              flex-direction: column;
            }
            .home-content {
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-navbar-interactive {
              gap: 0;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-help {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading1 {
              text-align: center;
            }
            .home-caption1 {
              text-align: center;
            }
            .home-petitions {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-quote-content {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-help1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-main {
              width: auto;
              height: 500px;
              align-self: stretch;
              background-size: contain;
              background-image: url('/mariover-1400w.jpg');
              background-position: bottom;
            }
            .home-content {
              gap: var(--dl-space-space-threeunits);
              height: auto;
              align-self: stretch;
            }
            .home-header {
              width: auto;
              align-self: stretch;
              justify-content: space-between;
            }
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-button {
              border-radius: var(--dl-radius-radius-buttonradius);
              background-color: #ffffff;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-help {
              padding-top: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-heading1 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-button1 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-petitions {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-heading2 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption2 {
              color: rgb(34, 34, 35);
              line-height: 24px;
            }
            .home-quote-one {
              height: 500px;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-quote-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-quote {
              font-size: 18px;
              text-align: center;
              line-height: 27px;
            }
            .home-quoted {
              flex-direction: column;
              justify-content: center;
            }
            .home-image1 {
              width: 40px;
              height: 40px;
            }
            .home-caption3 {
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
            }
            .home-help1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-caption4 {
              color: rgb(34, 34, 35);
              line-height: 24px;
            }
            .home-footer {
              padding-top: var(--dl-space-space-threeunits);
            }
            .home-text3 {
              font-size: 18px;
              line-height: 40px;
            }
            .home-bottom {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .home-copyright {
              font-size: 10px;
              line-height: 15px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
