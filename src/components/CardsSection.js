import React, { useState } from 'react';

const Card = (props) => {
    const [imgSrc, setImgSrc] = useState('#');
    const [text, setText] = useState(props.text);
    
    return (
        <div className="card" onClick={props.onClick}>
            <img src={props.imgSrc}/>
        </div>
    );
};

const CardsSection = (props) => {
    const renderCard = (step, index) => {
        return (
            <Card
                imgSrc={step}
                key={index}
                onClick={() => props.onClick(step)}
            />
        )
    };
    
    const buildCards = () => {
        return props.cards.map((step, move) => {
            return renderCard(step, move);
        });
    }
    
    return (
        <main>
            {buildCards()}
        </main>
    );       
}

export default CardsSection;