export const getVideoId = (url: string): string => {
  try {
    // Extraer ID de Vimeo
    const vimeoRegex = /(?:player\.|www\.|)vimeo\.com\/(?:video\/)?(\d+)/;
    const vimeoMatch = url.match(vimeoRegex);
    if (vimeoMatch && vimeoMatch[1]) {
      return vimeoMatch[1];
    }

    // Extraer ID de YouTube
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const youtubeMatch = url.match(youtubeRegex);
    if (youtubeMatch && youtubeMatch[1]) {
      return youtubeMatch[1];
    }

    // Si no se encuentra un ID válido, devolver la URL completa
    return url;
  } catch (error) {
    console.error('Error al extraer el ID del video:', error);
    return url;
  }
};
