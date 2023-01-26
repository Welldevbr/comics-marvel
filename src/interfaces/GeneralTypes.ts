export interface Comic {
  id: number;
  title: string;
  description: string;
  creator?: string;
  thumbnail: string;
}

export interface ContextData {
  closeModal: () => void;
  openModal: (comic : Comic) => void;
}