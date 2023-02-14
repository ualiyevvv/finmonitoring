import React, {useEffect, useRef, useState} from 'react';

import useMultistepForm from "../../hooks/useMultistepForm";

import ArrowRight from "../../assets/icons/arrow-right.svg";

export default function MultistepForm({
                                          forms=[],
                                          data={},
                                          setData=f=>f,
                                          init_step=0,
                                          onSubmit=f=>f,
                                          nextButtonName="Далее",
                                          backButtonName="Назад",
                                          submitButtonName="Отправить"
}) {

    const submitButtonRef = useRef()

    const [formErrors, setFormErrors] = useState([]);
    const [wasAttempts, setWasAttempts] = useState(false);

    function updateFields(fields){
        setData(prev => ({...prev, ...fields}))
    }

    const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next, goTo} = useMultistepForm(
        forms.map(form => form({...data, updateFields, setFormErrors, next, back, goTo}) )
    );

    function onSubmitInside(e){
        e.preventDefault();

        if(formErrors.length !== 0)
            return setWasAttempts(true)

        setWasAttempts(false)

        if(!isLastStep){
            return next();
        }
        else {
            // что делать после того, как у нас готова форма?
            onSubmit(e);
        }
    }

    function handleKeyDown(e){
        if (e.keyCode === 13) { //'ENTER'
            submitButtonRef.current.click();
        }
        else if(e.keyCode === 27){ //'ESC'
            back()
        }
    }

    useEffect(() => {
        // Не совсем понятно как работать с домом напрямую
        // Можно указать только на начальный рендер, но там как-то странно работают состояния,
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);


    const [inverted,] = useState(forms.map((form, i) => {
        if(form.isControlPanelOnTop)
            return i;
    }));

    useEffect(()=>{
        if(init_step===-1)
            goTo(steps.length - 1)
        else goTo(init_step)
    }, [])


    return (
        <>
            {wasAttempts && formErrors.map(error => <p>{error}</p>)}
            
            <form onSubmit={onSubmitInside} className={`form-workflow ${inverted.includes(currentStepIndex) ? 'reverse-column' : ''}`}>
                {/* <div style={{
                    position: "absolute", top: "0.5rem", right: "0.5rem",
                }}>
                    {currentStepIndex + 1} / {steps.length}
                </div> */}

                <div className="form__body">
                    {step}
                </div>

                <div className={isFirstStep ? "form-controls form-controls-done" : "form-controls"}>

                    {!isFirstStep &&
                    <button type="button" className="btn btn-secondary btn-prev mr-5" onClick={back}>
                        <ArrowRight viewBox="0 0 24 24"/>
                        <span>{backButtonName}</span>
                    </button>}

                    <button ref={submitButtonRef} type="submit" className="btn btn-main btn-next">
                        <span>{isLastStep ? submitButtonName : nextButtonName}</span>
                        <ArrowRight viewBox="0 0 24 24"/>
                    </button>

                </div>

            </form>
        </>
    );
}

/*
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*/