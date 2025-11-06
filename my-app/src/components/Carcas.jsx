import circle from '../assets/circles.svg'
import backStyle from '../assets/backstyle.svg'
import {useState} from "react";
import Success from "./Success.jsx";
import {handleSubmit} from "./Regex.jsx";


const Carcas = () => {

    const [name, setName] = useState('');
    const [card, setCard] = useState('')
    const [month, setMonth] = useState(0)
    const [year, setYear] = useState(0)
    const [cvc, setCvc] = useState(0)



    function handleName(object) {
        if(object.target.value.length > 20){
            object.target.value = object.target.value.substring(0, 20)
        }
        setName(object.target.value)
    }

    function handleMonth(object) {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
        setMonth(object.target.value);
    }
    function handleYear(object) {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
        setYear(object.target.value);
    }
    function handleCvc(object) {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
        setCvc(object.target.value);
    }
    function handleCard(object) {
        if (object.target.value.length > object.target.maxLength){
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
        const format = object.target.value.replace(/(.{4})/g, '$1 ').trim();

        setCard(format);
    }




    return (
        <div className='carcass-container'>
            <div className='carcass'>

                <div className='carcass-left'>
                    <div className='cards'>

                        <div className='front-side'>
                            <div><img src={circle}/></div>
                            <p className='cardNum' style={{marginTop:'50px'}}>{card || '0000 0000 0000 0000'}</p>
                            <div style={{display: 'flex',justifyContent: 'space-between',marginTop:'20px'}}>
                                <span>{name || 'JANE APPLESEED'}</span>
                                <span>{month || '00'}/{year || '00'}</span>
                            </div>
                        </div>

                        <div className='back-side'>
                            <div style={{backgroundColor:'rgba(47, 47, 47, 1)',width:'100%',height:'44px'}}></div>
                            <div style={{width:'80%',height:'38px',borderRadius:'4px',backgroundColor:'rgba(173, 181, 190, 1)',padding:'12px 12px',display:'flex',justifyContent:'flex-end'}}>
                                <span>{cvc || '000'}</span>
                            </div>
                            <div style={{marginTop:'12px'}}>
                                <img src={backStyle} style={{height:'26px'}}/>
                            </div>
                        </div>

                    </div>
                </div>


                <div className='carcass-right'>
                    <form id='form' onSubmit={handleSubmit}>

                        <div className='box'>
                            <label>CARDHOLDER NAME</label>
                            <input id='name' placeholder='e.g. Jane Appleseed' onChange={handleName}/>
                            <p className='regWrong' id='nameWrong'></p>
                        </div>

                        <div className='box'>
                            <label>CARD NUMBER</label>
                            <input id='card' maxLength='16' type='number' placeholder='e.g. 1234 5678 9123 0000' onChange={handleCard}/>
                            <p className='regWrong' id='cardWrong'>Wrong format,letters only</p>
                        </div>

                        <div className='box1'>
                            <div className='box2'>
                                <label>Exp. Date (MM/YY)</label>
                                <div className='input-container'>
                                    <input id='month' max='12' maxLength='2' type='number' placeholder='MM' onChange={handleMonth}/>
                                    <input id='year' maxLength='2' type='number' placeholder='YY' onChange={handleYear}/>
                                </div>
                                <p className='regWrong' id='dateWrong'>Wrong format</p>
                            </div>
                            <div className='box2'>
                                <label>CVC</label>
                                <input id='cvc' maxLength='3' type='number' placeholder='e.g. 123' onChange={handleCvc}/>
                                <p className='regWrong' id='cvcWrong'>Wrong format</p>
                            </div>
                        </div>

                        <button type='submit' id='btn'>Confirm</button>

                    </form>
                    <Success/>

                </div>
            </div>
        </div>
    )
}

export default Carcas