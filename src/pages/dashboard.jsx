import React from 'react'
import MainLayout from '../components/Layouts/MainLayout'
import Card from '../components/Elements/Card'
import CardBalance from '../components/Fragments/CardBalance'
import CardGoal from '../components/Fragments/CardGoal'
import CardExpenseBreakdown from '../components/Fragments/CardExpenseBreakdown'
import CardStatistic from '../components/Fragments/CardStatistic'
import CardRecentTransaction from '../components/Fragments/CardRecentTransaction'
import { transactions, expensesBreakdowns, expensesStatistics, bills, balances, goals } from '../data'
import CardUpcomingBill from '../components/Fragments/CardUpcomingBill'
function DashboardPage() {
    return (
        <MainLayout>
            <div className="grid sm:grid-cols-12  sm:gap-6">
                <div className="sm:col-span-4">
                    <CardBalance data={balances} />
                </div>
                <div className="sm:col-span-4">
                    <CardGoal data={goals} />
                </div>
                <div className="sm:col-span-4">
                    <CardUpcomingBill data={bills} />
                </div>
                <div className="sm:col-span-4 sm:row-span-2">
                    <CardRecentTransaction data={transactions} />
                </div>
                <div className="sm:col-span-8">
                    <CardStatistic data={expensesStatistics} />
                </div>
                <div className="sm:col-span-8">
                    <CardExpenseBreakdown data={expensesBreakdowns} />
                </div>
            </div>
        </MainLayout>
    )
}

export default DashboardPage