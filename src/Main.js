import React from 'react';
import './Main.css';
import Sketch from './sketch.png';
import Persona1 from './persona1.png';
import Persona2 from './persona2.png';
import Storyboard1 from './storyboard1.png';
import Storyboard2 from './storyboard2.png';

function Main() {

    return (
        <div className="main">
            <div className="section">
                <h1 className="title">Personas & Storyboarding</h1>
                <p className="subtitle">
                    This website involves a project where I observed real users interacting with a home kitchen's microwave, interviewed these
                    individuals about their experiences, created personas based on these users,
                    and illustrated a storyboard for one of my personas.
                </p>
            </div>

            <div className="section" style={{ marginTop: "-10px" }}>
                <div className="sub-title">Part 1: Preparation</div>
                <div className="text">
                    The interface chosen was a microwave located in the kitchen of a regular home utilized by users
                    both from the house itself and guests as well. I also prepared
                    some questions for users regarding their experiences with the interface.
                </div>
                <div className="columns" style={{ marginTop: "10px" }}>
                    <div className="column">
                        <div className="column-title">Sketch of microwave</div>
                        <img className="sketch" src={Sketch}></img>
                    </div>
                    <div className="column">
                        <div className="column-title">Description</div>
                        <ul>
                            <li>Has conventional features such as clock, start and stop button, and a numeric pad</li>
                            <li>Also includes additional buttons for preset cooking times such as popcorn, fresh vegetables, soup, etc.</li>
                            <li>Other key additional features include kitchen time and enabling power level.</li>
                        </ul>
                    </div>
                </div>
                <div className="caption">
                    This microwave is attempting to gives users a friendly and interactive interface to easily cook food at home
                    using just a few clicks. All a user has to do is press a few buttons and wait a few minutes or seconds to enjoy
                    their cooked meal.
                </div>
            </div>

            <div className="section">
                <div className="sub-title">Part 2: Recording Observations</div>
                <div className="section-title">Key observations gained from observing users</div>
                <ul>
                    <li>Users tend to have a previous understanding of what a microwave does and how it does it.</li>
                    <li>The text displayed on the microwave's buttons helps users know what each button does and how to use them.</li>
                    <li>Generally, users tended to stop for a few seconds to analyze the different options available before selecting one.</li>
                    <li>Lastly, there were a few users who struggled to set a cooking time due to the nature of the interface's functionality (cook time button should be pressed before the keypad).</li>
                </ul>
                <div className="section-title">Interviews</div>
                <div className="columnss">
                    <div className="columnn">
                        <div className="column-text">
                            1. Have you used a microwave before? And if so, did that help you understand this microwave's interface better?
                        </div>
                        <ul style={{ marginTop: "10px" }}>
                            <li>All users said yes to using a microwave before.</li>
                            <li>All users mentioned that using a microwave before gave them a previous understanding of how microwaves work
                                which helped in understanding this specific microwave's interface better and quicker.
                            </li>
                            <li>For example, keypads are something all microwaves have so that seemed familiar to users and knew what the
                                general functionality of those buttons were.
                            </li>
                        </ul>
                        <div className="column-text">
                            2. How difficult was it to use the microwave's interface?
                        </div>
                        <ul style={{ marginTop: "10px" }}>
                            <li>Most users displayed feelings of being able to use the microwave very easily and quickly, especially those users
                                who already live in the house.</li>
                            <li>Some users struggled to make the microwave work due to the fact that different to some other microwaves, this interface
                                requires the user to press "cook time" before selecting the wanted cooking time.
                            </li>
                            <li>The general feeling was that the microwave was very easy to use, with a few exceptions.</li>
                        </ul>
                    </div>
                    <div className="columnn">
                        <div className="column-text">
                            3. How practical and/or useful were the buttons on the microwave's interface?
                        </div>
                        <ul style={{ marginTop: "10px" }}>
                            <li>Most users appreciated the pre set cooking buttons that the interface had.</li>
                            <li>Most users expressed that the buttons were practical and easy to understand and/or use.</li>
                            <li>There was a general satisfaction with all the different pre set options that the microwave has.</li>
                        </ul>
                        <div className="column-text">
                            4. Is there anything you would change or want to make more clear about the microwave's interface?
                        </div>
                        <ul style={{ marginTop: "10px" }}>
                            <li>Most users expressed satisfaction with the layout of the microwave, even mentioning that the microwave's
                                interface was better than those they've used before.
                            </li>
                            <li>A few users emphasized the "cook time" button difficulties they faced, and expressed they would
                                want clearer instructions on the interface when using this microwave.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="sub-title">Part 3: Personas</div>
                <div className="columns">
                    <div className="column">
                        <div className="column-title">Persona #1: Frat Bro Chad</div>
                        <img className="sketch" src={Persona1}></img>
                        <div className="text" style={{ marginTop: "10px", width: "80%" }}>
                            Chad faces the struggle that some of my users also faced, the not knowing that the microwave
                            requires certain buttons to be pressed before setting the cooking time. Chad represents this user
                            because he embodies a user who might have to use a microwave when he or she is stressed and
                            in a rush, but has difficulty using the microwave's buttons.
                        </div>
                    </div>
                    <div className="column">
                        <div className="column-title">Persona #2: Hungry Girl Valeria</div>
                        <img className="sketch" src={Persona2}></img>
                        <div className="text" style={{ marginTop: "10px", width: "80%" }}>
                            Valeria embodies most of the other users I interviewed. She is not under any sort of big pressure
                            and is just at home spending time with her family. She is also someone that has experience with this
                            microwave so she knows how it works.
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="sub-title">Part 4: Storyboards</div>
                <div className="text">
                    This storyboard represents the story of Frat Bro Chad to show the emotion, feelings, and experiences
                    that the user goes through.
                </div>
                <div className="storyboard-canvas">
                    <img className="storyboard" src={Storyboard1} style={{ marginTop: "10px" }}></img>
                    <img className="storyboard" src={Storyboard2}></img>
                </div>
            </div>
        </div>
    );
}

export default Main;