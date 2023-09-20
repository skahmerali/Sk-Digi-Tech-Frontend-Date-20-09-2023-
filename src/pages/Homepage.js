import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import banner from "../assets/Software integration.gif";
import { LightPurpleButton } from '../components/buttonStyles';
import './HomePage.css'
import 'animate.css';
import About from './About';
import Courses from './Courses';

const Homepage = () => {
    return (


        <>

            <header className="header">

                    <a href="#" className="logo animate__rubberBand">Sk Digi Tech</a>

                    <nav className="navbar">
                        
                            <ul>
                                <li><Link>Home</Link></li>
                                <li><Link>About</Link></li>
                                <li><Link>Team</Link></li>
                                <li><Link>Contact</Link></li>
                                <li className='active'><Link to="/choose">Login</Link></li>
                            </ul>

                    </nav>

            </header>

            <StyledContainer>
                <Grid container spacing={0}>
                    
                    <Grid item xs={12} md={6}>
                        <StyledPaper elevation={3}>
                            <StyledTitle>
                                Welcome to
                                <br />
                              <span className='highlight'> Sk Digi Tech </span>
                              
                                Institute
                            </StyledTitle>
                            <StyledText>
                                Streamline school management, class organization, and add students and faculty.
                                Seamlessly track attendance, assess performance, and provide feedback.
                                Access records, view marks, and communicate effortlessly.
                            </StyledText>
                            <StyledBox>
                                <StyledLink to="/choose">
                                    <button className='btn'>GET STARTED</button>
                                </StyledLink>
                                <StyledLink to="/chooseasguest">
                                    <button className='btn-outline'>Login Guest Account</button>
                                </StyledLink>
                                <StyledText>
                                    Don't have an account?{' '}
                                    <Link to="/Adminregister" style={{ color: "#6bd784" }}>
                                        Sign up
                                    </Link>
                                </StyledText>
                            </StyledBox>
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={banner} alt="students" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </StyledContainer>
            
            <About />
            <Courses />

            </>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  padding-top:5rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: inline-block;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 4rem;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: 1.8 m;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display:inline-block;
  margin-right:.5rem;
`;
