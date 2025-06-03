import React from 'react';

function JobSelector({ profession, onChange }) {
    const professions = ['developer', 'designer', 'marketer', 'teacher', 'scientist'];

    return (
        <div>
            <h2>Выберите профессию:</h2>
            {professions.map(p => (
                <label key={p} style={{ marginRight: '10px' }}>
                    <input
                        type="radio"
                        name="profession"
                        value={p}
                        checked={profession === p}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    {p}
                </label>
            ))}
        </div>
    );
}

export default JobSelector;
