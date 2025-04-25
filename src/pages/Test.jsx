import React, { useEffect, useState } from 'react';

const Test = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/test') // Same endpoint as before
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>API Test Page</h1>
      
      {loading && <p>Loading data...</p>}
      
      {error && (
        <p style={{ color: 'red' }}>Error: {error}</p>
      )}

      {data && (
        <div>
          <p style={{ color: 'green' }}>✅ {data.message}</p>
          <h2>Properties:</h2>
          <ul>
            {data.properties.map(property => (
              <li key={property.id}>
                <strong>{property.title}</strong> - {property.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Test;