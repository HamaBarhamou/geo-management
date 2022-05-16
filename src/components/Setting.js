import React from 'react';

const Setting = () => {
    return (
        <div>
            <h1>Rapport</h1>
            <h2>Setting</h2>
            <form>
                <label> Depart :<input type="datetime-local" name="date_debut" /> </label>
                <label> fin :<input type="datetime-local" name="date_fin" /> </label>
                <input type="submit" value="Generer Rapport" />
            </form>
        </div>
    );
};

export default Setting;