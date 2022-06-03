import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>*Footer is under maintainance</span>
                </div>

                <div>
                    <Link to='' className='me-4 text-reset'>
                        <i className='fab fa-facebook-f'></i>
                    </Link>
                    <Link to='' className='me-4 text-reset'>
                        <i className='fab fa-twitter'></i>
                    </Link>
                    <Link to='' className='me-4 text-reset'>
                        <i className='fab fa-google'></i>
                    </Link>
                    <Link to='' className='me-4 text-reset'>
                        <i className='fab fa-instagram'></i>
                    </Link>
                    <Link to='' className='me-4 text-reset'>
                        <i className='fab fa-linkedin'></i>
                    </Link>
                    <Link to='' className='me-4 text-reset'>
                        <i className='fab fa-github'></i>
                    </Link>
                </div>
            </section>

            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <i className='fas fa-gem me-3'></i>E-Commerce
                            </h6>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                            <p>
                                <Link to='/' className='text-reset'>
                                    Home
                                </Link>
                            </p>
                            <p>
                                <Link to='/admin' className='text-reset'>
                                    Admin
                                </Link>
                            </p>
                            <p>
                                <Link to='/yourcart' className='text-reset'>
                                    Your Cart
                                </Link>
                            </p>
                            <p>
                                <Link to='#!' className='text-reset'>
                                    Lorem
                                </Link>
                            </p>
                        </div>

                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <Link to='#!' className='text-reset'>
                                    Pricing
                                </Link>
                            </p>
                            <p>
                                <Link to='#!' className='text-reset'>
                                    Settings
                                </Link>
                            </p>
                            <p>
                                <Link to='#!' className='text-reset'>
                                    Orders
                                </Link>
                            </p>
                            <p>
                                <Link to='#!' className='text-reset'>
                                    Help
                                </Link>
                            </p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <i className='fas fa-home me-3'></i> Shivaji Nagar, Pune, India
                            </p>
                            <p>
                                <i className='fas fa-envelope me-3'></i>
                                prakalpsp16@gmail.com
                            </p>
                            <p>
                                <i className='fas fa-phone me-3'></i> +91 99220 15121
                            </p>
                            <Link to='/'>
                                <p>
                                    <i className='fas fa-phone me-3'></i> Contact Us
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright:
                <Link className='text-reset fw-bold' to='https://prakalp-pande.github.io/e-commerce/'>
                    prakalp-pande.github.io
                </Link>
            </div>
        </MDBFooter>
    );
}