import React from 'react'
import './footer.less'
const index = () => {
    return (
        <div>
            <div className='footer'>
                <div className='footerbox'>
                    <div>
                        <p className='footerdiv-p '>
                        Powered by <strong><a href='https://fsn.dev/'>FusionNetwork</a>
                        </strong> and <strong><a href='https://fsn.dev/'>FOSC</a></strong>.
                        </p>
                        <small>I'd like to say thanks to FOSC Tech Lead
                            <a href="https://github.com/zhaojun-sh" target="_blank">
                                <strong>zhaojun</strong>
                            </a>and other contributors.
                        </small>
                    </div>
                    <div>
                        <p className='footerdiv-p '>
                        <strong>Suggestion and Contribution</strong>.
                        </p>
                        <small>Suggestions and contributions are welcomed. Please click 
                            <a href="https://t.me/fusionfrontier" target="_blank">
                                <strong>here</strong>
                            </a>
                        </small>
                        <small>Wanna view project progress? Please click
                            <a href="https://trello.com/b/juRQ9fgM/fusion-block-browser" target="_blank" >
                                <strong>here</strong>
                            </a>
                        </small>
                    </div> <div>
                        <p className='footerdiv-p '>
                            <strong>About</strong>.
                        </p>
                        <small>Made <span>❤</span> with ☕️ and by
                            <a href="https://t.me/yocnkc" target="_blank">
                                <strong> Kate.</strong>
                            </a>
                        </small>
                        <p className='footerdiv-lastp '>
                            <strong>Donation:</strong>
                            <a id='bluea' href="https://www.fsn365.com/address/10139396">10139396</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
