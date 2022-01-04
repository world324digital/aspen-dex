import React, { Component } from "react";
import "../stylesheet/new-style.css";
// import "../stylesheet/landing-style.css";

var landingContent = `
<div class="evoulve_circle"> 
    <canvas id="glslCanvas" data-fragment="
        #ifdef GL_ES
        precision lowp float;
        #endif

        #define TAU 6.28318530718

        uniform vec2 u_resolution;
        uniform vec2 u_mouse;
        uniform float u_time;

        // EASE IN/OUT AROUND POINT //
        float pointEase(float x, float t, float r, float a) {
            if (x<(t-r) || x >(t+r)) return 0.0;

            float n = 0.0;
            x = t-x;
            n = ((1.0 + cos((x * ((TAU/2.0) * (1.0/r))))) / 2.0) * a;
            return n;
        }

        void main() {
            vec2 st = gl_FragCoord.xy/u_resolution;
            float aspect = u_resolution.x / u_resolution.y;
            float distort = st.x / st.y;
            float t = u_time * 0.5;
            float r = 0.8;


            // move origins of circles //
            float dx1 = 0.5 + (sin(t + 3000.00) * sin(t * 0.33) * 0.5);
            float dy1 = 0.5 + (cos(t + 1000.00) * cos(t * 0.23) * 0.5);
            float dx2 = 0.5 + (sin(t + 5000.00) * sin(t * 0.44) * 0.5);
            float dy2 = 0.5 + (cos(t + 2000.00) * cos(t * 0.43) * 0.5);
            float dx3 = 0.5 + (sin(t + 8000.00) * sin(t * 0.55) * 0.5);
            float dy3 = 0.5 + (cos(t + 3000.00) * cos(t * 0.63) * 0.5);


            // get sinuous amplitude based on distance from origins //
            float x1 = pointEase(st.x, dx1, r, 1.0);
            float y1 = pointEase(st.y, dy1, r * aspect, 1.0);
            float a1 = x1 * y1;
            float x2 = pointEase(st.x, dx2, r, 1.0);
            float y2 = pointEase(st.y, dy2, r * aspect, 1.0);
            float a2 = x2 * y2;
            float x3 = pointEase(st.x, dx3, r, 1.0);
            float y3 = pointEase(st.y, dy3, r * aspect, 1.0);
            float a3 = x3 * y3;

            // colors //
            vec3 c1 = (1.0 - (a2 * a3)) * a1 * vec3(1.0,0.0,1.0);
            vec3 c2 = (1.0 - (a1 * a3)) * a2 * vec3(1.0,0.0,1.0);
            vec3 c3 = (1.0 - (a1 * a2)) * a3 * vec3(1.0,0.0,1.0);
            vec3 bg = vec3(0.1,0.0,0.0);

            vec3 color = (c1 + c2 - c3);
            vec3 mixed = (0.0 - color) * bg;
            color += bg;


            gl_FragColor = vec4(color,1.0);
        }
    "></canvas> 
    <div class="overlay color">
    </div>
    <div class="overlay saturate">
    </div>
    <div class="overlay light">
    </div>
    <div class="overlay reflect">
    </div>
    <div class="overlay grey" id="grey">
    </div>
</div>
<div class="loading_screen" id="loading_screen"> 
    <div class="loading_circle"></div>
</div>
<div id="js-scroll" class="main" data-scroll-container> 
    <section data-scroll-section> 
        <div class="title wrapper"> 
            <h1 data-scroll data-scroll-delay="0.09" data-scroll-speed="-6" data-scroll-offset="-50%, 20%">Aspen Labs</h1> 
            <div class="about first-section"> 
                <p class="small"> A decentralized application company. </p>
                <p class="small"> 
                    <a class="btn-enter" href="/explore">Enter the Lab</a> 
                    <span class="arrow flipped"> 
                        <svg viewBox="0 0 80 80" class="cl-t"> 
                            <polyline points="19.89 15.25 64.03 15.25 64.03 59.33"></polyline> 
                            <line x1="64.03" y1="15.25" x2="14.03" y2="65.18"></line> 
                        </svg> 
                    </span> 
                </p>
            </div>
        </div>
    </section> 
    <section class="black" data-scroll-section> 
        <div class="evoulve_wires"> 
            <div class="evoulve_wires-inner" data-scroll data-scroll-speed="-10" data-scroll-offset="-100%, -100%"> 
                <img src="circle.svg"/> 
                <div id="bgOverlay" class="evoulve_wires-overlay">
                </div>
            </div>
        </div>
        <div class="intro wrapper" id="colorOverlay" data-scroll data-scroll-delay="0.07" data-scroll-speed="-3" data-scroll-offset="-50%, 20%"> 
            <p class="small">/ ABOUT</p>
            <p class="large-text">Aspen Labs is a technology innovation Company. We focus on designing innovations in digital industry, and transform emerging ideas into viable products that move the digital industry forward.</p>
            <hr> 
            <div class="expertise"> 
                <p class="small">Our technologists research key areas to uncover new ways to help companies do different things and do things differently.
                    <br><br><br><br>/ KEY AREAS
                </p>
                <ul> 
                    <li>Natural Language Processing <span>01</span></li>
                    <li>Machine Learning &amp; Deep Learning <span>02</span></li>
                    <li>Convolutional Neural Network <span>03</span></li>
                    <li>Computer Vision &amp; Augmented Reality <span>04</span></li>
                    <li>Blockchain <span>05</span></li>
                </ul> 
            </div>
        </div>
    </section> 
    <section data-scroll-section> 
        <div data-scroll id="greyIn" data-scroll-offset="-30%, -100%" data-scroll-repeat>
        </div>
        <div class="title wrapper"> 
            <h1 class="bottom" data-scroll data-scroll-delay="0.09" data-scroll-speed="4" data-scroll-offset="-50%, 20%">Aspen Labs</h1> 
            <div class="about"> 
                <p class="small"> &copy; 2020 
                    <a href="/">Aspen Labs Technologies</a>.
                    <br>All rights reserved.<br>Website by 
                    <a href="/" title="Fleava — Singapore Digital Agency" target="_blank" rel="noopener noreferrer">Fleava</a> 
                </p>
                <p class="small"> 
                    <a href="">Get in Touch</a> 
                    <span class="arrow"> 
                        <svg viewBox="0 0 80 80" class="cl-t"> 
                            <polyline points="19.89 15.25 64.03 15.25 64.03 59.33"></polyline> 
                            <line x1="64.03" y1="15.25" x2="14.03" y2="65.18"></line> 
                        </svg> 
                    </span> 
                </p>
            </div>
        </div>
    </section> 
</div>
`;

export default class LandingPage extends Component {
  render(){
    return (
      <div className="landing-section" dangerouslySetInnerHTML={ {__html: landingContent} } />
    );
  }
}
