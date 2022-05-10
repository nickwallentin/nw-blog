import create from 'zustand';
import produce from 'immer';

const useHeadingsInViewStore = create((set) => ({
  inView: [],
  add: (heading_id: string) =>
    set(
      produce((state: any) => {
        state.inView.push(heading_id);
      })
    ),
  remove: (heading_id: string) =>
    set(
      produce((state: any) => {
        state.inView = state.inView.filter((heading) => heading !== heading_id);
      })
    ),
}));
export default useHeadingsInViewStore;
