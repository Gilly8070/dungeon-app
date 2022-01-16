import React from 'react';

export default ({ id, name, hitPoints, initiative, onNameChange, onInitiativeChange, onHitPointsChange }) =>
    <div className='card'>
        <label className='label'>Name:
            <input type="text" value={name} onChange={e => onNameChange(id, e)} />
        </label>
        <label className='label'>Initiative:
            <input type="number" value={initiative} onChange={e => onInitiativeChange(id, e)} />
        </label>
        <label className='label'>HitPoints:
            <input type="number" value={hitPoints} onChange={e => onHitPointsChange(id, e)} />
        </label>

    </div>