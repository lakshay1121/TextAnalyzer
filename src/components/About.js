import React, { useState } from 'react'

export default function About() {


    const [mystyle, setmystyle] = useState({

        color: 'black',
        backgroundColor: 'white'
    });

    const [btntext, setbtntext] = useState("Enable Dark Mode");

    const togglestyle = () => {

        if (mystyle.color === 'black') {

            setmystyle({

                color: 'white',
                backgroundColor: 'black'
            })
            setbtntext("Enable Light Mode");
        }

        else {

            setmystyle({

                color: 'black',
                backgroundColor: 'white'
            })

            setbtntext("Enable Dark Mode");
        }
    }


    return (
        <div className="container" style={mystyle}>

            <h1>About Us</h1>

            <div className="card">
                <div className="card-header" style={mystyle} >
                    Quote
                </div>
                <div className="card-body" style={mystyle}>
                    <blockquote className="blockquote mb-0" style={mystyle}>
                        <p>A well-known quote, contained in a blockquote element.</p>
                        <footer className="blockquote-footer" >Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div>

            <div className="container">
                <button className='btn btn-dark my-3' style={mystyle} onClick={togglestyle}>{btntext}</button>
            </div>

        </div>

    )
}
