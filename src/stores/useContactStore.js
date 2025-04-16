import { create } from "zustand";

const useContactStore = create((set, get) => ({
  contacts: [],
  searchResults: [],
  isSearching: false,
  //연락처 추가
  addContact: (name, number) =>
    set((state) => ({
      contacts: [...state.contacts, { id: Date.now(), name, number }],
    })),
  //검색
  search: (keyword) => {
    const { contacts } = get();
    const results = contacts.filter((v) => v.name.includes(keyword));
    set({ searchResults: results, isSearching: true });
  },
  //전체목록으로 돌아가기
  clearSearch: () => set({ isSearching: false }),

  //삭제
  deleteContact: (id) =>
    set((state) => ({
      contacts: state.contacts.filter((item) => item.id !== id),
      searchResults: state.searchResults.filter((item) => item.id !== id),
    })),
}));

export default useContactStore;
