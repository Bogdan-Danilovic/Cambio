import { toast } from 'sonner';

export const gameToast = {
  connectionLost: () =>
    toast.error('Konekcija prekinuta — pokušavam ponovo...', { duration: Infinity, id: 'connection-lost' }),
  connectionRestored: () => {
    toast.dismiss('connection-lost');
    toast.success('Konekcija obnovljena', { duration: 3000 });
  },
  snap: (name: string) => toast.success(`${name} je zalepila kartu!`, { duration: 2000 }),
  snapFail: () => toast.error('Pogrešan Snap — kaznena karta!', { duration: 3000 }),
  cambio: (name: string) => toast.info(`${name} je pozvao Cambio! Jedan krug ostaje.`, { duration: 4000 }),
  error: (message: string) => toast.error(message, { duration: 4000 }),
};
