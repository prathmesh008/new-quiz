import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { jumpToQuestion } from '../Hooks/Fetchquestions';

export default function QuestionNavigator({ activeSection, sections }) {
    const { trace, visited } = useSelector(state => state.questions);
    const { result } = useSelector(state => state.result);
    const dispatch = useDispatch();

    const handleJump = (index) => {
        dispatch(jumpToQuestion(index));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ padding: '15px', flex: 1, overflowY: 'auto' }}>
                {activeSection && sections[activeSection] && (
                    <div className="question-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {sections[activeSection].map((q) => {
                            const isAttempted = result[q.index] !== undefined;
                            const isCurrent = trace === q.index;
                            const isVisited = visited && visited[q.index];

                            let btnClass = 'nav-btn';
                            if (isCurrent) btnClass += ' current';
                            else if (isAttempted) btnClass += ' attempted';
                            else if (isVisited) btnClass += ' unattempted';
                            else btnClass += ' not-visited';

                            return (
                                <button
                                    key={q.index}
                                    className={btnClass}
                                    onClick={() => handleJump(q.index)}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: 0
                                    }}
                                >
                                    {q.index + 1}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            <div className="sidebar-legend" style={{
                padding: '10px 5px',
                // borderTop: '1px solid var(--border-color)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginRight: '0px',
                marginLeft: '5px',
                marginBottom: '5px'
            }}>
                <div className="legend-item">
                    <div className="legend-box" style={{ backgroundColor: 'var(--success-color)' }}></div>
                    <span>Answered</span>
                </div>
                <div className="legend-item">
                    <div className="legend-box" style={{ backgroundColor: 'var(--danger-color)' }}></div>
                    <span>Not Answered</span>
                </div>
                <div className="legend-item">
                    <div className="legend-box" style={{ backgroundColor: 'var(--bg-hover)' }}></div>
                    <span>Not Visited</span>
                </div>
            </div>
        </div >
    );
}
