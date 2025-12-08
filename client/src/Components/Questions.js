import React, { useEffect, useState, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateresult } from '../Hooks/setresult'

export default function Questions({ onNext }) {

    const [checked, setChecked] = useState(undefined)
    const { trace, answers, timers } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);

    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch()

    // New State for Features
    const [selectedOption, setSelectedOption] = useState(null);

    // Resizable Options Panel State
    const [optionsWidth, setOptionsWidth] = useState(366);
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef(null);

    const startResizing = useCallback(() => {
        setIsResizing(true);
    }, []);

    const stopResizing = useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = useCallback((mouseMoveEvent) => {
        if (isResizing && containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const newWidth = containerRect.right - mouseMoveEvent.clientX;
            if (newWidth > 200 && newWidth < 800) {
                setOptionsWidth(newWidth);
            }
        }
    }, [isResizing]);

    useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResizing);
        };
    }, [resize, stopResizing]);

    // Reset state when question changes
    useEffect(() => {
        const previouslyAnswered = result[trace];

        if (previouslyAnswered !== undefined) {
            setSelectedOption(previouslyAnswered);
            setChecked(previouslyAnswered);
        } else {
            setSelectedOption(null);
            setChecked(undefined);
        }
    }, [trace, result]);

    function onSelect(i) {
        if (selectedOption === i) {
            setChecked(undefined);
            setSelectedOption(null);
            dispatch(updateresult({ trace, checked: undefined }));
        } else {
            setChecked(i);
            setSelectedOption(i);
            dispatch(updateresult({ trace, checked: i }));
        }
    }

    if (!questions) return null;

    // ✅ INLINE IMAGE RENDER FUNCTION (ADD THIS)
    function renderWithImages(text, images) {
        if (!text) return null;

        return text.split(/(\[.*?\])/g).map((part, index) => {
            const key = part.replace(/\[|\]/g, "");

            if (images && images[key]) {
                return (
                    <img
                        key={index}
                        src={images[key]}
                        alt=""
                        style={{ width: "28px", height: "28px", margin: "0 4px", verticalAlign: "middle" }}
                    />
                );
            }

            return <span key={index}>{part}</span>;
        });
    }

    return (
        <div className='questions-split-layout' ref={containerRef}>

            {/* Left Panel: Question Text & Image */}
            <div className="question-text-panel">

                {/* USE INLINE IMAGES HERE */}
                <h2 className='text-light'>
                    {renderWithImages(questions?.questionText || questions?.question, questions.inlineImages)}
                </h2>

                {questions?.questionImage && (
                    <div className="question-image">
                        <img
                            src={questions.questionImage}
                            alt="Question"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '300px',
                                objectFit: 'contain',
                                borderRadius: '10px',
                                marginBottom: '10px'
                            }}
                        />
                    </div>
                )}
            </div>

            {/* Resizer Handle */}
            <div
                className={`resizer ${isResizing ? 'active' : ''}`}
                onMouseDown={startResizing}
            ></div>

            {/* Right Panel: Options */}
            <div className="options-panel" style={{ width: optionsWidth, overflowY: 'auto' }}>
                <h3 className="text-light" style={{ marginBottom: '15px' }}>Answer Here:</h3>
                <ul key={questions?.id} style={{ listStyle: 'none', padding: 0 }}>
                    {
                        questions?.options.map((q, i) => {

                            const hasImage = questions.optionImages && questions.optionImages[i];

                            return (
                                <li
                                    key={i}
                                    className={`option-card ${hasImage ? 'with-image' : 'text-only'} ${selectedOption === i ? 'selected' : ''}`}
                                    onClick={() => onSelect(i)}
                                >
                                    <input type="radio" checked={selectedOption === i} style={{ display: "none" }} />

                                    <span className='option-text'>{q}</span>

                                    {hasImage && (
                                        <img
                                            src={questions.optionImages[i]}
                                            alt="Option"
                                            className="option-image"
                                        />
                                    )}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    )
}