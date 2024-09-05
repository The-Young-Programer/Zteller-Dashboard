import React from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import { Card, CardBody } from '@windmill/react-ui'
import paystack from './Paystack_Logo.png'
import { AmountInIcon, AmountOutIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'

function Cards() {
  return (
    <>
      <PageTitle>Cards</PageTitle>

      <CTA />

      <SectionTitle>Payment section cards</SectionTitle>

      <Card className="mb-8 shadow-md">
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Payment, full width payment sections goes here
          </p>
        </CardBody>
      </Card>

      <SectionTitle>Income cards</SectionTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total students" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Account balance" value="# 46,760.89">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-300 dark:text-green-50"
            bgColorClass="bg-green-50 dark:bg-green-400"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Amount In" value="# 46,760.89">
          <RoundIcon
            icon={AmountInIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Amount Out" value="# 46,060.89">
          <RoundIcon
            icon={AmountOutIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <SectionTitle>Payment Method</SectionTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <Card>
          <CardBody>
            <img 
            alt='paystack'
            style={{
              maxHeight:"20px",
              
              }}
            src={paystack} className="mb-4 font-semibold text-gray-600 dark:text-gray-300"/>
            <p className="text-gray-600 dark:text-gray-400">
            This is a secure payment gateway integration that facilitates swift and direct transfers of funds from students to your designated bank account. Upon successful payment, an authentic and digital print-ready receipt is generated for record keeping purposes and verifications. 
            Through this strategic partnership with Paystack, all financial transactions are encrypted and processed seamlessly, upholding the highest standards of security and transparency.
            </p>
          </CardBody>
        </Card>

        {/* <Card colored className="text-white bg-green-400">
          <CardBody>
            <p className="mb-4 font-semibold">Colored card</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis
              numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet
              ratione! Ratione, nihil dolorum.
            </p>
          </CardBody>
        </Card> */}
      </div>
    </>
  )
}

export default Cards
