export interface Comic {
  id: number;
  title: string;
  description: string;
  creator?: string;
  thumbnail: string;
}

export interface ContextData {
  openModal: (comic: Comic) => void;
  closeModal: () => void;
}