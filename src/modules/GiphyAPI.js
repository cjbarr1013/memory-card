export function GiphyAPI() {
  const apiKey = 'EdqW378Pk2xazXjEG5EoJj6FGAeEvY7D';
  const searchTerm = 'dog';
  const limit = '100';

  const getUrl = () => {
    return (
      'https://api.giphy.com/v1/gifs/search?api_key=' +
      apiKey +
      '&q=' +
      searchTerm +
      '&limit=' +
      limit +
      '&offset=0&rating=pg&lang=en&bundle=messaging_non_clips'
    );
  };

  const fetchJSON = async () => {
    const url = getUrl();
    try {
      const response = await fetch(url, { mode: 'cors' });
      const rawData = await response.json();
      return rawData;
    } catch {
      return {};
    }
  };

  const parseJSON = (rawData) => {
    let parsedData = [];
    rawData.data.forEach((item) => {
      parsedData.push({
        id: crypto.randomUUID(),
        url: item.images.fixed_height_small.webp,
        desc: item.title,
      });
    });

    return parsedData;
  };

  const getData = async () => {
    const rawData = await fetchJSON();
    return parseJSON(rawData);
  };

  return {
    getData,
  };
}
