import React, { useState } from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {

    const [fruitCounts, setFruitCounts] = useState({
        strawberry: 0,
        banana: 0,
        apple: 0,
        kiwi: 0,
    });

    const incrementCount = (fruitName) => {
        setFruitCounts((prevState) => ({
            ...prevState,
            [fruitName]: prevState[fruitName] + 1,
        }));
    };

    const decrementCount = (fruitName) => {
        if (fruitCounts[fruitName] > 0) {
            setFruitCounts((prevState) => ({
                ...prevState,
                [fruitName]: prevState[fruitName] - 1,
            }));
        }
    };

    const resetCounts = () => {
        setFruitCounts({
            apple: 0,
            strawberry: 0,
            banana: 0,
            kiwi: 0,
        });
    };

    const [formState, setFormState] = useState( {
        firstname: '',
        lastname: '',
        age: 0,
        zipCode: '',
        deliveryFrequency: 'Iedere week',
        timeSlot: 'overdag',
        message: '',
        conditions: false,
    });

    function handleChange(event) {
        const changeFieldName = event.target.name;
        let newValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        if (changeFieldName === 'age') {
            newValue = Math.max(0, parseInt(newValue));
        }

        setFormState({
            ...formState,
            [changeFieldName]: newValue,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState, fruitCounts)
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="fruit-counters">
                <Counter
                    fruitName="🍓 Aardbeien"
                    count={fruitCounts.strawberry}
                    increment={() => incrementCount('strawberry')}
                    decrement={() => decrementCount('strawberry')}
                />
                <Counter
                    fruitName="🍏 Appels"
                    count={fruitCounts.apple}
                    increment={() => incrementCount('apple')}
                    decrement={() => decrementCount('apple')}
                />
                <Counter
                    fruitName="🍌 Bananen"
                    count={fruitCounts.banana}
                    increment={() => incrementCount('banana')}
                    decrement={() => decrementCount('banana')}
                />
                <Counter
                    fruitName="🥝 Kiwi's"
                    count={fruitCounts.kiwi}
                    increment={() => incrementCount('kiwi')}
                    decrement={() => decrementCount('kiwi')}
                />
                <button className="reset-button" onClick={resetCounts}>Reset</button>
            </div>
            <div className="form-container">
                <h3>Vul je gegevens in om een bestelling te plaatsen</h3>
                <form onSubmit={handleSubmit} className="form-section">
                    <fieldset>
                        <label>
                            Voornaam
                            <input
                                className="input-field"
                                type="text"
                                name="firstname"
                                value={formState.firstname}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Achternaam
                            <input
                                className="input-field"
                                type="text"
                                name="lastname"
                                value={formState.lastname}
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="age-field">
                            Leeftijd
                            <input
                                className="input-field"
                                type="number"
                                name="age"
                                value={formState.age}
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="zip-code-field">
                            Postcode
                            <input
                                className="input-field"
                                type="text"
                                name="zipCode"
                                value={formState.zipCode}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Bezorgfrequentie
                            <select
                                name="deliveryFrequency"
                                value={formState.deliveryFrequency}
                                onChange={handleChange}>
                                <option value="Iedere week">Iedere week</option>
                                <option value="Om de week">Om de week</option>
                                <option value="Iedere maand">Iedere maand</option>
                            </select>
                        </label>
                        <div className="time-slot">
                            <label>
                                <input
                                    type="radio"
                                    name="timeSlot"
                                    value="overdag"
                                    checked={formState.timeSlot === "overdag"}
                                    onChange={handleChange}
                                />
                                Overdag
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="timeSlot"
                                    value="s avonds"
                                    checked={formState.timeSlot === "s avonds"}
                                    onChange={handleChange}
                                />
                                's Avonds
                            </label>
                        </div>
                        <label htmlFor="message-field">
                            Opmerkingen
                            <textarea
                                name="message"
                                value={formState.message}
                                cols="60"
                                rows="10"
                                placeholder="Laat hier een berichtje achter"
                                onChange={handleChange}>
                      </textarea>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="conditions"
                                checked={formState.conditions}
                                onChange={handleChange}
                            />
                            Ik ga akkoord met de voorwaarden
                        </label>
                    </fieldset>
                    <button
                        type="submit"
                        id="submit-button"
                    >
                        Verzend
                    </button>
                </form>
            </div>
        </>
    );
}

export default App;
