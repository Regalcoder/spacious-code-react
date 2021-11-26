import CloseButton from 'react-bootstrap/CloseButton'
import { Col } from "react-bootstrap";



function Sidebar({ chars }) {



    return (
        <>
         <Col xs={12}>
            <div className="sidebar p-3">
                <CloseButton />
                <div className="pt-4">
                    <h3 className="fw-bold">{chars.name}</h3>
                    <p className="text1">{chars.description}</p>
                    <div className="d-flex ">
                        <div>
                            <h5 className="text2">{chars.population}</h5>
                            <h5 className="text2 fw-bold">234</h5>
                        </div>
                    </div>
                </div>
                <div className="pt-4"><h6>CHARACTERS</h6></div>
                <div className="d-flex pb-2">
                    <div>
                        <img src="{chars.images}" alt="" className="sideimg" />
                    </div>
                    <div className="pt-1 mx-2">
                        <h4 className="text2 lh-1">Eleanor Pena</h4>
                        <h6 className="text1 lh-1">23 Friends</h6>
                    </div>
                </div>
                <div className="d-flex pb-2">
                    <div>
                        <img src="images/character_6.png" alt="" className="sideimg" />
                    </div>
                    <div className="pt-1 mx-2">
                        <h4 className="text2 lh-1">Brooklyn Simmons</h4>
                        <h6 className="text1 lh-1">56 Friends</h6>
                    </div>
                </div>
                <div className="d-flex pb-2">
                    <div>
                        <img src="images/character_3.png" alt="" className="sideimg" />
                    </div>
                    <div className="pt-1 mx-2">
                        <h4 className="text2 lh-1">Lesile Alexander</h4>
                        <h6 className="text1 lh-1">47 Friends</h6>
                    </div>
                </div>
                <div className="d-flex pb-2">
                    <div>
                        <img src="images/character_3.png" alt="" className="sideimg" />
                    </div>
                    <div className="pt-1 mx-2">
                        <h4 className="text2 lh-1">Marvin Mckinney</h4>
                        <h6 className="text1 lh-1">60 Friends</h6>
                    </div>
                </div>
                <div className="d-flex pb-2">
                    <div>
                        <img src="images/character_3.png" alt="" className="sideimg" />
                    </div>
                    <div className="pt-1 mx-2">
                        <h4 className="text2 lh-1">Jerome Bell</h4>
                        <h6 className="text1 lh-1">33 Friends</h6>
                    </div>
                </div>

            </div>
     </Col>
        </>
    )
}

export default Sidebar