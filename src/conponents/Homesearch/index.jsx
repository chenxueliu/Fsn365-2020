// 首页
import React from 'react'
import './search.less'

const index = () => {
    const [btnshow, setBtnshow] = React.useState(false);
    const [seltext, setSeltext] = React.useState('All Filters');
    const [iputvalue, setIputvalue] = React.useState('');

    const setShow = (e, a) => {
        console.log(e,a)
        e.nativeEvent.stopImmediatePropagation()
        e.stopPropagation()
        setBtnshow(a)
    }
    const setSetexts = (a) => {
        setSeltext(a)
        setBtnshow(false)
    }
    const onInputvalue = ({ target }) => {
        setIputvalue(target.value)
    }
    const onSubmit = () => {
        console.log(seltext, iputvalue)
    }
    return (
        <div>
            <div className='home-box' onClick={(e) => setShow(e, false)} >
                <div className='home-search'>

                    <h3>Fusion Blockchain Explorer</h3 >
                    <div className='home-input-box'>
                        <div className='home-selebox'>
                            <button className='home-btn' onClick={(e) => setShow(e, true)}>{`${seltext}`}</button>
                            <div className={btnshow ? 'home-show-box home-show' : 'home-show-box home-onshow'}>
                                <div onClick={() => setSetexts('All Filters')}>All Filters</div>
                                <div onClick={() => setSetexts('Asset')}>Asset</div>
                                <div onClick={() => setSetexts('Address')}>Address</div>
                                <div onClick={() => setSetexts('Transactions')}>Transactions</div>
                            </div>
                        </div>
                        <div className='home-input'>
                            <input type="text" placeholder='Search by Address/Tx Hash/Asset' onChange={(e) => onInputvalue(e)} value={iputvalue} />
                            <div onClick={onSubmit}>
                                <svg className='MuiSvgIcon-root' focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                    <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'>

                                    </path>

                                </svg>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div > 
    )
}


export default index