import React from 'react'

export default function Game() {
    return (
        <div className='games-wrapper'>
            <div className="game-container">
                <div className = "team-info">
                    <img className="team-image" src='nhl-toronto-maple-leafs.png' alt='logo'></img>
                </div>
                <div className="game-info">
                    <h5> Toronto Maple Leafs @ Tampa Bay Lightning</h5>
                    <h6>Tuesday April 19th, 7:00 pm EST </h6>
                </div>
                <div className="team-info">
                    <img className="team-image" src='nhl-tampa-bay-lightning.png' alt='logo'></img>
                </div>
            </div>
            <div className="game-container">
                <div className = "team-info">
                    <img className="team-image" src='nhl-boston-bruins.png' alt='logo'></img>
                </div>
                <div className="game-info">
                    <h5> Boston Bruins @ Toronto Maple Leafs</h5>
                    <h6>Tuesday April 21st, 7:00 pm EST </h6>
                </div>
                <div className="team-info">
                    <img className="team-image" src='nhl-toronto-maple-leafs.png' alt='logo'></img>
                </div>
            </div>
        </div>
    );
}
