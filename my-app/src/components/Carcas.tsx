import circle from '../assets/circles.svg'
import backStyle from '../assets/backstyle.svg'
import {useEffect, useState,useRef} from "react";
import Success from "./Success.js";
import {handleRegex} from "./Regex.js";


const Carcas = () => {

    const [name, setName] = useState<string>('');
    const [card, setCard] = useState<number>(0);
    const [month, setMonth] = useState<number>(0);
    const [year, setYear] = useState<number>(0);
    const [cvc, setCvc] = useState<number>(0);
    const [background, setBackground] = useState<string>('')

    const nameRef = useRef<string>('');
    const cardRef = useRef<number>(0);
    const monthRef = useRef<number>(0);
    const yearRef = useRef<number>(0);
    const cvcRef = useRef<number>(0);


    function handleName(object:any,ref:any):void {
        object.target.value = object.target.value.replace(/[^a-zA-Z\s]/g, '');
        if (object.target.value.length > 20) {
            object.target.value = object.target.value.slice(0, 20)
        }
        ref.current = object.target.value;
    }

    function handleMonth(object:any,ref:any):void {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
        ref.current = object.target.value;
    }

    function handleYear(object:any,ref:any):void {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
        ref.current = object.target.value;
    }

    function handleCvc(object:any,ref:any):void {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
        ref.current = object.target.value;
    }

    function handleCard(object:any,ref:any):void {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
        const format:number = object.target.value.replace(/(.{4})/g, '$1 ').trim();
        ref.current = format;
    }

    function handleSubmit(e:any):void{
        e.preventDefault();

        const formValid:boolean = handleRegex(e);

        if(formValid){
            setCard(cardRef.current);
            setName(nameRef.current);
            setMonth(monthRef.current);
            setYear(yearRef.current);
            setCvc(cvcRef.current);
        }

        const cardInfo = {
            name: nameRef.current,
            card: cardRef.current,
            month: monthRef.current,
            year: yearRef.current,
            cvc: cvcRef.current,
        }

        formValid === true ? localStorage.setItem('card', JSON.stringify(cardInfo)) : false

    }

    useEffect(():void => {
        const theme:string = localStorage.getItem('theme') || 'light';
        const backgroundColor:string = theme === 'light' ? 'white' : 'blue'
        setBackground(backgroundColor);
    }, []);

    function handleToggle():void {
        const theme:string = localStorage.getItem('theme') || 'light';
        const newTheme:string =  theme === 'light' ? 'dark' : 'light';
        const backgroundCol:string = newTheme === 'light' ? 'white' : 'black';
        setBackground(backgroundCol);
        localStorage.setItem('theme', newTheme);
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


                <div className='carcass-right' style={{backgroundColor:background}}>
                    <form id='form' onSubmit={handleSubmit}>

                        <div className='box'>
                            <label>CARDHOLDER NAME</label>
                            <input id='name' placeholder='e.g. Jane Appleseed' onChange={(e)=> handleName(e,nameRef)}/>
                            <p className='regWrong' id='nameWrong'></p>
                        </div>

                        <div className='box'>
                            <label>CARD NUMBER</label>
                            <input id='card' maxLength={16} type='number' placeholder='e.g. 1234 5678 9123 0000' onChange={(e) => handleCard(e,cardRef)}/>
                            <p className='regWrong' id='cardWrong'>Wrong format,letters only</p>
                        </div>

                        <div className='box1'>
                            <div className='box2'>
                                <label>Exp. Date (MM/YY)</label>
                                <div className='input-container'>
                                    <input id='month' maxLength={2} type='number' placeholder='MM' onChange={(e) => handleMonth(e,monthRef)}/>
                                    <input id='year' maxLength={2} type='number' placeholder='YY' onChange={(e) => handleYear(e,yearRef)}/>
                                </div>
                                <p className='regWrong' id='dateWrong'>Wrong format</p>
                            </div>
                            <div className='box2'>
                                <label>CVC</label>
                                <input id='cvc' maxLength={3} type='number' placeholder='e.g. 123' onChange={(e) => handleCvc(e,cvcRef)}/>
                                <p className='regWrong' id='cvcWrong'>Wrong format</p>
                            </div>
                        </div>

                        <button type='submit' id='btn'>Confirm</button>

                    </form>
                    <Success/>

                    <button id='toggle' onClick={handleToggle} style={{position:'absolute',top:'12px',right:'12px'}}>Theme</button>

                </div>
            </div>
        </div>
    )
}

export default Carcas