import {Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Sidebar from './Sidebar'
import PlanetForm from './PlanetForm'

function Planet({ planet }) {
	const [Display, setDisplay] = useState(false);
	const [Add, setAdd] = useState(false);

	return (
		<>

			<Col xs={12} md={4} lg={3} key={planet.id} onClick={()=> setDisplay(true)}>
				<div className="card">
					<div className="card-header">
						<div className="card-img-container">
							<img src={planet.imageUrl} alt=""
								className="card-img" />
						</div>
					</div>
					<div className="card-body"></div>
					<div className="card-title">{planet.name}</div>
					<div className="card-description">pop: {planet.population}
					</div>
					
					{planet.characters.map((chars) => (
						Display ? <Sidebar chars={chars}/> : ""
						))}
						<div>
                <Button variant="light" ><img src="images/add-button.svg" alt=""  onClick={()=> setAdd(true)} />  </Button>
                {Add ? <PlanetForm/> : "" }
            </div> 
					
				</div>
			</Col>
		</>
	);
}	

export default Planet;		