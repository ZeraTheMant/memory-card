import React from 'react';


const HeaderComponents = (props) => { 
    return (
        <header>
            <div>
                <h1>Memory Card <span>(click on images you haven't selected yet...score {props.maxScoreToWin} points to win!)</span></h1>
                <div id="score-container">
                    <div>
                        <p>Score</p>
                        <h2>{props.score}</h2>
                    </div>
                    
                    <div>
                        <p>Top Score</p>
                        <h2>{props.highScore}</h2>                        
                    </div>
                </div>
            </div>
        </header>
    );       
}

export default HeaderComponents;