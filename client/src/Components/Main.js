import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setuserid, setRollNumber } from '../Redux/Resultreducer'
import '../Styles/Main.css';

function Main() {
    const nameRef = useRef(null);
    const rollRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        const name = nameRef.current.value.trim();
        const roll = rollRef.current.value.trim();

        if (!name || !roll) {
            alert("Please enter both Name and Roll Number.");
            return;
        }

        dispatch(setuserid(name));
        dispatch(setRollNumber(roll));
        navigate('/select-quiz');
    };

    return (
        <div className='container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div className="glass-container" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                padding: '40px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '90%',
                maxWidth: '500px',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
            }}>
                <h1 className='title text-light' style={{ marginBottom: '10px' }}>Quiz Application</h1>
                <p className="text-light" style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-secondary)' }}>
                    Please login to continue
                </p>

                <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', marginBottom: '30px' }}>
                    <input ref={nameRef} className='userid' type="text" placeholder="Enter your Name" style={{ width: '100%', boxSizing: 'border-box' }} />
                    <input ref={rollRef} className='userid' type="text" placeholder="Enter your Roll Number" style={{ width: '100%', boxSizing: 'border-box' }} />
                </div>

                <div className='start'>
                    <button className='btn btn-primary' onClick={handleLogin} style={{ width: '100%', padding: '12px 30px' }}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main