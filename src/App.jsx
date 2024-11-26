import 'aframe';
import React, { useState, useEffect } from 'react';
import ImageGallery from './components/ImageGallery.jsx';
import VideoGallery from './components/VideoGallery.jsx';
import './aframe/ScaleAnimator.jsx';
import './aframe/HoverAnimator.jsx';
import './aframe/GLTFMaterialFix.jsx';
import content from './content.json';
import { DEFAULT_DISTANCE_FROM_USER } from './constants.js';

export function App() {
  const [showPanelist, setShowPanelists] = useState(false);
  const [started, setStarted] = useState(false);
  const [showCharacteristics, setShowCharacteristics] = useState(false);

  const openCharacteristics = () => {
    var audio = new Audio('activacion_video.wav');
    audio.play();
    setShowCharacteristics(true)
  }

  const openPanelists = () => {
    var audio = new Audio('activacion_video.wav');
    audio.play();
    setShowPanelists(true)
  }

  useEffect(() => {
    const videoElement = document.querySelector('#video');
    if (videoElement) {
      videoElement.pause(); // Pause the video
      videoElement.currentTime = 0; // Reset the video to the beginning
    }
  
    return () => {
    };
  }, []);

  return (
    <>
      <a-scene loading-screen="dotsColor: #9BD7E1; backgroundColor: #2D387F">
        <a-camera look-controls="reverseMouseDrag: true" wasd-controls-enabled="false" position="0 0 0"></a-camera>
        <a-entity id="raycaster" raycaster="objects: .clickable" cursor="rayOrigin: mouse"></a-entity>

        {/* Load assets */}
        <a-assets>
          <img id="panorama" src="panorama.webp" />
          {content.videos.map(video => <video key={video.id} id={video.id} src={video.src} muted={video.muted} autoPlay={video.autoPlay} loop={false}></video>)}
          {content.images.map(image => <img key={image.id} id={image.id} src={image.src} />)}
          {content.panelists.map(panelist => <img key={panelist.id} id={panelist.id} src={panelist.src} />)}
          <img id="light-arrow" src="icono.png" />
          <img id="play-button" src="play.png" />
          <img id="pantalla-carga" src="pantalla_carga.png" />
          <img id="celular" src="celular.png" />
          <img id="celular-flechas" src="celular-flechas.png" />
          <img id="celular-instrucciones" src="celular-instrucciones.png" />
          <img id="video-titulo" src="back_prime.png" />
          <img id="panelistas-video-titulo" src="titulo_panelistas_galeria.png" />
          <img id="panelists-button" src="titulo_panelistas.png" />
          <img id="characteristics-title" src="back-equipo.png" />
          <img id="panelists-text" src="nuevo-small_back_panelista.png" />
          <img id="characteristics-button" src="art_fifco-18.png" />
          <img id="characteristics-arrow" src="art_fifco-23.png" />
          <img id="characteristics-1" src="art_fifco-19.png" />
          <img id="characteristics-2" src="art_fifco-20.png" />
          <img id="characteristics-3" src="art_fifco-21.png" />
          <img id="characteristics-4" src="art_fifco-22.png" />
          <img id="ambient1" src="ambient_element1.png" />
          <img id="ambient2" src="ambient_element3.png" />
          <img id="ambient3" src="ambient_element2.png" />
          <img id="agil" src="art_fifco-55.png" />
          <img id="simple" src="art_fifco-56.png" />
          <img id="impacto" src="art_fifco-57.png" />
          <img id="evolucion" src="art_fifco-58.png" />
          <img id="next" src="next.png" />
          <img id="prev" src="prev.png" />
          <img id="close" src="close.png" />
          <img id="date" src="date.png" />
          <video id="video" src="video.mp4" autoPlay={false} loop={false}></video>
          <audio src="bienvenida.wav" preload="auto"></audio>
        </a-assets>

        {/* Sky with panorama */}
        <a-sky src="#panorama"></a-sky>


        {started && <a-plane
          class="clickable"
          src="#date"
          position={`0.04 -0.2 -${DEFAULT_DISTANCE_FROM_USER}`}
          rotation="0 0 0"
          scale="1.4 0.2 1.4"
          transparent="true"
          material="shader: flat"
          onClick={() => { window.open('https://maps.app.goo.gl/iwQ4uWfBv2cank8i9?g_st=com.google.maps.preview.copy', '_blank'); }}
        ></a-plane>}

        {started && (
          <a-entity position={`0 -0.45 -${DEFAULT_DISTANCE_FROM_USER - 0.1}`}>
            <a-plane
              src="#celular-instrucciones"
              position="0 -0.2 0"
              transparent="true"
              scale="0.5 0.1 0.1"
              material="shader: flat"
            >
            </a-plane>
            <a-plane
              src="#celular-flechas"
              position="0 0 0"
              transparent="true"
              scale="0.3 0.05 0.1"
              material="shader: flat"
            >
            </a-plane>
            <a-entity
              position="0 0 0.08"
              animation="property: rotation; from: 0 -45 0; to: 0 45 0; dur: 2000; easing: easeInOutQuad; loop: true; dir: alternate;"
            >
              <a-plane
                src="#celular"
                position="0 0 -0.05"
                transparent="true"
                scale="0.1 0.2 0.1"
                material="shader: flat"
              >
              </a-plane>
            </a-entity>
          </a-entity>
        )}

        {started && <a-entity
          id="logo-model"
          hover-animator="duration: 2000; easing: easeInOutQuad;"
          position={`0 0.15 -${DEFAULT_DISTANCE_FROM_USER}`}
          scale="1 1 1"
        >
          <a-entity
            gltf-model="logo_genesis.glb"
            position="-0.36 -0.17 0"
            rotation="90 0 0"
            scale="0.83 0.83 0.83"
            gltf-material-fix="color: #9AD7E2;"
          ></a-entity>
          <a-entity
            gltf-model="logo_prime.glb"
            position="0 0.3 0"
            rotation="90 0 0"
            scale="0.5 0.5 0.5"
            gltf-material-fix="color: #FFF;"
          ></a-entity>
          <a-entity
            gltf-model="logo_team.glb"
            position="0 0.1 0"
            rotation="90 0 0"
            scale="0.6 0.6 0.6"
            gltf-material-fix="color: #FFF;"
          ></a-entity>
        </a-entity>}

        <a-plane
          class="clickable"
          src="#pantalla-carga"
          position={`0 0 -${DEFAULT_DISTANCE_FROM_USER - 0.1}`}
          transparent="true"
          scale="0.9 1.6 1"
          material="shader: flat"
          onClick={(e) => {
            setStarted(true);
            var audio = new Audio('musica.wav');
            audio.loop = true; // Enable looping
            audio.play();
            var voice = new Audio('bienvenida.wav');
            voice.play();
            e.target.setAttribute("scale", "0 0 0")
          }}
        ></a-plane>


        {!showPanelist && <a-entity
          position={`-${DEFAULT_DISTANCE_FROM_USER + 0.1} 0.75 0`}
          rotation="0 90 0"
          scale="1 0.75 1"
          scale-animator="duration: 500; easing: easeInOutCubic"
        >
          <a-plane
            class="clickable"
            src="#panelists-button"
            position="0 -0.125 0"
            scale="1 0.6 1"
            transparent="true"
            material="shader: flat"
            onClick={openPanelists}
          ></a-plane>
          {content.panelists.map((panelist, index) => (
            <a-plane
              key={panelist.id}
              src={`#${panelist.id}`}
              class="clickable"
              position={`${-0.322 + (index % 3) * 0.3} -${0.8 + (Math.floor(index / 3) * 0.6)} ${0 + index * 0.01}`}
              scale="0.35 0.5 1"
              transparent="true"
              material="shader: flat"
              onClick={openPanelists}
              hover-animator={`direction: ${index === 0 || index === 3 ? 'left': (index === 2 || index === 5 ? 'right' : (index === 1 ? 'up' : 'down'))}; duration: 2000; easing: easeInOutQuad;`}
            ></a-plane>
          ))}
          <a-plane
            src="#panelists-text"
            class="clickable"
            position="0 -1.9 0"
            scale="1 0.2 1"
            transparent="true"
            material="shader: flat"
            onClick={openPanelists}
          ></a-plane>
        </a-entity>}

        {showPanelist && <VideoGallery
          videos={content.videos}
          titleSrc="#panelistas-video-titulo"
          position={`-${DEFAULT_DISTANCE_FROM_USER} 0 0`}
          rotation="0 90 0"
          scale="1 1 1"
          closeFunction={() => setShowPanelists(false)} />}

        {/* Video Principal */}

        <VideoGallery
          videos={[{ src: "#video", autoplay: false }]}
          titleSrc="#video-titulo"
          position={`${DEFAULT_DISTANCE_FROM_USER} 0 0`}
          rotation="0 -90 0"
          scale="1 1 1" />

        {!showCharacteristics && <a-plane
          class="clickable"
          src="#characteristics-button"
          position={`0 -0.25 ${DEFAULT_DISTANCE_FROM_USER + 0.1}`}
          rotation="0 180 0"
          scale="1 0.7 1"
          transparent="true"
          material="shader: flat"
          onClick={openCharacteristics}
          scale-animator="duration: 500; easing: easeInOutCubic"
        >
          <a-plane
            src="#characteristics-title"
            class="clickable"
            position="0 1.35 0"
            scale="1.3 0.2 1.3"
            transparent="true"
            material="shader: flat"
            onClick={openCharacteristics}
          ></a-plane>
          <a-plane
            src="#characteristics-1"
            class="clickable"
            position="-0.4 0.8 0"
            scale="0.2 0.5 1"
            transparent="true"
            material="shader: flat"
            onClick={openCharacteristics}
          ></a-plane>
          <a-plane
            src="#characteristics-arrow"
            class="clickable"
            hover-animator="duration: 2000; easing: easeInOutQuad;"
            position="-0.4 1.06 0.01"
            scale="0.2 0.19 1"
            transparent="true"
            material="shader: flat"
            onClick={openCharacteristics}
          ></a-plane>
          <a-plane
            src="#characteristics-2"
            class="clickable"
            position="-0.1325 0.8 0"
            scale="0.2 0.5 1"
            transparent="true"
            material="shader: flat"
            onClick={openCharacteristics}
          ></a-plane>
          <a-plane
            src="#characteristics-arrow"
            class="clickable"
            hover-animator="duration: 2000; easing: easeInOutQuad;"
            position="-0.1325 1.06 0.01"
            scale="0.2 0.19 1"
            transparent="true"
            material="shader: flat"
            onClick={openCharacteristics}
          ></a-plane>
          <a-plane
            src="#characteristics-3"
            class="clickable"
            position="0.1325 0.8 0"
            scale="0.2 0.5 1"
            transparent="true"
            material="shader: flat"
            onClick={openCharacteristics}
          ></a-plane>
          <a-plane
            src="#characteristics-arrow"
            class="clickable"
            hover-animator="duration: 2000; easing: easeInOutQuad;"
            position="0.1325 1.06 0.01"
            scale="0.2 0.19 1"
            transparent="true"
            material="shader: flat"
            onClick={openCharacteristics}
          ></a-plane>
          <a-plane
            src="#characteristics-4"
            class="clickable"
            position="0.4 0.8 0"
            scale="0.2 0.5 1"
            transparent="true"
            material="shader: flat"
            onClick={openCharacteristics}
          ></a-plane>
          <a-plane
            src="#characteristics-arrow"
            class="clickable"
            hover-animator="duration: 2000; easing: easeInOutQuad;"
            position="0.4 1.06 0.01"
            scale="0.2 0.19 1"
            transparent="true"
            material="shader: flat"
            onClick={openCharacteristics}
          ></a-plane>
        </a-plane>}

        {showCharacteristics && <ImageGallery
          id='gallery-1'
          images={content.images.map(image => `#${image.id}`)}
          position={`0 0 ${DEFAULT_DISTANCE_FROM_USER}`}
          rotation="0 180 0"
          closeFunction={() => setShowCharacteristics(false)}
        />}

        {/* Ambient Elements */}
        <a-plane
          src="#ambient1"
          transparent="true"
          position="0.5 1 2"
          rotation="0 180 0"
          scale="0.25 0.25 0.25"
          material="shader: flat"
          animation="property: position; to: -2 1 1; dur: 15000; easing: easeInOutQuad; loop: true; dir: alternate;"
        ></a-plane>
        <a-plane
          src="#ambient2"
          transparent="true"
          position="-2 1 -1"
          rotation="0 90 0"
          scale="0.25 0.25 0.25"
          material="shader: flat"
          animation="property: position; to: -1 1 -1; dur: 15000; easing: easeInOutQuad; loop: true; dir: alternate;"
        ></a-plane>
        <a-plane
          src="#ambient1"
          transparent="true"
          position="1 1 -2"
          rotation="0 0 0"
          scale="0.25 0.25 0.25"
          material="shader: flat"
          animation="property: position; to: 3 1 -1; dur: 15000; easing: easeInOutQuad; loop: true; dir: alternate;"
        ></a-plane>
        <a-plane
          src="#ambient2"
          transparent="true"
          position="-3 2 -2"
          rotation="0 0 0"
          scale="0.25 0.25 0.25"
          material="shader: flat"
          animation="property: position; to: 0 1 -2; dur: 15000; easing: easeInOutQuad; loop: true; dir: alternate;"
        ></a-plane>
        <a-plane
          src="#ambient3"
          transparent="true"
          position="-2 0.5 -3"
          rotation="0 0 0"
          scale="0.5 0.25 0.5"
          material="shader: flat"
          animation="property: position; to: -0.5 -1 -1; dur: 15000; easing: easeInOutQuad; loop: true; dir: alternate;"
        ></a-plane>
        <a-plane
          src="#evolucion"
          transparent="true"
          position="2 -1 -1"
          rotation="0 -45 0"
          scale="0.7 0.15 0.7"
          material="shader: flat"
          animation="property: position; to: 1.2 0 -2; dur: 15000; easing: easeInOutQuad; loop: true; dir: alternate;"
        ></a-plane>
        <a-plane
          src="#ambient3"
          transparent="true"
          position="2 1 1"
          rotation="0 -135 0"
          scale="0.5 0.25 0.5"
          material="shader: flat"
          animation="property: position; to: 1 0.5 1; dur: 15000; easing: easeInOutQuad; loop: true; dir: alternate;"
        ></a-plane>
        <a-plane
          src="#agil"
          transparent="true"
          position="1 0 1"
          rotation="0 -90 0"
          scale="0.7 0.25 0.7"
          material="shader: flat"
          animation="property: position; to: 3 -1 1; dur: 15000; easing: easeInOutQuad; loop: true; dir: alternate;"
        ></a-plane>
        <a-plane
          src="#simple"
          transparent="true"
          position="2 -1.2 -0.5"
          rotation="0 -90 0"
          scale="0.7 0.15 0.7"
          material="shader: flat"
          animation="property: position; to: 2 -1.2 1; dur: 15000; easing: easeInOutQuad; loop: true; dir: alternate;"
        ></a-plane>
        <a-plane
          src="#ambient3"
          transparent="true"
          position="-2 -1 1"
          rotation="0 -225 0"
          scale="0.5 0.25 0.5"
          material="shader: flat"
          animation="property: position; to: -1 0 1; dur: 15000; easing: easeInOutQuad; loop: true; dir: alternate;"
        ></a-plane>
        <a-plane
          src="#ambient2"
          transparent="true"
          position="-1 1 2"
          rotation="0 -225 0"
          scale="0.2 0.2 0.2"
          material="shader: flat"
          animation="property: position; to: -1 -1 1; dur: 15000; easing: easeInOutQuad; loop: true; dir: alternate;"
        ></a-plane>
        <a-plane
          src="#impacto"
          transparent="true"
          position="2 -1.5 2"
          rotation="0 180 0"
          scale="1 0.2 1"
          material="shader: flat"
          animation="property: position; to: 0 -1 2; dur: 15000; easing: easeInOutQuad; loop: true; dir: alternate;"
        ></a-plane>
        <a-plane
          src="#ambient1"
          transparent="true"
          position="-3 -3 -2"
          rotation="0 90 0"
          scale="0.4 0.4 0.4"
          material="shader: flat"
          animation="property: position; to: -3 -1 -2; dur: 15000; easing: easeInOutQuad; loop: true; dir: alternate;"
        ></a-plane>
      </a-scene>
    </>
  );
}