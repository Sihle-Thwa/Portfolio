import React from 'react'
import Typewriter from 'typewriter-effect';

function TypeWriter() {
    return (
        <Typewriter
            options={{
                strings: [
                    "FullStack Developer - M.E.R.N",
                    "Front-End Developer",
                    "Software Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 25,
            }}
        />
    )
}

export default TypeWriter;