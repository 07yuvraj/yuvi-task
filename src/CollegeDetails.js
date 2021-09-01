import React from 'react';
import college_02 from "./assests/college_02.jpg";
import Rating from './Rating';

const CollegeDetails = ({ collegeData }) => {
    return (
        <div className="container">
            <figure className="image-container">
                <img src={college_02} alt='hansraj' />
                <figcaption className="content-over">
                    {collegeData.promoted && <span id="ct-1"><p>PROMOTED</p></span>}
                    <span id="ct-2">
                        <p><b>3.9/</b>5 <br /> Very Good</p>
                    </span>
                    <span id="ct-3" style={{ fontSize: "18px" }}><p>Best college 2018</p></span>
                    <span id="ct-4" style={{ fontSize: "18px" }}><p>2Kms away</p></span>
                    <span id="ct-5">{collegeData.ranking}</span>
                </figcaption>
            </figure>
            <div className="detailsContainer">
                <div className='detailsLeftContainer'>
                    <div className='detailsLeftUpper'>
                        <p style={{ fontSize: "12px" }}>{collegeData.college_name}</p>
                        <span style={{ marginTop: "10px", marginLeft: "5px" }}>
                            <Rating rating={collegeData.rating} />
                        </span>
                    </div>
                    <div className='detailsLeftUpper' style={{ fontSize: "10.5px" }}>
                        {collegeData.nearest_place?.map(nearestData => (
                            <span>
                                <span>{nearestData}</span>
                                <span style={{ margin: "0 5px" }}>|</span>
                            </span>
                        ))}
                        {/* <span>2 Kms away from bus stand</span> */}
                    </div>
                    <span style={{ fontSize: "12px", color: "gray", paddingLeft: "2%" }}><strong style={{ color: "#68a7ff", marginRight: "5px" }}>93%:</strong><strong style={{ color: "black" }}>2.5kms</strong> from GTB Nagar, <strong style={{ color: "black" }}>7 Kms</strong> from Rajiv Chowk</span>
                    <br />
                    <span style={{ fontSize: "12px" }} className='detailsLeftBottom'>Flat Rs<strong style={{ color: "#68a7ff", marginRight: "5px" }}>2,000</strong> off + upto Rs <strong style={{ color: "#68a7ff", marginRight: "5px" }}>500</strong> wallet!to avail...<strong style={{ color: "#68a7ff", marginRight: "5px" }}>LOGIN</strong></span>
                </div>
                <div className='detailsRightContainer' style={{ marginTop: "10px" }} >
                    <span style={{ fontSize: "12px" }} >₹{collegeData.original_fees} <span style={{ color: "#E03039", fontWeight: "bold" }}> <i className='fas fa-star'></i>{collegeData.discount}%</span></span>
                    <br />
                    <span style={{ color: "#E03039", fontWeight: "bold", fontSize: "30px" }}>₹{collegeData.discounted_fees}</span>
                    <br />
                    <span style={{ fontSize: "11px", color: "gray" }}>{collegeData.fees_cycle}</span>
                    <br />
                    <span style={{ fontSize: "12px", color: "#68a7ff" }}>
                        {collegeData.amenties[0]}<span style={{ margin: "0 5px" }}>•</span>{collegeData.amenties[1]}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CollegeDetails
