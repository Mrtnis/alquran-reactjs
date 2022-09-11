import React, { useEffect, useState } from 'react';

export const NameCard = ({ surah }) => {
  const [translate, setTranslate] = useState('');

  useEffect(() => {
    if ('name_translations' in surah) {
      setTranslate(surah.name_translations);
    }
  }, [surah]);

  return (
    <div className="card name-card mb-2 py-4">
      <h3 className="text-white">
        {surah.name} ({translate.id})
      </h3>
      <h6 className="text-secondary">
        {surah.type} | {surah.number_of_ayah}
      </h6>
    </div>
  );
};
