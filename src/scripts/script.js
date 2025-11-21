// ============================
// ===== Cargamos el DOM ======
// ============================
document.addEventListener('DOMContentLoaded', () => {

  console.log('✅ Aplicación iniciada');

  // - Elementos del DOM -
  const MENU_BTN = document.getElementById('menu-btn');
  const NAV_MENU = document.getElementById('nav-links');
  const IMAGE_CONTAINER = document.getElementById('main-image-wrapper');
  const VISOR_CONTAINER = document.getElementById('visor-360-container');
  const SCENE_INFO = document.getElementById('scene-info');
  const HOTSPOTS = document.querySelectorAll('.hotspot');

  // - Variables Globales -
  let viewer = null;
  let visorActivo = false;
  let escenaActual = null;

  // === Menu Hamburguesa ===
  MENU_BTN.addEventListener('click', () => {
    MENU_BTN.classList.toggle('active');
    NAV_MENU.classList.toggle('active');
  });
  // - Cerrar Menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      MENU_BTN.classList.remove('active');
      NAV_MENU.classList.remove('active');
    });
  });
  // - Cerrar Menú al ahcer clic fuera
  document.addEventListener('click', (e) => {
    if (!MENU_BTN.contains(e.target) && !NAV_MENU.contains(e.target)) {
      MENU_BTN.classList.remove('active');
      NAV_MENU.classList.remove('active');
    }
  });
  //  - Confifuración del Tour -
  const tourConfig = {
    "default": {
      "firstScene": "Pista_Principal",
      "author": 'DG2C - SSPOTS',
      "sceneFadeDuration": 1000,
      "autoLoad": true,
      "autoRotate": -2,
      "autoRotateInactivityDeplay": 3000,
      "showControls": true,
      "showFullscreenCrtl": true,
      "showZoomCtrl": true,
      "compass": false,
      "minHfov": 40,
      "maxHvov": 140,
      "title": 'Skate Park 360º - La Lechera',
    },

    "scenes": {
      // ====== Escena 1: Pista Principal ======
      "Pista_Principal": {
        "title": 'Pista Principal',
        "type": 'equirectangular',
        "panorama": '/pruebas/src/assets/images/skate_parks/01_La_Lechera/images_360/240815_1100_LaLechera00053.JPG',
        "pitch": 0,
        "yaw": -60,
        "hfov": 140,

        // HotSpots de la escena
        "hotSpots": [
          {
            "id": 'HS_PP_to_QP',
            "pitch": 7.510839618440536,
            "yaw": 47.46199559984078,
            "type": 'scene',
            "text": 'Ir a Quarter Pipe',
            "sceneId": 'Quarter_Pipe',
            "targetYaw": 0,
            "targetPitch": 0,
          },
          {
            "id": 'HS_PP_to_FB',
            "pitch": 0.2320752820034782,
            "yaw": -87.38228048077022,
            "type": 'scene',
            "text": 'Ir a Fun Box',
            "sceneId": 'Fun_Box',
            "targetYaw": -40,
            "targetPitch": -20,
          },
          {
            "id": 'HS_PP_to_R',
            "pitch": 1.181528693915077,
            "yaw": -118.97354892671353,
            "type": 'scene',
            "text": 'Ir a Rampa',
            "sceneId": 'Rampa',
            "targetYaw": 150,
            "targetPitch": -20,
          },
          {
            "id": 'HS_PP_to_B',
            "pitch": 0.23608282285409168,
            "yaw": -132.2252633080553,
            "type": 'scene',
            "text": 'Ir a Bowl',
            "sceneId": 'Bowl',
            "targetYaw": -40,
            "targetPitch": 0,
          },
        ]
      },
      // ====== Escena 2: Quarter Pipe ======
      "Quarter_Pipe": {
        "title": 'Quarter Pipe',
        "type": 'equirectangular',
        "panorama": '/pruebas/src/assets/images/skate_parks/01_La_Lechera/images_360/240815_1100_LaLechera00055.JPG',
        "pitch": 0,
        "yaw": 0,
        "hfov": 140,

        // HotSpots de la escena
        "hotSpots": [
          {
            "id": 'HS_QP_to_PP',
            "pitch": -28.818353191950447,
            "yaw": -2.0828447730685395,
            "type": 'scene',
            "text": 'Ir a Pista Principal',
            "sceneId": 'Pista_Principal',
            "targetYaw": -60,
            "targetPitch": 0,
          },
          {
            "id": 'HS_QP_to_FB',
            "pitch": -8.151051403865102,
            "yaw": 14.892796699638883,
            "type": 'scene',
            "text": 'Ir a Fun Box',
            "sceneId": 'Fun_Box',
            "targetYaw": 0,
            "targetPitch": 0,
          },
          {
            "id": 'HS_QP_to_R',
            "pitch": -2.239218601566282,
            "yaw": 0.5209263344606758,
            "type": 'scene',
            "text": 'Ir a Rampa',
            "sceneId": 'Rampa',
            "targetYaw": 150,
            "targetPitch": -20,
          },
          {
            "id": 'HS_QP_to_B',
            "pitch": -3.357621717211107,
            "yaw": -9.92755232061827,
            "type": 'scene',
            "text": 'Ir a Bowl',
            "sceneId": 'Bowl',
            "targetYaw": -40,
            "targetPitch": 0,
          }
        ]
      },
      // ====== Escena 3: Fun Box ======
      "Fun_Box": {
        "title": 'Fun Box',
        "type": 'equirectangular',
        "panorama": '/pruebas/src/assets/images/skate_parks/01_La_Lechera/images_360/240815_1100_LaLechera00058.JPG',
        "pitch": 0,
        "yaw": 0,
        "hfov": 140,

        // HotSpots de la escena
        "hotSpots": [
          {
            "id": 'HS_FB_to_PP',
            "pitch": -21.259133702205286,
            "yaw": 142.26634304931127,
            "type": 'scene',
            "text": 'Ir a Pista Principal',
            "sceneId": 'Pista_Principal',
            "targetYaw": -60,
            "targetPitch": 0,
          },
          {
            "id": 'HS_FB_to_QP',
            "pitch": -2.857404745047558,
            "yaw": 128.25371442779303,
            "type": 'scene',
            "text": 'Ir a Quarter Pipe',
            "sceneId": 'Quarter_Pipe',
            "targetYaw": 0,
            "targetPitch": 0,
          },
          {
            "id": 'HS_FB_to_PS',
            "pitch": -17.15279313028008,
            "yaw": -33.54507470263783,
            "type": 'scene',
            "text": 'Ir a Pista Secundaria',
            "sceneId": 'Pista_Secundaria',
            "targetYaw": 0,
            "targetPitch": 0,
          },
          {
            "id": 'HS_FB_to_R',
            "pitch": -2.7739903706683746,
            "yaw": -80.43903582066889,
            "type": 'scene',
            "text": 'Ir a Rampa',
            "sceneId": 'Rampa',
            "targetYaw": 150,
            "targetPitch": -20,
          },
          {
            "id": 'HS_FB_to_B',
            "pitch": -4.787375532783561,
            "yaw": -104.30989269923428,
            "type": 'scene',
            "text": 'Ir a Bowl',
            "sceneId": 'Bowl',
            "targetYaw": -40,
            "targetPitch": 0,
          },
        ]
      },
      // ====== Escena 4: Pista Secundaria ======
      "Pista_Secundaria": {
        "title": 'Pista Secundaria',
        "type": 'equirectangular',
        "panorama": '/pruebas/src/assets/images/skate_parks/01_La_Lechera/images_360/240815_1100_LaLechera00059.JPG',
        "pitch": 0,
        "yaw": 0,
        "hfov": 140,

        // HotSpots de la escena
        "hotSpots": [
          {
            "id": 'HS_PS_to_FB',
            "pitch": -2.0390758796635007,
            "yaw": -145.83230800981528,
            "type": 'scene',
            "text": 'Ir a Fun Box',
            "sceneId": 'Fun_Box',
            "targetYaw": 0,
            "targetPitch": 0,
          },
          {
            "id": 'HS_PS_to_R',
            "pitch": 3.107297371596085,
            "yaw": -30.77525894344637,
            "type": 'scene',
            "text": 'Ir a Rampa',
            "sceneId": 'Rampa',
            "targetYaw": 150,
            "targetPitch": -20,
          },
          {
            "id": 'HS_PS_to_B',
            "pitch": 0.17902804402151662,
            "yaw": -57.38793273802046,
            "type": 'scene',
            "text": 'Ir a Bowl',
            "sceneId": 'Bowl',
            "targetYaw": -40,
            "targetPitch": 0,
          },
        ]
      },
      // ====== Escena 5: Rampa ======
      "Rampa": {
        "title": 'Rampa',
        "type": 'equirectangular',
        "panorama": '/pruebas/src/assets/images/skate_parks/01_La_Lechera/images_360/240815_1100_LaLechera00061.JPG',
        "pitch": -20,
        "yaw": 150,
        "hfov": 140,

        // HotSpots de la escena
        "hotSpots": [
          {
            "id": 'HS_R_to_PS',
            "pitch": -19.959765295709328,
            "yaw": 114.69699917201054,
            "type": 'scene',
            "text": 'Ir a Pista Secundaria',
            "sceneId": 'Pista_Secundaria',
            "targetYaw": 0,
            "targetPitch": 0,
          },
          {
            "id": 'HS_R_to_FB',
            "pitch": -7.4762676644199955,
            "yaw": 137.58573512401622,
            "type": 'scene',
            "text": 'Ir a Fun Box',
            "sceneId": 'Fun_Box',
            "targetYaw": 0,
            "targetPitch": 0,
          },
          {
            "id": 'HS_R_to_B',
            "pitch": -16.047545096619302,
            "yaw": -148.6293281911667,
            "type": 'scene',
            "text": 'Ir a Bowl',
            "sceneId": 'Bowl',
            "targetYaw": -40,
            "targetPitch": 0,
          },
        ]
      },
      // ====== Escena 6: Bowl ======
      "Bowl": {
        "title": 'Bowl',
        "type": 'equirectangular',
        "panorama": '/pruebas/src/assets/images/skate_parks/01_La_Lechera/images_360/240815_1100_LaLechera00064.JPG',
        "pitch": 0,
        "yaw": 0,
        "hfov": 140,

        // HotSpots de la escena
        "hotSpots": [
          {
            "id": 'HS_B_to_R',
            "pitch": -7.319958691618017,
            "yaw": -84.6016787988261,
            "type": 'scene',
            "text": 'Ir a Rampa',
            "sceneId": 'Rampa',
            "targetYaw": 150,
            "targetPitch": -20,
          },
          {
            "id": 'HS_B_to_PS',
            "pitch": -10.43828173142325,
            "yaw": -44.27862233192302,
            "type": 'scene',
            "text": 'Ir a Pista Secundaria',
            "sceneId": 'Pista_Secundaria',
            "targetYaw": 0,
            "targetPitch": 0,
          },
          {
            "id": 'HS_B_to_FB',
            "pitch": -3.8546157260318146,
            "yaw": -11.060745271333953,
            "type": 'scene',
            "text": 'Ir a Fun Box',
            "sceneId": 'Fun_Box',
            "targetYaw": 0,
            "targetPitch": 0,
          },
        ]
      },
    }
  };

  // === FUNCIONES PRINCIPALES ===
  // Actualizar el Hotspot activo
  function actualizarHotspotActivo(sceneId) {
    
    // Quitamos la clase activo de todos los hotspot
    HOTSPOTS.forEach(hotspot => {
      hotspot.classList.remove('activo');
    });

    // Añadimos la clase activo solo al hotspot que corresponde
    const hotspotActivo = document.querySelector(`.hotspot[data-scene="${sceneId}"]`);
    if (hotspotActivo) {
      hotspotActivo.classList.add('activo');
    }

    // Actualizar Escena Global
    escenaActual = sceneId;
  }


  function mostrarVisor360(sceneId) {
    console.log(`🚀Iniciando el visor 360º en escena: ${sceneId}`);
    const h1Title = document.getElementById('localizacion');
    // 1. Animación: Desplazar imagen a la Derecha
    IMAGE_CONTAINER.classList.add('imagen-desplazada');
    h1Title.classList.add('imagen-desplazada');
    // 2. Animación: Mostrar Visor desde la Izquierda
    VISOR_CONTAINER.classList.remove('visor-oculto');
    VISOR_CONTAINER.classList.add('visor-visible');
    // 3. Actualizar Hotspot Activo
    actualizarHotspotActivo(sceneId);
    // 4. Actualizar configuración con la escena seleccionada
    tourConfig.default.firstScene = sceneId;
    // 5. inicializar Pannellum (solo la primera vez)
    if (!viewer) {
      console.log('📸 Creando instancia de Pannellum...');

      // Delay para que la animación se vea  suave
      setTimeout(() => {
        viewer = pannellum.viewer('panorama', tourConfig);

        // Eventos del Visor
        viewer.on('load', function() {
          console.log('✅ Panorama cargado');
          actualizarInfoEscena();
        });

        viewer.on('sceneChange', function(newSceneId) {
          console.log(`🔄 Cambio a escena: ${newSceneId}`);
          actualizarInfoEscena();
          actualizarHotspotActivo(newSceneId);
        });

        viewer.on('error', function(err) {
          console.log('❌ Error al cargar panorama:', err);
        });
      }, 400); // Esperar 400ms para iniciar la animación
    } else {
      // Si el visor ya existe, solo cambiar de escena
      console.log(`🔄 Cambiando a escena: ${sceneId}`);
      viewer.loadScene(sceneId);
    }
    visorActivo = true;
  };

  // Función para volver a la imagen fija
  function volverAImagenFija() {
    console.log('🏠 Volviendo a la imagen fija...');

    // 1. Animación: ocultar visor hacia la izquierda
    VISOR_CONTAINER.classList.remove('visor-visible');
    VISOR_CONTAINER.classList.add('visor-oculto');

    // 2. Animación: Imagen vuelve al centro
    IMAGE_CONTAINER.classList.remove('imagen-desplazada');

    visorActivo = false;
  };

  //  - Actualizar el indicador de Escena Actual
  function actualizarInfoEscena() {
    if (viewer) {
      const scene = viewer.getScene();
      SCENE_INFO.textContent = `📍 ${scene.title || 'Escena actual'}`;
    }
  };

  // === EVENT LISTENERS ===
  // - Detectar clicks en hotspots de imagen fija
  HOTSPOTS.forEach((hotspot, index) => {
    hotspot.addEventListener('click', function() {
      const sceneId = this.getAttribute('data-scene');
      const sceneTitle = this.getAttribute('data-title');

      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(`🎯 Hotspot clicado: #${index + 1}`);
      console.log(`📍 Escena: ${sceneTitle}`);
      console.log(`🔑 ID: ${sceneId}`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

      // Mostrar el visor 360º
      mostrarVisor360(sceneId);
    });
  });

  // - Tecla ESC para Volver -
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && visorActivo) {
      volverAImagenFija();
    }
  });

  console.log(`📍 Total de hotspots: ${HOTSPOTS.length}`);
  console.log('✅ Sistema listo para usar');

});