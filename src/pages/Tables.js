import React, { useState, useEffect } from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import CTA from '../components/CTA'
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Button,
  Pagination,
} from '@windmill/react-ui'
import { EditIcon } from '../icons'

import response from '../utils/demo/tableData'

const response2 = response.concat([])

function Tables() {
  const [isCardVisible, setIsCardVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const [filter, setFilter] = useState('All')

  const handleEditClick = (user) => {
    setSelectedUser(user)
    setIsCardVisible(true)
  }

  const closeCard = () => {
    setIsCardVisible(false)
    setSelectedUser(null)
  }

  const [pageTable1, setPageTable1] = useState(1)
  const [dataTable, setDataTable] = useState([])

  const resultsPerPage = 10
  const totalResults = response.length

  function onPageChangeTable1(p) {
    setPageTable1(p)
  }

  useEffect(() => {
    // Filter data based on the selected filter
    const filteredData = response.filter((student) => {
      if (filter === 'All') return true
      if (filter === 'Paid') return student.label === 'paid'
      if (filter === 'Unpaid') return student.label === 'unpaid'
      return true
    })

    // Paginate filtered data
    setDataTable(filteredData.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage))
  }, [pageTable1, filter])

  return (
    <>
      <PageTitle>Tables</PageTitle>

      <CTA />

      <SectionTitle>All Students</SectionTitle>

      <div className="mb-4 flex space-x-4">
        <Button
          style={{ backgroundColor: filter === 'All' ? '#41aa5e' : 'transparent' }}
          layout={filter === 'All' ? 'primary' : 'outline'}
          onClick={() => setFilter('All')}
        >
          All Students
        </Button>
        <Button
          style={{ backgroundColor: filter === 'Paid' ? '#41aa5e' : 'transparent' }}
          layout={filter === 'Paid' ? 'primary' : 'outline'}
          onClick={() => setFilter('Paid')}
        >
          Paid Students
        </Button>
        <Button
          style={{ backgroundColor: filter === 'Unpaid' ? '#41aa5e' : 'transparent' }}
          layout={filter === 'Unpaid' ? 'primary' : 'outline'}
          onClick={() => setFilter('Unpaid')}
        >
          Unpaid Students
        </Button>
      </div>

      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Name</TableCell>
              <TableCell>Mat No.</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{user.name}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.matno}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.type}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">₦ {user.amount}</span>
                </TableCell>
                <TableCell>
                  <Badge
                    type={user.status}
                    style={{ backgroundColor: user.label === 'unpaid' ? '#f28d6f' : undefined }}
                  >
                    {user.label}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span>
                </TableCell>
                <TableCell>
                  <Button layout="link" size="icon" aria-label="Edit" onClick={() => handleEditClick(user)}>
                    <EditIcon className="w-5 h-5" aria-hidden="true" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable1}
            label="Table navigation"
          />
          <Button
            style={{
              marginTop: '10px',
              backgroundColor: '#41aa5e',
            }}
            tag="a"
            href="dashboard"
          >
            Download List
          </Button>
        </TableFooter>
      </TableContainer>

      {isCardVisible && selectedUser && (
  <div
    style={{
      border: '1px solid #ccc',
      padding: '10px',
      backgroundColor: '#f9f9f9',
      marginBottom: '30px',
      marginTop: '-30px',
      width: '350px',
      borderRadius: '8px',
      marginLeft:'auto'
    }}
  >
    <h3>Information for {selectedUser.name}</h3>
    <p><strong>Level:</strong> {selectedUser.level}</p>
    <Button
      style={{ marginTop: '10px',
        marginRight:'10px',
        backgroundColor: '#41aa5e',
      }}
      tag="a"
      href={`tel:${selectedUser.contact}`}
      layout="primary"
    >
      Call {selectedUser.contact}
    </Button>
    <Button onClick={closeCard} style={{ marginTop: '10px', backgroundColor: '#41aa5e', }}>Close</Button>
  </div>
)}
    </>
  )
}

export default Tables
