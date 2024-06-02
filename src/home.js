import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div>
            <div>
                <h2>Partidos Recomendados</h2>
                <hr />
            </div>
            <div>
                <ul className="page-list">
                    <li>
                        <Link to="/LCK">LCK</Link>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                                <div style={{ marginRight: '20px' }}>
                                    <h4>Geng vs T1</h4>
                                    <div style={{ marginRight: '20px' }}>
                                        <p><a href="https://www.youtube.com/watch?v=V4Yryz5hc-k"> Mapa 1</a></p>
                                        <div style={{ marginBottom: '20px' }}></div>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '20px' }}>
                                    <h4>T1 vs HLE</h4>
                                    <div style={{ marginRight: '20px' }}>
                                        <p><a href="https://www.youtube.com/watch?v=H4fEfppY5MQ">Mapa 4</a></p>
                                        <div style={{ marginBottom: '20px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><Link to="/LPL">LPL</Link>
                        <div>
                            <h4>BLG vs TES</h4>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                                <div style={{ marginRight: '20px' }}>
                                    <p><a href="https://www.youtube.com/watch?v=cTdPJuVu6ps">Mapa 1</a></p>
                                    <div style={{ marginBottom: '20px' }}></div>
                                </div>
                                <div style={{ marginRight: '20px' }}>
                                    <p><a href="https://www.youtube.com/watch?v=pbFhUS0-05o">Mapa 2</a></p>
                                    <div style={{ marginBottom: '20px' }}></div>
                                </div>
                            </div>
                        </div></li>
                    <li><Link to="/LEC">LEC</Link>
                        <div>
                            <h4>G2 vs MDK</h4>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                                <div style={{ marginRight: '20px' }}>
                                    <p><a href="https://www.youtube.com/watch?v=7_ops9p02YM">Mapa 1</a></p>
                                    <div style={{ marginBottom: '20px' }}></div>
                                </div>
                                <div style={{ marginRight: '20px' }}>
                                    <p><a href="https://www.youtube.com/watch?v=zocQVKBAT5o">Mapa 2</a></p>
                                    <div style={{ marginBottom: '20px' }}></div>
                                </div>
                            </div>
                        </div></li>
                    <li><Link to="/LCS">LCS</Link>
                        <div>
                            <h4>FlyQuest vs Team Liquid</h4>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                                <div style={{ marginRight: '20px' }}>
                                    <p><a href="https://www.youtube.com/watch?v=P361RZ6KHhc">Mapa 1</a></p>
                                    <div style={{ marginBottom: '20px' }}></div>
                                </div>
                                <div style={{ marginRight: '20px' }}>
                                    <p><a href="https://www.youtube.com/watch?v=AkMULjC3yHc">Mapa 2</a></p>
                                    <div style={{ marginBottom: '20px' }}></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><Link to="/Worlds">Worlds</Link>
                        <div>
                            <h4>T1 vs WBG</h4>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ marginRight: '20px' }}>
                                    <p><a href="https://www.youtube.com/watch?v=S_5vlPXLCRc">Mapa 1</a></p>
                                </div>
                                <div style={{ marginRight: '20px' }}>
                                    <p><a href="https://www.youtube.com/watch?v=E9qdimf-DTc">Mapa 2</a></p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><Link to="/MSI">MSI</Link>
                        <div>
                            <h4>TL vs TES</h4>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                                <div style={{ marginRight: '20px' }}>
                                    <p><a href="https://www.youtube.com/watch?v=VG6Nj2daQRo">Mapa 1</a></p>
                                    <div style={{ marginBottom: '20px' }}></div>
                                </div>
                                <div style={{ marginRight: '20px' }}>
                                    <p><a href="https://www.youtube.com/watch?v=sUq5-yB2VZ0">Mapa 2</a></p>
                                    <div style={{ marginBottom: '20px' }}></div>
                                </div>
                            </div>
                        </div></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
