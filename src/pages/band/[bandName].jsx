import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

function BandPage() {
  const router = useRouter();
  const { bandSlug } = router.query;
  const [bandInfo, setBandInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (bandSlug) {
      async function fetchBandInfo() {
        try {
          const response = await fetch(`http://localhost:8080/band/${encodeURIComponent(bandSlug)}`);
          if (!response.ok) {
            throw new Error('Failed to fetch band information');
          }
          const data = await response.json();
          setBandInfo(data);
        } catch (error) {
          console.error('Error fetching band information:', error);
          setError(error.message);
        }
      }
      fetchBandInfo();
    }
  }, [bandSlug]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!bandInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{bandInfo.name}</h1>
      <Image src={`/logos/${bandInfo.logo}`} alt={bandInfo.name} width={200} height={200} />

      <p>{bandInfo.bio}</p>
      <p>Genre: {bandInfo.genre}</p>
      <p>Members: {bandInfo.members.join(', ')}</p>
    </div>
  );
}

export default BandPage;
