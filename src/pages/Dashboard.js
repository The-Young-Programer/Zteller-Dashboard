
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import GetStartedPopup from '../components/GetStartedPopup';

import CTA from '../components/CTA';
import InfoCard from '../components/Cards/InfoCard';
import ChartCard from '../components/Chart/ChartCard';
import { Doughnut, Line } from 'react-chartjs-2';
import ChartLegend from '../components/Chart/ChartLegend';
import PageTitle from '../components/Typography/PageTitle';
import { AmountInIcon, AmountOutIcon, MoneyIcon, PeopleIcon } from '../icons';
import RoundIcon from '../components/RoundIcon';
import response from '../utils/demo/tableData';
import { Label, Select, Button } from '@windmill/react-ui';
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Badge,
  Pagination,
} from '@windmill/react-ui';

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from '../utils/demo/chartsData';

function Dashboard() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('paid');
  const [isRegistrationComplete, setRegistrationComplete] = useState(false);

  // Pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // Pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // Load filtered data on page change or filter change
  useEffect(() => {
    const filteredData = response.filter(user => {
      if (filter === 'paid') return true;
      if (filter === 'all') return user.status === 'all';
      if (filter === 'notPaid') return user.status === 'Not Paid';
      return false;
    });

    setData(filteredData.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page, filter]);

  // Handler for filter change
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setPage(1); // Reset page to 1 when filter changes
  };

  return (
    <>
      {!isRegistrationComplete && (
        <GetStartedPopup onComplete={() => setRegistrationComplete(true)} />
      )}

      {isRegistrationComplete && (
        <>
          <PageTitle>Dashboard</PageTitle>
          <CTA />

          {/* Cards */}
          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <InfoCard title="Total students" value="6389">
              <RoundIcon
                icon={PeopleIcon}
                iconColorClass="text-orange-500 dark:text-orange-100"
                bgColorClass="bg-orange-100 dark:bg-orange-500"
                className="mr-4"
              />
            </InfoCard>

            <InfoCard title="Today's Income" value="₦ 46,760.89">
              <RoundIcon
                icon={MoneyIcon}
                iconColorClass="text-green-400 dark:text-green-50"
                bgColorClass="bg-green-50 dark:bg-green-400"
                className="mr-4"
              />
            </InfoCard>

            <InfoCard title="Monthly Turnover" value="₦ 46,760.89">
              <RoundIcon
                icon={AmountInIcon}
                iconColorClass="text-blue-500 dark:text-blue-100"
                bgColorClass="bg-blue-100 dark:bg-blue-500"
                className="mr-4"
              />
            </InfoCard>

            <InfoCard title="Annual Revenue Growth" value="₦ 46,060.89">
              <RoundIcon
                icon={AmountOutIcon}
                iconColorClass="text-teal-500 dark:text-teal-100"
                bgColorClass="bg-teal-100 dark:bg-teal-500"
                className="mr-4"
              />
            </InfoCard>
          </div>

          {/* Filter icon and dropdown */}
          <div className="flex items-center mb-4">
            <Label>
              <FontAwesomeIcon icon={faFilter} className="mb-2" />
              <Select value={filter} onChange={(e) => handleFilterChange(e.target.value)}>
                <option value="paid">Paid Students</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="matricNo">Matric No</option>
                <option value="level">Level</option>
                <option value="department">Department</option>
                <option value="faculty">Faculty</option>
              </Select>
            </Label>
          </div>

          {/* Table of paid students */}
          <PageTitle>Paid Students</PageTitle>
          <TableContainer>
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>Name</TableCell>
                  <TableCell>Mat No.</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.map((user, i) => (
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
                      <Badge type={user.status}>{user.label}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <TableFooter>
              <Pagination
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
                label="Table navigation"
                onChange={onPageChange}
              />
              <Button tag="a" href="dashboard"> Download Income Statement </Button>
            </TableFooter>
          </TableContainer>

          {/* Charts */}
          <PageTitle>Charts</PageTitle>
          <div className="grid gap-6 mb-8 md:grid-cols-2">
            <ChartCard title="Devices">
              <Doughnut {...doughnutOptions} />
              <ChartLegend legends={doughnutLegends} />
            </ChartCard>

            <ChartCard title="Device Ratio">
              <Line {...lineOptions} />
              <ChartLegend legends={lineLegends} />
            </ChartCard>
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;
