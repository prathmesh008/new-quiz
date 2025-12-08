import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetallaction } from '../Redux/Questionreducer';
import { resetresultaction, resetQuizData } from '../Redux/Resultreducer';
import '../Styles/Main.css';

export default function QuizSelection() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userid, rollNumber } = useSelector(state => state.result);

    const [showModal, setShowModal] = useState(false);
    const [selectedQuiz, setSelectedQuiz] = useState(null);

    const handleQuizSelect = (quizId) => {
        setSelectedQuiz(quizId);
        setShowModal(true);
    };

    const startQuiz = () => {
        dispatch(resetallaction());
        dispatch(resetQuizData());
        // We need to re-set user info because resetresultaction clears it
        // Ideally, we should separate user info from result state, but for now:
        // We will pass them back in or rely on them being set again.
        // Wait, resetresultaction clears userid/rollNumber. 
        // We should modify resetresultaction OR re-dispatch them.
        // Let's re-dispatch them in the Quiz component or just not clear them here?
        // Actually, let's fix the reducer to optionally keep user info, or just re-set it.
        // For now, I will just re-dispatch the current values.

        // But wait, resetresultaction is called.
        // Let's just navigate. The Quiz component might reset things.
        // Actually, Main.js was resetting.

        navigate('/quiz', { state: { quizId: selectedQuiz } });
    };

    return (
        <div className='container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div className="glass-container" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                padding: '50px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '90%',
                maxWidth: '800px', // Wider for quiz cards
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
            }}>
                <h1 className='title text-light' style={{
                    textAlign: 'center',
                    marginBottom: '10px',
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    background: 'linear-gradient(to right, rgba(35, 35, 40, 1), rgba(35, 35, 40, 1))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>Select Quiz</h1>

                <p className="text-light" style={{
                    textAlign: 'center',
                    marginBottom: '40px',
                    fontSize: '1.2rem',
                    letterSpacing: '0.5px'
                }}>
                    Welcome, <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{userid}</span> ({rollNumber})
                </p>

                <div className="quiz-selection" style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap', width: '100%' }}>
                    <div className="quiz-card" onClick={() => handleQuizSelect('quiz1')} style={{ transition: 'transform 0.3s ease' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '10px' }}>KÄNGURU DER MATHEMATIK </h3>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Mathematics </p>
                        <div className="badge" style={{ fontSize: '0.9rem', fontWeight: '500', marginTop: '15px' }}>24 Questions</div>
                    </div>

                    <div className="quiz-card" onClick={() => handleQuizSelect('quiz2')} style={{ transition: 'transform 0.3s ease' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '10px' }}>Quiz 2</h3>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>thinking..</p>
                        <div className="badge" style={{ fontSize: '0.9rem', fontWeight: '500', marginTop: '15px' }}>In Development</div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        {selectedQuiz === 'quiz2' ? (
                            <>
                                <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px' }}>Quiz 2: In Development</h2>
                                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '30px' }}>
                                    This quiz is currently in development. Please check back later!
                                </p>
                                <div className="modal-actions" style={{ justifyContent: 'center' }}>
                                    <button className="btn btn-primary" onClick={() => setShowModal(false)}>Close</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2>Instructions for Quiz 1</h2>
                                <ul className="instructions-list" style={{ listStyleType: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '10px' }}><strong>Time:</strong> 60 min.</li>
                                    <li style={{ marginBottom: '10px' }}><strong>Starting Points:</strong> 24 points</li>
                                    <li style={{ marginBottom: '10px' }}><strong>Questions 1 - 8:</strong> 3 points per correct answer</li>
                                    <li style={{ marginBottom: '10px' }}><strong>Questions 9 - 16:</strong> 4 points per correct answer</li>
                                    <li style={{ marginBottom: '10px' }}><strong>Questions 17 - 24:</strong> 5 points per correct answer</li>
                                    <li style={{ marginBottom: '10px' }}><strong>Unanswered:</strong> 0 points</li>
                                    <li style={{ marginBottom: '10px', color: 'var(--danger-color)' }}><strong>Incorrect Answer:</strong> Deduction of ¼ of the question's points</li>
                                </ul>
                                <div className="modal-actions">
                                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                                    <button className="btn btn-primary" onClick={startQuiz}>Start Quiz</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
