import create from 'zustand';
import { persist } from 'zustand/middleware';
import produce from 'immer';

const useTheme = create(
  persist((set) => ({
    active: 'light',
    toggle: () =>
      set(
        produce((state: any) => {
          state.active = state.active === 'light' ? 'dark' : 'light';
        })
      ),
  }))
);
export default useTheme;
