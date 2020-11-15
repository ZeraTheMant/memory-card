import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderComponents from './components/HeaderComponents.js';
import CardsSection from './components/CardsSection.js';

function getCardsList() {
    let cards = [
        'https://pixnio.com/free-images/2020/07/24/2020-07-24-08-42-56-1200x800.jpg',
        'https://pixnio.com/free-images/2017/06/08/2017-06-08-14-10-56-900x616.jpg',
        'https://pixnio.com/free-images/2019/08/30/2019-08-30-09-48-35-1200x800.jpg',
        'https://pixnio.com/free-images/2020/11/07/2020-11-07-11-56-49-1200x800.jpg',
        'https://pixnio.com/free-images/2019/07/23/2019-07-23-04-12-56-e1563867744800-1200x900.jpg',
        'https://pixnio.com/free-images/2019/08/30/2019-08-30-10-12-28-1200x800.jpg',
        'https://pixnio.com/free-images/2018/12/05/2018-12-05-11-33-36-1200x900.jpg',
        'https://pixnio.com/free-images/2020/02/07/2020-02-07-09-23-06-1200x800.jpg',
        'https://pixnio.com/free-images/2018/11/11/2018-11-11-15-55-55-1200x803.jpg',
        'https://pixnio.com/free-images/2018/07/27/2018-07-27-14-38-13-1200x800.jpg',
        'https://pixnio.com/free-images/2019/09/07/2019-09-07-12-07-23-1200x800.jpg',
        'https://pixnio.com/free-images/2020/09/09/2020-09-09-11-04-30-1200x800.jpg'
    ];
    return shuffleCardsList(cards);
}

function shuffleCardsList(cards) {
    return cards.sort(() => Math.random() - 0.5);
}

const App = () => {
    const [newGame, setNewGame] = useState(true);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedImagesList, setClickedImagesList] = useState([]);
    const [cards, setCards] = useState(getCardsList());
    const WINNING_SCORE = cards.length;
    
    const incrementScore = () => setScore(score + 1);
    const updateHighScore = () => setHighScore(score);
    const willUpdateHighScore = () => score > highScore;
    const resetGame = () => {
        setScore(0);
        setNewGame(true);
        setClickedImagesList([]);
    }
    
    const handleClick = (imgLink) => {
        if (clickedImagesList.find(image => image == imgLink)) {
            alert("You already clicked that! Back to zero!");
            resetGame();
            return;
        }
        
        incrementScore();       
        setClickedImagesList(clickedImagesList.concat(imgLink));
    }
    
    useEffect(() => {
        if (willUpdateHighScore()) updateHighScore();
        
        
        if (score == WINNING_SCORE) {
            alert("Congratulations, you win! You managed to remember all previously selected images. You're a genius!")
            resetGame();
        }
        
        setCards(shuffleCardsList(cards));
    }, [score]);
    
    return (
        <div className="App">
            <HeaderComponents
                score={score}
                highScore={highScore}
                maxScoreToWin={WINNING_SCORE}
            />
            
            <CardsSection
                cards={cards}
                onClick={(i) => handleClick(i)}
            />
        </div>
    );
}

export default App;
