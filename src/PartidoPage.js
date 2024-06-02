import React from 'react';
import { useParams } from 'react-router-dom';

const PartidoPage = () => {
  const { id } = useParams();

  // Simulación de datos de video
  const videos = {
    T1vsTL: { titulo: 'T1 vs TL', videoUrl: 'https://www.youtube.com/embed/b5Zlb8e_zQo' }, // Utilizamos el enlace embed
  };

  const partido = videos[id];

  if (!partido) {
    return <div>Partido no encontrado</div>;
  }

  return (
    <div>
      <h2>{partido.titulo}</h2>
      <iframe width="560" height="315" src={partido.videoUrl} title="Video del partido"></iframe>
    </div>
  );
};

export default PartidoPage;
