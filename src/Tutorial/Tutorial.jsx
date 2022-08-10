import React from 'react';
import "./Tutorial.css";
import wall_false from "../assets/wall_false.jpg"
import wall_true from "../assets/wall_true.jpg"
import buttons from "../assets/buttons.jpg"
import animation_start from "../assets/animation_start.jpg"
import animation_end from "../assets/animation_end.jpg"

export default function Tutorial(){
    return(
    <div className="tutorialContainer">
            <h4>What is this?</h4>
            <p>This path-finder visualizer is a basic web application that shows how Dijkstra's algorithm works. Dijkstra's path-finder visualizer, can find the shortest path between a <span>start node</span> and a <span>target node</span> avoiding obstacles, in this case the <span>wall</span>.</p>
            <h4>How it works?</h4>
        <div className='captionContainer'>
            <div className='smallContainer'>
                <p>Start</p>
                <div className='start'/>
            </div>
            <div className='smallContainer'>
                <p>Target</p>
                <div className='target'/>
            </div>
            <div className='smallContainer'>
                <p>Wall</p>
                <div className='wall'/>
            </div>
            <div className='smallContainer'>
                <p>Visited</p>
                <div className='visited'/>
            </div>
            <div className='smallContainer'>
                <p>Unvisited</p>
                <div className='unvisited'/>
            </div>
            <div className='smallContainer'>
                <p>Path</p>
                <div className='path'/>
            </div>
        </div>
        <p >The <span>start point</span> and the <span>target point</span> are randomized. Once established the two nodes, you can decide to draw the <span>wall</span> or not. As default, all the boxes inside the grid are set as <span>unvisited</span>.
        If you wish to draw the <span>wall</span> to make the algorithm works harder, simply click on the box where you want the <span>wall</span> to be, or keep the mouse pressed and drag it wherever you want inside the <span>grid</span>.
        To remove the <span>wall</span>, just click on it.</p>
        <div className='imgContainer'>
            <img className='imgSequence' src={wall_false} alt="Tutorial img"/>
            <img className='imgSequence' src={wall_true} alt="Tutorial img"/>
        </div>
        <p>Once you are ready to go, just click the button <span>"Visualize Dijkstra's Algorithm"</span> to start the animation or click <span>"Reset"</span> to start the application again with new randomized start and target nodes.</p>
        <div className='imgContainer'>
            <img src={buttons} alt="Tutorial img"/>
        </div>
        <p>When you start the visualizer, you will notice immediatly the animation in which the algorithm is checking box by box looking for the target point. When Dijkstra's Algorithm will find the target node, the animation will stop and the shortest parth between the two nodes will appear.</p>
        <div className='imgContainer'>
            <img className='imgSequence' src={animation_start} alt="Tutorial img"/>
            <img className='imgSequence' src={animation_end} alt="Tutorial img"/>
        </div>
        <p className='final-text'>Thank you for using this Dijkstra's Path-finder visualizer</p>
    </div>
    )
}