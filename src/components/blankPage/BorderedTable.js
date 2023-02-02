import React from 'react'
import Pagination from './Pagination'

const BorderedTable = () => {
  return (
    <div>
        <div className="card-body">
  <table className="table table-bordered">
    <thead>
      <tr>
        <th style={{width: 10}}>#</th>
        <th>Task</th>
        <th>Description</th>
        <th style={{width: 40}}>Status</th>
        <th style={{width: 40}}>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.</td>
        <td>Update software</td>
        <td>
          {/* <div className="progress progress-xs">
            <div className="progress-bar progress-bar-danger" style={{width: '55%'}} />
          </div> */}
        </td>
        <td><span className="badge bg-danger">55%</span></td>
        <td>
            <a href="/" className='btn'> <i className='fa fa-trash'></i> </a>
        </td>
      </tr>
      <tr>
        <td>2.</td>
        <td>Clean database</td>
        <td>
          {/* <div className="progress progress-xs">
            <div className="progress-bar bg-warning" style={{width: '70%'}} />
          </div> */}
        </td>
        <td><span className="badge bg-warning">70%</span></td>
        <td>
            <a href="/" className='btn'> <i className='fa fa-edit'></i> </a>
        </td>
      </tr>
    </tbody>
  </table>

  {/* pagination */}

        <Pagination />




</div>

    </div>
  )
}

export default BorderedTable