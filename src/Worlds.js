import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import PartidoPage from './PartidoPage';

const Worlds = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#ffcc00', paddingLeft: '20px', paddingRight: '20px' }}>
      <h2>Worlds</h2>
      <div style={{ marginTop: '-20px', backgroundColor: '#ffcc00' }}></div>
      <div>
        <h4>Swiss Stage</h4>
        <div>
        <p><a href="https://www.youtube.com/watch?v=8kcGwFL-_EM">T1 vs TL</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=tTRTOrBP7XY&t=593s">C9 vs MDK</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=uenz48Pb3Z8">GEN G vs GAM</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=49ireo-NQQE">BDS vs JDG</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=oK6oC4B6oeU">G2 vs DK</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=YQoj0_GvHKA">WBG vs NRG</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=4Vul-OtLqyg">LNG vs KT</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=qbvumgJQPa8">NRG vs TL</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=qMxzRW9tj7c">C9 vs LNG</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=8VSP6vV-ifA">MDK vs BDS</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=4CC4wcD_Fnk">FNC vs GAM</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=1xomZR-BGeI">GEN G vs T1</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=FqbgCPnLeCo">G2 vs WBG</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=5s7hkxWi5ZQ">JDG vs BLG</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=1bpA0bNH6o0">DK vs KT</a></p>
        </div>
        <div>
          <h2>JDG vs LNG</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=xoiapU7DVFw">Mapa 1</a></p>
            </div>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=tzygeLSF4hE">Mapa 2</a></p>
            </div>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=qqHaX-mRGuY">Mapa 3</a></p>
            </div>
          </div>
        </div>
        <div>
          <h2>G2 vs GEN G</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=i9dl2uwY678">Mapa 1</a></p>
            </div>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=j4kl_-Mp3xE">Mapa 2</a></p>
            </div>
          </div>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=F1oDtdPqqWA&t=6s">T1 vs C9</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=yFyiY1FZ8l8">NRG vs MDK</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=Qq4xYbzY07U">BLG vs FNC</a></p>
        </div>
        <div>
          <p><a href="https://www.youtube.com/watch?v=jdxijlxz488">KT vs WBG</a></p>
        </div>
        <div>
          <h2>TL vs GAM</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=VXlhoNOhFMA">Mapa 1/</a></p>
            </div>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=veHc0h74q0M">Mapa 2</a></p>
            </div>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=HIDfOxAKsQo">Mapa 3</a></p>
            </div>
          </div>
        </div>
        <div>
          <h2>DK vs BDS</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=p8-WtO4Jors">Mapa 1</a></p>
            </div>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=QsXLbUcJqK4">Mapa 2</a></p>
            </div>
          </div>
        </div>
        <div>
          <h2>C9 vs FNC</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=uyeOHEnP3hc">Mapa 1</a></p>
            </div>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=zUtVL2scqJA">Mapa 2</a></p>
            </div>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=CMOmI7aFUJU">Mapa 3</a></p>
            </div>
          </div>
        </div>
        <div>
          <h2>MDK vs WBG</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=3ZknHi8F1OQ">Mapa 1</a></p>
            </div>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=lQRZe1Tfsu0">Mapa 2</a></p>
            </div>
          </div>
        </div>
        <div>
          <h2>DK vs GAM</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=_CLlaGhYDB8">Mapa 1</a></p>
            </div>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=haqwrHDlGfU">Mapa 2</a></p>
            </div>
          </div>
        </div>
        <div>
          <h2>LNG vs KT</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=UAm_HCfb_bI">Mapa 1</a></p>
            </div>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=t0vMuc3u5mA">Mapa 2</a></p>
            </div>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=knyIpzybFEQ">Mapa 3</a></p>
            </div>
          </div>
        </div>
        <div>
          <h2>NRG vs G2</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=qlMjDxWr8jQ">Mapa 1</a></p>
            </div>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=aLnWyXuj1Ps">Mapa 2</a></p>
            </div>
          </div>
        </div>
        <div>
          <h2>T1 vs BLG</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=mlDjF_WktQM">Mapa 1</a></p>
            </div>
            <div style={{ marginRight: '20px' }}>
              <p><a href="https://www.youtube.com/watch?v=9YZV34eK1ZY">Mapa 2</a></p>
            </div>
            <div>
              <h2>KT vs DK</h2>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=Z9_n8ViSX7o">Mapa 1</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=F1KpXHZUrpI">Mapa 2</a></p>
                </div>
              </div>
            </div>
            <div>
              <h2>FNC vs WBG</h2>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=dxqmvZiBC7I">Mapa 1</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=vWyWdd9dMkI">Mapa 2</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=fJPOo_NItjo">Mapa 3</a></p>
                </div>
              </div>
            </div>
            <div>
              <h2>G2 vs BLG</h2>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=nREjmhGRkgI">Mapa 1</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=Dye1O7jM598">Mapa 2</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=fuSlp4VtZkw">Mapa 3</a></p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4>Cuartos</h4>
            <div>
              <h4>NRG vs WBG</h4>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=qvjdBFSxzQQ">Mapa 1</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=irnwHbMoSqo">Mapa 2</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=HtnFGZ8r4ss">Mapa 3</a></p>
                </div>
              </div>
            </div>
            <div>
              <h4>GENG vs BLG</h4>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=8ZfB9wwQHeg">Mapa 1</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=jJ0ujTwAFY4">Mapa 2</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=WxOOi5SBogg">Mapa 3</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=So63Aw2qlF8">Mapa 4</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=G01qzjXGgtc">Mapa 5</a></p>
                </div>
              </div>
            </div>
            <div>
              <h4>JDG vs KT</h4>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=oODIdC2Yqu8">Mapa 1</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=Gb28bClLC4M">Mapa 2</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=NHDqdjLBfxk">Mapa 3</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=L1Rf-wludRw">Mapa 4</a></p>
                </div>
              </div>
            </div>
            <div>
              <h4>LNG vs T1</h4>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=fD5mM3Psfbs">Mapa 1</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=kmROugnX5lk">Mapa 2</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=_ROXZCkjSCQ">Mapa 3</a></p>
                </div>
              </div>
            </div>
            <h4>Semifinales</h4>
            <div>
              <h4>WBG vs BLG</h4>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=IEGC3q20O20">Mapa 1</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=1Xvw89sqGFE">Mapa 2</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=eAFep4JI6p0">Mapa 3</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=OswCn0CsRQg">Mapa 4</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=1F2fA-GflGc">Mapa 5</a></p>
                </div>
              </div>
            </div>
            <div>
              <h4>T1 vs JDG</h4>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=brF22NJVeWc">Mapa 1</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=7hmlOv8jOU8">Mapa 2</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=c4iU17Bkvt0">Mapa 3</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=31sk0-nqLk4">Mapa 4</a></p>
                </div>
              </div>
            </div>
            <h4>Gran Final</h4>
            <div>
              <h4>T1 vs WBG</h4>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=S_5vlPXLCRc">Mapa 1</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=E9qdimf-DTc">Mapa 2</a></p>
                </div>
                <div style={{ marginRight: '20px' }}>
                  <p><a href="https://www.youtube.com/watch?v=b4qn8BhFO6A">Mapa 3</a></p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Routes> {/* Cambiado de <Switch> a <Routes> */}
          <Route path="/partido/:id" element={<PartidoPage />} /> {/* Cambiado 'component' a 'element' */}
        </Routes> {/* Cambiado de <Switch> a <Routes> */}
      </div>
    </div>
  );
};

export default Worlds;
