import React from 'react';
import { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import { BudgetDisplayContext } from '../../contexts/BudgetDisplayContext';
import AddBudgetData from '../AddBudgetData/AddBudgetData';
import DonutChart from '../../charts/DonutChart';
import D3Chart from '../../charts/D3Chart';


function HomePage() {
	// console.log('Landed on the homepage!');

	const { loggedIn, username } = useContext(SessionContext);
	const { hasBudget } = useContext(BudgetDisplayContext);

	return (
		<>
			<div className="container center">

				{/* <div id='view-budget-data'/> */}
				
				<main id="main">
						<article className="text-box">
							{/* <DonutChart/> */}
							<D3Chart/>
						</article>
				</main>

			</div>
		</>
  );
}

export default HomePage;
