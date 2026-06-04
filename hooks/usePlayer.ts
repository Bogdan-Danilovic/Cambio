'use client';

import { useEffect, useState } from 'react';

export function usePlayer() {
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [playerName, setPlayerName] = useState<string | null>(null);

  useEffect(() => {
    setPlayerId(localStorage.getItem('playerId'));
    setPlayerName(localStorage.getItem('playerName'));
  }, []);

  return { playerId, playerName };
}
