import React, { Component } from 'react'
import './StatusArea.css'

export default class StatusArea extends Component {
    render() {
        return (
            <div className='status_full_area mt-5'>
                <h3 className='name_title'>Sandara Sabia</h3>
                <div>

                    <div className='status_area'>

                        <div className='realtime_status'>
                            <h4 className='status_title'>STATO IN TEMPO REALE</h4>
                            <div className='d-flex align-items-center ms-1'>
                                <div className='status_circle me-2'></div>
                                <span className='status'>In straordinario</span>
                            </div>
                        </div>

                        <div className='next_turn'>
                            <h4 className='turn_title'>PROSSIMO TURNO</h4>
                            <div className='next_turn_date'>
                                <p>21/07/22 09:00 - 18:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
