import React, { Component } from 'react'
import { CategoryIcon, WatchIcon } from '../../../../assets/svg/svg'
import { rimborsiApprovate } from '../dummyData'
import './RimborsiApprovati.css'
import RimborsiApprovatiList from './RimborsiApprovatiList'
export default class RimborsiApprovati extends Component {
  render() {
    return (
        <div className="rimborsi_approvate_area">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-2">
            <h3 className="title">RIMBORSI APPROVATI</h3>
            <div>
              <button className="total">{rimborsiApprovate?.length}</button>
            </div>
          </div>
          <div className="d-flex gap-3">
            <button className="spese_btn"><WatchIcon/> Ultimi 30 giorni </button>
            <button className="spese_btn"><CategoryIcon/> Categoria </button>
          </div>
        </div>

        {rimborsiApprovate?.length > 0 && (
          <div className="list_area mt-5">
            <ul className="list-unstyled ">
              {rimborsiApprovate?.map((dt, i) => (
                < RimborsiApprovatiList key={i} data={dt} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
