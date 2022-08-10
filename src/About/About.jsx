import React from 'react';
import "./About.css";


export default function About(){
    return(
        <div className="aboutContainer">
            <h4>About this project</h4>
            <p>My name is <span>Emanuele Sgroi</span> and I am the creator of this funny project. I had the idea to create this small project when a saw a video on youtube of a developer explaining and building graph algorithms with JavaScript and Python and decided to try to build the Dijkstra's algorithm using React JS.
            The algorithm itself was written in JavaScript and the importet in React. <br/>
            As web developer, personally I love front-end but in this project I did not focus at all in building a very catchy graphic becase that was not my main interest when I was building this project, but I believe the animation is pretty impressive.
            </p>
            <h4>What is Dijkstra's algorithm?</h4>
            <p> Dijkstra's algorithm was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later. It is an algorithm that is used to solve the shortest distance problem. That is, we use it to find the shortest distance between two vertices on a graph.
                Usually, applications like map use this algorithm in which we can find the shortest route, but, of course there are many others that use the same algorithm.
            </p>
            <h4>Dijkstra's algorithm description</h4>
            <p>You can find these information <a className='info-link' href='https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm' target="_blank">here</a>.</p>
            <p>Let the node at which we are starting be called the initial node. Let the distance of node Y be the distance from the initial node to Y. Dijkstra's algorithm will initially start with infinite distances and will try to improve them step by step.</p>
            <ol>
                <li className='list'>Mark all nodes unvisited. Create a set of all the unvisited nodes called the unvisited set.</li>
                <li className='list'>Assign to every node a tentative distance value: set it to zero for our initial node and to infinity for all other nodes. During the run of the algorithm, the tentative distance of a node v is the length of the shortest path discovered so far between the node v and the starting node. Since initially no path is known to any other vertex than the source itself (which is a path of length zero), all other tentative distances are initially set to infinity. Set the initial node as current.</li>
                <li className='list'>For the current node, consider all of its unvisited neighbors and calculate their tentative distances through the current node. Compare the newly calculated tentative distance to the one currently assigned to the neighbor and assign it the smaller one. For example, if the current node A is marked with a distance of 6, and the edge connecting it with a neighbor B has length 2, then the distance to B through A will be 6 + 2 = 8. If B was previously marked with a distance greater than 8 then change it to 8. Otherwise, the current value will be kept.</li>
                <li className='list'>When we are done considering all of the unvisited neighbors of the current node, mark the current node as visited and remove it from the unvisited set. A visited node will never be checked again (this is valid and optimal in connection with the behavior in step 6.: that the next nodes to visit will always be in the order of 'smallest distance from initial node first' so any visits after would have a greater distance).</li>
                <li className='list'>If the destination node has been marked visited (when planning a route between two specific nodes) or if the smallest tentative distance among the nodes in the unvisited set is infinity (when planning a complete traversal; occurs when there is no connection between the initial node and remaining unvisited nodes), then stop. The algorithm has finished.</li>
                <li className='list'>Otherwise, select the unvisited node that is marked with the smallest tentative distance, set it as the new current node, and go back to step 3.</li>
            </ol>
            <p>When planning a route, it is actually not necessary to wait until the destination node is "visited" as above: the algorithm can stop once the destination node has the smallest tentative distance among all "unvisited" nodes (and thus could be selected as the next "current").</p>
            <h4>Where you can find me?</h4>
            <p>This project does not include a contact section, however you can easily find me in <a className='info-link' href='https://www.linkedin.com/in/emanuele-sgroi-5b7b04220/' target="_blank">Linkedin</a>, <a className='info-link' href='https://github.com/Emanuele-Sgroi' target="_blank">Github</a>, or my personal <a className='info-link' href='#' target="_blank">Website</a></p>
    </div>
    )
}