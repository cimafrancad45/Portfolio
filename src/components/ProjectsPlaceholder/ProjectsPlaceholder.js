//placeholder until other components with states and props are set with the JSON file. Page thumbnails will be added at a later time.
import React from "react";
import "./portfolio.css"

export default class Card extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="container col s2 wrapper">
                    <div className="card portfolio-items">
                        <div className="card-title">
                            <span>JavaScript Hangman Game</span>
                        </div>
                        <hr></hr>
                        <div className="card-section">
                            <a href="https://github.com/cimafrancad45/Hangman-Game">Github Link</a>
                        </div>
                    </div>
                </div>

                <div className="container col s2 wrapper">
                    <div className="card portfolio-items">
                        <div className="card-title">
                            <span>Firebase Train App</span>
                        </div>
                        <hr></hr>
                        <div className="card-section">
                            <a href="https://github.com/cimafrancad45/train-times">Github Link</a>
                        </div>
                    </div>
                </div>

                <div className="container col s2 wrapper">
                    <div className="card portfolio-items">
                        <div className="card-title">
                            <span>GIFY API Gif Generator</span>
                        </div>
                        <hr></hr>
                        <div className="card-section">
                            <a href="https://cimafrancad45.github.io/giftastic/index.html">Github Link</a>
                        </div>
                    </div>
                </div>

                <div className="container col s2 wrapper">
                    <div className="card portfolio-items">
                        <div className="card-title">
                            <span>jQuery Game</span>
                        </div>
                        <hr></hr>
                        <div className="card-section">
                            <a href="https://github.com/cimafrancad45/crystal-game">Github Link</a>
                        </div>
                    </div>
                </div>

                <div className="container col s2 wrapper">
                    <div className="card portfolio-items">
                        <div className="card-title">
                            <span>mySQL Burger App</span>
                        </div>
                        <hr></hr>
                        <div className="card-section">
                            <a href="https://github.com/cimafrancad45/borgor-tiem">Github Link</a>
                        </div>
                    </div>
                </div>

                <div className="container col s2 wrapper">
                    <div className="card portfolio-items">
                        <div className="card-title">
                            <span>React Memory Game</span>
                        </div>
                        <hr></hr>
                        <div className="card-section">
                            <a href="https://github.com/cimafrancad45/clicker-game">Github Link</a>
                        </div>
                    </div>
                </div>
            </div>
        );


    }
} 
